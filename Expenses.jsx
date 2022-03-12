import Expenseitem from "./Expense";
 import "./Expense.css"
 
 
 function Expenses(props){
return(
    <div>
        <Expenseitem
     title={props.item[0].expensetitle}
              date={props.item[0].expensedate}
               
               amount={props.item[0].expenseamount}
               >
           </Expenseitem>
           <Expenseitem
     title={props.item[1].expensetitle}
              date={props.item[1].expensedate}
               
               amount={props.item[1].expenseamount}
               >
           </Expenseitem>
           <Expenseitem
     title={props.item[2].expensetitle}
              date={props.item[2].expensedate}
               
               amount={props.itme[2].expenseamount}
               >
           </Expenseitem>
            </div>
    
)
 }
 export default Expenses;