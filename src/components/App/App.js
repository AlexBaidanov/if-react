import React, { useRef, useState } from 'react';
import { Available } from '../Main/Available';
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

  return (
    <>
      <Sprite />
      <Form setResults={handleSearch} />
      {searchClicked && (
        <section
          ref={availableHotelsRef}
          className={`homes available ${visible ? '_visible' : ''}`}
        >
          <Container>
            <h2 className="homes__title text__center title">
              Available hotels
            </h2>
            <Available className="available__hotels" hotels={results} />
            <Button className="homes__arrow--ellipse">
              <div className="homes__arrow--pike"></div>
            </Button>
          </Container>
        </section>
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
