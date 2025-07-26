import {columnHeader} from "../../common/style/TailwindClasses.ts";

export interface EmptyColumnHeaderProps {
    width: number
}

function EmptyColumnHeader(props: EmptyColumnHeaderProps) {
    const { width } = props;

    return (
        <div
            style={{width: width, height: 40}}
            className={`${columnHeader.base} ${columnHeader.unselected}`}
        />
    );
}

export default EmptyColumnHeader;