import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {infoContents} from '../../data/dataStore';
import styles from './info.scss';
import PropTypes from 'prop-types';

const Info = () => (
  <Container>
    <Hero titleText={infoContents.title} imgSrcHero={infoContents.image} bigger={true} />
    <p className={styles.description}>{infoContents.description}</p>
  </Container>
);

Info.propTypes = {
  title: PropTypes.node,
  image: PropTypes.node,
  description: PropTypes.node,
};
export default Info;