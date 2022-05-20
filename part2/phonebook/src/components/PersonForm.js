const PersonForm = ({ newName, newPhoneNo, addPhonebookEntry, handleNameEntryChange, handlePhoneNoEntryChange }) => {
    return (
        <form onSubmit={addPhonebookEntry}>
            <div>
                name: <input value={newName} onChange={handleNameEntryChange} />
            </div>
            <div>
                number: <input value={newPhoneNo} onChange={handlePhoneNoEntryChange} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm