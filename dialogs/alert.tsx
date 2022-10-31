import { MouseEvent } from "react";
import styles from '../styles/Dialog.module.css';

interface AlertDialogProps {
    title: string;
    message: string;
    dismiss: () => void;
}

const AlertDialog: React.FC<AlertDialogProps> = (props) => {
    const {title, message, dismiss} = props;
    
    const onDismiss = (e: MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        dismiss();
    }

    return <div className={styles.container}>
        <p className={styles.title}>{title}</p>
        <p className={styles.message}>{message}</p>
        <div className={styles.action}>

        <div onClick={onDismiss}>확인</div>
        </div>
    </div>
}

export default AlertDialog;