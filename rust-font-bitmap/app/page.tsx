'use client'

import CodePreview from '@/components/CodePreview'
import GridPainter from '@/components/GridPainter'
import {useState} from 'react'

export default function Home() {
    const [bitmap, setBitmap] = useState<string[]>([])

    return (
        <div className="page-main-container">
            {/* Left side: Clear button + Grids */}
            <div className="page-left-col">
                {/* Clear button is inside GridPainter already, so no button here */}
                <GridPainter onChange={setBitmap}/>
            </div>

            {/* Right side: Code preview */}
            <div className="page-right-col">
                <CodePreview bitmaps=""/>
            </div>
        </div>
    )
}
