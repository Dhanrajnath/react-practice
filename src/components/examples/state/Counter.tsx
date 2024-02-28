import { useReducer } from "react"

const initState = { count: 0 }

const reducer = (state: any, action: any) => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + action.payload }
        case 'decrement':
            return { count: state.count - action.payload }
        default:
            return state
    }
}

export const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initState)

    return (
        <>
            <h3>
                Count: {state.count}
            </h3>
            <button onClick={() => dispatch({ type: 'increment', payload: 10 })}>
                Increment by 10
            </button>
            <button onClick={() => dispatch({ type: 'decrement', payload: 10 })}>
                Decrement by 10
            </button>
            <div>
                <button onClick={() => dispatch({ type: 'increment', payload: 1 })}>
                    +
                </button>
                <button onClick={() => dispatch({ type: 'decrement', payload: 1 })}>
                    -
                </button>
            </div>
        </>
    )

}