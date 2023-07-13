import styles from "./Main.module.css";
import Input from "../Input/Input";
import Tasks from "../Tasks/Tasks";

const Main = () => {
    return (
        <div className={styles.container}>
            <Input />
            <Tasks />
        </div>
    );
};

export default Main;
