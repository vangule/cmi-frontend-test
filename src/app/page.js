import styles from './page.module.css'
import Catalyst from './Catalyst';

function Home() {
  return (
    <div className={styles.main_container}>
      <Catalyst />
    </div>
  )
}

export default Home;
