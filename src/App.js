import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: '',
          id: '',
          completed: false
        },
        {
          task: '',
          id: '',
          completed: false
        }
      ],
      value:''
    };
  }

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  changeHandler = event => {
    console.log(event.props.changeHandler)
    this.setState({[event.props.changeHandler]: event.props.value})
  }
  
  render() {
    return (
      <div>
        <TodoList tasks={[{task:'mow the lawn', id:'1'}, {task:'clean kitchen', id:'2'}]} />
        <TodoForm value='' changeHandler={console.log} clickHandler={console.log} handleSubmit={console.log}/>
      </div>  
    );
  }
}

export default App;
