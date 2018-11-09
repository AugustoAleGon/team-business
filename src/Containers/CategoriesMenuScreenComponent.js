import React from 'react'
import PropTypes from 'prop-types'
import BoxCategories from '../Components/Styles/BoxCategories'

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

class CategoriesMenuScreenComponent extends React.Component {
    state = {
        indexMenu: 0
    }

  _touchComponent = (value) => {
      this.setState({indexMenu: value})
  }

  render () {
    return (
      <div className={this.props.className}>
        <div className='titleContainer'>
          <h5 className='titleCategories'>Categories</h5>
        </div>
        <div className='categoryItems'>
          {
            categoriesOArray.map((item, index) => (
                <BoxCategories
                    key={index}
                    actionClick={() => this._touchComponent(index)}
                    active={index === this.state.indexMenu }
                    categoryTitle={item.categoryTitle}
                    iconName={item.categoryTitle.toLowerCase()} />
              )
            )
          }
        </div>
      </div>
    )
  }
}

CategoriesMenuScreenComponent.propTypes = {
  className: PropTypes.string
}

export default CategoriesMenuScreenComponent
