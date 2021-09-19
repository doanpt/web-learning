const SearchBox = ({searchField, searchChange}) => {
    return (
        <div>
            <input className="pa3 ba b--green bg-lightest-blue" type="search" placeholder="Search your robots" onChange={searchChange} />
        </div>
    );
}

export default SearchBox;