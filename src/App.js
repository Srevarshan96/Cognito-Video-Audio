import React from 'react';
import ReactPlayer from 'react-player'
import ReactAudioPlayer from 'react-audio-player'

function App() {
  return (
    <div className="App">
      <ReactPlayer url ="https://www.youtube.com/watch?v=_iRDopeeFec" />
      <ReactAudioPlayer src = "https://www.computerhope.com/jargon/m/example.mp3" autoPlay controls />
    </div>
  );
}

export default App;
