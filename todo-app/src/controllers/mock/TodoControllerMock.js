/* eslint no-param-reassign: ["error", { "props": false }] */

const tasks = [
  {
    id: 1,
    description: 'teste',
    done: false,
  },
  {
    id: 2,
    description: 'Teste Front',
    done: false,
  },
  {
    id: 3,
    description: 'Ola',
    done: false,
  },
];

const index = (regex) => {
  let todos = [];

  if (regex) {
    tasks.map((task) => {
      const taskDesc = task.description.toUpperCase();

      if (taskDesc.includes(regex.toUpperCase())) {
        todos.push(task);
      }

      return task;
    });
  } else {
    todos = tasks;
  }

  return Promise.resolve(todos);
};

const store = async (todo) => {
  tasks.push({
    ...todo,
    done: false,
    id: 4,
    createdAt: '2019-02-08',
  });

  return Promise.resolve({
    todo: {
      ...todo,
      done: false,
      id: 4,
      createdAt: '2019-02-08',
    },
    tasks,
  });
};

const update = async (todo) => {
  let aux = {};
  tasks.map((task) => {
    if (task.id === todo.id) {
      task.description = todo.description || task.description;

      if (todo.done !== undefined) {
        task.done = todo.done;
      }

      aux = task;
    }
    return task;
  });

  return Promise.resolve(aux);
};

const remove = async (id) => {
  const todos = tasks.filter(todo => todo.id !== id);

  if (todos.length === 3) {
    return Promise.resolve({ msg: 'Success' });
  }

  return Promise.resolve({ errors: 'No task found with id' });
};

module.exports = {
  index,
  store,
  update,
  remove,
};
