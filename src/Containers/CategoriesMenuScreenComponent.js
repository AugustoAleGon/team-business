import React from 'react'
import PropTypes from 'prop-types'
import BoxCategories from '../Components/Styles/BoxCategories'
import {connect} from 'react-redux'
import Creators from '../Redux/Reducers/product'
import { bindActionCreators } from 'redux'

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
    const menuChoice = categoriesOArray[value]
    this.props.setMenu(menuChoice)
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

const mapStateToProps = (state) => {
  return {
    menu: state.menu
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setMenu: bindActionCreators(Creators.setMenu, dispatch)
  }
}

CategoriesMenuScreenComponent.propTypes = {
  className: PropTypes.string
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesMenuScreenComponent)
