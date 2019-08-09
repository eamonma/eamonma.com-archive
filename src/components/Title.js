import React, { Component } from 'react'

export class Title extends Component {
    componentDidMount() {
        document.title = this.props.title
    }

    render() {
        return (
            <React.Fragment></React.Fragment>
        )
    }
}

export default Title
