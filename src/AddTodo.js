import { useState } from 'react';

function AddTodo({ addTodo }) {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim() === '') return;
        addTodo(text);
        setText('');
    };
    

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={text} 
                onChange={(e) => setText(e.target.value)} 
                placeholder="Add a new todo"
            />
            <button type="submit">Add Todo</button>
        </form>
    );
}

export default AddTodo;