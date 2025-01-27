import React, { useState } from "react";
import axios from "axios";

function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [trackId, setTrackId] = useState(null);
  const [songName, setSongName] = useState(null);
  const [albumName, setAlbumName] = useState(null);
  const [trackId1, setTrackId1] = useState(null);
  const [songName1, setSongName1] = useState(null);
  const [albumName1, setAlbumName1] = useState(null);
  const [trackId2, setTrackId2] = useState(null);
  const [songName2, setSongName2] = useState(null);
  const [albumName2, setAlbumName2] = useState(null);
  const [li, setLi] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    setError(null);
    setTrackId(null);
    setSongName(null);
    setAlbumName(null);
    setTrackId1(null);
    setSongName1(null);
    setAlbumName1(null);
    setTrackId2(null);
    setSongName2(null);
    setAlbumName2(null);

    const clientId = "afba946bca484747b65b3c647d933ddf";
    const clientSecret = "2ce435377426489d9a1dc9dc16bbe3dc";

    try {
      // Get access token
      const tokenResponse = await axios.post(
        "https://accounts.spotify.com/api/token",
        "grant_type=client_credentials",
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
          },
        }
      );

      const accessToken = tokenResponse.data.access_token;

      // Search for the track
      const searchResponse = await axios.get(
        `https://api.spotify.com/v1/search`,
        {
          params: {
            q: searchQuery,
            type: "track",
            limit: 3,
          },
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (searchResponse.data.tracks.items.length > 0) {
        const track = searchResponse.data.tracks.items[0];
        const songName = track.name;
        const albumName = track.album.name;

        setTrackId(track.id);
        setSongName(songName);
        setAlbumName(albumName);

        const track1 = searchResponse.data.tracks.items[1];
        const songName1 = track1.name;
        const albumName1 = track1.album.name;

        setTrackId1(track1.id);
        setSongName1(songName1);
        setAlbumName1(albumName1);

        const track2 = searchResponse.data.tracks.items[2];
        const songName2 = track2.name;
        const albumName2 = track2.album.name;

        setTrackId2(track2.id);
        setSongName2(songName2);
        setAlbumName2(albumName2);
      } else {
        setError("No track found.");
      }
    } catch (err) {
      setError("An error occurred while searching for the track.");
      console.error(err);
    }
  };

  const handleAddSong = () => {
    if (songName) {
      setLi((prevLi) => [...prevLi, songName]); // Add the song to the list
    }
  };
  const handleAddSong1 = () => {
    if (songName1) {
      setLi((prevLi) => [...prevLi, songName1]); // Add the song to the list
    }
  };

  const handleAddSong2 = () => {
    if (songName2) {
      setLi((prevLi) => [...prevLi, songName2]); // Add the song to the list
    }
  };


  const handleDeleteSong = (indexToRemove) => {
    setLi((prevLi) => prevLi.filter((_, index) => index !== indexToRemove)); // Remove the song from the list
  };

  const moveUp = (index) => {
    if (index > 0) {
      setLi((prevLi) => {
        const newLi = [...prevLi];
        [newLi[index - 1], newLi[index]] = [newLi[index], newLi[index - 1]];
        return newLi;
      });
    }
  };

  const moveDown = (index) => {
    if (index < li.length - 1) {
      setLi((prevLi) => {
        const newLi = [...prevLi];
        [newLi[index + 1], newLi[index]] = [newLi[index], newLi[index + 1]];
        return newLi;
      });
    }
  };

  
  return (
    <>
      <div className="main-sugg-container">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Enter song name"
          className="inputbox"
        />
        <button onClick={handleSearch} className="svg-search">
          <svg className="svg"  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 6C13.7614 6 16 8.23858 16 11M16.6588 16.6549L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        {trackId && (
          <div className="songsug">
            <div className="songnametext">
            <p>Album : {albumName}</p>
              <p> Song : {songName}</p>
            </div>
            <div className="addbut">
                <button className="svg-add" onClick={handleAddSong}>
                    <svg className="svg" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"><title>plus</title><desc>Created with Sketch Beta.</desc><defs></defs><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"><g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-362.000000, -1037.000000)" fill="#000000"><path d="M390,1049 L382,1049 L382,1041 C382,1038.79 380.209,1037 378,1037 C375.791,1037 374,1038.79 374,1041 L374,1049 L366,1049 C363.791,1049 362,1050.79 362,1053 C362,1055.21 363.791,1057 366,1057 L374,1057 L374,1065 C374,1067.21 375.791,1069 378,1069 C380.209,1069 382,1067.21 382,1065 L382,1057 L390,1057 C392.209,1057 394,1055.21 394,1053 C394,1050.79 392.209,1049 390,1049" id="plus" sketch:type="MSShapeGroup"></path></g></g></svg>
                </button>
            </div>
          </div>
        )}

        {error && <p className="text-red-500 mt-4">{error}</p>}

        {trackId1 && (
          <div className="songsug">
            <div className="songnametext">
            <p>Album : {albumName1}</p>
              <p> Song : {songName1}</p>
            </div>
            <div className="addbut">
                <button className="svg-add" onClick={handleAddSong1}>
                    <svg className="svg" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"><title>plus</title><desc>Created with Sketch Beta.</desc><defs></defs><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"><g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-362.000000, -1037.000000)" fill="#000000"><path d="M390,1049 L382,1049 L382,1041 C382,1038.79 380.209,1037 378,1037 C375.791,1037 374,1038.79 374,1041 L374,1049 L366,1049 C363.791,1049 362,1050.79 362,1053 C362,1055.21 363.791,1057 366,1057 L374,1057 L374,1065 C374,1067.21 375.791,1069 378,1069 C380.209,1069 382,1067.21 382,1065 L382,1057 L390,1057 C392.209,1057 394,1055.21 394,1053 C394,1050.79 392.209,1049 390,1049" id="plus" sketch:type="MSShapeGroup"></path></g></g></svg>
                </button>
            </div>
          </div>
        )}

        {error && <p className="text-red-500 mt-4">{error}</p>}

        {trackId1 && (
          <div className="songsug">
            <div className="songnametext">
                <p>Album : {albumName2}</p>
              <p> Song : {songName2}</p>
            </div>
            <div className="addbut">
                <button className="svg-add" onClick={handleAddSong2}>
                    <svg className="svg" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"><title>plus</title><desc>Created with Sketch Beta.</desc><defs></defs><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"><g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-362.000000, -1037.000000)" fill="#000000"><path d="M390,1049 L382,1049 L382,1041 C382,1038.79 380.209,1037 378,1037 C375.791,1037 374,1038.79 374,1041 L374,1049 L366,1049 C363.791,1049 362,1050.79 362,1053 C362,1055.21 363.791,1057 366,1057 L374,1057 L374,1065 C374,1067.21 375.791,1069 378,1069 C380.209,1069 382,1067.21 382,1065 L382,1057 L390,1057 C392.209,1057 394,1055.21 394,1053 C394,1050.79 392.209,1049 390,1049" id="plus" sketch:type="MSShapeGroup"></path></g></g></svg>
                </button>
            </div>
          </div>
        )}

        {error && <p className="text-red-500 mt-4">{error}</p>}

      </div>
      <div className="song-contents">
        {li.map((song, index) => (
            <div className="contents-inner">
                <div className="song-no unclickable-button">
                    <button className="unclickable-button">{index+1}</button>
                </div>
                {/* <div className="itembut down">
                    <button className="down" onClick={() => moveDown}>
                        <svg viewBox="0 0 24 24" className='svg svg-arrow' fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.1" d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" fill="#323232"/><path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#323232" stroke-width="2"/><path d="M12 16L12 8" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 13L11.913 15.913V15.913C11.961 15.961 12.039 15.961 12.087 15.913V15.913L15 13" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    </button>
                </div>
                <div className="up itembut">
                    <button className="up" onClick={() => moveUp}>
                        <svg className='svg svg-arrow' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.1" d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" fill="#323232"/><path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#323232" stroke-width="2"/><path d="M12 8L12 16" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M15 11L12.087 8.08704V8.08704C12.039 8.03897 11.961 8.03897 11.913 8.08704V8.08704L9 11" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    </button>
                </div> */}
                
                <div key={index} className="song-item">
                <div className="playbut itembut">
                <button className="svg-play">
                    <a href={`https://open.spotify.com/track/${trackId}`} target='_blank'  >
                    <svg fill="#000000" className="svg" viewBox="0 0 32 32" enable-background="new 0 0 32 32" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="play"><g><path d="M4.993,2.496C4.516,2.223,4,2.45,4,3v26c0,0.55,0.516,0.777,0.993,0.504l22.826-13.008    c0.478-0.273,0.446-0.719-0.031-0.992L4.993,2.496z"/><path d="M4.585,30.62L4.585,30.62C3.681,30.62,3,29.923,3,29V3c0-0.923,0.681-1.62,1.585-1.62c0.309,0,0.621,0.085,0.904,0.248    l22.794,13.007c0.559,0.319,0.878,0.823,0.878,1.382c0,0.548-0.309,1.039-0.847,1.347L5.488,30.373    C5.206,30.534,4.894,30.62,4.585,30.62z M5,3.651v24.698l21.655-12.34L5,3.651z"/></g></g><g id="stop"/><g id="pause"/><g id="replay"/><g id="next"/><g id="Layer_8"/><g id="search"/><g id="list"/><g id="love"/><g id="menu"/><g id="add"/><g id="headset"/><g id="random"/><g id="music"/><g id="setting"/><g id="Layer_17"/><g id="Layer_18"/><g id="Layer_19"/><g id="Layer_20"/><g id="Layer_21"/><g id="Layer_22"/><g id="Layer_23"/><g id="Layer_24"/><g id="Layer_25"/><g id="Layer_26"/></svg>    
                    </a>
                </button>
            </div>
                  <div className="listsongname">
                    <p>{song}</p>
                  </div>
                </div>
                <div className="svg-del">
                    <button onClick={() => handleDeleteSong(index)}>
                      <svg className="svg"viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 12V17" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M14 12V17" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M4 7H20" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10"stroke="#000000"strokeWidth="2"strokeLinecap="round"strokeLinejoin="round"/><path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"stroke="#000000"strokeWidth="2"strokeLinecap="round"strokeLinejoin="round"/></svg>
                    </button>
                </div>
                
            </div>
        ))}
      </div>
    </>
  );
}

export default Search;
