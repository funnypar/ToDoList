import { useRef } from "react";
import styles from "./Input.module.css";
import Card from "../UI/Card/Card";

const Input = () => {
    const userEnter = useRef();

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(userEnter.current.value);
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
