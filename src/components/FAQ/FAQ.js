import React from 'react';
import { settings } from '../../data/dataStore';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';

const FAQ = () => {
  return (
    <Container>
      <Hero title={settings.faq.title} image={settings.faq.image} />
      <p>{settings.faq.text}</p>
    </Container>
  );
};

export default FAQ;