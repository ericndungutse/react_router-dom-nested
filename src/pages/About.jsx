import { useState } from "react";

const About = () =>{
const [content, setContent] = useState("Get answers for your questions please.");
    

return (
    <>
        <h1>About us</h1>
        <p>{content}</p>

        <div className="enquies">

        <button className="btn" onClick={() => setContent("We are future enthusiastic future technilogist, dedicated to creating digital solutions our society is facing.")}>Who are we?</button>

        <button className="btn" onClick={() => setContent("Lorem ipsum dolor sit amet consectetur adipisicing elit.")}>What do we do?</button>
        <button className="btn" onClick={() => setContent("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum dicta debitis consectetur autem.")}>What are our goals?</button>

        </div>
    </>
)
}
export default About;
