import React , { useState , useEffect } from 'react';
import './App.css';
import Axios from 'axios';
import Header from './components/Header';
import CharGrid from './components/CharGrid';
import Search from './components/Search';

function App() {

  const [items , setItems] = useState([]);
  const [isLoading , setIsLoading] = useState(true);
  const [query , setQuery] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      const result = await Axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
      setItems(result.data)
      setIsLoading(false)
    }

    fetchItems()
  } , [query])

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharGrid isLoading={isLoading} items={items} />
      <footer>
        <p>&copy; Ahmad Alwahsh 2022</p>
      </footer>
    </div>
  );
}

export default App;
