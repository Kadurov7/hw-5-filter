import React from 'react'
import "./ExpenseFilter.css";

const ExpenseFilter = ({value, onChange}) => {
  return (
    <div className='expense-filter'>
        <div className='expense-filter_control'>
        <label htmlFor="">Filter by year</label>
        <select onChange={onChange} value={value}>
           <option value="2023">2023</option>
           <option value="2022">2022</option>
           <option value="2021">2021</option>
           <option value="2020">2020</option>
           <option value="2019">2019</option>
        </select>
        </div>
    </div>
  )
}

export default ExpenseFilter