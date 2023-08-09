import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);

        let parsedItem;
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem)
          setItem(parsedItem)
        }
        setLoading(false); //decir que ya se cargó
      } catch (error) {
        setError(true); //Hubo un error al cargar los TODOs
        setLoading(false); //decir que ya se cargó
      }
    }, 2000)
  }, []);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify([...item, newItem]));
    setItem([...item, newItem]);
  }

  return {
    item,
    saveItem,
    loading,
    error
  };
}

export { useLocalStorage };