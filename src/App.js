import React from 'react';
import classes from './App.module.css';
import Person from './Person/Person';

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
    let persons = null
    let buttonStyleClasses = ''

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
      buttonStyleClasses = classes.Red
    }

    const assignedClasses = []
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red)
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold)
    }

    return (
        <div className={classes.App}>
          <h1>React Guide</h1>
          <p className = {assignedClasses.join(' ')}>This is working now!!!</p>
          <button 
            className = {buttonStyleClasses}
            onClick = {this.togglePersons}
            >Toggle Persons
          </button>
          { persons }
        </div>
    );
  }
}

export default App;
