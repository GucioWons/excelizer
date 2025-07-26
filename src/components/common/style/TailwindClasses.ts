export const cell = {
    base: 'border border-gray-300 flex-shrink-0 flex items-center text-sm',
    selected: 'relative z-10 outline outline-2 outline-green-600'
}

export const columnHeader = {
    base: 'border border-gray-300 flex items-center justify-center text-sm',
    unselected: 'bg-gray-100 font-normal border-b',
    selected: 'bg-gray-300 font-bold border-b-4 border-b-green-600'
}

export const editCellButton = {
    base: 'fixed bottom-4 right-4 px-4 py-2 rounded border font-semibold transition',
    enabled: 'bg-[#107C41] text-white hover:bg-[#0e6e39] border-[#0e6e39]',
    disabled: 'bg-gray-200 text-gray-500 border-gray-300 cursor-not-allowed'
}