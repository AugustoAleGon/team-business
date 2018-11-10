import CategoriesProductScreenComponent from '../CategoriesProductScreenComponent'
import styled from 'styled-components'

const CategoriesProductScreen = styled(CategoriesProductScreenComponent)`
  display: flex;
  flex: 1;
  padding: 0px 15px 0px 15px;
  background-color: rgb(250, 250, 250);
  flex-direction: column;
  overflow: auto;
  .topbarContainer {
      height: min-content;
      min-height: 100px;
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
      padding-top: 10px;
  }
  .iconsContainer {
      width: 55px;
      display: flex;
      justify-content: space-between;
  }
  .sectionLeft {
      display: flex;
      flex-direction: column;
  }
  .oneLineText {
      display: flex;
      flex-direction: row;
      padding-top: 5px;
  }
  .plainText {
      font-size: 14px;
  }
  .boldText {
      font-size: 14px;
      font-weight: bold;
  }
  .sectionRight {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
  }
`

export default CategoriesProductScreen
