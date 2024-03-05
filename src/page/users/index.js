import React, { useState, useEffect } from 'react';
import Chance from 'chance';
import Shimmer from '../../components/shimmer';

const chance = new Chance();

function generateUsers(count, offset) {
    const users = [];
    for (let i = 0; i < count; i++) {
        const id = +offset + i; // Calculate the id based on the offset
        const name = chance.name();
        const email = chance.email();
        const address = chance.address();
        const avatar = chance.avatar({ protocol: 'https' }); // Generate avatar image link
        users.push({ id, name, email, address, avatar });
    }
    return users;
}

function UserList() {
    const [userList, setUserList] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        loadMoreUsers();
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
                if (!loading) {
                    loadMoreUsers();
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [loading]);

    const loadMoreUsers = () => {
        setLoading(true);
        setTimeout(() => {
            const lastId = userList.length > 0 ? userList[userList.length - 1].id + 1 : 0;
            const newUsers = generateUsers(50, lastId); // Load additional 50 users starting from the last id
            setUserList(prevUsers => [...prevUsers, ...newUsers]);
            setLoading(false);
        }, 2000); // Simulating a delay
    };

    const handleDeleteUser = (id) => {
        setUserList(prevUsers => {
            // Filter out the deleted user
            const updatedUsers = prevUsers.filter(user => user.id !== id);
            return updatedUsers.map((user, index) => ({ ...user, id: index }));
        });
    };

    const handleDragStart = (e, id) => {
        e.dataTransfer.setData('text/plain', id);
    };

    const handleDrop = (e, index) => {
        const id = e.dataTransfer.getData('text/plain');
        const draggedUser = userList.find(user => user.id.toString() === id);
        const remainingUsers = userList.filter(user => user.id.toString() !== id);
        const updatedUsers = [
            ...remainingUsers.slice(0, index),
            draggedUser,
            ...remainingUsers.slice(index)
        ].map((user, i) => ({ ...user, id: i }));
        setUserList(updatedUsers);
    };

    return (
        <div className="p-4">
            <div className="mt-4 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {userList.map((user, index) => (
                    <div key={user.id}
                        className="bg-white shadow-md p-4 rounded-md relative"
                        draggable
                        onDragStart={(e) => handleDragStart(e, user.id)}
                        onDrop={(e) => handleDrop(e, index)}
                        onDragOver={(e) => e.preventDefault()}>
                        <span className='rounded-full p-2 bg-slate-500 absolute top-0 right-0'>{index + 1}</span>
                        <img src={user.avatar} alt="Avatar" className="w-20 h-20 rounded-full mx-auto mb-4" />
                        <div className="text-center">
                            <p className="font-semibold">{user.name}</p>
                            <p className="text-gray-600">{user.email}</p>
                            <p className="text-gray-600">{user.address}</p>
                            <button className="mt-2 bg-red-500 text-white px-4 py-2 rounded-md" onClick={() => handleDeleteUser(user.id)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
            {loading && <div className="text-center mt-4"><Shimmer /></div>}
        </div>
    );
}

export default UserList;
