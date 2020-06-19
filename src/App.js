import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AlbumsList from "./components/AlbumsList";
import { ContextProvider } from "./components/Context";
import Header from "./components/Header";
import FilterList from "./components/FilterList";

function App() {
  return (
    <div className="App">
      <Header />
      <ContextProvider>
        <FilterList />
        <AlbumsList />
      </ContextProvider>
    </div>
  );
}

export default App;
