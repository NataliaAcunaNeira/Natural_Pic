import { useContext } from "react";
import { PhotoContext } from "../context/PhotoContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Card from "../components/card";

const Favorites = () => {
  const { liked } = useContext(PhotoContext);

  return (
    <div className="App" style={{ textAlign: 'center', fontFamily: 'Roboto' }}>
      <h1>Fotos favoritas</h1>
      <div className="p-3 gallery grid-columns-4" style={{ padding: '30px' }}>
        {liked.length ? liked.map((photo) => (
          <Card key={photo.id} photo={photo} />
        )) : (
          <div className="text-center">
            <h3>No existen fotos favoritas<FontAwesomeIcon icon={faTimes} style={{ fontSize: '2em', color: 'red' }} /></h3>
    
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
