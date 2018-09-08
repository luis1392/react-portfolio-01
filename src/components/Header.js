import React, { Component } from 'react';


class Header extends Component {
    render () {
        const title = this.props.title
        return (
            <header>
                <h2>{title}</h2>
            </header>
        )
    }
}
export default Header;
