import { useState } from "react";
import LocationContainer from "./LocationContainer";
import ResidentCard from "./ResidentCard";
import ResidentContainer from "./ResidentContainer";
import SearchResults from "./SearchResults";


const query = Math.floor(Math.random() * 126) + 1

const SearchBox = () => {

  const [url, setUrl] = useState(`https://rickandmortyapi.com/api/location/${query}`)

  const [search, setSearch] = useState('')

  const handleSearch = ((url) => {
    setSearch('')
    setUrl(url)
  })
  console.log(url);
  return (
    <div className="search__information">
      <input type="text"
        value={search}
        placeholder="Type a Location"
        onChange={(e) => setSearch(e.target.value)} />

      {search !== '' &&  (<SearchResults url={`https://rickandmortyapi.com/api/location/${search}`}
      handleSearch={handleSearch} />)}
      <LocationContainer url={url} />
      <ResidentContainer url={url} />
      

    </div>
  );
};

export default SearchBox;