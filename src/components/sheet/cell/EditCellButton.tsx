import {editCellButton} from "../../common/style/TailwindClasses.ts";

export interface EditCellButtonProps {
    disabled: boolean;
}

function EditCellButton(props: EditCellButtonProps) {
    return (
        <button
            onClick={() => {}}
            className={`${editCellButton.base} ${props.disabled ? editCellButton.disabled : editCellButton.enabled}`}
        >
            Edit Cell
        </button>
    );
}

export default EditCellButton;