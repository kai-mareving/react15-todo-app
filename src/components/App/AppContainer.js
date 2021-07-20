import { connect } from 'react-redux';
import App from './App';
import { settings } from '../../data/dataStore';
import { getLists, createActionAddList } from '../../redux/listsRedux';

const mapStateToProps = state => ({
  title: state.app.title,
  subtitle: state.app.subtitle,
  lists: getLists(state),
  //or lists: state.lists,
});

const mapDispatchToProps = (dispatch) => ({
  addList: title => dispatch(createActionAddList({
    title,
    description: settings.defaultListDescription,
    image: settings.defaultListImage,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);