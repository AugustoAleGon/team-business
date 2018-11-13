import ContactScreenComponent from '../ContactScreenComponent'
import styled from 'styled-components'

const ContactScreen = styled(ContactScreenComponent)`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 300px;
    min-width: 300px;
    width: 500px;
    height: 500px;
    border-radius: 20px;
    border: 1px solid rgb(184, 184, 184);
    .boxContainer {
        display: flex;
        flex-direction: column;
        height: 100%;
        flex: 1;
        justify-content: flex-start;
        padding: 50px 40px 50px 40px;
    }
    .inputBox {
        width: 100%;
        min-height: 30px;
        color: rgb(130, 130, 130);
        margin-bottom: 30px;
        border: none;
        border-bottom: 0.5px solid rgb(224, 224, 224);
    }
    .inputSubject {
        width: 100%;
        min-height: 130px;
        text-align: left;
        color: rgb(130, 130, 130);
        margin-bottom: 30px;
        border: none;
        border-bottom: 0.5px solid rgb(224, 224, 224);
        resize: none;
    }
    .submitContainer {
        display: flex;
        justify-content: flex-end;
    }
    .submitBox {
        min-width: 100px;
        background-color: rgb(176, 176, 176);
    }
`

export default ContactScreen
