import styles from "./Input.module.css";
import Card from "../UI/Card/Card";

const Input = () => {
    return (
        <Card className={styles.card}>
            <form className={styles.container}>
                <input
                    type="text"
                    placeholder="Add New Task"
                    className={styles.userInput}
                />
                <button className={styles.btn}>Add Task</button>
            </form>
        </Card>
    );
};

export default Input;
