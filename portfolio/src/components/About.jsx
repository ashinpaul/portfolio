import { useState } from "react";
import "../css/screen.css"
import { useNavigate } from "react-router-dom";
function About(){
    const navigate=useNavigate();
    const[valueprev,setvalueprev]=useState(true);
    const[valuenext,setvaluenext]=useState(false);
    const onclickhandler=()=>{
        navigate('/third')
    }
    const onnexthandler=()=>{
        setvalueprev(false);
        setvaluenext(true);
        navigate('/resumetwo'); 
    }
    const onprevhandler=()=>{
        setvalueprev(true);
        setvaluenext(false);
        navigate('/about')
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
                <div className="container-fluid d-flex justify-content-end align-items-end">
                    <div className="button-container d-flex">
                    <button 
                        style={{marginRight:"1rem",marginTop:"90vh",cursor:"not-allowed"}}
                        onClick={()=>onclickhandler()}>back</button>
                    <button className=""
                        style={{marginRight:"1rem",marginTop:"90vh",cursor:"not-allowed"}} 
                        onClick={()=>onnexthandler()} disabled={valuenext}>next</button>
                    <button className=""
                        style={{marginRight:"1rem",marginTop:"90vh",cursor:"not-allowed"}} 
                        onClick={()=>onprevhandler()} disabled={valueprev}>previous</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;