import React from 'react';
import styles from './Hero.scss';

class Hero extends React.Component {
  render() {
    return (
      <header className={styles.component}>
        <h2 className={styles.title}>Things to do</h2>
        <img className={styles.image} src="https://i.imgur.com/VHFoGGO.jpg"></img>
      </header>
    )
  }
}

export default Hero;
