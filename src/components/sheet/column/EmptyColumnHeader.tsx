import {columnHeader} from "../../common/style/TailwindClasses.ts";
import {defaultCellHeight} from "../../common/style/Defaults.ts";

export interface EmptyColumnHeaderProps {
    width: number
}

function EmptyColumnHeader(props: EmptyColumnHeaderProps) {
    const { width } = props;

    return (
        <div
            style={{width: width, height: defaultCellHeight}}
            className={`${columnHeader.base} ${columnHeader.unselected}`}
        />
    );
}

export default EmptyColumnHeader;