import {editCellButton} from "../../common/style/TailwindClasses.ts";
import type {CellData} from "./Cell.tsx";
import {openDialog} from "../../common/dialog/DialogHelper.tsx";
import EditCellDialog from "./EditCellDialog.tsx";

export interface EditCellButtonProps {
    disabled: boolean;
    setCellData: (data: CellData) => void;
}

function EditCellButton(props: EditCellButtonProps) {
    const { disabled, setCellData } = props;

    async function openEditCellDialog() {
        const newValue = await openDialog(EditCellDialog, { initialValue: { value: "start" } });

        if (newValue !== null) {
            setCellData(newValue);
        }
    }

    return (
        <button
            onClick={openEditCellDialog}
            className={`${editCellButton.base} ${disabled ? editCellButton.disabled : editCellButton.enabled}`}
        >
            Edit Cell
        </button>
    );
}

export default EditCellButton;