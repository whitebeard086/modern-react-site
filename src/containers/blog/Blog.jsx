import { Article } from "../../components"
import { blog01, blog02, blog03, blog04, blog05 } from "./imports"
import "./blog.css";

const Blog = () => {
    return (
        <div className="gpt3__blog section__padding">
            <div className="gpt3__blog-heading">
                <h1 className="gradient__text">
                    A lot is happening, We are blogging about it.
                </h1>
            </div>
            <div className="gpt3__blog-container">
                <div className="gpt3__blog-container_groupA">
                    <Article imgUrl={blog01} date="Nov 30, 2021" title="GPT-3 and Open AI is the future. Let's explore it together with." />
                </div>
                <div className="gpt3__blog-container_groupB">
                    <Article imgUrl={blog02} date="Nov 30, 2021" title="GPT-3 and Open AI is the future. Let's explore it together with." />
                    <Article imgUrl={blog03} date="Nov 30, 2021" title="GPT-3 and Open AI is the future. Let's explore it together with." />
                    <Article imgUrl={blog04} date="Nov 30, 2021" title="GPT-3 and Open AI is the future. Let's explore it together with." />
                    <Article imgUrl={blog05} date="Nov 30, 2021" title="GPT-3 and Open AI is the future. Let's explore it together with." />
                </div>
            </div>
        </div>
    )
}

export default Blog
