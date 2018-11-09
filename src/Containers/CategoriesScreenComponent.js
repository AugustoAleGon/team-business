import React from 'react'
import PropTypes from 'prop-types'

const categoriesOArray = [
  {
    categoryTitle: 'All'
  },
  {
    categoryTitle: 'Tech'
  },
  {
    categoryTitle: 'Services'
  },
  {
    categoryTitle: 'Office'
  }
]

class CategoriesScreenComponent extends React.PureComponent {
  render () {
    return (
      <div className={this.props.className}>
        <h5 className='titleCategories'>Categories</h5>
      </div>
    )
  }
}

CategoriesScreenComponent.protoTypes = {
  className: PropTypes.string
}

export default CategoriesScreenComponent
