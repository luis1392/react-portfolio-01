import React, { Component } from 'react'
import Header from './Header'
import Summary from './Summary'
import ContactInfo from './ContactInfo'


class PortfolioContent extends Component {
    render () {
        const title = 'Portfolio'
        const summary = 'Summary'
        const content = 'I am a designer and full stack developer with a primary focus on the front-end. I have worked on all layers of a project from implementing designer mockups, custom animations, and building APIs'
        return(
            <div className="portfolio-content">
                <Header  title = { title }/>

                {/* <!-- Summary --> */}
                <Summary summary = {summary} content = {content}/>

                {/* <!-- ContactInfo --> */}
                <ContactInfo />
            </div>
        )
    }
}

export default PortfolioContent