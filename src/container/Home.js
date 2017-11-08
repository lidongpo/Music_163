import React from 'react';
import { connect } from 'react-redux'
import Index from '../view/Home/index'
import { mapStateToProps, mapDispatchToProps } from '../store/index'
const home = (props) => {
    fetch('api/banner')
        .then(function (response) {
            return response.json()
        }).then(function (json) {
            console.log('parsed json', json)
        }).catch(function (ex) {
            console.log('parsing failed', ex)
        })
    return (<Index prop={props} />)
}
const Home = connect(
    mapStateToProps,
    mapDispatchToProps
)(home);

export default Home;