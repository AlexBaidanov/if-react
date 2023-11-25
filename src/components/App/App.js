import React, { Suspense, useRef, useState } from 'react';
import { Button } from '../Button';
import { Container } from '../Container';
import { Form } from '../Header/Form';
import { Homes } from '../Main/HomesSection';
import { Sprite } from '../Sprite';

import './App.css';
import '../Main/HomesSection/Homes.css';
import '../Button/Button.css';
import '../Header/Form/Form.css';

export const App = () => {
  const [results, setResults] = useState([]);
  const [visible, setVisible] = useState(false);
  const [searchClicked, setSearchClicked] = useState(false);

  const availableHotelsRef = useRef(null);

  const handleSearch = (results) => {
    setResults(results);
    setVisible(true);
    setSearchClicked(true);

    availableHotelsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const AvailableHotels = React.lazy(
    () =>
      new Promise((resolve) =>
        setTimeout(() => resolve(import('../Main/Available/Available')), 1000),
      ),
  );

  const loaderGifUrl =
    'https://media2.giphy.com/media/jAYUbVXgESSti/giphy.gif?cid=ecf05e47iif6d8x0atk8fantjmfqznd1jds7y53o1p6674ef&ep=v1_gifs_search&rid=giphy.gif&ct=g';

  return (
    <>
      <Sprite />
      <Form setResults={handleSearch} />
      {searchClicked && (
        <Suspense
          fallback={
            <img
              src={loaderGifUrl}
              alt="Loading"
              style={{ width: '100%', height: 'auto' }}
            />
          }
        >
          <section
            ref={availableHotelsRef}
            className={`homes available ${visible ? '_visible' : ''}`}
          >
            <Container>
              <h2 className="homes__title text__center title">
                Available hotels
              </h2>
              <AvailableHotels className="available__hotels" hotels={results} />
              <Button className="homes__arrow--ellipse">
                <div className="homes__arrow--pike"></div>
              </Button>
            </Container>
          </section>
        </Suspense>
      )}{' '}
      <section className="homes">
        <Container>
          <h2 className="homes__title text__center title">
            Homes guests loves
          </h2>
          <Homes className="homes__variants" />
          <Button className="homes__arrow--ellipse">
            <div className="homes__arrow--pike"></div>
          </Button>
        </Container>
      </section>
    </>
  );
};
