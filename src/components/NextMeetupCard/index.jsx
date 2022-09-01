/** Styles */
import styles from "./style.module.css";

const NextMeetupCard = () => {
    return (
        <div className={styles.container}>
            <p>Awesome meetup and event</p>
            <br />
            <p className={styles.date}>25 January 2019</p>
            <br />
            <p>Hello JavaScript and Node.js Ninjas!</p>
            <p>Get ready for our monthly meetup JakartaJS! This will be our fifth meetup of 2018</p>
            <p>The meetup format will contain some short stories and technical talks</p>
            <p>If you have a short announcement you`d like to share with the audience, you may do so during open mic announcements.</p>
            <br />
            <p>Remember to bring a photo ID to get through building security.</p>
            <br />
            <p>-----</p>
            <br />
            <p>See you there!</p>
            <br />
            <p>best, Hengki, Giovanni, Sofian, Riza, Agung The JakartaJS Organizers</p>
        </div>
    );
};

export default NextMeetupCard;