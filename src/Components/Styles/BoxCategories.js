import BoxCategoriesComponent from '../BoxCategoriesComponent'
import styled from 'styled-components'

const BoxCategories = styled(BoxCategoriesComponent)`
    display: flex;
    justify-content: flex-start;
    height: 60px;
    flex: 1;
    padding-left: 10px;
    align-items: center;
    .icon-container {
        width: 40px;
        height: 40px;
        border-radius: 20px;
        background-color: rgb(97, 97, 97);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    &.active {
        background-color: rgb(224, 224, 224);
    }
    &.inactive {
        background-color: white;
    }
    .title-container {
        padding-left: 10px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex: 1;
    }
    .title-category {
        font-size: 16px;
        margin-bottom: 0px;
    }
    .lineBreak {
        height: 3px;
        width: 100%;
        background-color: rgb(227, 227, 227);
        paddingVertical: 3px;
    }
`

export default BoxCategories
