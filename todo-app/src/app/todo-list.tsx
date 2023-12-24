import ShowTodos from "./todo";

const getTodo = async () => {
    let todos = await fetch("http://localhost:3001/api/todo/list");
    return todos.json();
}

export default async function todoList() {
    const {todos} = await getTodo();
    console.log(todos);
    
    return (
        <>
        <div>
            <ol style={{}}>
                {todos.map((todo:any) => {
                    return (
                        <li style={{ padding: "5px"} } key={todo.id}>
                            <ShowTodos toodo={todo} />
                        </li>
                    );
                })}
            </ol>
            </div>
        </>
    )
}