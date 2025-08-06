import {useCallback} from "react";
import {columnHeader} from "../../../common/style/TailwindClasses.ts";
import {defaultCellHeight, defaultCellWidth} from "../../../common/style/Defaults.ts";

export interface ColumnHeaderProps {
    index: number;
    isSelected: boolean;
}

function ColumnHeader(props: ColumnHeaderProps) {
    const { index, isSelected } = props;

    const getColumnLetter = useCallback(() => {
        let letter = '';
        let temp = index;
        while (temp >= 0) {
            letter = String.fromCharCode((temp % 26) + 65) + letter;
            temp = Math.floor(temp / 26) - 1;
        }
        return letter;
    }, [index]);
    
    return (
        <div
            style={{ width: defaultCellWidth, height: defaultCellHeight }}
            className={`${columnHeader.base} ${isSelected ? columnHeader.selected : columnHeader.unselected}`}
        >
            {getColumnLetter()}
        </div>
    )
}

export default ColumnHeader;