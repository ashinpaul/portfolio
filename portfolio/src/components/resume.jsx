import "../css/resume.css"
import image1 from "../img/image1.jpg"
function Resume(){
    return(
        <div>
        <style
            type="text/css"
            dangerouslySetInnerHTML={{
            __html:
                ' * {margin:0; padding:0; text-indent:0; }\n h1 { color: black; font-family:Calibri, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 20pt; }\n .s1 { color: #2D74B5; font-family:Calibri, sans-serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 14pt; }\n a { color: #0462C1; font-family:Calibri, sans-serif; font-style: normal; font-weight: normal; text-decoration: underline; font-size: 11pt; }\n .s3 { color: #0462C1; font-family:Calibri, sans-serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 11pt; }\n .p, p { color: black; font-family:Calibri, sans-serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 12pt; margin:0pt; }\n .s4 { color: #2D74B5; font-family:"Calibri Light", sans-serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 16pt; }\n h2 { color: black; font-family:Calibri, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 14pt; }\n .s5 { color: black; font-family:Calibri, sans-serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 14pt; }\n .s6 { color: black; font-family:Calibri, sans-serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 12pt; }\n li {display: block; }\n #l1 {padding-left: 0pt; }\n #l1> li>*:first-child:before {content: " "; color: black; font-family:Wingdings; font-style: normal; font-weight: normal; text-decoration: none; font-size: 12pt; }\n li {display: block; }\n #l2 {padding-left: 0pt; }\n #l2> li>*:first-child:before {content: " "; color: black; font-family:Symbol, serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 12pt; }\n'
            }}
        /> 
         
        {/*<div className="row">  
            <div className="col">                                
                <p className="s3" style={{ textIndent: "0pt", textAlign: "center" }}>
                <a
                href="mailto:ashinpaul46@gmail.com"
                style={{
                    color: "black",
                    fontFamily: "Calibri, sans-serif",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    textDecoration: "none",
                    fontSize: "11pt"
                }}
                target="_blank"
                >
                7594095431 |
                </a>
                <span
                style={{
                    color: "#0462C1",
                    fontFamily: "Calibri, sans-serif",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    textDecoration: "underline",
                    fontSize: "11pt"
                }}
                >
                ashinpaul46@gmail.com
                </span>{" "}
                <a
                href="https://www.linkedin.com/in/ashin-paul-p-a-b55518232/"
                style={{
                    color: "black",
                    fontFamily: "Calibri, sans-serif",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    textDecoration: "none",
                    fontSize: "11pt"
                }}
                target="_blank"
                >
                |
                </a>
                <span
                style={{
                    color: "#0462C1",
                    fontFamily: "Calibri, sans-serif",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    textDecoration: "underline",
                    fontSize: "11pt"
                }}
                >
                LinkedIn
                </span>{" "}
                <a
                href="https://github.com/ashinpaul"
                style={{
                    color: "black",
                    fontFamily: "Calibri, sans-serif",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    textDecoration: "none",
                    fontSize: "11pt"
                }}
                target="_blank"
                >
                |
                </a>
                <span
                style={{
                    color: "#0462C1",
                    fontFamily: "Calibri, sans-serif",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    textDecoration: "underline",
                    fontSize: "11pt"
                }}
                >
                GitHub
                </span>{" "}
                 <a
                href="https://ashinpaul.github.io/portfolio.github.io/"
                style={{
                    color: "black",
                    fontFamily: "Calibri, sans-serif",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    textDecoration: "none",
                    fontSize: "11pt"
                }}
                target="_blank"
                >
                |
                </a>
                <a href="https://ashinpaul.github.io/portfolio.github.io/" target="_blank">
                    Portfolio
                </a> 
                </p>
            </div>
        </div>*/}      
        <div className="row">
            <div className="col bordercard margincardlft">
                        <div className="card-container">
                            <div className="resumecard">
                                <img src={image1} style={{width:"35vh",marginLeft:"10vw"}} alt="Me"></img>
                            </div>
                        </div>
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
                        </div>
                        <div className="card-container">
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
                <div className="col bordercard margincardrgt" >
                    <div className="card-container">
                        <div className="resumecard ">
                            <p style={{ paddingLeft: "0pt", textIndent: "0pt", textAlign: "justify" }}>
                                A highly motivated and hardworking individual who is currently pursuing
                                MCA.I am enough of an artist to draw freely upon my imagination, A
                                programmer to code according to the logic, Web designer to combine the
                                skills of an artist and a programmer.
                            </p>
                        </div>
                    </div>
                    <div className="card-container">
                        <div className="resumecard">
                            <p
                                className="s4"
                                style={{
                                // paddingTop: "5pt",
                                paddingBottom: "1pt",
                                paddingLeft: "0pt",
                                textIndent: "0pt",
                                textAlign: "left"
                                }}
                                >
                                Professional Experience
                            </p>
                            {/* <p
                                style={{
                                paddingLeft: "6pt",
                                textIndent: "0pt",
                                lineHeight: "1pt",
                                textAlign: "left"
                                }}
                            /> */}
                            <h2
                                style={{
                                paddingTop: "5pt",
                                paddingLeft: "0pt",
                                textIndent: "0pt",
                                lineHeight: "17pt",
                                textAlign: "left"
                                }}
                            >
                            {'>>'}  Rlabz Rajagiri <span className="p" style={{marginLeft:"25vw"}}>Jan 2024 – Mar 2024</span>
                            </h2>
                            <p style={{ paddingLeft: "0pt", textIndent: "0pt",textAlign:"justify" }}>
                                Developed dynamic web applications using React.js, enhancing user
                                experiences and functionality; concurrently gained proficiency in Django
                                (Python Framework) for backend integration.
                            </p>
                        </div>
                    </div>  
                    <div className="card-container">
                        <div className="resumecard"> 
                            <p style={{ textIndent: "0pt", textAlign: "left" }} />
                            <p
                                className="s4"
                                style={{ paddingLeft: "6pt", textIndent: "0pt", textAlign: "left" }}
                            >
                                Education
                            </p>
                            <h2
                                style={{
                                paddingTop: "5pt",
                                paddingLeft: "0pt",
                                textIndent: "0pt",
                                textAlign: "left"
                                }}
                            >
                            {'>>'}  Rajagiri College of Social Sciences <span className="p" style={{marginLeft:"18.5vw"}}>2022 - 2024</span>
                            </h2>
                            <p
                                style={{
                                paddingTop: "0pt",
                                paddingLeft: "0pt",
                                textIndent: "0pt",
                                textAlign: "left"
                                }}
                            >
                                Course: Master of Computer Applications, CGPA: 7.7
                            </p>
                            <h2
                                style={{
                                paddingTop: "3pt",
                                paddingLeft: "0pt",
                                textIndent: "0pt",
                                textAlign: "left"
                                }}
                            >
                            {'>>'}  MGAJ Arts and Science College <span className="p" style={{marginLeft:"20vw"}}>2019 - 2022</span>
                            </h2>
                            <p
                                style={{
                                paddingTop: "3pt",
                                paddingLeft: "0pt",
                                textIndent: "0pt",
                                textAlign: "left"
                                }}
                            >
                                Course: Bachelor of Computer Applications, CGPA: 6.46
                            </p>
                        </div>
                    </div> 
                    <div className="card-container">
                        <div className="resumecard">        
                            <p
                                className="s4"
                                style={{
                                // paddingTop: "7pt",
                                paddingBottom: "0pt",
                                paddingLeft: "0pt",
                                textIndent: "0pt",
                                textAlign: "left"
                                }}
                            >
                                Skills
                            </p>
                            <p
                                style={{
                                paddingLeft: "0pt",
                                textIndent: "0pt",
                                lineHeight: "1pt",
                                textAlign: "left"
                                }}
                            />
                            <h2
                                style={{
                                // paddingTop: "19pt",
                                paddingLeft: "0pt",
                                textIndent: "0pt",
                                textAlign: "left"
                                }}
                            >
                            {'>>'}  Intermediate:{" "}
                                <span className="p">
                                React js, Django, C, Java, Python, HTML, CSS, Bootstrap, C#, Photoshop.
                                </span>
                            </h2>
                            <h2
                                style={{
                                paddingTop: "2pt",
                                paddingLeft: "0pt",
                                textIndent: "0pt",
                                textAlign: "left"
                                }}
                            >
                            {'>>'} Novice: <span className="p">PHP, .NET, Laravel, Android, Rest API.</span>
                            </h2>
                        </div>
                    </div> 
                </div>
            </div>
        <div className="row">
        {/* <p
            className="s4"
            style={{
            paddingTop: "10pt",
            paddingLeft: "6pt",
            textIndent: "0pt",
            textAlign: "left"
            }}
        >
            Projects
        </p>
        <p style={{ textIndent: "0pt", textAlign: "left" }}>
            <br />
        </p>
        <p
            style={{
            paddingLeft: "5pt",
            textIndent: "0pt",
            lineHeight: "1pt",
            textAlign: "left"
            }}
        />
        <h2
            style={{
            paddingTop: "16pt",
            paddingLeft: "6pt",
            textIndent: "0pt",
            textAlign: "left"
            }}
        >
            Immigration Clearance System<span className="s5">: </span>
            <span className="s6">Using Web Framework Flask &amp; HTML.</span>
        </h2>
        <ul id="l1">
            <li data-list-text="o">
            <p
                style={{
                paddingTop: "7pt",
                paddingLeft: "24pt",
                textIndent: "-18pt",
                textAlign: "left"
                }}
            >
                Users can register their data. Admin can manage users and police. Police
                will check the validity of the users.
            </p>
            <h2
                style={{
                paddingTop: "8pt",
                paddingLeft: "6pt",
                textIndent: "0pt",
                textAlign: "left"
                }}
            >
                World Cup Ticket Reservation<span className="s5">: </span>
                <span className="s6">Using Laravel Framework, HTML, MySQL.</span>
            </h2>
            </li>
            <li data-list-text="">
            <p
                style={{
                paddingTop: "7pt",
                paddingLeft: "23pt",
                textIndent: "-17pt",
                textAlign: "left"
                }}
            >
                Admin can manage users and tickets. Users can reserve tickets for
                various matches available.
            </p>
            <h2
                style={{
                paddingTop: "7pt",
                paddingLeft: "6pt",
                textIndent: "0pt",
                textAlign: "left"
                }}
            >
                Portfolio Website<span className="s5">: </span>
                <span className="s6">Using Front-end languages, HTML, JavaScript.</span>
            </h2> */}
            </div>
        </div>
    )
}
export default Resume;