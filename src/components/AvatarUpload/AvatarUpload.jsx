import classes from "./AvatarUpload.module.css";
import { useState } from "react";

const AvatarUpload = (props) => {
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("No file chosen");

  const handleUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const imageString = e.target.result;

        setImage(imageString);
        props.onUpload(imageString);
      };
      reader.readAsDataURL(file);

      // Update the file name
      setFileName(file.name);
    }
  };

  return (
    <div className={classes.avatarUpload}>
      <div
        className={classes.preview}
        style={{
          backgroundImage: `url(${image})`,
        }}
      />

      <div className={classes.info}>
        <input
          type="file"
          accept="image/*"
          onChange={handleUpload}
          className={classes.upload}
        />
        <label>{fileName}</label>
      </div>
    </div>
  );
};
export default AvatarUpload;
