import React from 'react';
import { connect } from 'react-redux';
import { buy, rid } from './actions';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
const App = (props) => {
  const rid = (item) => { props.rid(item); };
  const buy = (item) => { props.buy(item); };
  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures feat={props.car.features} rid={rid} />
      </div>
      <div className="box">
        <AdditionalFeatures feat={props.additionalFeatures} buy={buy} />
        <Total carPrice={props.car.price} additionalFeatures={props.car.features} />
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    car: state.car,
    additionalPrice: state.additionalPrice,
    additionalFeatures: state.additionalFeatures
  };
};
export default connect(mapStateToProps, { buy, rid })(App);