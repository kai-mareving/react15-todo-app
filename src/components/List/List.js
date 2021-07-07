import React from 'react';
import { settings } from '../../data/dataStore';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import Column from '../Column/Column.js';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

class List extends React.Component {
  static propTypes = {
    /* static meand that propTypes object is not available as this.propTypes for other instances and is saved as List.propTypes (class property) */
    title: PropTypes.node.isRequired,
    description: PropTypes.node,
    columns: PropTypes.array,
  }

  static defaultProps = {
    description: settings.defaultListDescription,
  }

  render() {
    // const { title } = this.props;
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} imageSrc={this.props.image}/>
        <div className={styles.description}>
          {ReactHtmlParser(this.props.description)}
        </div>
        <div className={styles.columns}>
          <Column columnTitle='Weepingacorn' />
          <Column columnTitle='Scorchnut' />
          <Column columnTitle='Bitterleaf' />
        </div>
      </section>
    )
  }
}

export default List;
