import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, toggleTaskCompletion, updateTask, deleteTask }) => {
    return (
        <div>
            {tasks.map(task => (
                <TaskItem
                    key={task.id}
                    task={task}
                    toggleTaskCompletion={toggleTaskCompletion}
                    updateTask={updateTask}
                    deleteTask={deleteTask}
                />
            ))}
        </div>
    );
};

export default TaskList;
