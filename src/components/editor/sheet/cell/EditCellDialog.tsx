import { useState } from 'react';
import AppDialog from "../../../common/dialog/AppDialog.tsx";
import type {CellData} from "./Cell.tsx";
import {input} from "../../../common/style/TailwindClasses.ts";

type EditCellDialogProps = {
    initialValue: CellData;
    onClose: (result: CellData | null) => void;
};

function EditCellDialog(props: EditCellDialogProps) {
    const { initialValue, onClose } = props;

    const [value, setValue] = useState(initialValue);

    const handleConfirm = () => {
        onClose(value);
    };

    const handleCancel = () => {
        onClose(null);
    };

    return (
        <AppDialog
            title={"Edit cell"}
            onClose={handleCancel}
            onConfirm={handleConfirm}
            confirmText={"Save"}
        >
            <input
                type="text"
                value={value.value}
                onChange={(e) => setValue({ value: e.target.value })}
                className={input}
            />
        </AppDialog>
    );
}

export default EditCellDialog;