import logo from './logo.svg';
import './App.css';
import emoji from "./Emoji";
import emojiArray from './emojiArray';
import EmojiCard from './emojiComponent';
import SearchBar from './SearchBar';
import CreateDataList from "./emojiData.jsx"








function App() {
  return (
    <div className="App">
      <h1>EMOJI SEARCH</h1>
      <SearchBar />
      <h3 id='show'></h3>
      <br />
     {emojiArray.map(CreateDataList)}
    </div>
  );
}

export default App;
