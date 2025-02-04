import TodoItem from './TodoItem';

export default function TodoList({ todos, deleteTodo}){
    console.log(todos)
    return(
        <ul>
            {todos && todos.map((todo)=>{
                return <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo}/>
            })}
        </ul>
    )
}