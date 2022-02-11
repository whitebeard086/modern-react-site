import { Feature } from "../../components";
import "./features.css";

const featuresData = [
    {
        title: "Improving end distrusts instantly",
        text: "Start by doing what is necessary, then what is possible, and suddenly you are doing the impossible."
    },
    {
        title: "Head full of brains",
        text: "With your head full of brains and your shoes full of feet, you're too smart to go down any not-so-good street."
    },
    {
        title: "Miracles lie in our eagerness",
        text: "The true miracle lies in our eagerness to allow, appreciate, and honor the uniqueness, and freedom of each sentient being to sing the song of their heart."
    },
    {
        title: "World is wide open to discovery",
        text: "What she had long believed was not true, and now the world was wide open to discover what was.It is like all my life I thought the sky was green."
    },
]

const Features = () => {
    return (
        <div className="gpt3__features section__padding" id="features">
            <div className="gpt3__features-heading">
                <h1 className="gradient__text">
                    The Future is Now and You Just Need To Realize It. Step Into The Future Today and Make it Happen.
                </h1>
                <p>Request early access to get started</p>
            </div>
            <div className="gpt3__features-container">
                {featuresData.map((item, index) => (
                    <Feature title={item.title} text={item.text} key={item.title + index} />
                ))}
            </div>
        </div>
    )
}

export default Features
