import { createContext, useContext, useState } from 'react';

const SidebarContext = createContext();

export const useSidebar = () => useContext(SidebarContext);

export function SidebarProvider({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Function to toggle the sidebar state
  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  return (
    <SidebarContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
}
