import React, { useState, useEffect } from 'react';
import {
  Container, Row, Col
} from 'react-bootstrap';
import $ from 'jquery';
import axios from 'axios';
import cover from '../imgs/cover.jpg';
import spiral from '../imgs/spiral.jpg';
import mustard from '../imgs/mustard.jpg';
import pink from '../imgs/pink.jpg';
import wave from '../imgs/wave.jpg';
import photo from '../imgs/photo.jpg';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import InnerImageZoom from 'react-inner-image-zoom';

const ProductOV = () => {
  const [selected, setSelected] = useState(0);
  const [cards, setCards] = useState([cover, spiral, mustard, pink, wave, photo]);
  const [zoomed, setZoomed] = useState(false);

  return (
    <div className="ov">
      <InnerImageZoom
      src={cards[selected]}
      zoomSrc={cards[selected]}
      height={560}
      width={selected === 5 ? 500: 380}
      hasSpacer={true}/>
      <div className="card-container">
      {
        cards.map((card, i) => (
          <img
            src={card}
            key={i}
            className="cards"
            onClick={(e) => {setSelected(i)}}/>
        ))
      }
      </div>
    </div>
  );
}

export default ProductOV;
