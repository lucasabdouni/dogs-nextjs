'use client';

import loagout from '@/actions/logout';
import validateToken from '@/actions/valitade-token';
import React, { createContext, useContext, useEffect, useState } from 'react';

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

type IUserContext = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
};

const UserContext = createContext<IUserContext | null>(null);

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === null) {
    throw new Error('useContext deve esta dentro do provider');
  }
  return context;
};

export function UserContextProvider({
  children,
  user,
}: {
  children: React.ReactNode;
  user: User | null;
}) {
  const [userState, setUser] = useState<User | null>(user);

  useEffect(() => {
    async function validade() {
      const { ok } = await validateToken();
      if (!ok) await loagout();
    }
    if (userState) validade();
  }, [userState]);

  return (
    <UserContext.Provider value={{ user: userState, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
