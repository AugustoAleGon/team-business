import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTh } from '@fortawesome/free-solid-svg-icons'
import BoxProductList from '../Components/Styles/BoxProductList'
import BoxProductBlock from '../Components/Styles/BoxProductBlock'
import { Col, Row } from 'reactstrap'
import PropTypes from 'prop-types'
import data from '../Data'
import {connect} from 'react-redux'
import { filterMenu } from '../Lib/Utils'

class CategoriesProductScreenComponent extends React.Component {
  state = {
    productList: [],
    squareMenu: false
  }

  componentDidMount () {
    // Make the http request to the server
    this.setState({productList: data})
  }

  componentDidUpdate (prevProps) {
    if (prevProps.menu !== this.props.menu) {
      this.setState({ productList: filterMenu(data, this.props.menu)})
    }
  }

  render () {
    return (
      <div className={this.props.className}>
        <div className='topbarContainer'>
          <div className='sectionLeft'>
            <div className='iconsContainer'>
              <FontAwesomeIcon
                onClick={ () => {
                  this.setState({squareMenu: !this.state.squareMenu})
                }}
                color={this.state.squareMenu ? 'rgb(180,180,180)' : '#000'}
                icon={faBars} />
              <FontAwesomeIcon
                onClick={ () => {
                    this.setState({squareMenu: !this.state.squareMenu})
                }}
                color={this.state.squareMenu ? '#000' : 'rgb(180,180,180)'}
                icon={faTh} />
            </div>
            <div className='oneLineText'>
              <p className='plainText'>
                Showing
              </p>
              <p className='boldText'>
                &nbsp;{this.state.productList.length}&nbsp;
              </p>
              <p className='plainText'>
                 products
              </p>
              {
                this.props.menu !== 'All' &&
                <div className='oneLine'>
                  <p className='plainText'>
                    &nbsp;- Hidden:
                  </p>
                  <p className='boldText'>
                    &nbsp;0
                  </p>
                </div>
              }
            </div>
          </div>
          <div className='sectionRight'>
            <input placeholder='Search' />
          </div>
        </div>
        <Row>
        {
          this.state.squareMenu &&
          this.state.productList.map( (item, index) => (
            <Col sm='12' md='12' lg='6'>
              <BoxProductBlock
                key={index}
                name={item.name}
                brand={item.brand}
                photo={item.photo}
                description={item.description}
                stock={item.stock}
                price={item.price} />
            </Col>
        ))
        }
        </Row>
        {   !this.state.squareMenu &&
            this.state.productList.map( (item, index) => (
                <BoxProductList
                    key={index}
                    name={item.name}
                    brand={item.brand}
                    photo={item.photo}
                    description={item.description}
                    stock={item.stock}
                    price={item.price} />
            ))
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    menu: state.menu
  }
}

CategoriesProductScreenComponent.propTypes = {
    className: PropTypes.string
}

export default connect(mapStateToProps, null)(CategoriesProductScreenComponent)
