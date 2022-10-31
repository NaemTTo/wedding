import create from "zustand";

interface DialogState {
    type: string;
    title: string,
    message: string,
    dismiss: () => void;
    showAlertDialog: (title: string, message: string) => void;
}

const initialState = {
    type: '',
    title: '',
    message: '',
}

const useDialog = create<DialogState>()((set) => ({
    ...initialState,
    dismiss: () => set((state) => ({
        ...initialState
    })),
    showAlertDialog: (title, message) => set((state) => ({
        type: 'alert',
        title,
        message,
    }))
}))

export default useDialog;