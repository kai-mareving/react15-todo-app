import React from 'react';
import styles from './List.scss';
import { settings } from '../../data/dataStore';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import Hero from '../Hero/Hero';
import Column from '../Column/Column';
import Creator from '../Creator/Creator';

class List extends React.Component {
  state = {
    columns: this.props.columns || [],
  }

  static propTypes = {
    /* static => {object} propTypes cant be accessed as this.propTypes for other instances & is saved as List.propTypes (class property) */
    title: PropTypes.node.isRequired,
    description: PropTypes.node,
    columns: PropTypes.array,
    image: PropTypes.string,
    addColumn: PropTypes.func,
  }

  static defaultProps = {
    description: ReactHtmlParser(settings.defaultListDescription),
  }

  addColumn(title) {
    this.setState(state => (
      {
        columns: [
          ...state.columns,
          {
            key: state.columns.length ? state.columns[state.columns.length - 1].key + 1 : 0,
            title,
            icon: 'list-alt',
            cards: []
          }
        ]
      }
      ));
    }

    render() {
      //> console.log(this.state.columns);

      return (
        <section className={styles.component}>
          <Hero titleText={this.props.title} image={this.props.image} />
          <div className={styles.description}>
            {ReactHtmlParser(this.props.description)}
          </div>

          <div className={styles.columns}>
            {this.state.columns.map(({ key, ...columnProp }) => (
              <Column key={key} {...columnProp} />
            ))}
          </div>

          <div className={styles.creator}>
            <Creator text={settings.columnCreatorText} action={title => this.addColumn(title)}/>
          </div>

        </section>
    )
  }
}

export default List;
