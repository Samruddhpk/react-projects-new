// import
import { createContext, useContext, useState } from "react";

// createContext
const AppContext = createContext();

// create Provider
export const AppProvider = ({ children }) => {
  // states
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [pageId, setPageId] = useState(null);

  // functions

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  //   send
  return (
    <AppContext.Provider
      value={{ isSidebarOpen, openSidebar, closeSidebar, pageId, setPageId }}
    >
      {children}
    </AppContext.Provider>
  );
};

// create global context
export const useGlobalContext = () => {
  return useContext(AppContext);
};
