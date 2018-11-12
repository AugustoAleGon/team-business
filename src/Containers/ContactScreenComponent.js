import React from 'react'

class ContactScreenComponent extends React.Component {
    submitContactInfo = () => {
        console.log('Submit Form')
    }

    render () {
        return (
            <div className={this.props.className}>
                 <form onSubmit={this.submitContactInfo} className='boxContainer'>
                     <input className='inputBox' type='text' placeholder='First Name' />
                     <input className='inputBox' type='text' placeholder='Last Name' />
                     <input className='inputBox' type='text' placeholder='Email' />
                     <textarea className='inputSubject' type='text' placeholder='Subject' />
                     <input className='submitBox' type='submit' value='SUBMIT'/>
                 </form>
            </div>
        )
    }
}

export default ContactScreenComponent
