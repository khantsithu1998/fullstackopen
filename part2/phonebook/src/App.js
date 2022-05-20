import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newPhoneNo, setNewPhoneNo] = useState('')
  const [filterText, setFilterText] = useState('')
  const [showAll, setShowAll] = useState(true)

  const phoneBookToShow = showAll ? persons : persons.filter(person => person.name.toLowerCase().includes(filterText.toLowerCase()))

  const addPhonebookEntry = (event) => {
    event.preventDefault()
    const names = persons.filter(person => person.name.toLowerCase() === newName.toLowerCase())
    if(names.length === 0) {
      const newPerson = { name: newName, number: newPhoneNo , id: persons.length + 1}
      setPersons(persons.concat(newPerson))
      setNewName('')
      setNewPhoneNo('')
    }else{
      alert(`${newName} is already added to phonebook`)
    }
  }

  const handleSearchEntryChange = (event) => {
    if(event.target.value === '') {
      setShowAll(true)
    }else{
      setShowAll(false)
    }
    setFilterText(event.target.value)
  }
  const handleNameEntryChange = (event) => {
    setNewName(event.target.value)
  }

  const handlePhoneNoEntryChange = (event) => {
    setNewPhoneNo(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterText={filterText} handleSearchEntryChange={handleSearchEntryChange}/>
      <h3>add a new</h3>
      <PersonForm newName={newName} newPhoneNo={newPhoneNo} addPhonebookEntry={addPhonebookEntry} handleNameEntryChange={handleNameEntryChange} handlePhoneNoEntryChange={handlePhoneNoEntryChange}/>
      <h3>Numbers</h3>
      <Persons phoneBookToShow={phoneBookToShow}/>
    </div>
  )
}

export default App