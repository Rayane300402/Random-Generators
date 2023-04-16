import { useState } from 'react';
import './App.css';

function App() {
  const [photo, setPhoto] = useState('/img/Pink.png')

  const handleButton = () => {
    const photos = [
      '/img/_Green.png',
      '/img/AutumnLeaves.png',
      '/img/Beige.png',
      '/img/Beige2.png',
      '/img/beigerose.png',
      '/img/Black.png',
      '/img/Blue.png',
      '/img/Blue2.png',
      '/img/CYKAS.png',
      '/img/DYEE.png',
      '/img/GameOver.png',
      '/img/Green.png',
      '/img/Green2.png',
      '/img/GTCFCZ.png',
      '/img/KYW.png',
      '/img/Pink.png',
      '/img/Red.png'
    ];
    const randomIndex = Math.floor(Math.random() * photos.length);
    const randomPhoto = photos[randomIndex];
    setPhoto(randomPhoto);
  }

  return (
    <div className="App">
      <h1>Wallpapers</h1>
      <button onClick={handleButton}>New Photo</button>
      <br />
      <img src={photo} alt="Random photo" />
    </div>
  );
}

export default App;
