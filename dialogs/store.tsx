import create from 'zustand';

export enum DialogType {
  NONE,
  ALERT,
  CONFIRM,
}

interface DialogState {
  type: DialogType;
  title: string;
  message: string;
  confirm: () => void;
  dismiss: () => void;
  showAlertDialog: (title: string, message: string) => void;
  showConfirmDialog: (
    title: string,
    message: string,
    onConfirm: () => void,
  ) => void;
}

const initialState = {
  type: DialogType.NONE,
  title: '',
  message: '',
};

const useDialog = create<DialogState>()((set) => ({
  ...initialState,
  confirm: () => {},
  dismiss: () =>
    set((state) => ({
      ...initialState,
    })),
  showAlertDialog: (title, message) =>
    set((state) => ({
      type: DialogType.ALERT,
      title,
      message,
    })),
  showConfirmDialog: (title, message, onConfirm) =>
    set((state) => ({
      type: DialogType.CONFIRM,
      title,
      message,
      confirm: onConfirm,
    })),
}));

export default useDialog;
