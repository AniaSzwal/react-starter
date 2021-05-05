import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {FAQContents} from '../../data/dataStore';
import styles from './FAQ.scss';
import PropTypes from 'prop-types';

const FAQ = () => (
  <Container>
    <Hero titleText={FAQContents.title} imgSrcHero={FAQContents.image} bigger={true} />
    <p className={styles.description}> {FAQContents.description} </p>
  </Container>
);

FAQ.propTypes = {
  title: PropTypes.node,
  image: PropTypes.node,
  description: PropTypes.node,
};
export default FAQ;