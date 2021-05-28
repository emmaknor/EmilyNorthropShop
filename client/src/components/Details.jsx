import React, { useState, useEffect } from 'react';
import {
  Container, Row, Col
} from 'react-bootstrap';
import axios from 'axios';
import { Button } from 'react-bootstrap';

const Details = ({stock, setCount}) => {


  return (
    <div className="ov">
      <div className="title">Affirmation Card Deck</div>
      <div className="price">$30.00</div>
      <div className="proceeds">all proceeds will be donated to The Trans Housing Coalation</div>
      <div className="description">Deck of 36 cards to encourage self-love, inner peace, honoring yourself through rest, and embracing an empathetic perspective.</div>
      <div className="credit">Design by Emily Northrop
      <div className="socials">
        <div className="fb">
          <a href="https://www.facebook.com/northropphotography" target="_blank"><svg width="15" height="20" viewBox="0 0 7 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 4.59024H1.41684V3.20035C1.41684 2.58433 1.41684 1.6372 1.87885 1.05199C2.13247 0.703432 2.47034 0.424892 2.86087 0.242419C3.2514 0.0599464 3.68184 -0.0204979 4.11191 0.00861065C4.97587 -0.0292053 5.84076 0.0576732 6.67993 0.266568L6.32187 2.38798C5.94529 2.2837 5.55745 2.22552 5.16684 2.21472C4.60858 2.21472 4.11191 2.41493 4.11191 2.98474V4.59024H6.39887L6.24102 6.66544H4.11191V13.869H1.41684V6.66544H0V4.59024Z" fill="black"></path>
          </svg>
          </a>
        </div>

        <div className="ig">
          <a href="https://www.instagram.com/emilynorthrop/" target="_blank"><svg width="17" height="17" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M7.5007 0C5.46381 0 5.20817 0.00890629 4.40818 0.045293C3.60973 0.0818555 3.06475 0.208242 2.58785 0.39375C2.09455 0.585293 1.67613 0.841523 1.25924 1.25859C0.842051 1.67543 0.585762 2.09391 0.393575 2.58703C0.207657 3.06404 0.0810936 3.6092 0.0451757 4.40736C0.00937488 5.20734 0 5.46316 0 7.50006C0 9.53695 0.00908207 9.79178 0.045293 10.5918C0.0820313 11.3903 0.208418 11.9353 0.39375 12.4121C0.585469 12.9054 0.841699 13.3239 1.25877 13.7408C1.67549 14.1579 2.09391 14.4148 2.58691 14.6064C3.0641 14.7918 3.60926 14.9183 4.40754 14.9548C5.20758 14.9912 5.46305 15.0001 7.49977 15.0001C9.53684 15.0001 9.79166 14.9912 10.5917 14.9548C11.3901 14.9183 11.9357 14.7918 12.413 14.6064C12.9061 14.4148 13.3239 14.1579 13.7406 13.7408C14.1578 13.3239 14.4141 12.9054 14.6062 12.4123C14.7906 11.9353 14.9172 11.3901 14.9547 10.5919C14.9906 9.79195 15 9.53695 15 7.50006C15 5.46316 14.9906 5.20752 14.9547 4.40754C14.9172 3.60908 14.7906 3.06404 14.6062 2.58721C14.4141 2.09391 14.1578 1.67543 13.7406 1.25859C13.3234 0.841406 12.9062 0.585117 12.4125 0.39375C11.9343 0.208242 11.389 0.0818555 10.5906 0.045293C9.79055 0.00890629 9.5359 0 7.49836 0H7.5007ZM7.25057 1.35147H7.25074L7.5007 1.35152C9.5032 1.35152 9.74057 1.35873 10.5313 1.39465C11.2626 1.42811 11.6595 1.55027 11.9239 1.65293C12.2739 1.78887 12.5234 1.95141 12.7857 2.21391C13.0482 2.47641 13.2108 2.72643 13.347 3.07641C13.4497 3.34049 13.572 3.73734 13.6053 4.46859C13.6412 5.25926 13.6491 5.49674 13.6491 7.49836C13.6491 9.49992 13.6412 9.7374 13.6053 10.5281C13.5718 11.2593 13.4497 11.6562 13.347 11.9203C13.2111 12.2702 13.0482 12.5195 12.7857 12.7818C12.5232 13.0443 12.274 13.2069 11.9239 13.3428C11.6598 13.4459 11.2626 13.5678 10.5313 13.6012C9.74074 13.6372 9.5032 13.645 7.5007 13.645C5.49803 13.645 5.26066 13.6372 4.47006 13.6012C3.73881 13.5674 3.3419 13.4453 3.0774 13.3426C2.72736 13.2067 2.47734 13.0441 2.21484 12.7816C1.95234 12.5191 1.78986 12.2698 1.65363 11.9196C1.55098 11.6556 1.42863 11.2587 1.39535 10.5274C1.35938 9.73682 1.35223 9.49928 1.35223 7.49648C1.35223 5.49363 1.35938 5.25738 1.39535 4.46672C1.42875 3.73547 1.55098 3.33861 1.65363 3.07424C1.78957 2.7242 1.95234 2.47424 2.21484 2.21174C2.47734 1.94924 2.72736 1.7867 3.0774 1.65047C3.34178 1.54734 3.73881 1.42547 4.47006 1.39184C5.16193 1.36061 5.43006 1.35123 6.82787 1.34965V1.35152C6.95848 1.35135 7.09899 1.35141 7.25057 1.35147ZM10.6042 3.49658C10.6042 2.99953 11.0073 2.59688 11.5042 2.59688V2.59658C12.0011 2.59658 12.4042 2.99971 12.4042 3.49658C12.4042 3.99346 12.0011 4.39658 11.5042 4.39658C11.0073 4.39658 10.6042 3.99346 10.6042 3.49658ZM7.50053 3.64846C5.37357 3.64852 3.6491 5.37305 3.6491 7.50006C3.6491 9.62713 5.37363 11.3509 7.5007 11.3509C9.62777 11.3509 11.3517 9.62713 11.3517 7.50006C11.3517 5.37299 9.6276 3.64846 7.50053 3.64846ZM10.0007 7.50006C10.0007 6.11924 8.88135 5.00004 7.5007 5.00004C6.11988 5.00004 5.00068 6.11924 5.00068 7.50006C5.00068 8.8807 6.11988 10.0001 7.5007 10.0001C8.88135 10.0001 10.0007 8.8807 10.0007 7.50006Z" fill="black"></path>
          </svg>
          </a>
        </div>
        <div className="li">

        </div>
        <a href="https://www.linkedin.com/in/emilynorthrop/" target="_blank"><svg width="17" height="17" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.64334 11.0341H0.310005V3.54076H2.64334V11.0341ZM1.41334 2.60409H1.39667C1.218 2.61742 1.0385 2.59366 0.869449 2.53432C0.700393 2.47498 0.545429 2.38134 0.414282 2.25927C0.283134 2.1372 0.178635 1.98934 0.107344 1.82497C0.036053 1.66059 -0.000491084 1.48326 4.98345e-06 1.30409C4.98345e-06 0.564092 0.563338 0.00409261 1.43 0.00409261C1.60953 -0.0101492 1.79005 0.0128711 1.96025 0.0717087C2.13046 0.130546 2.28666 0.223931 2.41906 0.346001C2.55146 0.468071 2.6572 0.616192 2.72963 0.781066C2.80207 0.94594 2.83965 1.12401 2.84 1.30409C2.84 2.03076 2.29 2.60409 1.41334 2.60409ZM12 11.0341H9.33333V7.15742C9.33333 6.15742 8.92 5.45076 8 5.45076C7.71925 5.45073 7.44565 5.53934 7.2182 5.70393C6.99076 5.86853 6.82107 6.10073 6.73334 6.36742C6.67759 6.56563 6.65839 6.77234 6.67667 6.97742V11.0341H4.07C4.07 11.0341 4.10334 4.16742 4.07 3.54409H6.69667V4.73076C6.85334 4.21742 7.69667 3.48409 9.03 3.48409C10.6967 3.48409 12 4.56076 12 6.88076V11.0341Z" fill="black"></path>
        </svg>
        </a>
        </div>
      </div>
      {
        stock > 0 ? <Button
        variant="outline-secondary" className="add-to-cart"
        onClick={(e) => {setCount(1)}}
        >ADD TO CART</Button>
        : <Button
        variant="outline-secondary"
        >OUT OF STOCK</Button>
      }
      <div className="about">
        <div className="about-title">About The Trans Housing Coalation</div>
        The Trans Housing Coalation provides financial support for Black trans women and non-binary folks in Atlanta, several of which are sex workers or homeless. This project has implemented a Housing First model to provide permanent housing.
        <div className="link">Visit the <a href="http://www.transhousingcoalition.org" target="_blank" rel="noreferrer noopener">website</a> to learn more!</div>
        </div>
    </div>
  );
}

export default Details;