import react, { useState } from 'react';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

axios.defaults.withCredentials=true;

export default function AddNewProject() {

    const [data,setData] = useState({pname:'',pdesc:'',ptitle:'',clientname:''});
    const nav = useNavigate();

    function handleChange(e:any)
    {
        const n = e.target.name;
        const v = e.target.value;
        // console.log(n,v);
        setData(prev=>{
            return {...prev,[n]:v};
        });
    }

    async function sendRequest(data:Object)
    {
        try {
            const t = await axios.post('http://localhost:5500/admin/new',data);
            console.log(t);
            if(t.data)
            {
                nav('/admin');
                console.log('done');
            }
            else
            {
                alert('please enter unique name for a new project');
                setData(prev=>{
                    return {...prev,pname:''};
                })
                setData(prev=>{
                    return {...prev,ptitle:''};
                })
                setData(prev=>{
                    return {...prev,clientname:''};
                })
                setData(prev=>{
                    return {...prev,pdesc:''};
                })
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'300px',marginBottom:'161px'}}>
            <form style={{backgroundColor:'#fff',width:'25%',display:'flex',flexDirection:'column',marginTop:'300px',justifyContent:'center',alignItems:'center',padding:'10px'}}>
                <input  type="text" onChange={handleChange} value={data.pname} name="pname" id="input" placeholder='enter the name' />
                <input type="text" onChange={handleChange} value={data.ptitle} name="ptitle" id="input" placeholder='enter the title' />
                <input type="text" onChange={handleChange} value={data.pdesc} name="pdesc" id="input" placeholder='enter the description' />
                <input type="text" onChange={handleChange} value={data.clientname} name="clientname" id="input" placeholder='enter client name' />
                <button type="submit" onClick={(e)=>{
                    e.preventDefault();
                    sendRequest(data)
                }} id="addBtn">Submit</button>
            </form>
        </div>
    );
}