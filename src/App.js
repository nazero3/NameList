
import './App.css';
import UserForm from './components/UserForm';
import UsersList from './components/UsersList'
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
      <UsersList items={usersList}/>
    </div>
  );
}

export default App;
