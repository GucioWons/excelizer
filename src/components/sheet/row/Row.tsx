import Cell, {type CellData} from "../cell/Cell.tsx";
import RowHeader from "./RowHeader.tsx";
import type {SelectedCell} from "../Sheet.tsx";

export interface RowProps {
    index: number;
    columns: number;
    headerWidth: number;
    selectedCell?: SelectedCell;
    setSelectedCell: (selectedCell: SelectedCell) => void;
    getCellData: (row: number, column: number) => CellData | undefined;
}

function Row(props: RowProps) {
    const { index, columns, headerWidth, selectedCell, setSelectedCell, getCellData } = props;

    return (
        <div className="flex">
            <div className="flex flex-row">
                <RowHeader
                    index={index}
                    width={headerWidth}
                    isSelected={selectedCell?.row == index}/>
                {Array.from({length: columns}).map((_, columnIndex) => (
                    <Cell
                        key={columnIndex}
                        isSelected={selectedCell?.row === index && selectedCell?.column === columnIndex}
                        setSelectedCell={() => setSelectedCell({row: index, column: columnIndex})}
                        data={getCellData(index, columnIndex)}
                    />
                ))}
            </div>
        </div>
    );
}

export default Row;