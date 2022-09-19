import Card from "../UI/Card";
import "./UsersList.css";

const UsersList = (props) => {
  console.log(props.name);
  if(props.age <= 0){
    console.log('come on man ')
}
  return (
    <Card>
      <div className="expense-item">
        {props.name} {props.age}
      </div>
      
    </Card>
  );
};

export default UsersList;
