import React, { useContext, useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useParams } from "react-router-dom";
import { Context } from "../context/Provider";

const Editor = () => {
  const [value, setValue] = useState("");
  const { id } = useParams();
  const { newData } = useContext(Context);

  const [filterData, setFIlterData] = useState();

  useEffect(() => {
    const filter = newData.allData.filter((data) => data.id === id);
    setFIlterData(...filter);
  }, []);

  const toolbarOptions = [
    [{ header: [1, 2, 3, 4, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ color: [] }, { background: [] }],
    ["link", "image"],
    ["clean"],
    [{ "code-block": "Code" }],
  ];
  return (
    <div className="mt-5">
      <div className="border-2 py-2 px-4">
        <p className="font-semibold">
          {filterData ? filterData?.title : "Title"}
        </p>
      </div>
      <ReactQuill
        className="bg-white"
        value={value}
        onChange={setValue}
        modules={{ toolbar: toolbarOptions }}
        placeholder="Write something..."
      />
    </div>
  );
};

export default Editor;
