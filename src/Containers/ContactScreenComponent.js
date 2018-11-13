import React from 'react'

class ContactScreenComponent extends React.Component {
    submitContactInfo = () => {
        console.log('Submit Form')
    }

    render () {
        return (
            <div className={this.props.className}>
                 <form onSubmit={this.submitContactInfo} className='boxContainer'>
                     <input className='inputBox' type='text' placeholder='First Name' required maxLength='255' />
                     <input className='inputBox' type='text' placeholder='Last Name' required maxLength='255' />
                     <input className='inputBox' type='email' placeholder='Email' required maxLength='255' />
                     <textarea className='inputSubject' type='text' placeholder='Subject' required maxLength='500' />
                     <div className='submitContainer'>
                        <input className='submitBox' type='submit' value='SUBMIT'/>
                     </div>
                 </form>
            </div>
        )
    }
}

export default ContactScreenComponent
