import logo from './assets/creative-memory-logo.png'
import background from './assets/creative-memory-backgrund.png'
import './App.css'
import { FaFacebook, FaGlobe, FaInstagram } from 'react-icons/fa'
function App() {
  return (
    <div className="container">
      <div className="content">
        <img src={logo} alt="Creative Memory logo" className="logo" />
        
        <div className="buttons">
          <a href="https://www.facebook.com/share/1bsb75zpPF/" className="btn btn-facebook">
            <FaFacebook   />
            Facebook
          </a>
          
          <a href="https://www.instagram.com/creativememoryarchives" className="btn btn-instagram">
            <FaInstagram />
            Instagram
          </a>
          
          <a href="https://creativememory.art/" className="btn btn-website">
            <FaGlobe />
            Website
          </a>
        </div>
 
      </div>
    </div>
  )
}

export default App
