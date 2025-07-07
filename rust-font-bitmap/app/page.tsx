'use client'

import CodePreview from '@/components/CodePreview'
import GridPainter from '@/components/GridPainter'
import {useState} from 'react'

export default function Home() {
    const [bitmap, setBitmap] = useState<string[]>([])

    return (
        <div className="page-main-container">
            <div className="page-left-col">
                <GridPainter onChange={setBitmap}/>
            </div>

            <div className="page-right-col">
                <CodePreview bitmaps=""/>
            </div>
        </div>
    )
}
