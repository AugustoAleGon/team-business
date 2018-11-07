import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

class MenuNavBarComponent extends React.Component {
  render () {
    return (
      <div className={this.props.className}>
        <nav>
          <ul>
            {
              this.props.links.map((item, index) => (
                <li key={index} className={cn({ active: item.active })}>
                  <a href={item.url}>
                    <div>
                      {item.label}
                    </div>
                  </a>
                </li>
              ))
            }
          </ul>
        </nav>
      </div>
    )
  }
}

MenuNavBarComponent.prototype = {
  className: PropTypes.string,
  links: PropTypes.array
}

export default MenuNavBarComponent
