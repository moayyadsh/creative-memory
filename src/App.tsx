import './App.css'
import logo from './assets/creativeMemoryLogo.png'
import { FaFacebook, FaInstagram, FaGlobe } from 'react-icons/fa'

function App() {
  return (
    <div className="container">
      <div className="content">
        <img src={logo} alt="Creative Memory logo" className="logo" />

        <div className="buttons">
          <a
            href="https://www.facebook.com/share/1bsb75zpPF/"
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            <FaFacebook className="icon" />
            <span className="btn-text">Facebook</span>
          </a>

          <a
            href="https://www.instagram.com/creativememoryarchives"
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            <FaInstagram className="icon" />
            <span className="btn-text">Instagram</span>
          </a>

          <a
            href="https://creativememory.art/"
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            <FaGlobe className="icon" />
            <span className="btn-text">Website</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default App
