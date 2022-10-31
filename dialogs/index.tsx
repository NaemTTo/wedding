import {useState, useEffect, MouseEvent} from 'react';
import useDialog from "./store"
import styles from '../styles/Dialog.module.css'
import AlertDialog from './alert';

const DialogContainer = () => {
    const {type, title, message, dismiss} = useDialog();
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
        case 'alert':
            dialog =  <AlertDialog title={title} message={message} dismiss={()=> setClosing(true)} />
            break;
    
        default:
            break;
    }

    if (type === "") return null;

    return (<div className={styles.wrapper} onClick={handleDialogClose}>
        <div className={isClosing ? styles.dismiss : styles.show}>
            {dialog}
        </div>
    </div>);
}

export default DialogContainer;