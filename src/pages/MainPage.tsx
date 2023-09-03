import PromptButton from "../components/PromptButton";
import "./MainPage.css";
import {useState} from "react";

const defaultTemplates = [
    "소프트웨어 개발",
    "마케팅",
     "SEO",
     "생산성",
     "시스템 운영",
     "생성 AI",
     "카피라이팅",
     "SaaS" 
];

function MainPage() {
    const [templates, setTemplates] = useState(defaultTemplates);

    const searchPromptTemplate = () => {

    }

    return(<div className="container">
            <div className="tab">
               <div className="tab-element">Prompt</div>
               <div className="">Shop</div>
            </div>
            <div className="row-container">
            <input type="search" className="search-bar"/>
            <button onClick={searchPromptTemplate}>
                
            </button>
            </div>
            <section className="template-container">
                {templates.map((templateName, id) => (
                    <PromptButton name={templateName} key={id}></PromptButton>
                ))}
            </section>
    </div>);
}

export default MainPage;