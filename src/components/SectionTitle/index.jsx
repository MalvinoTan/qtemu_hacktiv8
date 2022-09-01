/** Styles */
import styles from "./style.module.css";

const SectionTitle = ({ title, isSeeAll }) => {
    return (
        <div className={styles.container}>
            <h2>{title}</h2>
            {
                isSeeAll ? <p>See all</p> : <></>
            }
        </div> 
    );
};

export default SectionTitle;