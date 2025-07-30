'use client'

import CodePreview from '@/components/CodePreview'
import CharacterForm from '@/components/CharacterForm'
import {useState} from 'react'

const combinedBitmapToString = (bitmaps: string[]): string => {
    if (!bitmaps || bitmaps.length === 0) {
        return "// Draw your character to see the code preview!";
    }
    return bitmaps.map(row => `0b${row},`).join('\n');
};

export default function Home() {
    const [submittedData, setSubmittedData] = useState<{ bitmap: string[]; character: string } | null>(null);

    const handleCharacterFormSubmit = (data: { bitmap: string[]; character: string }) => {
        setSubmittedData(data);
    };

    const codePreviewString = submittedData
        ? combinedBitmapToString(submittedData.bitmap)
        : "        // Draw your character to see the code preview!";

    return (
        <div className="page-main-container">
            <div className="page-left-col">
                <CharacterForm onSubmit={handleCharacterFormSubmit} />
            </div>

            <div className="page-right-col">
                <CodePreview bitmaps={codePreviewString} />

                {submittedData && submittedData.character && (
                    <div className="mt-4 p-2 border rounded bg-gray-100">
                        <p className="font-bold">Assigned Character: <span className="text-blue-600 text-xl">{submittedData.character}</span></p>
                    </div>
                )}
            </div>
        </div>
    )
}