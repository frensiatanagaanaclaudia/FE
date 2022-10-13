import React from "react";
function TruncateText(props){
    function truncate(str){
        return str.length > 300 ? str.substring(0,299)+"...": str
    }
    return (
        <span style={{overflow:"hidden",textOverflow:"ellipsis"}}>
        {truncate(props.text)}
        </span>
    )
}

export default TruncateText;