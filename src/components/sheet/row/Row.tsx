import Cell from "../cell/Cell.tsx";
import RowHeader from "./RowHeader.tsx";

export interface RowProps {
    index: number;
    columns: number;
    headerWidth: number;
}

function Row(props: RowProps) {
    return (
        <div
            key={props.index}
            className="flex flex-row"
        >
            <RowHeader index={props.index} width={props.headerWidth} />
            {Array.from({length: props.columns}).map((_, columnIndex) => (
                <Cell
                    key={columnIndex}
                    row={props.index}
                    column={columnIndex}
                    width={80}
                    height={40}
                />
            ))}
        </div>
    );
}

export default Row;