import { useState } from 'react'

const Home = () => {
    // let name = "Eigol"
    const [name, setName] = useState('Eigol')
    const [age, setAge] = useState(27)

    const clickmeBtn = (e) => {
        console.log("Hello ninjas", e)
        setName("Bjarnil")
        setAge(30)
    }
    const clickmeBtn2 = (txt, e) => {
        console.log(txt, e.target)
    }

    
    return (
        <div className="home">
            <h2>Homepage</h2>
            <p>{ name } is { age } yrs old</p>
            <button onClick={clickmeBtn}>Click me</button>
            <button onClick={(e) => clickmeBtn2('yoyo', e)}>Click me again</button>
            <button onClick={(e) => {
                clickmeBtn2('yoyo', e)
            }}>Click me again</button>
        </div>
    );
}
 
export default Home