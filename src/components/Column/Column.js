import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import { settings } from '../../data/dataStore';
import Icon from '../Icon/Icon';
import Card from '../Card/Card';
import Creator from '../Creator/Creator';

class Column extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    icon: PropTypes.node,
    cards: PropTypes.array,
    addCard: PropTypes.func,
  }

  static defaultProps = {
    icon: settings.defaultColumnIcon,
  }

  render() {
    const { title, icon, cards, addCard } = this.props;
    console.log('Column props:', this.props);

    return (
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

        <div className={styles.creator}>
          <Creator text={settings.cardCreatorText} action={title => addCard(title)} />
        </div>

      </section>
    );
  }
}

export default Column;
