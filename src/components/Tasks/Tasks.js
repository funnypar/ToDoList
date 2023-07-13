import styles from "./Tasks.module.css";
import Card from "../UI/Card/Card";
import Task from "./Task";

const Tasks = () => {
    return (
        <Card className={styles.container}>
            <Task />
        </Card>
    );
};
export default Tasks;
