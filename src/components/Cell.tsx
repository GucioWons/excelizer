export interface CellProps {
    row: number;
    column: number;
}

function Cell(props: CellProps) {
    return (
        <div
            className="border border-gray-300 w-20 h-10 flex-shrink-0 flex items-center text-sm"
        >
            {props.row + '-' + props.column}
        </div>
    );
}

export default Cell;