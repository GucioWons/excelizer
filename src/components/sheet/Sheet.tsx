import {useCallback, useEffect, useRef, useState} from "react";
import Row from "./row/Row.tsx";
import ColumnHeadersRow from "./column/ColumnHeadersRow.tsx";
import EditCellButton from "./cell/EditCellButton.tsx";
import {defaultCellHeight, defaultCellWidth} from "../common/style/Defaults.ts";
import type {CellData} from "./cell/Cell.tsx";

type CellDataMap = Record<string, CellData>;

export interface SheetData {
    cells: CellDataMap;
}

export interface SelectedCell {
    row: number;
    column: number;
}

function Sheet() {
    const [dimensions, setDimensions] = useState({rows: 0, columns: 0});
    const [initialDimensions, setInitialDimensions] = useState({rows: 0, columns: 0});
    const [selectedCell, setSelectedCell] = useState<SelectedCell>();
    const [sheetData, setSheetData] = useState<SheetData>({ cells: {} });

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
        return sheetData.cells[`${row}-${column}`];
    }

    // function setCellData(row: number, column: number, data: CellData) {
    //     const key = `${row}-${column}`;
    //     setSheetData(prev => ({
    //         ...prev,
    //         cells: {
    //             ...prev.cells,
    //             [key]: data
    //         }
    //     }));
    // }

    return (
        <>
            <div
                ref={containerRef}
                onScroll={handleScroll}
                className="w-screen h-screen overflow-auto bg-white"
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
            </div>
            <EditCellButton disabled={!selectedCell}/>
        </>
    );
}

export default Sheet;