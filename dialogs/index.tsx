import {useState, useEffect, MouseEvent} from 'react';
import useDialog, { DialogType } from "./store"
import styles from '../styles/Dialog.module.css'
import AlertDialog from './alert';
import ConfirmDialog from './confirm';

const DialogContainer = () => {
    const {type, title, message, confirm, dismiss} = useDialog();
    const [isClosing, setClosing] = useState(false);

    useEffect(() => {
        type || setClosing(false);
    }, [type])

    useEffect(()=> {
        if (isClosing) {
            setTimeout(() => dismiss(), 300)
        }
    }, [isClosing])

    const handleDialogClose = (e: MouseEvent): void => {
        if (e.target == e.currentTarget) {
            setClosing(true);
        }
    }

    let dialog;
    switch (type) {
        case DialogType.ALERT:
            dialog =  <AlertDialog title={title} message={message} dismiss={()=> setClosing(true)} />
            break;
    
        case DialogType.CONFIRM:
            dialog =  <ConfirmDialog title={title} message={message} confirm={confirm} dismiss={()=> setClosing(true)} />
            break;
    
        default:
            break;
    }

    if (type === DialogType.NONE) return null;

    return (<div className={styles.wrapper} onClick={handleDialogClose}>
        <div className={isClosing ? styles.dismiss : styles.show}>
            {dialog}
        </div>
    </div>);
}

export default DialogContainer;