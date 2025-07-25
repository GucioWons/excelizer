import ColumnHeader from "./ColumnHeader.tsx";

export interface ColumnHeadersRowProps {
    columns: number;
    rowHeaderWidth: number;
}

function ColumnHeadersRow(props: ColumnHeadersRowProps) {
    return (
        <div className="flex">
            <div
                className="flex flex-row"
            >
                <div
                    style={{width: props.rowHeaderWidth, height: 40}}
                    className="border border-gray-300 bg-gray-100 flex items-center justify-center text-sm font-bold"
                />
                {Array.from({length: props.columns}).map((_, columnIndex) => (
                    <ColumnHeader key={columnIndex} index={columnIndex} width={80} height={40} />
                ))}
            </div>
        </div>
    );
}

export default ColumnHeadersRow;