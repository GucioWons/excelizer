import {editCellButton} from "../../common/style/TailwindClasses.ts";

export interface EditCellButtonProps {
    disabled: boolean;
}

function EditCellButton(props: EditCellButtonProps) {
    const { disabled } = props;

    return (
        <button
            onClick={() => {}}
            className={`${editCellButton.base} ${disabled ? editCellButton.disabled : editCellButton.enabled}`}
        >
            Edit Cell
        </button>
    );
}

export default EditCellButton;