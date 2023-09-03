import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import './App.css';
import ChatPage from '../pages/ChatPage';

function App() {
    return (<BrowserRouter>
    <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/chat" element={<ChatPage/>}/>
    </Routes>
    </BrowserRouter>
    );
}

export default App;