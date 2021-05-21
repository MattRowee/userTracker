import "./App.css";
import { useState } from "react";
import UserInput from "./UserMaker/UserInput/UserInput";
import UserList from './UserMaker/UserList/UserList';

const App = () => {
  const [users, setUser] = useState([
    { user: "Matthew", age: 35, id: "g1" }
  ]);

  const addUserHandler = (enteredName, enteredAge) => {
    setUser((prevUsers) => {
      return [...prevUsers, {user: enteredName, age: enteredAge}];
      // updatedUsers.unshift({
      //   user: enteredName,
      //   age: enteredAge,
      //   id: Math.random().toString(),
      // });
      // return updatedUsers;
    });
  };

  let content = <p>No Users Found. Add one!</p>;

  if (users.length > 0) {
    content = (
    <UserList items={users} />
    );
  }

  return (
    <div className="App">
        <UserInput onAddUser={addUserHandler} />
        {content}
    </div>
  );
}

export default App;
