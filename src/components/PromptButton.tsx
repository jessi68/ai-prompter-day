import "./PromptButton.css"
import {Link} from 'react-router-dom';

export interface PromptButtonProps {
    name: string
}

function PromptButton({name, ...props}: PromptButtonProps) {
    
  
    return (<Link to={{pathname: "/chat"}} className="column-container-prompt">
        <div className="template"></div>
        <p>{name}</p>
    </Link>

    );
}

export default PromptButton;