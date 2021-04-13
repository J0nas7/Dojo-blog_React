import { useState, useEffect } from 'react'
import BlogList from './BlogList'
import useFetch from './useFetch'

const Home = () => {
    const getUrl = 'http://localhost:8000/blogs'
    const { data: blogs, isPending, error } = useFetch(getUrl)

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
            {blogs && <BlogList blogs={blogs.filter((blog) => blog.author === "mario")} title="Marios blogs" />}
        </div>
    );
}
 
export default Home