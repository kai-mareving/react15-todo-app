import React from 'react';
import styles from './App.scss';
import List from '../List/List.js';

class App extends React.Component {
  render() {
    const { imageSrc } = this.props;

    return (
      <main className={styles.component}>
        <h1 className={styles.title}>React & Webpack</h1>
        <h2 className={styles.subtitle}>module 15</h2>
        <List title={['tempus bibendum', <sup key='1'> justo!</sup>]} imageSrc='https://i.imgur.com/VHFoGGO.jpg'>
          <p style={{fontSize: '20px'}}>This is a placeholder for the list of tasks I plan to do.</p>
          <ul style={{listStyleType: 'none', color: '#ADFF2F'}}>
            <li>Vestibulum a sodales</li>
            <li>gravida facilisis</li>
            <li>consequat metus</li>
            <li>placerat fringilla risus</li>
          </ul>
        </List>
      </main>
    )
  }
}

export default App;
