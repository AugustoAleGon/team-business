import React, { Component } from 'react'
import './Styles/App.css'
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap'
import classnames from 'classnames'
import {Route, NavLink as RRNavLink} from "react-router-dom"
import CategoriesScreen from './CategoriesScreen'
import ContactScreen from './Styles/ContactScreen'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeTab: window.location.pathname
    }
  }

  toggle = (tab) => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      })
    }
  }

  render () {
    return (
        <div>
          <Nav tabs className='row justify-content-center'>
            <NavItem>
              <NavLink
                tag={RRNavLink}
                exact
                to='/'
                className={classnames({ active: this.state.activeTab === '/' })}
                onClick={() => { this.toggle('/') }}
              >
            HOME
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                tag={RRNavLink}
                to='/products'
                className={classnames({ active: this.state.activeTab === '/products' })}
                onClick={() => { this.toggle('/products') }}
              >
            PRODUCTS
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                tag={RRNavLink}
                to='/clients'
                className={classnames({ active: this.state.activeTab === '/clients' })}
                onClick={() => { this.toggle('/clients') }}
              >
            CLIENTS
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                tag={RRNavLink}
                to='/contact'
                className={classnames({ active: this.state.activeTab === '/contact' })}
                onClick={() => { this.toggle('/contact') }}
              >
            CONTACT
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId='/'>
              <Row className='justify-content-center'>
                <Col sm='12' md='12' className='justify-content-center'>
                  <h1>Welcome to Team Business!</h1>
                  <h3>We got the best products for you!</h3>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId='/products'>
              <Route path='/products' component={CategoriesScreen}/>
            </TabPane>
            <TabPane tabId='/clients'>
              <Row>
                <Col sm='12'>
                  <h4>Clients everywhere!</h4>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId='/contact'>
              <Row className='justify-content-center align-items-center'>
                <Col sm='12' className='mx-auto'>
                  <ContactScreen />
                </Col>
              </Row>
            </TabPane>
          </TabContent>
        </div>
    )
  }
}

export default App
