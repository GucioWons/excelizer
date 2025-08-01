import {useCallback, useEffect, useRef, useState} from "react";
import Row from "./row/Row.tsx";
import ColumnHeadersRow from "./column/ColumnHeadersRow.tsx";
import EditCellButton from "./cell/EditCellButton.tsx";
import {defaultCellHeight, defaultCellWidth} from "../common/style/Defaults.ts";
import type {CellData} from "./cell/Cell.tsx";

type CellDataMap = Record<string, CellData>;

export interface SheetData {
    name: string;
    order: number;
    cells: CellDataMap;
}

export interface SelectedCell {
    row: number;
    column: number;
}

export interface SheetProps {
    sheet: SheetData;
    setSheetData: (data: SheetData) => void;
}

function Sheet(props: SheetProps) {
    const { sheet, setSheetData } = props;

    const [dimensions, setDimensions] = useState({rows: 0, columns: 0});
    const [initialDimensions, setInitialDimensions] = useState({rows: 0, columns: 0});
    const [selectedCell, setSelectedCell] = useState<SelectedCell>();

    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const rawColumns = window.innerWidth / defaultCellWidth;
        const rawRows = window.innerHeight / defaultCellHeight;

        const columns = Math.floor(rawColumns * 1.25);
        const rows = Math.floor(rawRows * 1.25);

        setDimensions({rows, columns});
        setInitialDimensions({rows, columns});
    }, []);

    function handleScroll() {
        const container = containerRef.current;
        if (!container) return;

        const nearRight = container.scrollLeft + container.clientWidth >= container.scrollWidth - 5;
        const nearBottom = container.scrollTop + container.clientHeight >= container.scrollHeight - 5;

        const newDimensions = {...dimensions};
        if (nearRight) {
            newDimensions.columns += initialDimensions.columns * 2
        }
        if (nearBottom) {
            newDimensions.rows += initialDimensions.rows * 2
        }
        if (newDimensions.rows !== dimensions.rows || newDimensions.columns !== dimensions.columns) {
            setDimensions(newDimensions);
        }
    }

    const {rows, columns} = dimensions;

    const getRowHeaderWidth = useCallback(() => {
        return String(rows).length * 10 + 20
    }, [rows]);

    function getCellData(row: number, column: number): CellData | undefined {
        return sheet.cells[`${row}-${column}`];
    }

    const getSelectedCellData = useCallback(() => {
        if (selectedCell) {
            return sheet.cells[`${selectedCell.row}-${selectedCell.column}`];
        }
        return undefined;
    }, [selectedCell, sheet.cells]);

    const setSelectedCellData = useCallback((data: CellData) => {
        if (!selectedCell) {
            return;
        }

        const key = `${selectedCell.row}-${selectedCell.column}`;
        setSheetData({
            ...sheet,
            cells: {
                ...sheet.cells,
                [key]: data
            }
        });
    }, [selectedCell, sheet, setSheetData]);

    return (
        <>
            <div
                ref={containerRef}
                onScroll={handleScroll}
                className="w-full h-full overflow-auto bg-white relative"
            >
                <ColumnHeadersRow
                    columns={columns}
                    rowHeaderWidth={getRowHeaderWidth()}
                    selectedColumn={selectedCell?.column}
                />
                {Array.from({length: rows}).map((_, rowIdx) => (
                    <Row
                        key={rowIdx}
                        index={rowIdx}
                        columns={columns}
                        headerWidth={getRowHeaderWidth()}
                        selectedCell={selectedCell}
                        setSelectedCell={setSelectedCell}
                        getCellData={getCellData}
                    />
                ))}
                <EditCellButton
                    disabled={!selectedCell}
                    data={getSelectedCellData()}
                    setCellData={setSelectedCellData}
                />
            </div>

            </>
            );
            }

            export default Sheet;