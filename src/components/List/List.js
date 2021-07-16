import React from 'react';
import styles from './List.scss';
import { settings } from '../../data/dataStore';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import Hero from '../Hero/Hero';
import Column from '../Column/ColumnContainer';
import Creator from '../Creator/Creator';

class List extends React.Component {
  static propTypes = {
    /* static => {object} propTypes cant be accessed as this.propTypes for other instances & is saved as List.propTypes (class property) */
    title: PropTypes.node.isRequired,
    description: PropTypes.node,
    image: PropTypes.string,
    columns: PropTypes.array,
    addColumn: PropTypes.func,
  }

  static defaultProps = {
    description: ReactHtmlParser(settings.defaultListDescription),
  }

  render() {
    const { title, image, description, columns, addColumn } = this.props;
    //> console.log('List props:', this.props);

    return (
      <section className={styles.component}>
        <Hero title={title} image={image} />
        <div className={styles.description}>
          {ReactHtmlParser(description)}
        </div>

        <div className={styles.columns}>
          {columns.map(columnData => (
            <Column key={columnData.id} {...columnData} />
          ))}
        </div>

        <div className={styles.creator}>
          <Creator text={ settings.columnCreatorText } action={ title => addColumn(title) } />
        </div>

      </section>
    );
  }
}

export default List;
