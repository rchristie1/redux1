import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './store/actions';
import PropTypes from 'prop-types';

import {bindActionCreators} from 'redux';

class App extends Component {
  // PropTypes
  static propTypes = {
    movies: PropTypes.func.isRequired,
    directors: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
  }

  componentDidMount() {
    this.props.movies();
    this.props.directors();
  }

  renderMovies = (movies) => (
    movies ?
      movies.map((d, i) => (
        <div key={i}>
          {d.name}
        </div>
      )): null
  )
  renderDirectors = (dir) => (
    dir ?
      dir.map((d, i) => (
        <div key={i}>
          {d.name}
        </div>
      )): null
  )
  
  render() {
    return <div>
      
      {this.renderMovies(this.props.data.movies)}
      {this.renderDirectors(this.props.data.directors)}
    </div>;
  }
}

const mapStateToProps = state => {
  return {
    data: state.movies,
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     getMoviesLst: () => {
//       dispatch(actions.moviesLst());
//     },
//     getDirectorList: () => {
//       dispatch(actions.directorsList());
//     }
//   };
// };

const mapDispatchToProps = dispatch => { 
  // return bindActionCreators ({[actions][moviesLst], actions.directorsList}, dispatch)
  return bindActionCreators({movies: actions.moviesLst, directors: actions.directorsList}, dispatch);
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
