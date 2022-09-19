import UsersList from "./UsersList";
import './Users.css';
const Users = (props) =>{
    if(props.items.length === 0 ){
        return <h2 className="expenses-list__fallback"> no items founded</h2>
    }
    
    return(
        <div className="expenses-list">
            {(props.items.map((x) => (
                <UsersList 
                name={x.name}
                age={x.age} />
        )))
        }
    </div>
    );
}

export default Users;