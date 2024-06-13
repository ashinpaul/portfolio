import "../css/screen.css"
import { useNavigate } from "react-router-dom";
function About(){
    // var perf =require('../../public/resume.html');
    const navigate=useNavigate();
    const onclickhandler=()=>{
        navigate('/third')
    }
    return(
         <div className="canvas overflow-hidden">
            <div className="vignette wobblex ">
                <div className="screen scanlines vcr  glitch">
                    <div className="screen-wrapper">
                        <div className="screen-container">           
                            <div className=" snow">
                                
                            </div>
                        </div>
                    </div>
                </div>
                <button style={{zIndex:1001,marginTop:"90vh",marginLeft:"90vw",cursor:"not-allowed"}} onClick={()=>onclickhandler()}>back</button>
            </div>
        </div>
    )
}
export default About;