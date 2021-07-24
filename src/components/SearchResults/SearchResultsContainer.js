import {connect} from 'react-redux';
import SearchResults from '../SearchResults/SearchResults';
import { getCardsForSearchResults } from '../../redux/cardsRedux';

const mapStateToProps = (state, props) => {
  const id = props.match.params.id;
  const filteredCards = state.cards.filter(card => card.id == id);
  const cardParams = filteredCards[0] || {};

  return {
    ...cardParams,
    cards: getCardsForSearchResults(state, id),
  };
};

export default connect(mapStateToProps)(SearchResults);
