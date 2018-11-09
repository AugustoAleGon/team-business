import CategoriesMenuScreenComponent from '../CategoriesMenuScreenComponent'
import styled from 'styled-components'

const CategoriesMenuScreen = styled(CategoriesMenuScreenComponent)`
  display: flex;
  flex: 1;
  flex-direction: column;
  .titleContainer {
      padding-left: 20px;
  }
  .titleCategories {
      font-size: 18px;
      font-weight: bold;
      color: rgb(165, 171, 179);
  }
  .categoryItems {
      display: flex;
      flex-direction: column;
      width: 100%;
  }
`

export default CategoriesMenuScreen
