import {connect} from 'react-redux';
import SearchResults from '../SearchResults/SearchResults';
import { getCardsForSearchResults } from '../../redux/cardsRedux';

const mapStateToProps = (state, props) => {
  const value = props.match.params.value;
  const filteredCards = state.cards.filter(card => card.value == value);
  const cardParams = filteredCards[0] || {};

  return {
    ...cardParams,
    cards: getCardsForSearchResults(state, value),
  };
};

export default connect(mapStateToProps)(SearchResults);
