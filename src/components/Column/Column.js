import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import { settings } from '../../data/dataStore';
import Icon from '../Icon/Icon';
import Card from '../Card/Card';
import Creator from '../Creator/Creator';

const Column = (props) => {
  //> console.log('Column props:', props);

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

      <div className={styles.creator}>
        <Creator text={settings.cardCreatorText} action={title => props.addCard(title)} />
      </div>

    </section>
  );
};

Column.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.node,
  cards: PropTypes.array,
  addCard: PropTypes.func,
};

Column.defaultProps = {
  icon: settings.defaultColumnIcon,
};

export default Column;
