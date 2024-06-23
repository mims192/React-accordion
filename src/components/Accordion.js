import React, { useState } from 'react';
import { question } from './Sample';
import Accordionitem from './Accordionitem';
import './acc.css'

function Accordion() {
    const [data, setData] = useState(question);
    document.body.style.backgroundColor="#1c2c52 ";
    
    return (
        <>
            <h1>FAQs</h1>
            {data.map((element) => (
                
                    <div key={element.id}>
                        <Accordionitem  question={element.Ques}  answer={element.ans}/>
                      
                    </div>
               
            ))}
        </>
    );
}

export default Accordion;
