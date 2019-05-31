import React from 'react';
import './App.css';
import Person from './Person/Person'

class App extends React.Component {
  state = {
    persons: [
      { name: "Pooja", age: 28 },
      { name: "Shivam", age: 28 }
    ]
  }

  switchHandler = (newName1, newName2) => {
    this.setState({
      persons: [
        { name: newName1, age: 28 },
        { name: newName2, age: 28 }
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: "Pooja", age: 28 },
        { name: event.target.value, age: 28 }
      ]
    })
  }

  render() {
    const style = {
      backgroundColor: '#ccc',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    return (
      <div className="App">
        <h1>React Guide</h1>
        <button 
          onClick = {this.switchHandler.bind(this, "Maximalian", "Joe")}
           style = {style} >Switch Names</button>
        <Person 
          name = {this.state.persons[0].name} 
          age = {this.state.persons[0].age} 
          click = {this.switchHandler.bind(this, "Pooja Pandey", "Prashant Pandey")}/>
        <Person 
          name= {this.state.persons[1].name} 
          age= {this.state.persons[1].age}
          changename = {this.nameChangeHandler} >We are married</Person>
      </div>
    );
  }
}

export default App;
