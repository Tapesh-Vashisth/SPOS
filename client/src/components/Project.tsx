import { useState, useRef, useEffect } from "react"
import { ImageList, Stack } from "@mui/material"
import { useNavigate } from "react-router-dom"
import Image from "./Image"
import axios from "axios"

const Project = (props: any) => {

	return <div style={{ margin: '100px' }}>
		<h1>Project Name : {props.name}</h1>
		<h1>Project desc : {props.desc}</h1>
		<h1>Project client : {props.client}</h1>
		<h1>Project images :- </h1>

		{props.images.map((item:any, i:number) => {
			console.log(item);
			const bstr: any = btoa(
				String.fromCharCode(...new Uint8Array((item.data.data)))
			)
			return <Image project={props.name} src={bstr} type={item.contentType} key={i}></Image>
		})}
	</div>
}

export default Project;