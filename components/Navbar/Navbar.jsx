import "../Navbar/Navbar.css";
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
import logo from "../Navbar/assets/logo.png";

const Navbar = () => {
    return (
      <>

   <div className="bod">
       <nav>
          <ul className="nav-bar">
            <li className="Logo"><a href="#"><img src={logo}/></a></li>
             <input type="checkbox" id="check"/>
             <span className="Menu">
              <li><a href="#">Home</a></li>
              <li><a href="#">Features</a></li>
              <li><a href="#">Community </a></li>
              <li><a href="#">Blog</a> </li>
              <li><a href="#">Pricing</a></li>
              <button className="button"><a href="#">RegisterNow→</a></button>
              <label for="check" className="close-menu"><AiOutlineClose/></label>
             </span>
             <label for="check" className="open-menu"><AiOutlineMenu/></label>
          </ul>
       </nav>
     
    </div>
      </>
    )
  };


export default Navbar;
