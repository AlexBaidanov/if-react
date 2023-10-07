import React from 'react';
import { Button } from '../Button';
import { Container } from '../Container';
import { Homes } from '../HomesSection';

import './App.css';
import '../HomesSection/Homes.css';

export const App = () => {
  return (
    <>
      <section className="homes">
        <Container>
          <h2 className="homes__title text__center title">
            Homes guests loves
          </h2>
          <Homes />
          <Button />
        </Container>
      </section>
    </>
  );
};
