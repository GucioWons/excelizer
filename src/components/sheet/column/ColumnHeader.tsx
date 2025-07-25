import {useCallback} from "react";

export interface ColumnHeaderProps {
    index: number;
    width: number;
    height: number;
}

function ColumnHeader(props: ColumnHeaderProps) {
    const getColumnLetter = useCallback(() => {
        let letter = '';
        let temp = props.index;
        while (temp >= 0) {
            letter = String.fromCharCode((temp % 26) + 65) + letter;
            temp = Math.floor(temp / 26) - 1;
        }
        return letter;
    }, [props.index]);
    
    return (
        <div
            style={{
                width: 80,
                height: 40,
            }}
            className="border border-gray-300 bg-gray-100 flex items-center justify-center text-sm font-bold"
        >
            {getColumnLetter()}
        </div>
    )
}

export default ColumnHeader;