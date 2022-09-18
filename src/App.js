
import './App.css';
import UserForm from './components/UserForm';
import UserList from './components/UserList'
import {useState} from 'react';

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
      <UserList items={usersList}/>
    </div>
  );
}

export default App;
