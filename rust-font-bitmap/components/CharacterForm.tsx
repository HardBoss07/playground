'use client';

import React, {useState} from 'react';
import GridPainter from '@/components/GridPainter';
import InputField from '@/components/InputField';

type CharacterFormProps = {
    onSubmit: (data: {bitmap: string[]; character: string}) => void;
};

export default function CharacterForm({onSubmit}: CharacterFormProps) {
    const [bitmap, setBitmap] = useState<string[]>([]);
    const [character, setCharacter] = useState<string>('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (bitmap.length > 0 && character.length === 1) {
            onSubmit({bitmap, character});
            // setBitmap([]); // You might need to add a way to clear GridPainter externally
            // setCharacter('');
        } else {
            alert('Please draw a character and enter a single letter.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="character-form-container">
            <h2>Define Your Character Glyph</h2>

            <div className="form-section">
                <InputField
                    label="Enter a single character:"
                    value={character}
                    onChange={(val) => setCharacter(val.slice(0, 1))}
                    placeholder="e.g., A, B, c, 1, ?"
                    maxLength={1}
                />
            </div>

            <div className="form-section">
                <GridPainter onChange={setBitmap}/>
            </div>

            <button type="submit" className="submit-button">
                Save Character Glyph
            </button>
        </form>
    );
}