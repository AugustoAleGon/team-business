import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

class BoxCategoriesComponent extends React.PureComponent {
  render () {
    return (
      <div className={this.props.className}>
        <div>Here goes the icon</div>
        <p className={cn({ active: this.props.active })}>{this.props.categoryTitle}</p>
      </div>
    )
  }
}

BoxCategoriesComponent.propTypes = {
  className: PropTypes.string,
  active: PropTypes.bool,
  categoryTitle: PropTypes.string
}

export default BoxCategoriesComponent
