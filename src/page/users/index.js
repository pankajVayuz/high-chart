import React, { useState, useEffect } from 'react';
import Chance from 'chance';
import Shimmer from '../../components/shimmer';

const chance = new Chance();

function generateUsers(count) {
    const users = [];
    for (let i = 0; i < count; i++) {
        const name = chance.name();
        const email = chance.email();
        const address = chance.address();
        const avatar = chance.avatar({ protocol: 'https' }); // Generate avatar image link
        users.push({ name, email, address, avatar });
    }
    return users;
}

function UserList() {
    const [userList, setUserList] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
      const handleScroll = () => {
          // Check if the user has scrolled to the bottom of the page
          if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
              // Check if we're not already loading more data
              if (!loading) {
                  loadMoreUsers();
                  console.log("handle scroll call..")
              }
          }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
  }, [loading]); // Trigger effect when 'loading' changes
  
    const loadMoreUsers = () => {
        setLoading(true);
        setTimeout(() => {
            const newUsers = generateUsers(50); // Load additional 20 users
            setUserList(prevUsers => [...prevUsers, ...newUsers]);
            setLoading(false);
        }, 2000); // Simulating a delay
    };

    useEffect(() => {
        // Initially load some users when component mounts
        loadMoreUsers();
    }, []); // Empty dependency array ensures the effect runs only once on mount



    return (
        <div className="p-4">
            <div className="mt-4 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {userList.map((user, index) => (
                    <div key={index} className="bg-white shadow-md p-4 rounded-md">
                        <img src={user.avatar} alt="Avatar" className="w-20 h-20 rounded-full mx-auto mb-4" />
                        <div className="text-center">
                            <p className="font-semibold">{user.name}</p>
                            <p className="text-gray-600">{user.email}</p>
                            <p className="text-gray-600">{user.address}</p>
                        </div>
                    </div>
                ))}
            </div>
            {loading && <p className="text-center mt-4"><Shimmer/></p>}
        </div>
    );
}

export default UserList;
