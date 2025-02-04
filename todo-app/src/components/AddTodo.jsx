import {useState} from 'react';

export default function AddTodo({addTodo}){
    const [task,setTask]=useState('');
    function handleSubmit(e){
        e.preventDefault();
        addTodo(task);
        setTask('');
    }
    return(
        <form onSubmit={handleSubmit} className="flex gap-2 my-4">
            <input type="text" 
            placeholder="Add a new task"
            value={task}
            onChange={(e)=>setTask(e.target.value)} 
            className="flex-1 p-2 border border-gray-300 rounded text-black"/>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Add task</button>
        </form>
    )
}