import SearchResults from './SearchResults';
import {getCardsForSearchResults} from '../../redux/cardsRedux.js';
import {connect} from 'react-redux';

const mapStateToProps = (state, props) => {
  const searchString = props.match.params.searchString;
  return {
    cards: getCardsForSearchResults(state, searchString),
  };
};

export default connect (mapStateToProps)(SearchResults);