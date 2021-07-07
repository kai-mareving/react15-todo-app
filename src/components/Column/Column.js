import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';

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
        {/* <span className={styles.icon}>
            <i className={'fas-fa-'+this.props.icon} />
        </span> */}
        {/* <i className={'fas-fa-'+this.props.icon}></i> */}
        {/* <i className={styles.icon}>{this.props.icon}</i> */}
      </section>
    )
  }
}

export default Column;
