import type {ReactNode} from "react";
import Modal from "react-modal";

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
            className="bg-white rounded-md max-w-md mx-auto mt-24 p-6 outline-none shadow-lg"
            overlayClassName="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-start z-50"
        >
            {title && <h2 className="text-lg font-semibold mb-4">{title}</h2>}
            <div className="mb-6">{children}</div>
            <div className="flex justify-end gap-2">
                <button
                    className="px-4 py-2 rounded border border-gray-300 hover:bg-gray-100"
                    onClick={onClose}
                >
                    Cancel
                </button>
                {onConfirm && (
                    <button
                        className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
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