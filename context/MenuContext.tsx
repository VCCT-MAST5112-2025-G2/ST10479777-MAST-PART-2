import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define menu item structure
export type MenuItem = {
  id: string;
  name: string;
  description?: string; // optional description
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

interface MenuProviderProps {
  children: ReactNode;
}

export const MenuProvider: React.FC<MenuProviderProps> = ({ children }) => {
  const [menu, setMenu] = useState<MenuItem[]>([]);

  //  Add new menu item
  const addItem = (item: MenuItem) => {
    setMenu((prev) => [...prev, item]);
  };

  // Remove menu item
  const removeItem = (id: string) => {
    setMenu((prev) => prev.filter((i) => i.id !== id));
  };

  //  Update existing item
  const updateItem = (updated: MenuItem) => {
    setMenu((prev) => prev.map((i) => (i.id === updated.id ? updated : i)));
  };

  //  Clear menu completely
  const clearMenu = () => {
    setMenu([]);
  };

  return (
    <MenuContext.Provider
      value={{
        menu,
        addItem,
        removeItem,
        updateItem,
        clearMenu,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

//  Safe hook to use the context
export const useMenu = (): MenuContextType => {
  const ctx = useContext(MenuContext);
  if (!ctx) {
    throw new Error('useMenu must be used within a MenuProvider');
  }
  return ctx;
};