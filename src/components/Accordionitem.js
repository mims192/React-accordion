import React ,{useState} from 'react'
import './acc.css'


function Accordionitem(props) {
    const [show ,setShow]=useState(false);
  return (
    <div className='container 'style={{maxWidth:"100%" , border: "2px solid white" ,marginTop:"20px"}}>
      
       <div >
        <p onClick={()=>setShow(!show)} >{show?"➖":"➕"} {props.question}</p>
        
        </div>
        
         
        {show && (<p>{props.answer}</p>)}
    </div>
  )
}

export default Accordionitem;
