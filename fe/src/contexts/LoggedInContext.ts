import { create } from 'zustand'

const useLoggedIn = create((set) => ({
    loggedIn: false,
    updateloggedIn: (newLoggedIn:boolean)=>set(()=>({loggedIn:newLoggedIn}))
}))

export {useLoggedIn}