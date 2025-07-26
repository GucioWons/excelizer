import {cell} from "../../common/style/TailwindClasses.ts";
import {defaultCellHeight, defaultCellWidth} from "../../common/style/Defaults.ts";

export interface CellProps {
    isSelected: boolean;
    setSelectedCell: () => void;
}

function Cell(props: CellProps) {
    const { isSelected, setSelectedCell } = props;

    return (
        <div
            style={{
                width: defaultCellWidth,
                height: defaultCellHeight,
                outlineOffset: isSelected ? '-1px' : undefined,
            }}
            className={`${cell.base} ${isSelected ? cell.selected : ''}`}
            onClick={setSelectedCell}
        >

        </div>
    );
}

export default Cell;