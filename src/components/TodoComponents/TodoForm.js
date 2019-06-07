import React from 'react';

function TodoForm (props) {
    return (
        <form onSubmit={props.handleSubmit}>
            <input
            type='text'
            name='todo'
            onChange={props.changeHandler}
            placeholder='todo'
            value={props.value}
            />
            <button type ='submit'>Add Todo</button>
            <button onClick={props.clickHandler}>Clear Completed</button>
        </form>
    )
}

export default TodoForm;