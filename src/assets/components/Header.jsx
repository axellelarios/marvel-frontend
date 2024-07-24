import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Logo from '../src/logo.png' 

const Header = () => {
    return (
        <header>
             <div className="container">
                <div className="header-wrapper">
                        <div className="logo">
                        <Link to="/"><img src={Logo} /></Link>
                        </div>
                        <div className="nav">
                            <Link className="link" to="/pages/comics">Comics</Link>
                            <Link className="link" to="/pages/characters">Characters</Link>
                        </div>
                </div>
             </div>    
        </header>
    )
}

export default Header;