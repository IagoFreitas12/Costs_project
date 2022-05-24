import Input from '../form/Input'
import styles from './ProjectForm.module.css'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'

function ProjectForm ({btnText}) {
    return (
        <form className={styles.form}>
            <Input 
                type="text" 
                text="Project name" 
                name="name" 
                placeholder="Put your project name here"
            />
            <Input 
                type="number" 
                text="Project budget" 
                name="budget" 
                placeholder="Put your project budget here"
            />
            <Select 
                text='Select the category'
                name='category_id'
            />
            <SubmitButton text={btnText}/>
        </form>
    )
}

export default ProjectForm