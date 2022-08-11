import React from "react";

class Fruta extends React.Component {

    render(){

        return(
            <li style={{backgroundColor: "blue", border: "solid 3px"}}>
                {this.props.fruta}
            </li>
        )
    }


}

export default Fruta;