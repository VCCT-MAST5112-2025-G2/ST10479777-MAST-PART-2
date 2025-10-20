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
  order: MenuItem[];
  addItem: (item: MenuItem) => void;
  removeItem: (id: string) => void;
  updateItem: (updated: MenuItem) => void;
  clearMenu: () => void;
  addToOrder: (item: MenuItem) => void;
  removeFromOrder: (id: string) => void;
  clearOrder: () => void;
};

const MenuContext = createContext<MenuContextType | undefined>(undefined);

interface MenuProviderProps {
  children: ReactNode;
}

export const MenuProvider: React.FC<MenuProviderProps> = ({ children }) => {
  const [menu, setMenu] = useState<MenuItem[]>([]);
  const [order, setOrder] = useState<MenuItem[]>([]);

  // MENU HANDLERS
  const addItem = (item: MenuItem) => {
    setMenu((prev) => [...prev, item]);
  };

  const removeItem = (id: string) => {
    setMenu((prev) => prev.filter((i) => i.id !== id));
  };

  const updateItem = (updated: MenuItem) => {
    setMenu((prev) => prev.map((i) => (i.id === updated.id ? updated : i)));
  };

  const clearMenu = () => {
    setMenu([]);
  };

  // ORDER HANDLERS
  const addToOrder = (item: MenuItem) => {
    setOrder((prev) => [...prev, item]);
  };

  const removeFromOrder = (id: string) => {
    setOrder((prev) => prev.filter((i) => i.id !== id));
  };

  const clearOrder = () => {
    setOrder([]);
  };

  return (
    <MenuContext.Provider
      value={{
        menu,
        order,
        addItem,
        removeItem,
        updateItem,
        clearMenu,
        addToOrder,
        removeFromOrder,
        clearOrder,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = (): MenuContextType => {
  const ctx = useContext(MenuContext);
  if (!ctx) {
    throw new Error('useMenu must be used within a MenuProvider');
  }
  return ctx;
};