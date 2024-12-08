import { useState } from 'react';

function InputHandler() {
    const [text, setText] = useState('');

    return (
        <div>
            <input 
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <p>You typed : {text}</p>
        </div>
    );
}

export default InputHandler;