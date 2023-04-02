import { useState } from 'react'

const Contact = () => {


    return (
        <div className='-section'>
            <h1 className='headerbox fontColor'>Contact</h1>
            <div className='form-design'>
                <div className='contact-form'>
                    <input type="text" placeholder='Firstname' className='input-field' />
                    <input type="text" placeholder='Lastname' className='input-field' />
                    <input type="text" placeholder='Email' className='input-field' />
                    <textarea type="text" rows={4} placeholder='Message' className='input-field' />

                    <button className='btn ' onClick={() => alert("Submit")}>Submit</button>

                </div>
            </div>


        </div>
    )
}

export default Contact

