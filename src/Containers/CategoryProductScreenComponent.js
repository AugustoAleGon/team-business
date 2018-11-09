import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTh } from '@fortawesome/free-solid-svg-icons'
import BoxProductList from '../Components/Styles/BoxProductList'
import data from '../Data'

const dummyData = [
{
  'id': 'c9a5c012-6295-48d5-a103-68ca76ff047b',
  'name': 'Intelligent Concrete Computer',
  'description': 'Omnis veritatis in aliquam aspernatur nulla. Officia quidem qui. Maxime veniam nulla sint qui dolorem qui saepe neque placeat. Magni culpa aut eos molestiae nihil molestias. Quidem consectetur quia quo blanditiis perspiciatis facere dolorem.',
  'price': '752.00',
  'brand': 'Gusikowski - Ebert',
  'stock': 44903,
  'photo': 'http://lorempixel.com/640/480/technics',
  'categories': ['Services']
},
{
  'id': 'b98fba89-fd2e-493d-81f8-65ce6142bdcc',
  'name': 'Intelligent Fresh Keyboard',
  'description': 'Et omnis voluptas. Eveniet est nostrum beatae aut dolores qui illo quis. Eveniet libero sint consectetur dolor doloremque cumque quos iste.',
  'price': '520.00',
  'brand': 'McCullough, Parisian and Waters',
  'stock': 55349,
  'photo': 'http://lorempixel.com/640/480/sports',
  'categories': ['Office']
}
]

class CategoryProductScreenComponent extends React.Component {
  state = {
    productList: []
  }

  componentDidMount () {
    // Make the http request to the server
    const sliceData = data.slice(0,10)
    console.log('My slice data is: ', sliceData)
    this.setState({productList: sliceData})
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
                &nbsp;10&nbsp;
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

export default CategoryProductScreenComponent
