import possibilityImage from "../../assets/possibility.png"
import "./possibility.css";

const Possibility = () => {
    return (
        <div className="gpt3__possibility section__padding" id="possibility">
            <div className="gpt3__possibility-image">
                <img src={possibilityImage} alt="possibility"/>
            </div>
            <div className="gpt3__possibility-content">
                <h4>request for early access to get started</h4>
                <h1 className="gradient__text">
                    the possibilities are beyond your imagination    
                </h1>
                <p>The best relationships in our lives are the best not because they have been the happiest ones, they are that way because they have stayed strong through the most tormentful of storms.</p>    
                <h4>request for early access to get started</h4>
            </div> 
        </div>
    )
}

export default Possibility
