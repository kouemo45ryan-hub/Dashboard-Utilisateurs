import { useState } from 'react'
import {useUser} from './store/userStore'
import './App.css'
import { useUsers } from './hooks/useUser'
import { UserList } from './hooks/users/usersList'
function App() {
  // const {users, setUsers} = useUser()
  // console.log(users)

  const {data: users, isLoading, error} = useUsers()

  if(isLoading) return <p>Chargement...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <div className="border border-gray-200 rounded-lg p-4 shadow-sm bg-slate-950">
      <UserList users={users}/>
      {/* <button
      onClick={() => setUsers([{id:1, name:'john'}, {id:2, name:'jane'}])}>
        Add User
      </button> */}
    </div>
  )
}

export default App
