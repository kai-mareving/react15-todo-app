import React from 'react';
import styles from './Creator.scss';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import { confirmAlert } from 'react-confirm-alert';

class Creator extends React.Component {
  state = {
    value: '',
    visibleButtons: false,
  }

  static propTypes = {
    text: PropTypes.string,
    action: PropTypes.func,
  }

  static defaultProps = {
    text: 'Add new item',
  }

  handleChange = event => {
    // console.log(event);
    this.setState({
      value: event.target.value,
      visibleButtons: event.target.value.length > 0,
    });
  }

  handleOK = () => {
    if(this.state.value != ''){
      this.props.action(this.state.value);
      this.setState({
        value: '',
        visibleButtons: false,
      });
    }
  }

  handleCancel = () => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className={styles.confirm}>
            <div>
              <h1>Are you sure?</h1>
              <p>You want to delete this file?</p>
              <Button onClick={onClose} variant="confirm">No</Button>
              <Button onClick={() => {
                this.setState({ value: '', visibleButtons: false });
                onClose();
              }} variant='danger'>Yes, Delete it!
              </Button>
            </div>
          </div>
        );
      },
    });

    /* if (window.confirm("Do you really want to cancel?")) {
      this.setState({ value: '', visibleButtons: false }); } */
  }

  render() {
    return (
      <div className={styles.component}>
        <input
          type='text'
          placeholder={this.props.text}
          value={this.state.value}
          onChange={this.handleChange}
        />
        <div className={styles.buttons + (this.state.visibleButtons ? ' ' + styles.buttonsShown : '')}>
          <Button onClick={this.handleOK} variant='confirm'>Add</Button>
          <Button onClick={this.handleCancel} variant='danger'>cancel</Button>
        </div>
      </div>
    );
  }
}

export default Creator;
