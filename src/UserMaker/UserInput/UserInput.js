import { useState } from "react";
import styles from "./UserInput";
import Card from "../../UI/Card";
import Button from "../../UI/Button";
import classes from "./UserInput.module.css";

const UserInput = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const [isValid, setIsValid] = useState(true);

  // const userInputChangeHandler = (enteredName, enteredAge)=>{
  //     if(event.target.value.trim().length > 0){
  //         setIsValid(true);
  //     }
  // };
  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
    console.log(enteredUsername, "this is usernameChangeHandler")
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(enteredUsername, "this is addUserHandler")
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }
    if(+enteredAge < 1){
        return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
    
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <div className={""}>
          <label>Username</label>
          <input
            id="name"
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          ></input>
        </div>
        <div>
          <label>Age</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
          ></input>
        </div>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default UserInput;
