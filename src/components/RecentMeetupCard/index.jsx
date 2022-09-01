/** Styles */
import styles from "./style.module.css";

/** Components */
import Button from "../Button";

const RecentMeetupCard = ({ details }) => {
    return (
        <div className={styles.container}>
            <div className={styles.img}></div>
            <div className={styles.detail_container}>
                <h3 className={styles.meetup_title}>{details.title}</h3>
                <div className={styles.meetup_detail}>Location : {details.location}</div>
                <div className={styles.meetup_detail}>Members : {details.members}</div>
                <div className={styles.meetup_detail}>Organizers : {details.organizers}</div>
                <Button className={styles.btn} text="Join us" />
            </div>
        </div>
    );
};

export default RecentMeetupCard;