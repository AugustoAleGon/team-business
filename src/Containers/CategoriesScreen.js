import React from 'react'
import { Row, Col } from 'reactstrap'
import CategoriesMenuScreen from './Styles/CategoriesMenuScreen'
import CategoriesProductScreen from './Styles/CategoriesProductScreen'

class CategoriesScreen extends React.Component {
  render () {
    return (
      <Row>
        <Col sm='3' md='4'>
          <CategoriesMenuScreen />
        </Col>
        <Col sm='9' md='8'>
          <CategoriesProductScreen />
        </Col>
      </Row>
    )
  }
}

export default CategoriesScreen
