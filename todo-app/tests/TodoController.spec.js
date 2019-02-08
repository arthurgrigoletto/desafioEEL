const expect = require('chai').expect;
const TodoController = require('../src/controllers/mock/TodoControllerMock');

describe('Todo Controller Test', () => {
  describe('Smoke Test', () => {
    it('should have index method', done => {
      expect(TodoController.index).to.exist;
      done();
    });
    it('should have store method', done => {
      expect(TodoController.store).to.exist;
      done();
    });
    it('should have update method', done => {
      expect(TodoController.update).to.exist;
      done();
    });
    it('should have remove method', done => {
      expect(TodoController.remove).to.exist;
      done();
    });
  });

  describe('Index Test', () => {
    it('should return an array', async () => {
      const todos = await TodoController.index();

      expect(todos).to.be.an('array');
      expect(todos).to.have.length(3);
    });

    it('should return an empty array by give an inexist query', async () => {
      const todos = await TodoController.index('end');

      expect(todos).to.be.an('array');
      expect(todos).to.have.length(0);
    });

    it('should return an array with all docs that contains query', async () => {
      const todos = await TodoController.index('teste');

      expect(todos).to.be.an('array');
      expect(todos).to.have.length(2);
    });
  });

  describe('Store Test', () => {
    it('should return an object saved and increment the array', async () => {
      const newTodo = {
        description: 'Store'
      };
      const resp = await TodoController.store(newTodo);

      expect(resp.todo).to.be.an('object');
      expect(resp.todo).to.be.eql({
        id: 4,
        description: 'Store',
        done: false,
        createdAt: '2019-02-08'
      });
      expect(resp.tasks).to.be.an('array');
      expect(resp.tasks).to.have.length(4);
    });
  });

  describe('Update Teste', () => {
    it('should return the object when description is changed', async () => {
      const todo = await TodoController.update({
        id: 2,
        description: 'Update',
      });

      expect(todo).to.be.an('object');
      expect(todo).to.be.eql({
        id: 2,
        description: 'Update',
        done: false
      });
    });

    it('should return the object when description is changed', async () => {
      const todo = await TodoController.update({
        id: 2,
        done: true,
      });

      expect(todo).to.be.an('object');
      expect(todo).to.be.eql({
        id: 2,
        description: 'Update',
        done: true
      });
    });
  });

  describe('Remove Test', () => {
    it('should return an message of success', async () => {
      const resp = await TodoController.remove(1);

      expect(resp).to.be.an('object');
      expect(resp).to.be.eql({ msg: 'Success' });
    });

    it('should return an message of error', async () => {
      const resp = await TodoController.remove(7);

      expect(resp).to.be.an('object');
      expect(resp).to.be.eql({ errors: 'No task found with id' });
    });
  });
});
