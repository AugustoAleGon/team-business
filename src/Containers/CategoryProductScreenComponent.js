import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTh } from '@fortawesome/free-solid-svg-icons'
import BoxProductList from '../Components/Styles/BoxProductList'
import PropTypes from 'prop-types'
import data from '../Data'
import {connect} from 'react-redux'
import { filterMenu } from '../Lib/Utils'

class CategoryProductScreenComponent extends React.Component {
  state = {
    productList: []
  }

  componentDidMount () {
    // Make the http request to the server
    this.setState({productList: data})
    console.log('At the beginning we have: ', this.props.menu)
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
              <FontAwesomeIcon icon={faBars} />
              <FontAwesomeIcon icon={faTh} />
            </div>
            <div className='oneLineText'>
              <p className='plainText'>
                Showing
              </p>
              <p className='boldText'>
                &nbsp;{this.state.productList.length}&nbsp;
              </p>
              <p className='plainText'>
                 products - Hidden:
              </p>
              <p className='boldText'>
                &nbsp;0
              </p>
            </div>
          </div>
          <div className='sectionRight'>
            <input placeholder='Search' />
          </div>
        </div>
        {
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

CategoryProductScreenComponent.propTypes = {
    className: PropTypes.string
}

export default connect(mapStateToProps, null)(CategoryProductScreenComponent)
