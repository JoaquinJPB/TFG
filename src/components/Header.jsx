import styles from "../styles/Header.module.css";

const Header = ({ title }) => {
  return (
    <header>
      <div className={styles.header}>
        <h1 className={styles.title}>{title}</h1>
      </div>
    </header>
  );
};

export default Header;
