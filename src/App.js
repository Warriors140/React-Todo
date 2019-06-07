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

  addTodo = (event) => {
    event.preventDefault(); 
  
    const newTodoItem = { task: this.state.todo, completed: false, id: Date.now() }
    this.setState({
      todos: [...this.state.todos, newTodoItem],
    todo: "",
   })
  }

  toggleTodo = id => {
    const todo = this.state.todo.map(todo => {
      if (todo.id === id) {
        const newTodo = {
          ...todo,
          completed: !todo.completed
        };
        return newTodo;
      } else {
        return todo;
      }
    })

    this.setState({todo});
  }

  clearCompletedTodos = (event) => {
    event.preventDefault();
    const todos = this.state.todo.filter(todo => {
      if (todo.completed === false) {
        return true;
      } else 
        return false;
    })

    this.setState({todos});
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
