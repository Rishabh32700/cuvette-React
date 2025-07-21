import React, { useState } from 'react'
import Comp2 from './Comp2'

const Comp1 = () => {
    const [currentTask, setCurrentTask] = useState("")
    const [allTasks, setAllTasks] = useState([])
    return (
        <div>
            <h1>Basic ToDo Application</h1>
            <input
                type="text"
                onChange={(e) => {
                    setCurrentTask(e.target.value)
                }}
                value={currentTask}
            />
            <button onClick={() => {
                console.log(currentTask);
                setAllTasks([...allTasks, currentTask])
                setCurrentTask("")
            }} >Add Task</button>

            <ul>
                {
                    allTasks.map((ele, idx) => {
                        return (
                            <li key={idx} >
                                <span>{ele}</span>
                                <button onClick={() => {
                                    console.log(idx);
                                    const updatedTaskArray = allTasks.filter((ele, currentIdx) => {
                                        return idx !== currentIdx
                                    })
                                    setAllTasks(updatedTaskArray)

                                }}>Delete</button>
                                <button onClick={() => {
                                    setCurrentTask(allTasks[idx])
                                    
                                    const updatedTaskArray = allTasks.filter((ele, currentIdx) => {
                                        return idx !== currentIdx
                                    })
                                    // to test
                                    setAllTasks(updatedTaskArray)

                                }}>Update</button>
                            </li>
                        )
                    })
                }
            </ul>

            <Comp2></Comp2>
        </div>
    )
}

export default Comp1
