import PhoneBook from "./PhoneBook"

const Persons = ({ phoneBookToShow }) => {
    return (
        <ul>
            {phoneBookToShow.map(person => <PhoneBook key={person.id} person={person} />)}
        </ul>
    )
}

export default Persons