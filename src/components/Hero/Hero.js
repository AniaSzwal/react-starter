import React from 'react';
import PropTypes from 'prop-types';
import styles from './Hero.scss';
import ReactHtmlParser from 'react-html-parser';

const Hero = props => (
  <header className={props.bigger ? styles.componentBigger : styles.component}>
    <h2 className={styles.title}>{ReactHtmlParser(props.titleText)}</h2>
    <img className={styles.image} src={props.imgSrcHero} />
  </header>
);

Hero.propTypes = {
  titleText: PropTypes.node.isRequired,
  imgSrcHero: PropTypes.node,
  bigger: PropTypes.bool,
};

export default Hero;