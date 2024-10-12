import {useCallback, useState} from 'react'
import Todos from './Todos'  // Make sure to import the Todos component

export default function UseCallback() {
    const [count, setCount] = useState(0)
    const [todos, setTodos] = useState([])

    const increament = () => {
        setCount(count + 1)
    }

    const addTodo =  useCallback(()=> {
       return setTodos((prev) => [...prev, `new Entry`])
    }, [todos])



    return (
        <div>
            <Todos todos={todos} addTodo={addTodo} />  {/* Corrected prop name */}
            <hr />
            <div>
                Count : {count}
                <button onClick={increament}>+</button>
            </div>
        </div>
    )
}
