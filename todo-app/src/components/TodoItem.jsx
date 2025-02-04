export default function TodoItem({todo, deleteTodo}){

    return (
        <li className="flex justify-between items-center p-2 border-b gap-3">
            <span  className="text-black">
            {todo.todo}
            </span>
            <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
        </li>
    )
}