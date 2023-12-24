"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";

const addTodo = async (name:any, refresh:()=>void) => {
    await fetch(`http://localhost:3001/api/todo/add`), { method: "POST", body: JSON.stringify({ name }) };
    refresh();
}

export default function addNewTodo() {
    const router = useRouter();
    const [newTodo, setTodo] = useState("");
    return (
        <div>
            <h4>Enter the todo</h4>
            <input type="text" onChange={(e) => setTodo(e.target.value)} />
            <button onClick={
                async () => {
                    await addTodo(newTodo, router.refresh);
                    setTodo("");
                }}>Add</button>
        </div>
    );
};