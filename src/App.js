import './App.css';
import React, { useState } from 'react';
import Main from './component/Main';
import {moviesData} from './component/MoviesData'
import Header from './component/Header/Header';

function App(props) {
const [movies, setMovies] = useState(moviesData);
const [search, setSearch] = useState("")
const AddNewMovie =(x)=>{
setMovies([...movies, x])
}

  return (
    <div className="App">
     <Header setSearch={setSearch} />
      <Main movies={movies.filter((el) =>
            el.name.toLowerCase().includes(search.trim()) )} 
      AddNewMovie={AddNewMovie} />

    </div>
  );
}

export default App;
