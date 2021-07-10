import React from 'react';
import styles from './App.scss';
import { pageContents, settings, listData } from '../../data/dataStore';
import PropTypes from 'prop-types';
import List from '../List/List';
import Creator from '../Creator/Creator';

class App extends React.Component {
  state = {
    lists: [listData],
  }

  static propTypes = {
    lists: PropTypes.array,
  }

  addList(title) {
    this.setState(state => (
      {
        lists: [
          ...state.lists,
          {
            key: state.lists.length ? state.lists[state.lists.length - 1].key + 1 : 0,
            title,
            description: 'My custom list:',
            image: 'https://i.imgur.com/VHFoGGO.jpg',
            columns: []
          }
        ]
      }
      ));
    }

  render() {
    //> console.log(this.state);

    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{pageContents.title}</h1>
        <h2 className={styles.subtitle}>{pageContents.subtitle}</h2>

        {this.state.lists.map(({ key, ...singleList }) => (
          <List key={key} {...singleList} />
        ))}

        {/* ////<List {...listData } /> */}
        <div className={styles.creator}>
          <Creator text={settings.listCreatorText} action={title => this.addList(title)}/>
        </div>

      </main>
    )
  }
}

export default App;
