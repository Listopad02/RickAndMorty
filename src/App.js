import "./App.css"
import Navbar from "./components/Navbar/Navbar";
import Cards from "./components/Cards/Cards";
import Pagination from "./components/Pagination/Pagination";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux"
import Search from "./components/Search/Search";
import Filters from "./components/Filters/Filters";
import FailScreen from "./components/FailScreen/FailScreen";

function App() {
  const name = useSelector(state => state.filters.name)
  const status = useSelector(state => state.filters.status)
  const gender = useSelector(state => state.filters.gender)
  const baseUrl = `https://rickandmortyapi.com/api/character/?name=${name}&status=${status}&gender=${gender}`
  const [characters, setCharacters] = useState([])
  const [info, setInfo] = useState({})

  const fetchCharacters = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setCharacters(data.results)
        setInfo(data.info)
      })
      .catch(err => console.log(err))
  }

  const onPrevious = () => {
    fetchCharacters(info.prev)
  }

  const onNext = () => {
    fetchCharacters(info.next)
  }

  useEffect(() => {
    fetchCharacters(baseUrl)
  }, [baseUrl])

  return (
    <>
      <Navbar title="Rick and Morty App" />
      <div className="container">
        <Search />
        <Filters />
        {
          characters ? 
          <>
            <Pagination 
              prev={info.prev}  
              next={info.next}
              onPrevious={onPrevious}
              onNext={onNext}
            />
            <Cards characters={characters} />
            <Pagination 
              prev={info.prev}  
              next={info.next}
              onPrevious={onPrevious}
              onNext={onNext}
            />
          </> : 
          <FailScreen />
        }
      </div>
    </>
  );
}

export default App;
