  import Expenseitem from "./Expense";
 

   
   function App(props) {
    let expenses=[ {
      id:'e',
      expensetitle:'car inusrance',
   
     expensedate: new Date(2022,3,22),
     expenseamount:200},
     {
      id:'e1',
      expensetitle:'food',
     expensedate: new Date(2022,3,22),
     expenseamount:300},
     {
      id:'e2',
      expensetitle:'school fee',
     expensedate: new Date(2022,3,2),
     expenseamount:100}
    ]
  

    return ( <div>  
    <h2> lets start</h2>
    
    <Expenseitem
    item={expenses}
     title={expenses[0].expensetitle}
              date={expenses[0].expensedate}
               
               amount={expenses[0].expenseamount}
               >
           </Expenseitem>
           <Expenseitem
     title={expenses[1].expensetitle}
              date={expenses[1].expensedate}
               
               amount={expenses[1].expenseamount}
               >
           </Expenseitem>
           <Expenseitem
     title={expenses[2].expensetitle}
              date={expenses[2].expensedate}
               
               amount={expenses[2].expenseamount}
               >
           </Expenseitem>
           </div>
      );
    }





    export default App;