// context/MenuContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

export type MenuItem = {
  id: string;
  name: string;
  description?: string;
  price: number;
  category: 'starter' | 'main' | 'dessert';
};

type MenuContextType = {
  menu: MenuItem[];
  addItem: (item: MenuItem) => void;
  removeItem: (id: string) => void;
  updateItem: (updated: MenuItem) => void;
  clearMenu: () => void;
};

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export const MenuProvider = ({ children }: { children: ReactNode }) => {
  const [menu, setMenu] = useState<MenuItem[]>([]);

  const addItem = (item: MenuItem) => {
    setMenu((prev) => [...prev, item]);
  };

  const removeItem = (id: string) => {
    setMenu((prev) => prev.filter((i) => i.id !== id));
  };

  const updateItem = (updated: MenuItem) => {
    setMenu((prev) => prev.map(i => (i.id === updated.id ? updated : i)));
  };

  const clearMenu = () => {
    setMenu([]);
  };

  return (
    <MenuContext.Provider value={{ menu, addItem, removeItem, updateItem, clearMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => {
  const ctx = useContext(MenuContext);
  if (!ctx) throw new Error('useMenu must be used within a MenuProvider');
  return ctx;
};