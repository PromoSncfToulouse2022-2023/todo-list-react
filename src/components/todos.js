export function Todos(props)
{
    const deleteTodo = async (id) =>
    {
        console.log(id);
        const data = await fetch('http://localhost:8000/games/' + id, {
            method: 'DELETE',
        });

        const dataJson = await data.json();

        console.log(dataJson);

        if(dataJson.deleted === true)
        {
            props.deleteTodos(id);
        }
    }

    const updateTodo = async (id) =>
    {
        const data = await fetch('http://localhost:8000/games/' + id, {
            method: 'PUT',
        });

        const dataJson = await data.json();

        console.log(dataJson);

        if(dataJson.done === true)
        {
            props.toggleTodo(id);
        }
    }

    const todos = props.todos.map(elm => <li key={elm.id}>
        {elm.done === true ? <del>{elm.name}</del> : <span>{elm.name}</span>}
        <button onClick={() => updateTodo(elm.id)}>V</button>
        <button onClick={() => deleteTodo(elm.id)}>X</button>
    </li>
    );

    return (
        <ul>
            {todos}
        </ul>
    )
}