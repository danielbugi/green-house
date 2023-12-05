const { createContext, useContext, useState, useEffect } = require('react');

const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [cartShown, setCartShown] = useState(false);

  useEffect(() => {
    if (cartShown) {
      document.body.classList.add('hide-cart');
    } else {
      document.body.classList.remove('hide-cart');
    }
  }, [cartShown]);

  const toggleCart = () => {
    setCartShown(!cartShown);
  };

  return (
    <SidebarContext.Provider
      value={{
        sidebarOpen,
        setSidebarOpen,
        cartShown,
        setCartShown,
        toggleCart,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebarContext = () => {
  return useContext(SidebarContext);
};
