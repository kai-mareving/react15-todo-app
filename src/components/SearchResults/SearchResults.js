import React from 'react';
import styles from './SearchResults.scss';
import PropTypes from 'prop-types';
import { settings } from '../../data/dataStore';
import Card from '../Card/Card';
import Icon from '../Icon/Icon';

const SearchResults = (props) => {
  console.log('SearchResults props:', props);

  return (
    <section className={styles.component}>

      <h3 className={styles.title}>
        {props.title}
        <span className={styles.icon}>
          <Icon name={props.icon} />
        </span>
      </h3>

      <div className={styles.cards}>
        {props.cards.map(cardData => (
          <Card key={cardData.id} {...cardData} />
        ))}
      </div>
    </section>
  );
};

SearchResults.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.node,
  cards: PropTypes.array,
  // addCard: PropTypes.func,
};

SearchResults.defaultProps = {
  icon: settings.defaultColumnIcon,
};

export default SearchResults;
