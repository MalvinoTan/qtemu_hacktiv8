/** Styles */
import styles from "./style.module.css";

/** Components */
import Button from "../Button";

const PastMeetupCard = ({ date, text, went }) => {
    return (
        <div className={styles.container}>
            <p>{date}</p>
            <hr />
            <p>{text}</p>
            <p>{went} <span>went</span></p>
            <Button text="View" />
        </div> 
    );
};

export default PastMeetupCard;