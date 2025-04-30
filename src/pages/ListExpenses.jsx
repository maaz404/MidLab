import { useEffect, useState } from "react";
import './styles.css';

function ListExpenses() {
const [expenses, setExpenses] = useState([]);

useEffect(() => {
const savedExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
setExpenses(savedExpenses);
}, []);

return (

<div className="main"> <h1 className="textColor">Your Expenses</h1> {expenses.length === 0 ? ( <p className="welcome-text">No expenses found. Add some!</p> ) : ( <ul> {expenses.map((expense) => ( <li key={expense.id}> {expense.title} <span>Rs {expense.amount}</span> </li> ))} </ul> )} </div> ); }
export default ListExpenses;