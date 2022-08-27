import { Link } from "react-router-dom";

import styles from "../styles/HomeSectionCard.module.css";

const HomeSectionCard = ({ title, img, route }) => {
  return (
    <Link to={"/" + route} style={{width: '100%'}}>
      <div className={styles.cardBody}>
        <img src={img} alt={title} />
        <h3>{title}</h3>
      </div>
    </Link>
  );
};

export default HomeSectionCard;
