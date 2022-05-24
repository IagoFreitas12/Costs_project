import { useState, useEffect } from 'react'

import Input from '../form/Input'
import styles from './ProjectForm.module.css'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'

function ProjectForm ({btnText}) {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/categories", {
        method: "GET",
        headers: {
            'Content-type': 'application/json'
        }
    })
        .then ((resp) => resp.json())
        .then ((data) => {
            setCategories(data)
        })
        .catch((err) => console.log(err))

    }, [])

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
                options={categories}
            />
            <SubmitButton text={btnText}/>
        </form>
    )
}

export default ProjectForm