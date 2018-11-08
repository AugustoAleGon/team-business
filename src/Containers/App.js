import React, { Component } from 'react'
import './Styles/App.css'
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap'
import classnames from 'classnames'
import BoxCategories from '../Components/Styles/BoxCategories'

class App extends Component {
  state = {
    activeTab: '2'
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
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1') }}
            >
          HOME
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2') }}
            >
          PRODUCTS
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3') }}
            >
          CLIENTS
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '4' })}
              onClick={() => { this.toggle('4') }}
            >
          CONTACT
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId='1'>
            <Row className='justify-content-center'>
              <Col sm='12' md='12' className='justify-content-center'>
                <h1>Welcome to Team Business!</h1>
                <h3>We got the best products for you!</h3>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId='2'>
            <BoxCategories active={true} categoryTitle='Hello Box' />
          </TabPane>
          <TabPane tabId='3'>
            <Row>
              <Col sm='12'>
                <h4>Clients everywhere!</h4>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId='4'>
            <Row>
              <Col sm='12'>
                <h4>Tab 4 Contents</h4>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    )
  }
}

export default App
