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
    return (
        <div
            key={props.index}
            className="flex flex-row"
        >
            <RowHeader index={props.index} width={props.headerWidth} isSelected={props.selectedCell?.row == props.index} />
            {Array.from({length: props.columns}).map((_, columnIndex) => (
                <Cell
                    key={columnIndex}
                    column={columnIndex}
                    width={80}
                    height={40}
                    isSelected={props.selectedCell?.row === props.index && props.selectedCell?.column === columnIndex}
                    setSelectedCell={() => props.setSelectedCell({row: props.index, column: columnIndex})}
                />
            ))}
        </div>
    );
}

export default Row;