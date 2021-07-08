import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';
// import Creator from '../Creator/Creator';

class Column extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string,
    cards: PropTypes.array,
  }

  render() {
    console.log(this.props);
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>{this.props.title}</h3>
        <span className={styles.icon}><Icon name={this.props.icon}/></span>
      </section>
    )
  }
}

export default Column;
