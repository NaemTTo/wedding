import { MouseEvent } from 'react';
import styles from '../styles/Dialog.module.css';

interface ConfirmDialogProps {
  title: string;
  message: string;
  confirm: () => void;
  dismiss: () => void;
}

const ConfirmDialog: React.FC<ConfirmDialogProps> = (props) => {
  const { title, message, confirm, dismiss } = props;

  const onConfirm = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    dismiss();
    confirm();
  };
  const onDismiss = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    dismiss();
  };

  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>
      <p className={styles.message}>{message}</p>
      <div className={styles.action}>
        <div onClick={onDismiss}>취소</div>
        <div onClick={onConfirm}>확인</div>
      </div>
    </div>
  );
};

export default ConfirmDialog;
