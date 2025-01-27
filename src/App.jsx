import Title from './Title.jsx'
import Search from './Search.jsx'
import SongList from './songList.jsx'
import Searchsuggestion from './SearchSuggestions.jsx';
function App() {
      return(
        <>
          <Title />
          <Search />
          {/* <div className="suggcontainer">
              <Searchsuggestion id="1"/>
              <Searchsuggestion id="1"/>
              <Searchsuggestion id="1"/>
          </div> */}
{/*           
          <SongList item = {1} songName="Budhu sa mann"/>
          <SongList item = {2} songName="Sau aasman"/>
          <SongList item = {3} songName="Sadda haq"/> */}
        </>
      );
}

export default App
 