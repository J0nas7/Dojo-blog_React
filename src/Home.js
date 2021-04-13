import { useState, useEffect } from 'react'
import BlogList from './BlogList'
import useFetch from './useFetch'
import users from './Users'

const Home = () => {
    const getUrl = 'https://jsonplaceholder.typicode.com/posts'
    let { data: blogs, isPending, error } = useFetch(getUrl)
    blogs = blogs && blogs.filter((blog) => blog.userId < 5)

    const [name, setName] = useState('Eigol')

    useEffect(() => {
        console.log('use effect ran', name)
    }, [name]) // only run once on first render, but keep an eye on []
    //})

    

    return (
        <div className="home">
            <button onClick={() => setName("Bjarnil")}>Change name</button>
            <p>{ name }</p>
            {error && <div>{ error }</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All blogs" />}
            {blogs && <BlogList blogs={blogs.filter((blog) => blog.userId === 1)} title={users[1]+'s blog'} />}
        </div>
    );
}
 
export default Home