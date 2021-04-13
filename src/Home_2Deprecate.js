import { useState, useEffect } from 'react'
import BlogList from './BlogList'

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ])

    const [name, setName] = useState('Eigol')

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id)
        setBlogs(newBlogs)
    }

    useEffect(() => {
        console.log('use effect ran', name)
    }, [name]) // only run once on first render, but keep an eye on []
    //})

    return (
        <div className="home">
            <button onClick={() => setName("Bjarnil")}>Change name</button>
            <p>{ name }</p>
            <BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete} />
            <BlogList blogs={blogs.filter((blog) => blog.author === "mario")} title="Marios blogs" handleDelete={handleDelete} />
        </div>
    );
}
 
export default Home