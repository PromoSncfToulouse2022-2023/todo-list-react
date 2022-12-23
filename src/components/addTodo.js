import { useState } from 'react'

export function AddTodo(props)
{
    const [inputValue, setInputValue] = useState('');

    const handleAddTodo = async () =>
    {
        const response =  await fetch('http://localhost:8000/games', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ name: inputValue })
        })

        const responseJson = await response.json();
        props.updateTodos(responseJson);
    }

    return (
        <>
            <input type='text' value={inputValue} onChange={(event) => setInputValue(event.target.value)}></input>
            <button onClick={handleAddTodo}>ADD TODO</button>
        </>
    )
}