import React, {useEffect} from 'react'

import PortalModal from './Portal';

import {Overlay, Dialog} from './Styles';

import {useSelector} from 'react-redux';

const Modal = ({open, onClose, children}) => {

    useEffect(() => {

        function onEsc(e) {
            if(e.keyCode == 27) onClose();
        }

        window.addEventListener('keydown', onEsc);

        return () => {
            window.removeEventListener('keydown', onEsc)
        }
        
    }, [onClose])

    if (!open) {
        return null
    }

    function onOverlayClick() {
        onClose()
    }

    function onDialogClick(e) {
        e.stopPropagation();
    }

    return (
        <PortalModal>
            <Overlay onClick={onOverlayClick}>
                <Dialog onClick={onDialogClick}>
                    {children}
                </Dialog>
            </Overlay>
        </PortalModal>
    )
}

export default Modal;


