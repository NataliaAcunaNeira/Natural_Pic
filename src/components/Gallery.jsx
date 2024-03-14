import { useContext } from "react";
import { PhotoContext } from "../context/PhotoContext";
import Card from "./card";

const Gallery = () => {
  const { photos, toggleLike } = useContext(PhotoContext);
  
  return (
    <div className="gallery grid-columns-5 p-3">
      {photos.map((photo) => (
        <Card onClick={() => toggleLike(photo.id)}  key={photo.id} photo={photo} />
      ))}
    </div>
  );
};
export default Gallery;