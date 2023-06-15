import { createContext, useEffect, useState } from "react";
import { icpData, missionData, productData } from "../constants/data";

export const Context = createContext();

const Provider = ({ children }) => {
  const [active, setActive] = useState(0);
  const [customData, setCustomData] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const allData = [...icpData, ...missionData, ...productData];
  const [selectedCategory, setSelectedCategory] = useState([]);

  const [newData, setNewData] = useState({
    allData,
    icpData,
    missionData,
    productData,
  });

  useEffect(() => {
    if (active === 0) setSelectedCategory(newData.allData);
    else if (active === 1) setSelectedCategory(customData);
    else if (active === 2) setSelectedCategory(newData.icpData);
    else if (active === 3) setSelectedCategory(newData.missionData);
    else if (active === 4) setSelectedCategory(newData.productData);
  }, [active, customData, newData]);

  return (
    <Context.Provider
      value={{
        active,
        setActive,
        selectedCategory,
        setSelectedCategory,
        openModal,
        setOpenModal,
        customData,
        setCustomData,
        newData,
        setNewData,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Provider;
