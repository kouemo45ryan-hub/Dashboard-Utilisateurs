import { create } from "zustand";

export const useUser = create ((set) =>({
    users : [],
    loading : false,
    error: null,
    selectedUser : null,

    setUsers : (users) => set({users}),
    setLoading: (loading) => set({loading}),
    setError : (error) => set({error}),
    setSelectedUser : (user) => set( {selectedUser : user})
}))
