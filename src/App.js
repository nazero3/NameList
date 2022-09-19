
import './App.css';
import UserForm from './components/UserForm';
import {useState} from 'react';
import Users from './components/Users';

function App() {
  
  const [usersList, setUsersList] = useState('');
  const onSaveNewUser = (user) => {
    setUsersList((item) => {
      return[user,...item];
    })
  }
  return (
    <div>
      <UserForm onSaveList={onSaveNewUser}/>
      
      <Users items={usersList}/>
    </div>
  );
}

export default App;
