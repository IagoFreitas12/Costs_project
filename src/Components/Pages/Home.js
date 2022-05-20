import Styles from './Home.module.css'
import savings from '../../img/savings.svg'
import LinkButton from '../Layout/LinkButton'

function Home() {
    return (
        <div className={Styles.body}>
            <h1>Welcome to <span>Costs</span></h1>
            <p>Manage your projects right now.</p>
            <LinkButton to="/newproject" text="New project"/>
            <img className={Styles.img_body} src={savings} alt='Costs'/>
        </div>    
    )  
}

export default Home