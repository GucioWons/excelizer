import {rowHeader} from "../../common/style/TailwindClasses.ts";

export interface RowHeaderProps {
    index: number;
    width: number;
    isSelected: boolean;
}

function RowHeader(props: RowHeaderProps) {
    return (
        <div
            style={{
                width: props.width,
                height: 40,
            }}
            className={`${rowHeader.base} ${props.isSelected ? rowHeader.selected : rowHeader.unselected}`}
        >
            {props.index + 1}
        </div>
    );
}

export default RowHeader;