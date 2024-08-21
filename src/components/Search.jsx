import { useState } from "react";

const Search = () => {
    const[searchValue, setSearchValue] = useState('');
    
    const handleSearch = (event) => {
        const animalNames = ["the", "first", "dog"]
        event.preventDefault() // use to prevent page refresh
        // console.log(event.nativeEvent.data)
        setSearchValue(event.target.value)
        console.log(animalNames.filter(name => name.includes(searchValue)))
    };

    return (
        <div>
            <label htmlFor="animal_searched">Search:</label>
            <input type="text" id="name" name="animal_searched" value={searchValue} placeholder="Search animals.."
            onChange={handleSearch}/>
        </div>
    )
  }


  export default Search