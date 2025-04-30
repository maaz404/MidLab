import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './styles.css';

function AddExpense() {
const [title, setTitle] = useState("");
const [amount, setAmount] = useState("");
const [message, setMessage] = useState("");
const navigate = useNavigate();

const handleSubmit = (e) => {
e.preventDefault();

if (!title || !amount) {
setMessage("Please fill all fields");
return;
}

const newExpense = {
id: Date.now(),
title,
amount: parseFloat(amount),
};

const existingExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
const updatedExpenses = [...existingExpenses, newExpense];
localStorage.setItem('expenses', JSON.stringify(updatedExpenses));

setMessage("Expense added successfully!");
setTimeout(() => {
navigate("/list");
}, 1000);

setTitle("");
setAmount("");
};

return (

<div className="main"> <h1 className="textColor">Add New Expense</h1> <form onSubmit={handleSubmit}> <input type="text" placeholder="Expense Title" value={title} onChange={(e) => setTitle(e.target.value)} /> <input type="number" placeholder="Amount (Rs)" value={amount} onChange={(e) => setAmount(e.target.value)} /> <button type="submit">Add Expense</button> </form> {message && ( <p className="message" style={{ color: message.includes("successfully") ? "#4caf50" : "#ff6b6b" }}> {message} </p> )} </div> ); }
export default AddExpense;