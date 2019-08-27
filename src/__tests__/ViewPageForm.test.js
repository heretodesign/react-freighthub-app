import React from "react";
import ReactDOM from "react-dom";
import ViewPage from "../pages/ViewPage";

//  Arrange ==  Basic unit test
test('calls onSubmit with addName when submitted', () => {
  const handleSubmit = jest.fn()
  const div = document.createElement('div')
  ReactDOM.render(<ViewPage onSubmit={handleSubmit} />, div)

  //get the field nodes
  const form = div.querySelector('form')
  const {newName} = form.elements
  // fill in the field values
  newName.value = 'This is Abel'

  // Act
  form.dispatchEvent(new window.Event('submit'))

  expect(handleSubmit).toHaveBeenCalledTimes(1)
  expect(handleSubmit).toHaveBeenCalledWith({
    newName: newName.value,
  })
})
