import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      description: props.expense ? props.expense.description : '',
      amount:  props.expense ? (props.expense.amount / 100).toString() : '',
      note:  props.expense ? props.expense.note : '',
      createdAt:  props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: undefined
    };
  }

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }))
  };

  onAmountChange = (e) => {
    const amount = e.target.value;
  if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }))
    }
  };

  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }))
  };

  onDateChange = (createdAt) => {
    if(createdAt) {
      this.setState(() => ({ createdAt }))
    }
  };

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }))
  };

  onSubmit = (e) => {
    e.preventDefault();
    const {
      description,
      amount,
      createdAt,
      note
    } = this.state;
    if (!description || !amount) {
      this.setState(() => ({ error: 'Please provide description and amount.' }))
    } else {
      this.setState(() => ({ error: undefined }))
      this.props.onSubmit({
        description,
        amount: parseFloat(amount) * 100,
        createdAt: createdAt.valueOf(),
        note
      });
    }
  };

  render() {
    const {
      description,
      amount,
      note,
      createdAt,
      calendarFocused,
      error
    } = this.state;
    return (
      <div>
        {error && <p>{error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Description"
            autoFocus
            value={description}
            onChange={this.onDescriptionChange}
          />
          <input
            type="text"
            placeholder="Amount"
            value={amount}
            onChange={this.onAmountChange}
          />
          <textarea
            placeholder="Add a note for your expense (optional)"
            value={note}
            onChange={this.onNoteChange}
          />
          <SingleDatePicker
            date={createdAt}
            onDateChange={this.onDateChange}
            focused={calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <button>Add Expense</button>
        </form>
      </div>
    )
  }
}

export default ExpenseForm;
