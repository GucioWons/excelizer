export interface CellProps {
    column: number;
    width: number;
    height: number;
    isSelected: boolean;
    setSelectedCell: () => void;
}

function Cell(props: CellProps) {
    return (
        <div
            style={{
                width: props.width,
                height: props.height,
                outline: props.isSelected ? '2px solid green' : undefined,
                outlineOffset: props.isSelected ? '-1px' : undefined,
                zIndex: props.isSelected ? 10 : undefined,
                position: props.isSelected ? 'relative' : undefined,
            }}
            className="border border-gray-300 flex-shrink-0 flex items-center text-sm"
            onClick={props.setSelectedCell}
        >

        </div>
    );
}

export default Cell;