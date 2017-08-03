import React from 'react'
import Footer from './Footer'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'

const TodoApp = () => (
  <div>
    <h1>TODO 리스트</h1>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default TodoApp