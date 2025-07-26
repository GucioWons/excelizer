import Cell from "../cell/Cell.tsx";
import RowHeader from "./RowHeader.tsx";
import type {SelectedCell} from "../Sheet.tsx";

export interface RowProps {
    index: number;
    columns: number;
    headerWidth: number;
    selectedCell?: SelectedCell;
    setSelectedCell: (selectedCell: SelectedCell) => void;
}

function Row(props: RowProps) {
    const { index, columns, headerWidth, selectedCell, setSelectedCell } = props;

    return (
        <div
            className="flex flex-row"
        >
            <RowHeader
                index={index}
                width={headerWidth}
                isSelected={selectedCell?.row == index} />
            {Array.from({length: columns}).map((_, columnIndex) => (
                <Cell
                    key={columnIndex}
                    isSelected={selectedCell?.row === index && selectedCell?.column === columnIndex}
                    setSelectedCell={() => setSelectedCell({row: index, column: columnIndex})}
                />
            ))}
        </div>
    );
}

export default Row;