import {useCallback} from "react";
import {columnHeader} from "../../common/style/TailwindClasses.ts";

export interface ColumnHeaderProps {
    index: number;
    width: number;
    height: number;
    isSelected: boolean;
}

function ColumnHeader(props: ColumnHeaderProps) {
    const { index, width, height, isSelected } = props;

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
            style={{
                width: width,
                height: height,
                // borderBottom: props.isSelected ? '3px solid green' : '1px solid #ccc',
                // backgroundColor: props.isSelected ? '#ddd' : '#f9f9f9',
                // fontWeight: props.isSelected ? 'bold' : 'normal',
            }}
            className={`${columnHeader.base} ${isSelected ? columnHeader.selected : columnHeader.unselected}`}
        >
            {getColumnLetter()}
        </div>
    )
}

export default ColumnHeader;