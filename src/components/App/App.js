import React from 'react';
import styles from './App.scss';
import List from "../List/List";
import Hero from "../Hero/Hero"

class App extends React.Component {
  render() {
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>Welcome in my space</h1>
        <h2 className={styles.subtitle}>How can I help You?</h2>
          <List title={[' Fly Me to the moon ', <sup>soon!</sup>]} imgHero='http://uploads.kodilla.com/bootcamp/fer/11.react/space.png'>
          </List>
      </main>
    )
  }
}

export default App;
