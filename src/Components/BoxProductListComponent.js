import React from 'react'
import PropTypes from 'prop-types'

class BoxProductListComponent extends React.PureComponent {
  render () {
    return (
      <div className={this.props.className}>
        <h2 className='titleStyle'>{this.props.name}</h2>
        <h4 className='brandStyle'>{this.props.brand}</h4>
        <div className='sectionHorizontal'>
          <div className='wrapperImage'>
            <img src={this.props.photo} className='imgStyle'/>
          </div>
          <div className='rightSection'>
            <p className='descriptionText'>
              {this.props.description}
            </p>
            <div className='textContainer'>
              <p className='boldText'>
                Stock:
              </p>
              <p className='plainText'>{this.props.stock}</p>
            </div>
            <div className='textContainer'>
              <p className='boldText'>
                Price:
              </p>
              <p className='plainText'>${this.props.price}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

BoxProductListComponent.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  brand: PropTypes.string,
  photo: PropTypes.string,
  stock: PropTypes.number,
  price: PropTypes.string
}

export default BoxProductListComponent
