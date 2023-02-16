import { useState, useEffect } from "react";

function usePersistentState(key: string, initialState: any) {

  const [state, setState] = useState(() => {
    const storageThem = localStorage.getItem(key);
    if (storageThem) {
      return JSON.parse(storageThem);
    }else{
        return initialState;
    }
  });

  useEffect(() => {
    console.log("MUDOU", key, initialState);
    localStorage.setItem(key, JSON.stringify(initialState));
  }, [key, state]);

  return [state, setState];
}

export default usePersistentState;
