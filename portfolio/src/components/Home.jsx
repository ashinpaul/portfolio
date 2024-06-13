import {ReactTyped} from "react-typed";
import { useNavigate } from "react-router-dom";
import "../css/Homecss.css";
import "../css/stars.css";
function Home() {
  const navigate=useNavigate();
  function handleNav(){
    navigate('third');
  }
  const lineargrad = {
    width: '100%',
    height: '100vh',
    backgroundSize: '100% 135%',
    backgroundPosition: '0px 2px',
    // backgroundImage: 'linear-gradient(0deg, #FFF 1%, #000000 39%)',
    backgroundColor:'black',
  };
  return (
    <div style={lineargrad}>
            <div id="stars"/>
            <div id="stars2"/>
            <div id="stars3"/>
            <div>
              <span className="text">Ashin Paul P A</span>
            </div>
            <div>
              <span>
                <ReactTyped
                      className="text2 my-4"
                      strings={[
                      "Front End Developer",
                      "Back End Developer",
                      "Software Engineer"
                      ]}
                      typeSpeed={80}
                      backDelay={1100}
                      backSpeed={30}
                      loop>
                  </ReactTyped>
                </span>
            </div>      
            <div className="btn" style={{cursor: "grabbing"}}onClick={()=>handleNav()}>Click</div>         
            </div>
  );
}

export default Home
