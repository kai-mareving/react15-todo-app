import React from 'react';
import styles from './App.scss';
import PropTypes from 'prop-types';
import List from '../List/ListContainer';
// import Creator from '../Creator/Creator';

class App extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    subtitle: PropTypes.node,
    lists: PropTypes.array,
  }

  /* addList(title) {
    this.setState(state => (
      {
        lists: [
          ...state.lists,
          {
            key: state.lists.length ? state.lists[state.lists.length - 1].key + 1 : 0,
            title,
            description: 'My custom list:',
            image: 'https://i.imgur.com/VHFoGGO.jpg',
            columns: [],
          },
        ],
      }
    ));
  } */

  render() {
    const { title, subtitle, lists } = this.props;
    //> console.log('App props:', this.props);

    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>

        {lists.map(listData => (
          <List key={listData.id} {...listData} />
        ))}

        {/* <div className={styles.creator}>
          <Creator text={settings.listCreatorText} action={title => this.addList(title)} />
        </div> */}

      </main>
    );
  }
}

export default App;
