import react from "react";

const SearchBar = ({search,handleChange})=>{
  return (
    <div>SearchBar
    <label htmlFor="search">Search:</label>
    <input type="search" 
    name="search" 
    placeholder="search clothing" 
    value={search} 
    onChange={handleChange}/>
    </div>
  )
}
export default SearchBar

