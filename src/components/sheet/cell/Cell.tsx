import {cell} from "../../common/style/TailwindClasses.ts";

export interface CellProps {
    width: number;
    height: number;
    isSelected: boolean;
    setSelectedCell: () => void;
}

function Cell(props: CellProps) {
    const { width, height, isSelected, setSelectedCell } = props;

    return (
        <div
            style={{
                width: width,
                height: height,
                outlineOffset: isSelected ? '-1px' : undefined,
            }}
            className={`${cell.base} ${isSelected ? cell.selected : ''}`}
            onClick={setSelectedCell}
        >

        </div>
    );
}

export default Cell;