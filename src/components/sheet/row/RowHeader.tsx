import {rowHeader} from "../../common/style/TailwindClasses.ts";

export interface RowHeaderProps {
    index: number;
    width: number;
    isSelected: boolean;
}

function RowHeader(props: RowHeaderProps) {
    const { index, width, isSelected } = props;

    return (
        <div
            style={{
                width: width,
                height: 40,
            }}
            className={`${rowHeader.base} ${isSelected ? rowHeader.selected : rowHeader.unselected}`}
        >
            {index + 1}
        </div>
    );
}

export default RowHeader;