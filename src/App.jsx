
import { Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AddExpense from "./pages/AddExpense";
import ListExpenses from "./pages/ListExpenses";


function App() {
  return (
    <div style={{ padding: "20px" }}>
      <nav style={{borderRadius:'10px', display:"flex",marginBottom: "20px", backgroundColor: "#05408C", width: "100%", height: "50px", alignItems: 'center' }}>
        <Link to="/" style={{ marginRight: "10px", color: "white" , marginLeft:"50px"}}>Dashboard</Link>
        <Link to="/add" style={{ marginLeft: "30px", color: "white" }}>Add Expense</Link>
        <Link to="/list" style={{ marginLeft: "30px", color: "white" }}>List Expenses</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add" element={<AddExpense />} />
        <Route path="/list" element={<ListExpenses />} />
      </Routes>

    </div>
  );
}

export default App;
