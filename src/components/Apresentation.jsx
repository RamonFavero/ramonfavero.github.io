import React from "react";


function Apresentation(props) {
    return (
<div class="a-card">
    <div class="temporary_text">
        <img src={props.img} alt="" />
    </div>
<div class="a-card_content">
    <span class="a-card_title">{props.title}</span>
       
        <p class="a-card_description">{props.corpo}</p>
    
</div>
</div>
    )
    
}

export default Apresentation