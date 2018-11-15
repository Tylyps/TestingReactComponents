import React from 'react'
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters';

class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null,
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };

  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }))
  };


  render() {
    const { filters: {text, sortBy, startDate, endDate}, dispatch  } = this.props
    const { calendarFocused, focused } = this.state
    return(
      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => (
            dispatch(setTextFilter(e.target.value))
          )}
        />
        <select
          value={sortBy}
          onChange={({ target: { value } }) => (
            value==="date" ? (
              dispatch(sortByDate())
            ) : (
              dispatch(sortByAmount())
            )
          )}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDate={startDate}
          endDate={endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={calendarFocused}
          onFocusChange={this.onFocusChange}
          showClearDates
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
      </div>
    );
  }

};

const mapStateToProps = (state) => ({
  filters: state.filters,
});

export default connect(mapStateToProps)(ExpenseListFilters);
