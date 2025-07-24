export interface ColumnHeadersProps {
    columns: number;
    rowHeaderWidth: number;
}

function ColumnHeaders(props: ColumnHeadersProps) {
    function columnToLetter(index: number): string {
        let letter = '';
        let temp = index;
        while (temp >= 0) {
            letter = String.fromCharCode((temp % 26) + 65) + letter;
            temp = Math.floor(temp / 26) - 1;
        }
        return letter;
    }

    return (
        <div className="flex">
            <div
                style={{width: props.rowHeaderWidth, height: 40}}
                className="border border-gray-300 bg-gray-100"
            />
            {Array.from({ length: props.columns }).map((_, colIdx) => (
                <div
                    key={`col-${colIdx}`} // ← dodaj to!
                    className="border border-gray-300 w-20 h-10 bg-gray-100 flex items-center justify-center text-sm font-bold"
                >
                    {columnToLetter(colIdx)}
                </div>
            ))}
                </div>
            );
            }

            export default ColumnHeaders;