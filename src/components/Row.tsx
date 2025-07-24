import Cell from "./Cell.tsx";

export interface RowProps {
    index: number;
    columns: number;
}

function Row(props: RowProps) {
    return (
        <div
            key={props.index}
            className="flex flex-row"
        >
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