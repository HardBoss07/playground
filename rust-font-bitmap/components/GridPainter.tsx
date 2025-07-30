'use client';

import {useState, useRef, useEffect} from 'react';

type GridPainterProps = {
    onChange: (bitmap: string[]) => void;
};

const GRID_WIDTH = 8;
const GRID_HEIGHT = 16;

export default function GridPainter({onChange}: GridPainterProps) {
    const emptyGrid = () =>
        Array(GRID_HEIGHT)
            .fill(null)
            .map(() => Array(GRID_WIDTH).fill(false));

    const [grid, setGrid] = useState<boolean[][]>(emptyGrid());

    const isMouseDown = useRef(false);
    const currentToggleValue = useRef<boolean | null>(null);

    const toggleCell = (row: number, col: number, value: boolean) => {
        setGrid((prev) =>
            prev.map((r, i) =>
                r.map((cell, j) => {
                    if (i === row && j === col) {
                        return value;
                    }
                    return cell;
                })
            )
        );
    };

    const handleMouseDown = (row: number, col: number, e: React.MouseEvent) => {
        if (e.button !== 0) return; // Only left click
        e.preventDefault();
        isMouseDown.current = true;

        const newValue = !grid[row][col];
        currentToggleValue.current = newValue;
        toggleCell(row, col, newValue);
    };

    const handleMouseEnter = (row: number, col: number, e: React.MouseEvent) => {
        if (isMouseDown.current && e.buttons === 1) {
            toggleCell(row, col, currentToggleValue.current ?? true);
        }
    };

    const handleMouseUp = () => {
        isMouseDown.current = false;
        currentToggleValue.current = null;
    };

    const clearGrid = () => {
        setGrid(emptyGrid());
    };

    useEffect(() => {
        window.addEventListener('mouseup', handleMouseUp);
        return () => window.removeEventListener('mouseup', handleMouseUp);
    }, []);

    useEffect(() => {
        const bitmap = grid.map((row) => row.map((cell) => (cell ? '1' : '0')).join(''));
        onChange(bitmap);
    }, [grid, onChange]);

    return (
        <div className="grid-painter-container">
            <button
                onClick={clearGrid}
                className="clear-btn"
            >
                Clear
            </button>

            <div className="grid-painter-grids-row">
                {/* Drawing Grid */}
                <div
                    className="grid-painter-grid"
                    style={{
                        gridTemplateColumns: `repeat(${GRID_WIDTH}, 20px)`,
                        gridTemplateRows: `repeat(${GRID_HEIGHT}, 20px)`,
                    }}
                >
                    {grid.map((row, i) =>
                        row.map((cell, j) => (
                            <div
                                key={`${i}-${j}`}
                                onMouseDown={(e) => handleMouseDown(i, j, e)}
                                onMouseEnter={(e) => handleMouseEnter(i, j, e)}
                                className={`grid-painter-cell ${cell ? 'grid-painter-cell-on' : 'grid-painter-cell-off'}`}
                            />
                        ))
                    )}
                </div>

                {/* Pixel Canvas */}
                <div
                    className="grid-painter-grid"
                    style={{
                        gridTemplateColumns: `repeat(${GRID_WIDTH}, 20px)`,
                        gridTemplateRows: `repeat(${GRID_HEIGHT}, 20px)`,
                    }}
                >
                    {grid.map((row, i) =>
                        row.map((cell, j) => (
                            <div
                                key={`canvas-${i}-${j}`}
                                className={`grid-painter-canvas-cell ${cell ? 'grid-painter-cell-on' : 'grid-painter-cell-off'}`}
                            />
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}
