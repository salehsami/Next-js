import addNewTodo from "./add-new-todo";
import todoList from "./todo-list";

export default function page() {
    return (
        <>
            <h2>Welcome to Todo app</h2>
            {addNewTodo()}
            {todoList()}
        </>
    )
};