import Card from "../UI/Card";
import "./UsersList.css";

const UsersList = (props) => {
  console.log(props.name);
  return (
    <Card>
      <div className="expense-item">
        {props.name} {props.age}
      </div>
      
    </Card>
  );
};

export default UsersList;
