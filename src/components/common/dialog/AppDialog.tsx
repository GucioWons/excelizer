import type {ReactNode} from "react";
import Modal from "react-modal";
import {button, modal} from "../style/TailwindClasses.ts";

export interface AppDialogProps {
    title?: string;
    onClose: () => void;
    onConfirm?: () => void;
    confirmText?: string;
    children: ReactNode;
}

Modal.setAppElement('#root');

function AppDialog(props: AppDialogProps) {
    const {title, onClose, onConfirm, confirmText, children} = props;

    return (
        <Modal
            isOpen={true}
            onRequestClose={onClose}
            className={modal.modal}
            overlayClassName={modal.overlay}
        >
            {title &&
                <h2 className={modal.title}>{title}</h2>
            }
            <div className={modal.content}>{children}</div>
            <div className={modal.buttons}>
                <button
                    className={button.outlined}
                    onClick={onClose}
                >
                    Cancel
                </button>
                {onConfirm && (
                    <button
                        className={button.normal}
                        onClick={onConfirm}
                    >
                        {confirmText}
                    </button>
                )}
            </div>
        </Modal>
    );
}

export default AppDialog;