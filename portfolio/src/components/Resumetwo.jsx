function ResumeTwo(){
    return(
        <div className="overflo">
        <style
            type="text/css"
            dangerouslySetInnerHTML={{
            __html:
                ' * {margin:0; padding:0; text-indent:0; }\n h1 { color: black; font-family:Calibri, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 20pt; }\n .s1 { color: #2D74B5; font-family:Calibri, sans-serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 14pt; }\n a { color: #0462C1; font-family:Calibri, sans-serif; font-style: normal; font-weight: normal; text-decoration: underline; font-size: 11pt; }\n .s3 { color: #0462C1; font-family:Calibri, sans-serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 11pt; }\n .p, p { color: black; font-family:Calibri, sans-serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 12pt; margin:0pt; }\n .s4 { color: #2D74B5; font-family:"Calibri Light", sans-serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 16pt; }\n h2 { color: black; font-family:Calibri, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 14pt; }\n .s5 { color: black; font-family:Calibri, sans-serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 14pt; }\n .s6 { color: black; font-family:Calibri, sans-serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 12pt; }\n li {display: block; }\n #l1 {padding-left: 0pt; }\n #l1> li>*:first-child:before {content: " "; color: black; font-family:Wingdings; font-style: normal; font-weight: normal; text-decoration: none; font-size: 12pt; }\n li {display: block; }\n #l2 {padding-left: 0pt; }\n #l2> li>*:first-child:before {content: " "; color: black; font-family:Symbol, serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 12pt; }\n'
            }}
        /> 
        <div className="row">
            <div className="col bordercard margincardlft">
                        {/* <div className="card-container">
                            <div className="resumecard">
                                <img className="picsize" src={image1} style={{width:"55vh",marginLeft:"5vw",marginTop:"2vw"}} alt="Me"></img>
                            </div>
                        </div> */}
                        <div className="card-container">
                            <div className="resumecard">
                            <p
                                className="s4"
                                style={{
                                // paddingTop: "8pt",
                                paddingLeft: "6pt",
                                textIndent: "0pt",
                                textAlign: "left"
                                }}
                            >
                                Certifications
                            </p>
                            <p
                                style={{
                                paddingLeft: "5pt",
                                textIndent: "0pt",
                                lineHeight: "1pt",
                                textAlign: "left"
                                }}
                            />
                           
                            <ul>
                            <li data-list-text="0">
                            <p
                                style={{ paddingLeft: "0pt", textIndent: "-17pt", textAlign: "left" }}
                            >
                                {'>>'} Python for Data Science.AI and Development.
                            </p>
                            </li>
                            <li data-list-text="">
                            <p
                                style={{ paddingLeft: "0pt", textIndent: "-17pt", textAlign: "left" }}
                            >
                               {'>>'} Certificate for completing Workshop on Power Communication.
                            </p>
                            </li>
                            <li data-list-text="">
                            <p
                                style={{ paddingLeft: "0pt", textIndent: "-17pt", textAlign: "left" }}
                            >
                               {'>>'} Bootstrap 5 course on Udemy.
                            </p>
                            </li>
                            <li data-list-text="">
                            <p
                                style={{ paddingLeft: "0pt", textIndent: "-17pt", textAlign: "left" }}
                            >
                               {'>>'} Introduction to MongoDB.
                            </p>
                            </li>
                        </ul>
                            </div>
                        </div>  <div className="card-container">
                    <div className="resumecard">        
                        <p
                            className="s4"
                            style={{
                            paddingTop: "0pt",
                            paddingBottom: "2pt",
                            paddingLeft: "6pt",
                            textIndent: "0pt",
                            textAlign: "left"
                            }}
                        >
                            Activities
                        </p>
                        <p
                            style={{
                            paddingLeft: "5pt",
                            textIndent: "0pt",
                            lineHeight: "1pt",
                            textAlign: "left"
                            }}
                        />
                        <ul id="l2">
                            <li data-list-text="">
                            <p
                                style={{
                                paddingTop: "0pt",
                                paddingLeft: "23pt",
                                textIndent: "-17pt",
                                textAlign: "left"
                                }}
                            >
                                Participated in community-level programs of Jal Jeevan Mission
                            </p>
                            </li>
                        </ul>  
                    </div>
                </div> 
                    </div>
                    </div>
        </div>
    )
}
export default ResumeTwo;