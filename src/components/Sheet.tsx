import {useEffect, useRef, useState} from "react";
import Row from "./Row.tsx";

function Sheet() {
    const CELL_WIDTH = 80;
    const CELL_HEIGHT = 40;

    const [dimensions, setDimensions] = useState({ rows: 0, columns: 0 });
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const rawColumns = window.innerWidth / CELL_WIDTH;
        const rawRows = window.innerHeight / CELL_HEIGHT;

        const columns = Math.floor(rawColumns * 1.25);
        const rows = Math.floor(rawRows * 1.25);

        setDimensions({ rows, columns });
    }, []);

    function handleScroll() {
        const container = containerRef.current;
        if (!container) return;

        const nearRight = container.scrollLeft + container.clientWidth >= container.scrollWidth - 5;
        const nearBottom = container.scrollTop + container.clientHeight >= container.scrollHeight - 5;

        if (nearRight || nearBottom) {
            setDimensions(prev => {
                const newRows = Math.floor(prev.rows * 1.5);
                const newColumns = Math.floor(prev.columns * 1.5);

                if (newRows === prev.rows && newColumns === prev.columns) return prev;

                return { rows: newRows, columns: newColumns };
            });
        }
    }

    const { rows, columns } = dimensions;

    return (
        <div
            ref={containerRef}
            onScroll={handleScroll}
            className="w-screen h-screen overflow-auto flex flex-col"
        >
            {Array.from({ length: rows }).map((_, index) => (
                <Row index={index} columns={columns} />
            ))}
        </div>
    );
}

export default Sheet;