import React, { Component } from 'react'


class Summary extends Component {
    render () {
        const summary = this.props.summary
        const content = this.props.content
        return (
            <section>
                <h4>{summary}</h4>
                <p>{content}</p>
            </section>
        )
    }
}

export default Summary