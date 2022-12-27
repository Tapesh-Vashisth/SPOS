import { useState, useRef, useEffect } from "react"
import { Stack } from "@mui/material"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const PatientDocuments = () => {
    const [files, setFiles] = useState<any[]>([])
    const inputRef = useRef<any>(null);
    const formRef = useRef<any>(null);
    const [printFiles, setPrintFiles] = useState<Array<any>>([])
    const [message, setMessage] = useState('');
    const [pname, setPname] = useState('');

    const handleClick = () => inputRef && inputRef.current && inputRef.current.click();
    const handleFiles = (e: any) => setFiles(e.target.files ? e.target.files : []);

    const navigate = useNavigate()
    let res: any

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (files.length > 0) {
            const formData = new FormData();
            // formData.append('file', files[0]);
            for(let i=0;i<files.length;i++)
            {
                formData.append('file',files[i]);
            }
            axios.post(`http://localhost:5500/admin/images/${pname}`,formData)
                .then(data => setMessage(data.data.message))
                .catch((error) => setMessage('Error'));
            setFiles([]);
            formRef.current && formRef.current.reset();
            setTimeout(() => {
                setMessage('');
            }, 4000);
        }
    }

    return (
        <Stack alignItems={'center'} marginTop={'2%'} spacing="20px">
            <form ref={formRef} style={{margin:'100px'}}>
                <h3>Upload more files:</h3>
                <input type="text" name="pname" value={pname} onChange={(e)=> setPname(e.target.value)} />
                <input type="file" ref={inputRef} onChange={handleFiles} multiple />
                <button className="mui-btn mui-btn--primary" onClick={handleSubmit}>Submit</button>
            </form>
        </Stack>
    )
}

export default PatientDocuments;