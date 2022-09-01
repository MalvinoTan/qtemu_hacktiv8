/** Styles */
import styles from "./style.module.css";

const MemberCard = ({ position, name }) => {
    return (
        <div className={styles.container}>
            <div className={styles.img}></div>
            <div className={styles.details}>
                <p>{position}</p>
                <p>{name}</p>
            </div>
        </div> 
    );
};

export default MemberCard;