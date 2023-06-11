import React, { useState } from "react";
import Input from "../components/input.js";
import helperFunctions from "../components/helperFunctions.js";

const Upload = ({ id }) => {
  const [loading, setLoading] = useState(false);

  const onChangeFile = async (event) => {
    const { files } = event.target;
    const form = new FormData();
    form.append("image", files[0]);
    setLoading(true);
    const data = await helperFunctions.uploadImage(id, form);
    setLoading(false);
  };

  return (
    <form className="col-sm-4 mt-5" method="post" encType="multipart/form-data">
      <Input
        type="file"
        handleChange={onChangeFile}
        accept="image/*"
        placeholder="Image"
      />
      <div
        className="mt-3 d-flex align-items-center gap-3"
        data-testid="loader"
        style={{ visibility: `${loading ? "visible" : "hidden"}` }}
      >
        <div className="spinner-border" role="status" />
        <div>
          <span>Uploading...</span>
        </div>
      </div>
    </form>
  );
};

export default Upload;
