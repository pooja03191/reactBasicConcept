import React from 'react';
import './App.css';
import Person from './Person/Person';
import Radium, {StyleRoot} from 'radium';

class App extends React.Component {
  state = {
    persons: [
      { id: 1, name: "Pooja", age: 28 },
      { id: 2, name: "Shivam", age: 28 },
      { id: 3, name: "Stephanie", age: 26 }
    ],
    showPerson: false
  }

  nameChangeHandler = (event, id) => {
    const persons = [...this.state.persons]
    const personIndex = persons.findIndex( p => {
      return p.id === id
    })
    persons[personIndex].name = event.target.value
    this.setState({
      persons: persons
    })
  }

  togglePersons = () => {
    const doesShow = this.state.showPerson
    this.setState({ showPerson: !doesShow })
  }

  deletePersonHandler = (personIndex) => {
    let persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({
      persons: persons
    })
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }

    let persons = null

    if(this.state.showPerson) {
      persons = (
        <div>
            { this.state.persons.map((person, index) => {
              return <Person 
                        click = {this.deletePersonHandler.bind(this, index)}
                        name = {person.name} 
                        age = {person.age} 
                        key = {person.id}
                        changename = {(event) => this.nameChangeHandler(event, person.id)}
                      />
            })}
          </div>
      )

      style.backgroundColor = 'red'
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    const classes = []
    if (this.state.persons.length <= 2) {
      classes.push('red')
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold')
    }

    return (
      <StyleRoot>
        <div className="App">
          <h1>React Guide</h1>
          <p className = {classes.join(' ')}>This is working now!!!</p>
          <button 
            onClick = {this.togglePersons}
            style = {style} >Toggle Persons
          </button>
          { persons }
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
