import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [userId, setUserId] = useState('2')
    const [isPending, setIsPending] = useState(false)
    const history = useHistory()

    const handleCreate = (e) => {
        e.preventDefault()
        const blog = { title, body, userId }

        setIsPending(true)

        const postUrl = 'https://jsonplaceholder.typicode.com/posts'
        fetch(postUrl, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        })
            .then(() => {
                console.log("new blog added")
                setIsPending(false)
                history.push('./')
            })
    }

    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleCreate}>
                <label>Blog title:</label>
                <input 
                    type="text" 
                    required 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog content:</label>
                <textarea
                    required 
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog author:</label>
                <select
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                >
                    <option value="1">Bjarnil</option>
                    <option value="2">Eigol</option>
                    <option value="3">Mario</option>
                    <option value="4">Luigi</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding blog...</button>}
                <p>{ title }</p>
                <p>{ body }</p>
                <p>{ userId }</p>
            </form>
        </div>
    );
}
 
export default Create;