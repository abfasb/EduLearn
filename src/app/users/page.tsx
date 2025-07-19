'use client'

import { useEffect, useState } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [form, setForm] = useState({ name: '', email: '', id: 0 });
  const [isEditing, setIsEditing] = useState(false);

  const fetchUsers = async () => {
    const res = await fetch('http://localhost:3000/api/users');
    const data = await res.json();
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const method = isEditing ? 'PUT' : 'POST';
    await fetch('/api/users', {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    setForm({ name: '', email: '', id: 0 });
    setIsEditing(false);
    fetchUsers();
  };

  const handleDelete = async (id: number) => {
    await fetch('/api/users', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });
    fetchUsers();
  };

  const handleEdit = (user: User) => {
    setForm(user);
    setIsEditing(true);
  };

  return (
    <div style={{ padding: 20 }} className='bg-white w-full h-100 text-black'>
      <h1>{isEditing ? 'Edit User' : 'Create User'}</h1>
      <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <button type="submit">{isEditing ? 'Update' : 'Add'}</button>
        {isEditing && (
          <button
            type="button"
            onClick={() => {
              setForm({ name: '', email: '', id: 0 });
              setIsEditing(false);
            }}
          >
            Cancel
          </button>
        )}
      </form>

      <h2>User List</h2>
      <ul>
        {Array.isArray(users) ? (
            users.map((user) => (
                <li key={user.id}>
                <strong>{user.name}</strong> ({user.email})
                <button onClick={() => handleEdit(user)}>Edit</button>
                <button onClick={() => handleDelete(user.id)}>Delete</button>
                </li>
            ))
            ) : (
            <p>No users found or error loading.</p>
            )}

      </ul>
    </div>
  );
}
