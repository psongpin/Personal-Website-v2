import React, { Component } from 'react'
import { Container } from 'reactstrap'
import Link from 'gatsby-link'
import Section from './Section'
import Contact from './Contact'

export default class Footer extends Component {
  render() {
    return(
      <footer className='footer'>
        <Section id='contact' className='contact-section'>
          <Contact />
        </Section>

        <Section className='footer-bottom'>
          <FooterBottom />
        </Section>
      </footer>
    )
  }
}

const FooterBottom = () => 
  <div className='text-center'>
    <Link className='logo-link' exact to='/' activeClassName='active'>
      <span className='logo'>P<span>.</span>S<span>.</span> Ongpin</span>
    </Link>
    <p className='alr-text'>2017. All Rights Reserved</p>
    <p className='social-links'>
      <a href='https://www.facebook.com/psongpin' target="_blank" className='fa fa-facebook'></a>
      <a href='https://twitter.com/psongpin' target="_blank" className='fa fa-twitter'></a>
      <a href='https://github.com/psongpin' target="_blank" className='fa fa-github-alt'></a>
      <a href='https://www.linkedin.com/in/psongpin/' target="_blank" className='fa fa-linkedin'></a>
    </p>

    <div className='creators'>
      <p className='dev-name'>Web Development by P.S. Ongpin</p>
      <p className='design-name'>Web Design by Kimmy</p>
    </div>
  </div>