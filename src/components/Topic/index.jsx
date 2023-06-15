import React, { useContext } from "react";
import Title from "./Title";
import Keyword from "./Keyword";
import { Context } from "../../context/Provider";
import { Link } from "react-router-dom";

const Topic = () => {
  const { selectedCategory, newData, setNewData, setCustomData, active } =
    useContext(Context);

  const handleDelete = (data) => {
    const filterData = selectedCategory.filter((d) => d.id !== data.id);
    if (active === 0) setNewData({ ...newData, allData: filterData });
    else if (active === 1) setCustomData(filterData);
    else if (active === 2) setNewData({ ...newData, icpData: filterData });
    else if (active === 3) setNewData({ ...newData, missionData: filterData });
    else if (active === 4) setNewData({ ...newData, productData: filterData });
  };

  return (
    <>
      <div className="py-2 px-4 border-[1px]">
        <p className="text-sm font-semibold">Recommended Topics</p>
      </div>

      {selectedCategory.length === 0 ? (
        <div className="p-4 bg-white border-[1px] flex justify-center items-center">
          <p className="font-semibold">Empty</p>
        </div>
      ) : (
        selectedCategory?.map((data) => {
          return (
            <div
              key={data.id}
              className="p-4 bg-white border-[1px] flex justify-between items-center"
            >
              <div className="w-[80%]">
                <Title {...data} />
                <div className="flex gap-5 mt-2 ">
                  {data.keyword.map((subData, index) => (
                    <Keyword key={subData.id} {...subData} index={index} />
                  ))}
                </div>
              </div>

              <div>
                <Link to={`/editor/${data.id}`}>
                  <button className="bg-orange-500 text-white py-2 px-3 ">
                    Write
                  </button>
                </Link>
                <button
                  onClick={() => handleDelete(data)}
                  className="bg-red-500 text-white py-2 px-3 ml-4"
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })
      )}
    </>
  );
};

export default Topic;
