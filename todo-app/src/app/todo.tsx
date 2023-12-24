"use client"

import { useRouter } from "next/navigation";

const updateTodo = async (id: any, isDone: any, refresh: ()=> void) => {
    await fetch("http://localhost:3001/api/todo/update"), {
        method: "POST",
        mode: "no-cors",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, isDone }),
    }
    refresh();
}

const deleteTodo = async(id:any, refresh:()=>void) => {
    await fetch(`/api/todo/delete?id=${id}`), {
        method: "DELETE",
    }
    refresh();
}

export default function ShowTodos({ toodo }: { toodo: any }) {
    // console.log("Rendering todo:", toodo); // Log the todo being rendered
    const router = useRouter();

    return (
        <>
            <input type="checkbox" onChange={(e) => { updateTodo(toodo.id, e.target.checked, router.refresh) }} checked= {toodo.isDone}/>
        {toodo.name}
            <button onClick={() => deleteTodo(toodo.id, router.refresh)} >Delete</button>
            </>
    );
}