import React from 'react';
import styles from './List.scss';
import PropTypes from 'prop-types';
import { settings } from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import Column from '../Column/ColumnContainer';
import Creator from '../Creator/Creator';

const List = (props) => {
  //> console.log('List props:', props);

  return (
    <Container>
      <section className={styles.component}>
        <Hero title={props.title} image={props.image} />
        <div className={styles.description}>
          {ReactHtmlParser(props.description)}
        </div>

        <div className={styles.columns}>
          {props.columns.map(columnData => (
            <Column key={columnData.id} {...columnData} />
          ))}
        </div>

        <div className={styles.creator}>
          <Creator text={settings.columnCreatorText} action={title => props.addColumn(title)} />
        </div>

      </section>
    </Container>
  );
};

List.propTypes = {
  title: PropTypes.node.isRequired,
  description: PropTypes.node,
  image: PropTypes.string,
  columns: PropTypes.array,
  addColumn: PropTypes.func,
};

List.defaultProps = {
  description: ReactHtmlParser(settings.defaultListDescription),
};

export default List;
