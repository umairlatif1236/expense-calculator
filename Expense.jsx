
import Expensedate from './Expensedate'
import React,{useState} from 'react';
import "./Expense.css"
import Card from '../../Ui/card';


function Expenseitem(props){
  const [title, settitle]=useState(props.title )
  const [inp, newtitle]=useState("hi")
  let a=document.getElementById('inpthandler')
  let btn=()=>{
    settitle('tittle')
    a.addEventListener('onChange' ,
  
  (event)=> {
      newtitle(event.target.value);
    }
    )
}

    return(
        <Card className="expense">
            <Expensedate date={props.date}></Expensedate>
          
       <div className="expense1">
           <h2 className="expense2">
               {title}
           </h2>
       </div>
       <div className="expense3">
         ${props.amount}
         <input type="text"value={ inp } id='inpthandler'/>
         <button onClick={ btn }> on click</button>
       </div>
       </Card>
        
            
                
               
            
       
)
  


    }
export default Expenseitem