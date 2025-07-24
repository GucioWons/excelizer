import {useEffect, useRef, useState} from "react";
import Row from "./Row.tsx";

function Sheet() {
    const CELL_WIDTH = 80;
    const CELL_HEIGHT = 40;

    const [dimensions, setDimensions] = useState({ rows: 0, columns: 0 });
    const [initialDimensions, setInitialDimensions] = useState({ rows: 0, columns: 0 });
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const rawColumns = window.innerWidth / CELL_WIDTH;
        const rawRows = window.innerHeight / CELL_HEIGHT;

        const columns = Math.floor(rawColumns * 1.25);
        const rows = Math.floor(rawRows * 1.25);

        setDimensions({ rows, columns });
        setInitialDimensions({ rows, columns });
    }, []);

    function handleScroll() {
        const container = containerRef.current;
        if (!container) return;

        const nearRight = container.scrollLeft + container.clientWidth >= container.scrollWidth - 5;
        const nearBottom = container.scrollTop + container.clientHeight >= container.scrollHeight - 5;

        const newDimensions = { ...dimensions };
        if (nearRight) {
            newDimensions.columns += initialDimensions.columns * 2
        }
        if (nearBottom) {
            newDimensions.rows += initialDimensions.rows * 2
        }
        if (newDimensions.rows !== dimensions.rows || newDimensions.columns !== dimensions.columns) {
            setDimensions(newDimensions);
        }
    }

    const { rows, columns } = dimensions;

    return (
        <div
            ref={containerRef}
            onScroll={handleScroll}
            className="w-screen h-screen overflow-auto bg-white"
        >
            {Array.from({ length: rows }).map((_, rowIdx) => (
                <div key={`row-${rowIdx}`} className="flex">
                    <Row index={rowIdx} columns={columns} headerWidth={String(rows).length * 10 + 20} />
                </div>
            ))}
        </div>
    );
}

export default Sheet;