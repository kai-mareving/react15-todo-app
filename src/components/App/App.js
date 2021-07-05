import React from 'react';
import styles from './App.scss';
import List from '../List/List.js';

class App extends React.Component {
  render() {
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>React & Webpack</h1>
        <h2 className={styles.subtitle}>TO-DO List</h2>
        <List />
      </main>
    )
  }
}

export default App;
