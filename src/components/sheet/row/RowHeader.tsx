import {rowHeader} from "../../common/style/TailwindClasses.ts";
import {defaultCellHeight} from "../../common/style/Defaults.ts";

export interface RowHeaderProps {
    index: number;
    width: number;
    isSelected: boolean;
}

function RowHeader(props: RowHeaderProps) {
    const { index, width, isSelected } = props;

    return (
        <div
            style={{ width: width, height: defaultCellHeight }}
            className={`${rowHeader.base} ${isSelected ? rowHeader.selected : rowHeader.unselected}`}
        >
            {index + 1}
        </div>
    );
}

export default RowHeader;