import { useNavigate } from "react-router-dom";
import { createUser } from '../services/Users-api'


function Create() {
    const nav = useNavigate()

    const createTheUser = (e) => {
        const user = { username: e.target.username.value, required: false }
        createUser(user)
        nav('/')
    }

    // const createTheTime =(e)=>{
    //     const tmtaken= {description:e.target.timetaken.value, required: true}
    //     createTime(tmtaken)
    // }

    return (
        <div>
            <h4>Create a user</h4>
            <form onSubmit={createTheUser}>
                <input type ='text' name='username' id='un'/>
                <br/>
                 
                <input type = 'submit'/>

            </form>
           

                

        </div>

    )


}
export default Create