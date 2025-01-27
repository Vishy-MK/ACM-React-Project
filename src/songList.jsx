import uparrow from 'C:\\Users\\Admin\\Desktop\\React shit\\my-react-app\\src\\assets\\arrow-u.svg'
import downarrow from 'C:\\Users\\Admin\\Desktop\\React shit\\my-react-app\\src\\assets\\arrow-d.svg'
import delbut from 'C:\\Users\\Admin\\Desktop\\React shit\\my-react-app\\src\\assets\\del-but.svg'
function SongList(props){
    const name = props.songName
    const clas = props.item
    return (
        <>
            <div className="song-contents">
                <div className="arrows down">
                    <button className="down">
                        <svg  viewBox="0 0 24 24" className='svg svg-arrow' fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.1" d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" fill="#323232"/><path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#323232" stroke-width="2"/><path d="M12 16L12 8" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 13L11.913 15.913V15.913C11.961 15.961 12.039 15.961 12.087 15.913V15.913L15 13" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    </button>
                </div>
                <div className="arrows up">
                    <button className="down">
                        <svg width="800px" height="800px" className='svg svg-arrow' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.1" d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" fill="#323232"/><path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#323232" stroke-width="2"/><path d="M12 8L12 16" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M15 11L12.087 8.08704V8.08704C12.039 8.03897 11.961 8.03897 11.913 8.08704V8.08704L9 11" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </button>
                </div>
                <div className="song-no">
                    <button>{clas}</button>
                </div>
                <div className="song-item">
                    <p>Your song is {name}</p>
                </div>
                <div className="deletesong">
                    <button>
                    <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" className='svg-del svg' xmlns="http://www.w3.org/2000/svg"><path d="M10 12V17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 12V17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 7H20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    </button>
                </div>
            </div>
        </>
    );
}
export default SongList