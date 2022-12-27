import { useState, useRef, useEffect } from "react"
import { Stack } from "@mui/material"
import { useNavigate } from "react-router-dom"
import Image from "../components/Image"
import Project from "../components/Project"
import axios from "axios"

const SeeImages = () => {
	const [data, setData] = useState<Array<any>>([]);
	const images: Array<any> = [];

	const navigate = useNavigate()

	useEffect(() => {
		console.log('hi');
		axios.get('http://localhost:5500/admin/projects').then(some => {setData(some.data.data) }).catch(err => console.log(err));
	}, [])

	return <div>
		{data.map((d,index)=>{
			return (d.images)?<Project desc={d.project.projectDesc} name={d.project.projectName} client={d.project.clientName} images={d.images.projectImages} key={index} />
			: <Project title={d.project.projectTitle} desc={d.project.projectDesc} name={d.project.projectName} client={d.project.clientName} images={[]} key={index}/>
		})}
	</div>
}

export default SeeImages;