
import './App.css';
import UserForm from './components/UserForm';
import {useState} from 'react';
import Users from './components/Users';
import './components/UsersList.css'

function App() {
  let allTrue = false;
  const [usersList, setUsersList] = useState('');
  const onSaveNewUser = (user) => {
    setUsersList((item) => {
      return[user,...item];
    })
  }
  //https://minutemailer.github.io/react-popup/
  return (
    <div>
      <UserForm onSaveList={onSaveNewUser}/>
      
      <Users items={usersList}/>
      {!allTrue && (<span className="model">lalala</span>)}
    </div>
  );
}

export default App;
