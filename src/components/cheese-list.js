import React from 'react';
import { connect } from 'react-redux';
import fetchCheeses from '../actions/cheese';

export class CheeseList extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchCheeses());
  }
  // const cheeseList = [
  //   "Bath Blue",
  //   "Barkham Blue",
  //   "Buxton Blue"
  // ];

  render () {
    const { cheeses } = this.props;
    const cheese = cheeses.map( (cheese, index) => (
      <li key={index}>
        {cheese}
      </li>
    ));

    console.log(this.props);

    return (
      <ul className="cheese-list">
        <li>{cheese}</li>
      </ul>
    )
  }
}

const mapStateToProps = state => {
  return {
    cheeses: state.cheeses
  }
}

export default connect(mapStateToProps)(CheeseList);