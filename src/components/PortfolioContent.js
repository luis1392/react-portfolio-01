import React, { Component } from 'react'
import Header from './Header'
import Summary from './Summary'
import ContactInfo from './ContactInfo'
import SkillsList from './SkillsList'
import EducationHistory from './EducationHistory'
import WorkHistory from './WorkHistory'


class PortfolioContent extends Component {
    render () {
        const title = 'Portfolio'
        const summary = 'Summary'
        const content = 'I am a designer and full stack developer with a primary focus on the front-end. I have worked on all layers of a project from implementing designer mockups, custom animations, and building APIs'
        const skills  = this.props.skills
        const eduList = this.props.eduList
        const jobsList = this.props.jobsList
        return(
            <div className="portfolio-content">
                <Header  title = { title }/>

                {/* <!-- Summary --> */}
                <Summary summary = {summary} content = {content}/>

                {/* <!-- ContactInfo --> */}
                <ContactInfo />
                <SkillsList skills = {skills} />
                <EducationHistory eduList = {eduList} />
                <WorkHistory jobsList = {jobsList} />
            </div>
        )
    }
}

export default PortfolioContent