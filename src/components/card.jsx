/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { PhotoContext } from '../context/PhotoContext'; 
import IconHeart from "./IconHeart";  
import "./Card.css";

export const Card = ({photo}) => {
  const {toggleLike} = useContext(PhotoContext);
  
  return (
    <div onClick={() => toggleLike(photo.id)} className="card" key={photo.id}>
      <div className="badge">{photo.liked ? <IconHeart filled/> : <IconHeart />}</div>
      <img className='card-img' src={photo.src.medium} alt={photo.title} />
      <div className="card-body">
        <p className="card-title">{photo.alt}</p>
        <h5 className="card-text">Author: {photo.photographer}</h5>
      </div>
    </div>
  );
}

export default Card;