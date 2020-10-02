import React from 'react';
import './App.css';
import Header from './components/Header'
import Table from './components/Table'
import Wrapper from './components/Wrapper'
import SearchBar from './components/SearchBar'

function App() {

  return (
    <Wrapper>
          <Header></Header>
          <SearchBar></SearchBar>
          <Table></Table>
    </Wrapper>


  );
}

export default App;
