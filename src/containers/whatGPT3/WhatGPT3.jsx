import { Feature } from "../../components";
import "./whatGPT3.css";

const WhatGPT3 = () => {
    return (
        <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
            <div className="gpt3__whatgpt3-feature">
                <Feature title="What is GPT-3" text="There are two kinds of teachers: the kind that fill you with so much quail shot that you can't move, and the kind that just gives you a little prod behind and you jump to the skies."/>
            </div>
            <div className="gpt3__whatgpt3-heading">
                <h1 className="gradient__text">
                    The possibilities are beyond your imagination.
                </h1>
                <p>Explore The Library</p>
            </div>
            <div className="gpt3__whatgpt3-container">
                <Feature title="Chatbots" text="There is no such thing as a child who hates to read; there are only children who have not found the right book." />
                <Feature title="Knowledgebase" text="I long to accomplish a great and noble task, but it is my chief duty to accomplish small tasks as if they were great and noble." />
                <Feature title="Education" text="Sometimes letting go is simply changing the labels you place on an event. Looking at the same event with fresh eyes." />
            </div>
        </div>
    )
}

export default WhatGPT3
