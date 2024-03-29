import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import users from './Users'

const BlogDetails = () => {
    const { blogId } = useParams()
    const getUrl = 'https://jsonplaceholder.typicode.com/posts/' + blogId
    const { data: blog, isPending, error} = useFetch(getUrl)
    const history = useHistory()

    const handleDelete = () => {
        const deleteUrl = 'https://jsonplaceholder.typicode.com/posts/'+blogId
        fetch(deleteUrl, {
            method: 'DELETE'
        })
            .then(() => {
                history.push('../')
            })
    }

    return (
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{ error }</div>}
            {blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Written by { users[blog.userId] }</p>
                    <div>{ blog.body }</div>
                    <button onClick={handleDelete}>Delete</button>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;