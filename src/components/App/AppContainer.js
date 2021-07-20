import { connect } from 'react-redux';
import App from './App';
import { getLists, createActionAddList } from '../../redux/listsRedux';

const mapStateToProps = state => ({
  title: state.app.title,
  subtitle: state.app.subtitle,
  lists: getLists(state),
  // lists: state.lists, <- works with this too
});

const mapDispatchToProps = (dispatch) => ({
  addList: title => dispatch(createActionAddList({
    title,
    description: 'My custom list',
    image: 'https://i.imgur.com/VHFoGGO.jpg',
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);