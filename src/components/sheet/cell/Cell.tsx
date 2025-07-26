import {cell} from "../../common/style/TailwindClasses.ts";

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
                outlineOffset: props.isSelected ? '-1px' : undefined,
            }}
            className={`${cell.base} ${props.isSelected ? cell.selected : ''}`}
            onClick={props.setSelectedCell}
        >

        </div>
    );
}

export default Cell;