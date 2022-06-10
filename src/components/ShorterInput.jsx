import React from 'react'

function ShorterInput() {

  const onSubmit = (e) => {
    e.preventDefault()
    console.log('submit')
  }

  return (
    <section className='shorten-input'>
        <form 
          action="" 
          className='shorten-input__form'
          onSubmit={onSubmit}
        >
            <input 
                type="text" 
                placeholder="Shorten a link here..." 
                className='form-input'
            />
            <button type="submit" className='form-button'>Shorten it!</button>
        </form>
    </section>
  )
}

export default ShorterInput