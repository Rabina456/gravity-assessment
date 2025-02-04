import { useState, useEffect } from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import Filter from './Filter';

export default function TodoApp() {
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState("all");
    const [isLoaded, setIsLoaded] = useState(false); // ✅ Track if data is loaded

    // ✅ Load from local storage or API on mount
    useEffect(() => {
        const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];

        if (savedTodos.length > 0) {
            setTodos(savedTodos);
        } else {
            fetch('https://dummyjson.com/todos')
                .then((res) => res.json())
                .then((data) => {
                    const initialTodos = data.todos.slice(0, 5);
                    setTodos(initialTodos);
                    localStorage.setItem("todos", JSON.stringify(initialTodos));
                });
        }
        setIsLoaded(true); // ✅ Mark data as loaded
    }, []);

    // ✅ Save todos to local storage *only after initial load*
    useEffect(() => {
        if (isLoaded) {
            localStorage.setItem("todos", JSON.stringify(todos));
        }
    }, [todos, isLoaded]);

    function addTodo(task) {
        const newTodo = { id: Date.now(), todo: task, completed: false };
        setTodos((prevTodos) => {
            const updatedTodos = [...prevTodos, newTodo];
            localStorage.setItem("todos", JSON.stringify(updatedTodos)); // ✅ Save immediately
            return updatedTodos;
        });
    }

    function deleteTodo(id) {
        setTodos((prevTodos) => {
            const updatedTodos = prevTodos.filter((todo) => todo.id !== id);
            localStorage.setItem("todos", JSON.stringify(updatedTodos)); // ✅ Save after deletion
            return updatedTodos;
        });
    }

    const filteredTodos = todos.filter((todo) => {
        if (filter === "completed") return todo.completed;
        if (filter === "pending") return !todo.completed;
        return true;
    });

    return (
        <div className="p-6 max-w-lg mx-auto bg-white shadow-lg rounded-lg">
            <AddTodo addTodo={addTodo} />
            <Filter setFilter={setFilter} />
            <TodoList todos={filteredTodos} deleteTodo={deleteTodo} />
        </div>
    );
}
