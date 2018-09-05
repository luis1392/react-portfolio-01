import React, { Component } from 'react'

class PortfolioContent extends Component {
    render () {
        return(
            <div className="portfolio-content">
                {/* <!-- Header --> */} 
                <header>
                <h2>Portfolio</h2>
                </header>

                {/* <!-- Summary --> */}
                <section>
                <h4>Summary</h4>
                <p>I am a designer and full stack developer with a primary focus on the front-end. I have worked on all layers of a project from implementing designer mockups, custom animations, and building APIs.</p>
                </section>

                {/* <!-- ContactInfo --> */}
                <section>
                <div className="contactinfo">
                    <a className="contactinfo__single" target="_blank">
                    <i className="ion-ios-location-outline contactinfo__icon"></i>
                    <span className="contactinfo__title">Austin, TX USA</span>
                    </a>
                    <a href="#" className="contactinfo__single" target="_blank">
                    <i className="ion-ios-email-outline contactinfo__icon"></i>
                    <span className="contactinfo__title">mariasantiago1989@gmail.com</span>
                    </a>
                    <a href="#" className="contactinfo__single" target="_blank">
                    <i className="ion-social-github-outline contactinfo__icon"></i>
                    <span className="contactinfo__title">devmaria</span>
                    </a>
                    <a href="#" className="contactinfo__single" target="_blank">
                    <i className="ion-social-linkedin-outline contactinfo__icon"></i>
                    <span className="contactinfo__title">maria-x-santi</span>
                    </a>
                </div>
                </section>
            </div>
        )
    }
}

export default PortfolioContent