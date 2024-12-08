function TodoItem({ todo, toggleComplete, deleteTodo }) {
    return (
        <li style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            <span onClick={() => toggleComplete(todo.id)}>{todo.text}</span>
            <span style={{ marginLeft: '10px', fontSize: '0.8em', color: 'gray' }}>
                ({todo.time})
            </span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </li>
    );
}

export default TodoItem;