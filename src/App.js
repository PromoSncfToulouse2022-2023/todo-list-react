import { useEffect, useState } from 'react';
import { AddTodo } from './components/addTodo';
import { Todos } from './components/todos';

function App()
{
    const [todos, setTodos] = useState([]);

    useEffect(() =>
    {
        async function fetchData()
        {
            const response = await fetch('http://localhost:8000/games');
            const responseJson = await response.json();

            console.log(responseJson);
            setTodos(responseJson);
        }
        fetchData()
    }, [])

    const updateTodos = (todo) =>
    {
        console.log(todo);
        const newTodos = [...todos, ...todo];
        console.log(newTodos);
        setTodos(newTodos);
    }

    const deleteTodos = (id) =>
    {
        const newTodos = todos.filter(elm => elm.id !== id);
        setTodos(newTodos);
    }

    const toggleTodo = (id) =>
    {
        const newTodos = todos.map(elm =>
        {
            if (elm.id === id)
            {
                elm.done = !elm.done;

                return elm;
            }

            return elm;
        });

        setTodos(newTodos);
    }

    return (
        <div>
            <AddTodo updateTodos={updateTodos} />
            <Todos toggleTodo={toggleTodo} deleteTodos={deleteTodos} todos={todos} />
        </div>
    );
}

export default App;
