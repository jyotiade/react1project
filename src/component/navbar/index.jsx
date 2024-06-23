import '../../assests/style/index.css';
import { Link } from 'react-router-dom';
import { FaGithub } from "react-icons/fa";
import { IoMoonOutline } from "react-icons/io5";

function Navbar() {

    return (
        <>
            <section id="nav">
                <div><Link to="/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/1200px-React_Logo_SVG.svg.png" alt="..."  height={"40px"} width={"50px"}/></Link></div>
                <input type='text' placeholder='Search' id='input'></input>
                <div><Link to="/learn" style={{color:"white"}}>Learn</Link></div>
                <div><Link to="/reference" style={{color:"white"}}>Reference</Link></div>
                <div><Link to="/community" style={{color:"white"}}>Community</Link></div>
                <div><Link to="/blog" style={{color:"white"}}>Blog</Link></div>
                <div><IoMoonOutline style={{fontSize:"30px", color:"white"}}/></div>
                <div><FaGithub style={{fontSize:"30px", color:"white"}}/></div>
               
            </section>
           
        </>
    )
}
export default Navbar;