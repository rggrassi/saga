import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadDataRequest } from './actions'

class Info extends Component {
    render() {
        return (
            <p>Info</p>
        )
    }
}

const mapStateToProps = state => {
    return {
        isFetching: state.ip.isFetching,
        data: state.ip.data,
        error: state.ip.error
    }
}

export default connect(mapStateToProps, { loadDataRequest })(Info);