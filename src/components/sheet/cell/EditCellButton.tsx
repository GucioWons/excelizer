export interface EditCellButtonProps {
    disabled: boolean;
}

function EditCellButton(props: EditCellButtonProps) {
    return (
        <button
            onClick={() => {
            }}
            className={`fixed bottom-4 right-4 px-4 py-2 rounded border font-semibold transition
        ${!props.disabled
                ? 'bg-[#107C41] text-white hover:bg-[#0e6e39] border-[#0e6e39]'
                : 'bg-gray-200 text-gray-500 border-gray-300 cursor-not-allowed'}
    `}
        >
            Edit Cell
        </button>
    );
}

export default EditCellButton;