import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import  { fetchBeer } from '../actions'

import Beer from './Beer';

const BeerList = props => {
  useEffect(() => {
    // get request here, possubly fetchBeer from actions
    props.fetchBeer();
  }, [])

  // implement loading spinner
  if (props.isFetching) {
    return <h2>Fetching beers</h2>; 
  }

  //actual view render
  return (
    <div>
      {props.error && <p>{props.error}</p>}
      {props.beerList.map(beer => (
        <Beer key={beer.id} beer={beer} />
      ))}
    </div>
  )

}

const mapStateToProps = state => {
    return {
      beerList: state.beer.beerList,
      isFetching: state.beer.isFetching,
      error: state.beer.error
    };
};
  
export default connect(
    mapStateToProps,
    { fetchBeer }
)(BeerList);