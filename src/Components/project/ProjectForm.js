function ProjectForm () {
    return (
        <form>
            <div>
            <input type='text' placeholder='Project name here...'/>
            </div>
            <div>
            <input type='number' placeholder='Project budget here...'/>
            </div>
            <div>
                <select name='category_id'>
                    <option disabled>Category selection</option>
                </select>
            </div>
            <div>
                <input type='submit' value='Create'></input>
            </div>
        </form>
    )
}

export default ProjectForm