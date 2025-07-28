import React, { useEffect, useState } from 'react'

const Home = () => {
    const [age, setAge] = useState(0)
    useEffect(() => {
        console.log("hello from Home component");

        return ()=>{
            console.log("by bye from home use 1");
        }
    }, [])

    useEffect(() => {
        console.log("second useEffct");
        if (age > 0) {
            console.log("age vala use effect runs");
        }

         return ()=>{
            console.log("by bye from home use 2");
        }
    }, [age])

    return (
        <div>
            Home
            <button onClick={() => {
                setAge(age + 1)
            }} > {age} </button>
        </div>
    )
}

export default Home
