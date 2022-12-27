import { useState, useRef, useEffect } from "react"
import { Stack } from "@mui/material"
import { useNavigate } from "react-router-dom"
import Image from "../components/Image"
import axios from "axios"

const SeeImages = () => {
	const [printFiles, setPrintFiles] = useState<Array<any>>([])
	const [data, setData] = useState<Array<any>>([]);
	const images: Array<any> = [];

	const navigate = useNavigate()

	useEffect(() => {
		axios.get('http://localhost:5500/admin/images').then(some => { setData(some.data.data) }).catch(err => console.log(err));
	}, [])

	return <div style={{ margin: '100px' }}>
		{data.map(item => {
			return <div>
				<h1> project Name : {item.projectName}</h1>
				<h1> project title : {item.projectTitle}</h1>
				<h1> project description : {item.projectDesc}</h1>
				<h1> Client Name : {item.clientName}</h1>
				{images.map((each: any, i) => {
					return <Image src={each.src} project={each.project} type={each.type} key={i} />
				})}
			</div>
		})}
	</div>
}

export default SeeImages;