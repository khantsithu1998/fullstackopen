const Filter = ({filterText , handleSearchEntryChange}) => {
    return (
        <div>
            filter shown with <input value={filterText} onChange={handleSearchEntryChange} />
        </div>
    )
}

export default Filter