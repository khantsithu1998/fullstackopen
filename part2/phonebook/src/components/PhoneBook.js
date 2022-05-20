const PhoneBook = ({ person }) => {
    return (
      <li>{person.name} {person.phoneNo} {person.number}</li>
    )
  }
  
  export default PhoneBook