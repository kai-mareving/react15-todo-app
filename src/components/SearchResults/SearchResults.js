import React from 'react';
import styles from './SearchResults.scss';
import PropTypes from 'prop-types';
import { settings } from '../../data/dataStore';
import {Link} from 'react-router-dom';
import Card from '../Card/Card';
import Icon from '../Icon/Icon';

const SearchResults = ({value, cards, title, icon}) => {
  //> console.log('SearchResults props:', {value, title, icon});

  return (
    <Link to={`/search/${value}`} className={styles.link}>
      <section className={styles.component}>

        <h3 className={styles.title}>
          {title}
          <span className={styles.icon}>
            <Icon name={icon} />
          </span>
        </h3>

        <div className={styles.cards}>
          {cards.map(cardData => (
            <Card key={cardData.id} {...cardData} />
          ))}
        </div>
      </section>
    </Link>
  );
};

SearchResults.propTypes = {
  value: PropTypes.node,
  title: PropTypes.string,
  icon: PropTypes.node,
  cards: PropTypes.array,
};

SearchResults.defaultProps = {
  icon: settings.defaultColumnIcon,
};

export default SearchResults;
