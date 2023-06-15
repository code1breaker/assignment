import React, { useContext, useState } from "react";
import { Context } from "../../context/Provider";
import { RxCross2 } from "react-icons/rx";
import { v4 as uuidv4 } from "uuid";

const AddTopic = () => {
  const { openModal, setOpenModal, customData, setCustomData } =
    useContext(Context);
  const [inputValue, setInputValue] = useState({ topic: "", keyword: "" });
  const [tags, setTags] = useState([{ id: uuidv4(), name: "hii" }]);

  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      if (inputValue.keyword !== "") {
        setTags([...tags, { id: uuidv4(), name: inputValue.keyword }]);
        setInputValue({ ...inputValue, keyword: "" });
      }
    }
  };

  const handleDeleteTags = (tagName) => {
    const filterTags = tags.filter((tag) => tag.name !== tagName);
    setTags(filterTags);
  };

  const handleSubmit = () => {
    if (inputValue.topic !== "") {
      setCustomData([
        ...customData,
        { id: uuidv4(), title: inputValue.topic, keyword: tags },
      ]);
      setTags([]);
      setInputValue({ ...inputValue, topic: "" });
      setOpenModal(false);
    }
  };

  if (!openModal) return;

  return (
    <div
      id="container"
      onClick={(e) => e.target.id === "container" && setOpenModal(false)}
      className="bg-black bg-opacity-50 fixed inset-0 flex justify-center items-center"
    >
      <div className="rounded-lg bg-white w-[25rem] p-5 flex gap-5 flex-col">
        <p className="font-semibold text-center text-orange-500 text-xl">
          Add Topic
        </p>

        <div className="flex flex-col gap-2">
          <label className="font-semibold">Enter Topic</label>
          <input
            className="outline-none border-2 py-1 px-3 text-gray-500 font-semibold"
            type="text"
            placeholder="Enter Topic"
            value={inputValue.topic}
            onChange={(e) =>
              setInputValue({ ...inputValue, topic: e.target.value })
            }
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-semibold">Enter Keyword</label>
          <input
            className="outline-none border-2 py-1 px-3 text-gray-500 font-semibold"
            type="text"
            placeholder="Enter Keyword"
            value={inputValue.keyword}
            onChange={(e) =>
              setInputValue({ ...inputValue, keyword: e.target.value })
            }
            onKeyUp={(e) => handleKeyUp(e)}
          />

          <div className="flex gap-2 flex-wrap">
            {tags.map((tag) => (
              <div
                key={tag.id}
                className="bg-orange-500 rounded-lg px-1 text-white flex justify-between items-center"
              >
                <p className="px-3 py-1">{tag.name}</p>
                <RxCross2
                  onClick={() => handleDeleteTags(tag.name)}
                  className="text-lg font-semibold border-2 text-blac rounded-full cursor-pointer"
                />
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={() => {
            handleSubmit();
          }}
          className="rounded-full bg-orange-500 text-white text-lg py-1"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddTopic;
