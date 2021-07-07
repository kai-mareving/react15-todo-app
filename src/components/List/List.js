import React from 'react';
import { settings } from '../../data/dataStore';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import Column from '../Column/Column.js';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

class List extends React.Component {
  state = {
    columns: this.props.columns || [],
  }

  static propTypes = {
    /* static means that propTypes object is not available as this.propTypes for other instances and is saved as List.propTypes (class property) */
    title: PropTypes.node.isRequired,
    description: PropTypes.node,
    columns: PropTypes.array,
  }

  static defaultProps = {
    description: ReactHtmlParser(settings.defaultListDescription),
  }

  render() {
    //// const { columnTitle } = this.props;
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} image={this.props.image}/>
        <div className={styles.description}>
          {ReactHtmlParser(this.props.description)}
        </div>
        <div className={styles.columns}>

          {this.state.columns.map(({ key, ...columnProps }) => (
            <Column key={key} {...columnProps} />
          ))}

          {/* <Column columnTitle='Weepingacorn' />
          <Column columnTitle='Scorchnut' />
          <Column columnTitle='Bitterleaf' /> */}
        </div>
      </section>
    )
  }
}

export default List;
