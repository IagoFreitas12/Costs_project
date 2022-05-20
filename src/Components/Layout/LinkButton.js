import { Link } from 'react-router-dom'
import styles from './Linkbutton.module.css'

function LinkButton ({to, text}) {
    return (
        <Link className={styles.btn} to={to}>
            {text}
        </Link>

    )
}

export default LinkButton