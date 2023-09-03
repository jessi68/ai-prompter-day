import "./GPTChatComponent.css"

interface ChatRequestProps {
    request: string,
    answer: string
}

function GPTChatComponent({request, answer}: ChatRequestProps) {

    return (<section className="column-container">
        <div className="gpt-chat-container">
            <div className="profile"></div>
            <p>{request}</p>
        </div>
        <div className="gpt-chat-container">
            <div className="profile"></div>
            <p>{answer}</p>
        </div>
    </section>
    );
}

export default GPTChatComponent;