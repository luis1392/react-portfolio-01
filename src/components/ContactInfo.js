import React, { Component } from 'react'

class ContactInfo extends Component {
    render () {
        const place = 'Austin, TX USA'
        const email = 'mariasantiago1989@gmail.com'
        const user_github = 'devmaria'
        const user_linkedin = 'maria-x-santi'
        return (
            <section>
                    <div className="contactinfo">
                        <a className="contactinfo__single" target="_blank">
                            <i className="ion-ios-location-outline contactinfo__icon"></i>
                            <span className="contactinfo__title">{place}</span>
                        </a>
                        <a href="#" className="contactinfo__single" target="_blank">
                            <i className="ion-ios-email-outline contactinfo__icon"></i>
                            <span className="contactinfo__title">{email}</span>
                        </a>
                        <a href="#" className="contactinfo__single" target="_blank">
                            <i className="ion-social-github-outline contactinfo__icon"></i>
                            <span className="contactinfo__title">{user_github}</span>
                        </a>
                        <a href="#" className="contactinfo__single" target="_blank">
                            <i className="ion-social-linkedin-outline contactinfo__icon"></i>
                            <span className="contactinfo__title">{user_linkedin}</span>
                        </a>
                    </div>
                </section>
        )
    }
}

export default ContactInfo