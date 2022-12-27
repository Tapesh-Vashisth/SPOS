import React from "react";
import { useEffect } from "react";

function Image(props: any) {
    return <div>
        <h1>for Project : {props.project}</h1>
        {(props.type == 'image/jpg' || props.type == 'image/jpeg' || props.type == 'image/png')
            ? <a href={`/projects/:${props.project}`}><img src={props.src}alt="" height='350' width="500" /> </a>
            : (props.type == 'application/pdf') ? <a href={`/projects/:${props.project}`}> <iframe src={props.src} width="500" height='350' /></a>
            : null
        };
    </div>

}

export default Image;