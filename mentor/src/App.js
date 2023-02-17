import logo from './images/image-qr-code.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="card-qr-code">
        <img src={logo} className="qr-code" alt="QR Code" />
         <h2 className="card-title">
        Improve your font-end skills by building projects

      </h2>
      <p className="card-description">
        Scan the QR code to visit Frontend Mentor and take your coding
        Skills to the next level
      </p>
      </header>
    </div>
  );
}

export default App;
