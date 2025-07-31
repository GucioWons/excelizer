import {button, editCellButton} from "../../common/style/TailwindClasses.ts";
import type {CellData} from "./Cell.tsx";
import {showDialog} from "../../common/dialog/DialogHelper.tsx";
import EditCellDialog from "./EditCellDialog.tsx";

export interface EditCellButtonProps {
    disabled: boolean;
    data?: CellData;
    setCellData: (data: CellData) => void;
}

function EditCellButton(props: EditCellButtonProps) {
    const { disabled, data, setCellData } = props;


    async function openEditCellDialog() {
        const newValue = await showDialog(
            EditCellDialog,
            { initialValue: data ?? { value: "" } }
        );

        console.log(newValue);

        if (newValue !== null) {
            setCellData(newValue);
        }
    }

    return (
        <button
            onClick={openEditCellDialog}
            className={`${editCellButton} ${disabled ? button.disabled : button.normal}`}
        >
            Edit Cell
        </button>
    );
}

export default EditCellButton;