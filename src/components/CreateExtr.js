import { useNavigate } from "react-router-dom";
import { createExtr } from '../services/Extr-api'


function Create() {
    const nav = useNavigate()

    const createTheExtr = (e) => {
        const extr = { description: e.target.description.value,
            duration:e.target.duration.value,
            complete: false }

        createExtr(extr)
        nav('/')
    }

    // const createTheTime =(e)=>{
    //     const tmtaken= {description:e.target.timetaken.value, required: true}
    //     createTime(tmtaken)
    // }

    return (
        <div>
            <h4>Create a exercise track</h4>
            <form onSubmit={createTheExtr}>
                <input type ='text' name='description' id='dsc'/>
                <br/>
                <input type ='text' name='duration' id='du'/>
                {/* <input type ='text' name='comp' id='dsc'/> */}
                 
                <input type = 'submit'/>

            </form>
           

                

        </div>

    )


}
export default Create