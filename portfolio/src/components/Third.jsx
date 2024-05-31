import { useState } from "react";
import "../css/tv.css"
import img from "../img/image1.jpg"
import { useNavigate } from "react-router-dom";
function Third(){
    const[channelNo,setChannelNo]=useState(0);
    const[channel,setChannel]=useState("About Me");
    const[onoff,setonoff]=useState("on");
    const navigate=useNavigate();
    
    const channelHandler = () => {
      if (channelNo === 0) {
        setChannel("About Me");
        setChannelNo(prevChannelNo => prevChannelNo + 1);
      } else if (channelNo === 1) {
        setChannel("Contact Me");
        setChannelNo(prevChannelNo => prevChannelNo + 1);
      } else if (channelNo === 2) {
        setChannel("Resume?");
        setChannelNo(0); 
      }
    }

    const OnOffHandler=()=>{
      (onoff==="on")?setonoff("off"):setonoff("on");
    }

    const channelZoom=()=>{
      if(channel==="Resume?"){
        const pdfUrl = process.env.PUBLIC_URL + 'logo512.png';
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download='Ashin_Resume'
        document.body.appendChild(link); 
        link.click(); 
        document.body.removeChild(link); 
        
      }
      else if(channel=="About Me"){
        navigate('/about');
      }
    }

    const lineargrad = {
      width: '100%',
      height: '100vh',
      backgroundSize: '100% 135%',
      backgroundPosition: '0px 2px',
      backgroundColor:'black',
    };
    return(
        <div style={lineargrad}>
        <div id="stars"/>
            <div id="stars2"/>
            <div id="stars3"/>
        <div className="container">
    <div className="tv">
      <div className="antenna-container">
        <div className="antenna"></div>
      </div>
      <div className="television-container">
        <div className="television">
          <div className="television-inner">
            <div className="television-screen-container">
              <div className="television-crt">

                <div className="television-screen">
                  <div className={onoff}></div>
                  <div className="logo-container">
                    {/* <div className="logo">
                      <div className="play"></div>
                    </div> */}
                    <div className="texttv">{channel}</div>
                  </div>
                  <div className="noise"></div>
                </div>

              </div>
            </div>
            <div className="television-lateral">
              <div className="dial-container">
                <div className="dial channel-button" style={{"--value": "0deg"}} onClick={()=>channelHandler()}>
                   <div className="data-container">
                  </div>
                  <div className="dial-core"></div>
                  <div className="selector"></div> 
                </div>
                <div className="dial volume-button" style={{"--value": "0deg"}} onClick={()=>channelZoom()}>
                  <div className="data-container">
                  </div>
                  <div className="dial-core"></div>
                  <div className="selector"></div>
                </div>
              </div>
              <div className="speaker-container">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div className="buttons">
              <div className="button-container">
                <div className="button" onClick={()=>OnOffHandler()}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="foot-container">
          <div className="foot left"></div>
          <div className="foot right"></div>
        </div>
      </div>
    </div>
  </div>
</div>
    )
}
export default Third;