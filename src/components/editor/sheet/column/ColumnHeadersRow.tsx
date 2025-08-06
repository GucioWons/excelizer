import ColumnHeader from "./ColumnHeader.tsx";
import EmptyColumnHeader from "./EmptyColumnHeader.tsx";

export interface ColumnHeadersRowProps {
    columns: number;
    rowHeaderWidth: number;
    selectedColumn?: number;
}

function ColumnHeadersRow(props: ColumnHeadersRowProps) {
    const { columns, rowHeaderWidth, selectedColumn } = props;

    return (
        <div className="flex">
            <div className="flex flex-row">
                <EmptyColumnHeader width={rowHeaderWidth} />
                {Array.from({length: columns}).map((_, columnIndex) => (
                    <ColumnHeader
                        key={columnIndex}
                        index={columnIndex}
                        isSelected={selectedColumn === columnIndex}
                    />
                ))}
            </div>
        </div>
    );
}

export default ColumnHeadersRow;