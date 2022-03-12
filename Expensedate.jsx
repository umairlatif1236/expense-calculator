 import "./Expense.css"
 import React from 'react';
 
 
 function Expensedate(props){
    let  month = props.date.toLocaleString('en-US',{month:'long'});
let day =props.date.toLocaleString('en-US', {day:'2-digit'});
let year = props.date.getFullYear();
 return(
     
        <div className="expense">
          <div>{month}</div>
      <div> {year}</div>
      <div> {day} </div>

      </div> 
     
 )

}
export default Expensedate;