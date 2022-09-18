import "./UserForm.css";
import { useState } from "react";

const UserForm = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const setEnteredNameHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const setEnteredAgeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const userInfo = {
        name: enteredName,
        age: enteredAge
    };
    props.onSaveList(userInfo);
    setEnteredAge('');
    setEnteredName('');
  };
  return (
    <div className="user-form">
      <form onSubmit={submitHandler}>
        <div className="user-form__control">
          <label>User Name</label>
          <input value={enteredName} onChange={setEnteredNameHandler}></input>
        </div>
        <div className="user-form__control">
          <label>Age</label>
          <input value={enteredAge} onChange={setEnteredAgeHandler}></input>
        </div>
        <div className="user-form__actions">
          <button type="submit">Add user</button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
