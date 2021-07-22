import React from 'react';
import styles from './Home.scss';
import PropTypes from 'prop-types';
import { settings } from '../../data/dataStore';
import List from '../List/ListContainer';
import Container from '../Container/Container';
import Creator from '../Creator/Creator';
import Search from '../Search/SearchContainer';

class Home extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    subtitle: PropTypes.node,
    lists: PropTypes.array,
    addList: PropTypes.func,
  }

  render() {
    const { title, subtitle, lists, addList } = this.props;
    //> console.log('Home props:', this.props);

    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        <Search />

        {lists.map(listData => (
          <List key={listData.id} {...listData} />
        ))}

        <Container>
          <div className={styles.creator}>
            <Creator text={settings.listCreatorText} action={title => addList(title)} />
          </div>
        </Container>
      </main>
    );
  }
}

export default Home;
