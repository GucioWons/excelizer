import ColumnHeader from "./ColumnHeader.tsx";
import EmptyColumnHeader from "./EmptyColumnHeader.tsx";

export interface ColumnHeadersRowProps {
    columns: number;
    rowHeaderWidth: number;
    selectedColumn?: number;
}

function ColumnHeadersRow(props: ColumnHeadersRowProps) {
    return (
        <div className="flex">
            <div className="flex flex-row">
                <EmptyColumnHeader width={props.rowHeaderWidth} />
                {Array.from({length: props.columns}).map((_, columnIndex) => (
                    <ColumnHeader
                        key={columnIndex}
                        index={columnIndex}
                        width={80}
                        height={40}
                        isSelected={props.selectedColumn === columnIndex}
                    />
                ))}
            </div>
        </div>
    );
}

export default ColumnHeadersRow;