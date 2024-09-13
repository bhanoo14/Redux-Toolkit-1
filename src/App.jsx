
import './App.css'
import {increment, decrement} from './redux/counter/CounterSlice'
import {useDispatch, useSelector} from 'react-redux'


function App() {
  const count = useSelector((state)=> state.counter.value)
const dispatch = useDispatch()

  return (
    <>
    <h2>My-Countr: {count}</h2>
    <div>
      <button aria-label="Increment value" onClick={()=>{dispatch(increment())}}>Increment</button>
        {count}
      <button aria-label="Increment value" onClick={()=>dispatch(decrement())}>Decrement</button>
    </div>
    </>
  )
}

export default App
