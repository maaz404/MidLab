function ExpenseItem({ expense, deleteExpense }) {
  return (
    <div style={{
      backgroundColor: '#2E2E3E',
      marginBottom: '12px',
      padding: '16px',
      borderRadius: '10px',
      color: 'white',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <div>
        <h3 style={{ margin: '0 0 5px 0' }}>{expense.title}</h3>
        <p style={{ margin: 0 }}>Amount: Rs {expense.amount}</p>
      </div>
      <button
        style={{
          padding: '8px 12px',
          backgroundColor: '#E74C3C',
          border: 'none',
          borderRadius: '6px',
          color: 'white',
          cursor: 'pointer'
        }}
        onClick={() => deleteExpense(expense.id)}
      >
        Delete
      </button>
    </div>
  );
}
