const expect = require('chai').expect;

const Todo = require('../src/models/Todo');

describe('Todo Model Tests', () => {
  it('should be invalid if description is empty', done => {
    const todo = new Todo();

    todo.validate(({ errors: description }) => {
      expect(description).to.exist;
      done();
    });
  });

  it('should return an todo object', (done) => {
    const todo = new Todo({ description: 'Teste' });

    todo.validate((err) => {
      expect(err).to.be.null;
    });

    expect(todo).to.be.an('object');
    done();
  });
});
