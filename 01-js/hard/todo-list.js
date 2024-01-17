/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  toDos;

  constructor () {
    this.toDos = [];
  }

  add = (toDo) => {
    this.toDos.push(toDo);
  }

  remove = (index) => {
    this.toDos.splice(index, 1);
  }

  update = (index, toDo) => {
    if(index <= this.toDos.length - 1)
      this.toDos[index] = toDo;
  }

  getAll = () => this.toDos;

  get = (index) => index <= this.toDos.length - 1? this.toDos[index]: null;

  clear = () => this.toDos = [];
}

module.exports = Todo;
