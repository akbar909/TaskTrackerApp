import React, { useState } from 'react';

const TaskItem = ({ task, toggleTaskCompletion, updateTask, deleteTask }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newName, setNewName] = useState(task.name);

    const handleUpdate = () => {
        updateTask(task.id, newName);
        setIsEditing(false);
    };

    return (
        <div className="flex items-center justify-between border-b py-2">
            {isEditing ? (
                <input
                    type="text"
                    value={newName}
                    onChange={e => setNewName(e.target.value)}
                    onBlur={handleUpdate}
                    autoFocus
                    className="border-gray-300 border p-2 mr-2"
                />
            ) : (
                <div className="flex items-center">
                    <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => toggleTaskCompletion(task.id)}
                        className="mr-2"
                    />
                    <span
                        className={`cursor-pointer ${task.completed ? 'line-through' : ''}`}
                        onClick={() => toggleTaskCompletion(task.id)}
                    >
                        {task.name}
                    </span>
                </div>
            )}
            <div>
                <p className="text-sm">{task.dateTime}</p>
                <button
                    className="text-blue-500 mr-2"
                    onClick={() => setIsEditing(!isEditing)}
                >
                    {isEditing ? 'Save' : 'Edit'}
                </button>
                <button
                    className="text-red-600"
                    onClick={() => deleteTask(task.id)}
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default TaskItem;
