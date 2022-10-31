import { MouseEvent } from "react";
import styles from '../styles/Dialog.module.css';

interface AlertDialogProps {
    title: string;
    message: string;
    dismiss: () => void;
}

const AlertDialog: React.FC<AlertDialogProps> = (props) => {
    const {title, message, dismiss} = props;
    
    const onDismiss = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        dismiss();
    }

    return <div className={styles.container}>
        <p>{title}</p>
        <p>{message}</p>
        <button onClick={onDismiss}>확인</button>
    </div>
}

export default AlertDialog;