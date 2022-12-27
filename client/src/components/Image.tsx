import React from "react";
import { useEffect } from "react";

function Image(props: any) {

    console.log(props.type);
    return <div>
        {(props.type == 'image/jpg' || props.type == 'image/jpeg' || props.type == 'image/png')
            ? <a href={`/projects/:${props.project}`}> <img src={`data:${props.type};base64,${props.src}`}  alt="" height='350' width="500" /> </a>
            : (props.type == 'application/pdf') ? <a href={`/projects/:${props.project}`}> <iframe src={`data:${props.type};base64,${props.src}`} width="500" height='350' /></a>
            : null
        };
    </div>
}

export default Image;