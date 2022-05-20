import Styles from './NewProject.module.css'
import ProjectForm from '../project/ProjectForm'

function NewProject() {
    return (
        <div className={Styles.newproject_container}>
            <h1>
                New Project
            </h1>
            <p>Create a new project and add your services.</p>
            <ProjectForm/>
        </div>    
    )
    
}

export default NewProject