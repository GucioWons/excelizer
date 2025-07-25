export interface CellProps {
    row: number;
    column: number;
    width: number;
    height: number;
}

function Cell(props: CellProps) {
    return (
        <div
            style={{
                width: props.width,
                height: props.height,
            }}
            className="border border-gray-300 flex-shrink-0 flex items-center text-sm"
        >

        </div>
    );
}

export default Cell;