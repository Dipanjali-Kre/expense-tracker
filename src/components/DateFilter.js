import React from 'react';
import './DateFilter.css';

function DateFilter({ startDate, endDate, onStartDateChange, onEndDateChange }) {
  return (
    <div className="date-filter-container card">
      <h2>Filter by Date</h2>
      <div className="filter-group">
        <label htmlFor="startDate">From:</label>
        <input
          type="date"
          id="startDate"
          value={startDate}
          onChange={(e) => onStartDateChange(e.target.value)}
        />
      </div>
      <div className="filter-group">
        <label htmlFor="endDate">To:</label>
        <input
          type="date"
          id="endDate"
          value={endDate}
          onChange={(e) => onEndDateChange(e.target.value)}
        />
      </div>
    </div>
  );
}

export default DateFilter;
