<form onSubmit={handleSubmit}>
  <input 
    type="text" 
    placeholder="Expense Title" 
    value={title} 
    onChange={(e) => setTitle(e.target.value)}
  />
  <input 
    type="number" 
    placeholder="Amount" 
    value={amount} 
    onChange={(e) => setAmount(e.target.value)}
  />
  <button type="submit">Add Expense</button>
</form>
