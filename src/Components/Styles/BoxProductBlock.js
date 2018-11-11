import BoxProductListComponent from '../BoxProductListComponent'
import styled from 'styled-components'

const BoxProductBlock = styled(BoxProductListComponent)`
  display: flex;
  min-width: 350px;
  flex-direction: column;
  padding: 20px;
  background-color: white;
  border-color: rgb(182,182,182);
  border-bottom: 2.5px groove;
  border-left: 0.5px groove;
  border-right: 0.75px groove;
  margin-bottom: 10px;
  min-height: 220px;
  .titleStyle {
    font-size: 18px;
  }
  .brandStyle {
    font-size: 14px;
    color: rgb(150, 150, 150)
  }
  .sectionHorizontal {
    display: flex;
    flex-direction: row;
  }
  .wrapperImage {
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .imgStyle {
    height: 130px;
    width: 130px;
  }
  .textContainer {
    display: flex;
    flex-direction: row;
  }
  .rightSection {
    padding-left: 5px;
  }
  .descriptionText {
    display: block;
    text-overflow: ellipsis;
    word-wrap: break-word;
    overflow: hidden;
    max-height: 3em;
    line-height: 1em;
  }
  .boldText {
    font-size: 14px;
    font-weight: bold;
  }
  .plainText {
    font-size: 14px;
    padding-left: 5px;
  }
`

export default BoxProductBlock
