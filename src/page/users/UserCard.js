import React from 'react';

function UserCard({ user, index, deleteUser }) {
    return (
        <div className="bg-white px-2 shadow-md rounded-md drag-handle flex flex-col" style={{ userSelect: 'none' }}>
            <span>{index + 1}</span>
            <img src={user.avatar} alt="Avatar" className="w-20 h-20 rounded-full mx-auto mt-4" />
            <div className="text-center mt-2">
                <p className="font-semibold">{user.name}</p>
                <p className="text-gray-600">{user.email}</p>
                <p className="text-gray-600">{user.address}</p>
            </div>
            <button className="rounded-md bg-red-700 text-white" onClick={() => deleteUser(user.id)}>Delete</button>
        </div>
    );
}

export default UserCard;
