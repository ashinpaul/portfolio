import React from "react";
import "../css/card.css"
import "../css/stars.css"
function PageTwo(){
    return(
      <div className="App">
            <div id="stars"/>
            <div id="stars2"/>
            <div id="stars3"/>
              <div className="row ">
                  <div className="col mx-5">
                  <div class="television">
                <div class="television__top">
                    <div class="television__antenna television__antenna--left"></div>
                    <div class="television__antenna television__antenna--right"></div></div></div>
                      <div className="card-container">
                          <div className="carded">
                              <h3>Hover me</h3><br></br>
                              <button className="btn"><span style={{color:"white"}}>Download</span></button>
                              <div className="layers">
                              <div className="layer"></div>
                              <div className="layer"></div>
                              <div className="layer"></div>
                              <div className="layer"></div>
                              <div className="layer"></div>
                              <div className="layer"></div>
                              <div className="layer"></div>
                              <div className="layer"></div>
                              <div className="layer"></div>
                              <div className="layer"></div>   
                            </div>
                          </div> 
                      </div>
                  </div>
                  <div className="col">
                      <div className="card-container">
                          <div className="carded carded-top">
                              <h3>Hover me</h3><br></br>
                              <button className="btn"><span style={{color:"white"}}>Download</span></button>
                              <div className="layers">
                              <div className="layer"></div>
                              <div className="layer"></div>
                              <div className="layer"></div>
                              <div className="layer"></div>
                              <div className="layer"></div>
                              <div className="layer"></div>
                              <div className="layer"></div>
                              <div className="layer"></div>
                              <div className="layer"></div>
                              <div className="layer"></div>   
                          </div>
                      </div> 
                  </div>
                </div>
            </div>
        </div>
    )
}
export default PageTwo;