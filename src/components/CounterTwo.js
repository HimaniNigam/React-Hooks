import React,{useReducer} from 'react'

const initialState={
    firstCOunter:0,
    secondCounter:10
}
const reducer =(state,action)=>{
switch(action.type)
{
    case 'increment':
        return {firstCOunter: state.firstCOunter + action.value}
        case 'decrement':
        return {firstCOunter: state.firstCOunter - action.value}
        case 'reset':
        return initialState
        default:
            return state
}
}
function CounterTwo() {
  const[count,dispath] =  useReducer(reducer,initialState)
    return (
        <div>
            <div>Count - {count.firstCOunter}</div>
            <button onClick={()=>dispath({type: 'increment',value:1})}>Increment</button>
            <button onClick={()=>dispath({type: 'decrement',value:1})}>Decrement</button>
            <button onClick={()=>dispath({type: 'reset'})}>Reset</button>
            <button onClick={()=>dispath({type: 'increment',value:5})}>Increment five</button>
            <button onClick={()=>dispath({type: 'decrement',value:5})}>Decrement five</button>
        </div>
    )
}

export default CounterTwo
