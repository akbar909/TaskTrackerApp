import React, { useState } from 'react';
import TaskList from '../src/components/TaskList';
import { TypeAnimation } from 'react-type-animation';


function App() {
  const [tasks, setTasks] = useState([
  ]);

  const addTask = name => {
    const newTask = { id: Date.now(), name, completed: false, dateTime: new Date().toLocaleString() };
    setTasks([...tasks, newTask]);
  };

  const updateTask = (id, newName) => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, name: newName } : task
      )
    );
  };

  const toggleTaskCompletion = id => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = id => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-cyan-900 via-teal-800 to-cyan-900">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        
        <TypeAnimation
          className="text-3xl font-bold mb-4 text-center"
          sequence={[
            'Task Tracker App',
            1000
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: '2em', display: 'inline-block' }}
          repeat={Infinity}
        />
        <TaskList
          tasks={tasks}
          toggleTaskCompletion={toggleTaskCompletion}
          updateTask={updateTask}
          deleteTask={deleteTask}
        />
        <div className="mt-4">
          <input
            type="text"
            placeholder="Add new task..."
            className="border-gray-300 border p-2 mr-2"
            onKeyDown={e => {
              if (e.key === 'Enter') {
                addTask(e.target.value);
                e.target.value = '';
              }
            }}
          />
          <button
            className="hover:bg-orange-400 hover:text-white py-2 px-4 rounded border-2 border-orange-300"
            onClick={() => {
              const input = document.querySelector('input[type="text"]');
              addTask(input.value);
              input.value = '';
            }}
          >
            Add Task
          </button>
        </div>
      </div>
      <p className="text-gray-300 mt-8 animate-bounce font-semibold">Developed and designed by <span className='text-orange-300'>Ghulam Akbar</span></p>
    </div>
  );
}

export default App;
