import Cell from "./Cell.tsx";

function Sheet() {
    const rows = 20;
    const columns = 10;

    return (
        <div
            className="grid grid-cols-10"
        >
            {Array.from({length: rows * columns}, (_, index) => {
                const row = Math.floor(index / columns);
                const col = index % columns;
                return <Cell
                    key={`${row}-${col}`}
                    row={row}
                    column={col}
                />;
            })}
        </div>
    );
}

export default Sheet;