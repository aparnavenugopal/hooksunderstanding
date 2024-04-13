import React, { useEffect, useMemo, useState } from 'react';
import UserList from './UserList';

const Imp = () => {
  const [users, setUsers] = useState([]);
  // State to store the filter condition for active users
  const [filterActive, setFilterActive] = useState(true);

  // Function to fetch users from the public API
  const fetchUsers = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  // Fetch users from the public API when the component mounts
  useEffect(() => {
    fetchUsers();
  }, []);

  // Memoized filtered lists of active and inactive users
  const activeUsers = useMemo(() => users.filter(user => user.isActive), [users]);
  const inactiveUsers = useMemo(() => users.filter(user => !user.isActive), [users]);

  console.log('Rendering App...');

  return (
    <div>
      <h1>User Management</h1>
      <label>
        <input
          type="checkbox"
          checked={filterActive}
          onChange={() => setFilterActive(prevFilter => !prevFilter)}
        />
        Show Active Users
      </label>
      {filterActive ? <UserList users={activeUsers} /> : <UserList users={inactiveUsers} />}
    </div>
  );
}

export default Imp;