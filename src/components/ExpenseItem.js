import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  //return <h2>fuck</h2>

  /* return (
    <div className='expense-item'>
      <div>29 July 2023</div>
      <div className='expense-item__description'>
        <h2>Car Incurance </h2>
        <div className='expense-item__price'>$124.8</div>
      </div>
    </div>
  ); */

  /* const expenseDate = new Date(2023, 7, 22);
  const expenseTitle = 'car Insurance';
  const expenseAmount = 234.23;

  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  ); */

  //props

  /* const month = props.expense.date.toLocaleString('en-US', {month: 'long'});
  const day = props.expense.date.toLocaleString('en-US', {day: '2-digit'});
  const year = props.expense.date.getFullYear();
 */

  return (
    <div className="expense-item">
      {/* <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div> */}
      <ExpenseDate date ={props.expense.date} />
      <div className="expense-item__description">
        <h2>{props.expense.title}</h2>
        <div className="expense-item__price">${props.expense.amount}</div>
      </div>
    </div>
  );


}

export default ExpenseItem;
