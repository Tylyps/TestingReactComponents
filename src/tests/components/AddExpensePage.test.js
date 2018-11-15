import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import { AddExpansePage } from '../../components/AddExpansePage';

let onSubmit, history, wrapper;

beforeEach(() => {
  onSubmit = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<AddExpansePage onSubmit={onSubmit} history={history} />);
});

test('should render AddExpansePage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(onSubmit).toHaveBeenLastCalledWith(expenses[1]);
});
