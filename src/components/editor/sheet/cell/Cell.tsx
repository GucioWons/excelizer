import {cell} from "../../../common/style/TailwindClasses.ts";
import {defaultCellHeight, defaultCellWidth} from "../../../common/style/Defaults.ts";

export interface CellData {
    value?: string;
}

export interface CellProps {
    isSelected: boolean;
    setSelectedCell: () => void;
    data?: CellData;
}

function Cell(props: CellProps) {
    const { isSelected, setSelectedCell, data } = props;

    return (
        <div
            style={{
                width: defaultCellWidth,
                height: defaultCellHeight,
                outlineOffset: isSelected ? '-1px' : undefined,
            }}
            className={`${cell.base} ${isSelected ? cell.selected : cell.unselected}`}
            onClick={setSelectedCell}
        >
            {data?.value}
        </div>
    );
}

export default Cell;