import React from 'react';
import { settings } from '../../data/dataStore';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';

const Info = () => {
  return (
    <Container>
      <Hero title={settings.info.title} image={settings.info.image} />
      <p>{settings.info.text}</p>
    </Container>
  );
};

export default Info;
