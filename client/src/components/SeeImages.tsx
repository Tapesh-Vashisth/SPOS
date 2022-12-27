import { useState, useRef, useEffect } from "react"
import { Stack } from "@mui/material"
import { useNavigate } from "react-router-dom"
import Image from "../components/Image"
import axios from "axios"

const SeeImages = () => {
	const [printFiles, setPrintFiles] = useState<Array<any>>([])
	const [data, setData] = useState<Array<any>>([]);
	const [project, setProject] = useState<Array<any>>([]);
	const images: Array<any> = [];

	const navigate = useNavigate()

	useEffect(() => {
		axios.get('http://localhost:5500/projects').then(some => { setData(some.data.data.images);setProject(some.data.data.project) }).catch(err => console.log(err));
	}, [])

    {data.forEach((item:any)=>{
        item.projectImages.forEach((each: any) => {
            const p = each.data
            const q = each.contentType;
            const bstr: any = btoa(String.fromCharCode(...new Uint8Array(p.data)))
            const s = `data:${q};base64,${bstr}`
            images.push({ project: item.projectName, src: s, type: q })
        })
    })}

	return <div style={{ margin: '100px' }}>
		{project.map(item => {
			return <div>
				<h1> project Name : {item.projectName}</h1>
				<h1> project title : {item.projectTitle}</h1>
				<h1> project description : {item.projectDesc}</h1>
				<h1> Client Name : {item.clientName}</h1>
			</div>
		})}
        {images.map((each: any, i) => {
            return <Image src={each.src} project={each.project} type={each.type} key={i} />;
        })}
	</div>
}

export default SeeImages;