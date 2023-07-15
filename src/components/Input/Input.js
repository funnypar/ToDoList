import { useRef } from "react";
import styles from "./Input.module.css";
import Card from "../UI/Card/Card";

const Input = () => {
    const userEnter = useRef();

    const sendData = async () => {
        const request = await fetch(
            "https://tasks-d7a51-default-rtdb.firebaseio.com/tasks.json",
            {
                method: "POST",
                body: JSON.stringify({
                    text: userEnter.current.value,
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        const response = await request.json();
        console.log(response);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        sendData();
    };

    return (
        <Card className={styles.card}>
            <form className={styles.container} onSubmit={submitHandler}>
                <input
                    type="text"
                    placeholder="Add New Task"
                    className={styles.userInput}
                    ref={userEnter}
                />
                <button className={styles.btn}>Add Task</button>
            </form>
        </Card>
    );
};

export default Input;
