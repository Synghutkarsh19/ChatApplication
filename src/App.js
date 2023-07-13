import { ChatEngine } from 'react-chat-engine';

import './App.css';
import LoginForm from './components/LoginForm';

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm/>
    return(
        <ChatEngine
            height="100vh"
            projectID="654f40a6-1e5b-4dba-a652-12a75fa6d632"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
        
        
        />
    )
}

export default App;