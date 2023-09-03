import { useState, useEffect } from "react";
import "./MainChat.css"
import GPTChatComponent from "./GPTChatComponent";
import getAnswerFromChatGPT from "../api/chatgptAPI";

function MainChat() {
    const [searchContent, setSearchContent] = useState("파이썬 사칙연산 코드 짜줘");
    const [isSearched, setSearched] = useState(false);
    const [loading, setLoading] = useState(false);
    const [loadingPrompt, setLoadingPrompt] = useState(false);
    const [answer, setAnswer] = useState("");
    const [promptCandidate, setPromptCandidate] = useState("");

    useEffect(() => {
        if(loading) {
        getAnswerFromChatGPT(searchContent, setAnswer, setLoading);
        }
      
    }, [loading]);

    useEffect(() =>{
        if(loadingPrompt) {
            setPromptCandidate("Please recommend prompt that describes picture with " + selectedOption + "," + selectedStyle)
            getAnswerFromChatGPT(promptCandidate, setPromptCandidate, setLoadingPrompt);
        }
    }, [loadingPrompt]);
    
    const requestAnswerFromChatGPT = (event: React.KeyboardEvent<HTMLInputElement>) => {
        console.log(event.key);
        if(event.key === 'Enter') {
            setSearched(true);
            console.log(searchContent);
            setLoading(true);
        }
    }

    const handleChangeContent = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchContent(event.currentTarget.value);
    }

    const [selectedOption, setSelectedOption] = useState("");
    const [selectedStyle, setSelectedStyle] = useState("");

  // Function to handle radio button selection
  const handleOptionChange = (event: any) => {
    setSelectedOption(event.target.value);
  };

  const recommendPrompt = () => {
    setLoadingPrompt(true);
  }

    return(
    <div className="total-container">
            <div className="common-container chat-container">
            <section className="main-chat-area">
                {isSearched ? loading ? <p>로딩 중입니다. </p> : <GPTChatComponent request={searchContent} answer={answer}/>
                 : <p>Main chat area</p>}
            </section>
            <input type="search" onChange={handleChangeContent} value={searchContent} className="search-bar" onKeyUp={requestAnswerFromChatGPT}/>
           </div>
           <section className="common-container">
            <h2>생성 AI - 그림 AI 프롬프트 생성</h2>
            <p>어서와요! <br/> 그림AI프롬프트 생성기를 이용해주셔서 감사해요. <br/>
             아래 지시를 잘 따르면 더욱 완성도 높은 AI이미지를 얻을 수 있으니 천천히 알려주세요!</p>
             <h3>어떤 것을 그릴 건가요?</h3>
             <label>
                <input
                type="radio"
                value="그림"
                checked={selectedOption === "그림"}
                onChange={handleOptionChange}
                />
                그림
            </label>
            <label>
                <input
                type="radio"
                value="사진"
                checked={selectedOption === "사진"}
                onChange={handleOptionChange}
                />
                사진
            </label>
            <h3>어떤 스타일을 원하시나요? (그림 선택형 or 객관식) </h3>
            <div className="row-container">
                <button className="style-box" onClick={() => setSelectedStyle("3d 에셋")}>3D 에셋</button>
                <button className="style-box" onClick={() => setSelectedStyle("영화 포스터")}>영화 포스터</button>
            </div>
            <h3>그림 세부사항을 넣어주세요 (표형) </h3>
            
            <h3>추천 프롬프트 결과</h3>
            <button onClick={recommendPrompt}>결과 보기</button>
            {promptCandidate}
           </section>
    </div>
    );
}

export default MainChat;