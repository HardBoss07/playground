import SyntaxHighlighter from 'react-syntax-highlighter';
import {rainbow as style} from 'react-syntax-highlighter/dist/esm/styles/hljs';

import {combinedString} from '@/public/code-util';

interface CodePreviewProps {
    bitmaps: string;
}

export default function CodePreview({bitmaps}: CodePreviewProps) {
    return (
        <>
            <h1 className="code-preview-title">Code Preview:</h1>
            <div className="code-preview-container my-4 border border-gray-500 rounded-lg overflow-hidden">
                <SyntaxHighlighter
                    language="rust"
                    style={style}
                    showLineNumbers={true}
                    customStyle={{
                        margin: 0,
                        background: '#1E1F22',
                        whiteSpace: 'pre-wrap',
                        wordBreak: 'break-word',
                        overflowX: 'auto',
                        padding: '1rem', // add padding inside the code block to match spacing style
                        borderRadius: '0.5rem', // round corners inside for better visuals
                    }}
                >
                    {combinedString(bitmaps).trim()}
                </SyntaxHighlighter>
            </div>
        </>
    );
}
