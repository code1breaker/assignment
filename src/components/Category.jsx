import React, { useContext } from "react";
import { categoriesData } from "../constants/data";
import { Context } from "../context/Provider";
import AddTopic from "./modal/AddTopic";

const Category = () => {
  const { active, setActive, setOpenModal } = useContext(Context);

  return (
    <>
      <p className="font-semibold text-xl">Categories</p>
      <div className="flex justify-between items-center">
        <ul className="flex font-semibold p-6">
          {categoriesData.map(({ id, name }, index) => (
            <li
              key={id}
              className={`px-6 cursor-pointer ${
                active === index
                  ? "border-b-4 border-b-red-500 text-red-500"
                  : ""
              }`}
              onClick={() => setActive(index)}
            >
              {name}
            </li>
          ))}
        </ul>

        <div className="bg-orange-500 text-white py-2 px-3">
          <button onClick={() => setOpenModal(true)}>Add Topic</button>
        </div>

        <AddTopic />
      </div>
    </>
  );
};

export default Category;
