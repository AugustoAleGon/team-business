import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faLaptop, faWrench, faFolder, faQuestion } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const iconDynamic = (iconName) => {
  let icon
  switch (iconName) {
    case 'all':
      icon = faBars
      break
    case 'tech':
      icon = faLaptop
      break
    case 'services':
      icon = faWrench
      break
    case 'office':
      icon = faFolder
      break
    default:
      icon = faQuestion
      break
  }
  return icon
}

class BoxCategoriesComponent extends React.PureComponent {
  render () {
    return (
      <Link to={`/products/${this.props.categoryTitle.toLowerCase()}`}>
        <div className={this.props.className + (this.props.active ? ' active' : ' inactive')} onClick={this.props.actionClick}>
          <div className='icon-container'>
            <FontAwesomeIcon icon={iconDynamic(this.props.iconName)} color='white' size='sm' />
          </div>
          <div className='title-container'>
            <p className='title-category'>{this.props.categoryTitle}</p>
          </div>
        </div>
      </Link>
    )
  }
}

BoxCategoriesComponent.propTypes = {
  className: PropTypes.string,
  actionClick: PropTypes.func,
  active: PropTypes.bool,
  iconName: PropTypes.string,
  categoryTitle: PropTypes.string,
  lineBreak: PropTypes.bool
}

export default BoxCategoriesComponent
