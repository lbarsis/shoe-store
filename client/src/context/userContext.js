import { createContext, useState, useEffect } from "react";

const UserContext = createContext(null)

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      } 
    });
  }, []);

 
  return (
    <UserContext.Provider value={ {user, setUser}}>
      {children}
    </UserContext.Provider>
  )

}

export { UserContext, UserProvider };