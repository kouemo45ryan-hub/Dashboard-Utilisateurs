import { useState } from 'react'
import {useUser} from './store/userStore'
import './App.css'
import { useUsers } from './hooks/useUser'
import { UserList } from './hooks/users/usersList'
import { UserDetails } from './hooks/users/userDetails'
function App() {

  const {selectedUser, setSelectedUser} = useUser()

  const {data: users, isLoading, error} = useUsers()

  if(isLoading) return <p>Chargement...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <div className=" flex gap-4 border border-gray-200 rounded-lg p-4 shadow-sm bg-slate-950">
      <UserList users={users} onUserSelect={setSelectedUser}/>
      {selectedUser && <UserDetails user = {selectedUser} onClose = {()=> setSelectedUser(null)}/>}
    </div>
  )
}

export default App
