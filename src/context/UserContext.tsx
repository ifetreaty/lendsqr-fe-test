import { createContext, useContext, useState } from "react";
import { IUserData } from "../types/userData";

interface IUserContextValues {
  selectedUser: IUserData | null;
  setSelectedUser: (user: IUserData) => void;
}

const UserContext = createContext<IUserContextValues | undefined>(undefined);

export function useUserContext() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
}

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [selectedUser, setSelectedUser] = useState<IUserData | null>(null);

  return (
    <UserContext.Provider value={{ selectedUser, setSelectedUser }}>
      {children}
    </UserContext.Provider>
  );
}
