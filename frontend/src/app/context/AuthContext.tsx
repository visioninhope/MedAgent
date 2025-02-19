import React, { createContext, useContext, useState, ReactNode } from 'react';

export type UserRole = 'user' | 'developer' | 'admin' | null;

interface AuthContextProps {
  role: UserRole;
  setRole: (role: UserRole) => void;
}

const AuthContext = createContext<AuthContextProps>({
  role: null,
  setRole: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [role, setRole] = useState<UserRole>(null);

  return (
    <AuthContext.Provider value={{ role, setRole }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
