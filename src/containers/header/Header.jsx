import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

const Header = () => {
    return (
        <div className="gpt3__header section__padding" id="home">
            <div className="gpt3__header-content">
                <h1 className="gradient__text">
                    Let's Build Something Amazing With GPT-3 OpenAI
                </h1>
                <p>Mutual caring relationships require kindness and patience, tolerance, optimism, joy in the other's achievements, confidence in oneself, and the ability to give without undue thought of gain.</p>
                <div className="gpt3__header-content__input">
                    <input type="email" placeholder="Your Email Address" />
                    <button type="button">Get Started</button> 
                </div>
                <div className="gpt3__header-content__people">
                    <img src={people} alt="people" />
                    <p>1600 people requested access to a visit in the last 24 hours</p>
                </div>
                
            </div>
            <div className="gpt3__header-image">
                <img src={ai} alt="ai" />
            </div>
        </div>
    )
}

export default Header
