"use client";

import { useState } from "react";

export default function NewItem() {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    const handleSubmit = (e) => {
        e.preventDefault();

        const item = { name, quantity, category };
        console.log(item);

        alert(`Item: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);

        setName("");
        setQuantity(1);
        setCategory("produce");
    }

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 border rounded">
            <h2 className="text-xl font-bold">Add a new item.</h2>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Item Name"
                className="w-full border p-2 mb-3 rounded"
            />

            <input
                type="number"
                min="1"
                max="99"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="w-full border p-2 mb-3 rounded"
            />

            <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full border p-2 mb-4 rounded text-gray-600"
            >
                <option value="produce">Produce</option>
                <option value="dairy">Dairy</option>
                <option value="bakery">Bakery</option>
                <option value="meat">Meat</option>
                <option value="pantry">Pantry</option>
            </select>

            <button className="bg-blue-500 text-white px-4 py-2 rounded"> Add Item </button>

        </form>
    )
}