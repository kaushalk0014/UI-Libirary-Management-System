import React, { useState } from "react";

function AddBook() {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log("Book Added:", { title, author });
        // Reset form
        setTitle("");
        setAuthor("");
    };

    return (
        <div className="App" style={{ padding: "20px" }}>
            <h2>Add a Book</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: "10px" }}>
                    <label>Title: </label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div style={{ marginBottom: "10px" }}>
                    <label>Author: </label>
                    <input
                        type="text"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Add Book</button>
            </form>
        </div>
    );
}

export default AddBook;
