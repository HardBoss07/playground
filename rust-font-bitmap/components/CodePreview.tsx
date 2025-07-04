import SyntaxHighlighter from 'react-syntax-highlighter';
import {rainbow as style} from 'react-syntax-highlighter/dist/esm/styles/hljs';

import {combinedString} from "@/public/code-util";

interface CodePreviewProps {
    bitmaps: string;
}

export default function CodePreview({bitmaps}: CodePreviewProps) {
    return (
        <div className="code-preview">
            <h1>Code Prewiev:</h1>
            <SyntaxHighlighter
                language="rust"
                style={style}
                showLineNumbers={true}
                customStyle={{
                    margin: 0,
                    background: "#1E1F22",
                    whiteSpace: 'pre-wrap',
                    wordBreak: 'break-word',
                    overflowX: 'auto'
                }}
            >
                {combinedString(bitmaps).trim()}
            </SyntaxHighlighter>
        </div>
    )
}