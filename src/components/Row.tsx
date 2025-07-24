import Cell from "./Cell.tsx";
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
            {Array.from({length: props.columns}).map((_, colIdx) => (
                <Cell
                    row={props.index}
                    column={colIdx}
                />
            ))}
        </div>
    );
}

export default Row;