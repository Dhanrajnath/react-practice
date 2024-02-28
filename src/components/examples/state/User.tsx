import { useState } from "react";

export type AuthUser = {
    name: string;
    email: string;
}

export const User = () => {
    // const [user, setUser] = useState<AuthUser | null>(null)
    const [user, setUser] = useState<AuthUser>({} as AuthUser)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const handleLogin = () => {
        setIsLoggedIn(true)
        setUser({
            name: 'Dhanraj',
            email: 'dhanraj@gmail.com'
        })
    }
    const handleLogout = () => {
        setIsLoggedIn(false)
    }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <br />
            <button onClick={handleLogout}>Logout</button>
            <div>User is {isLoggedIn ? 'logged in' : 'logged out'}</div>
            <br />
            <div>User name is {isLoggedIn ? user?.name : 'default'}</div>
            <div>User email is {isLoggedIn ? user?.email : 'default'}</div>
        </div>
    )
}