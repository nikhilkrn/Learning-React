import React from "react";


class Circle extends React.Component{
    constructor (props){
        super(props)
    }
    render(){
        return(
            <div style={{width:"100px", height:"100px",borderRadius:"50%", backgroundColor:"yellow"}}>

            </div>
        )
    }
}

export default Circle