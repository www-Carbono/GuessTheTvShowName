import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

export function PopupModel ({ ModalClick, ModalTitle, children }) {
  return (

    <Popup
      trigger={<button className='button'> {ModalClick} </button>}
      modal
      nested
    >
      {
          close => (
            <div className='modal'>

              <button className='close' onClick={close}>
                &times;
              </button>

              <div className='header'> {ModalTitle} </div>
              <div className='content'>
                {' '}
                {children}
              </div>
            </div>
          )
      }
    </Popup>
  )
}

export function PopupModelOpen ({ ModalClick, ModalTitle, children }) {
  return (

    <Popup
      open={ModalClick}
      modal
      nested
    >
      {
        close => (
          <div className='modal'>

            <div className='header'> {ModalTitle} </div>
            <div className='content'>
              {' '}
              {children}
            </div>
          </div>
        )

      }
    </Popup>
  )
}
