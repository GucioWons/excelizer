export const cell = {
    base: 'border border-gray-300 flex items-center text-sm px-1',
    selected: 'relative z-10 outline outline-2 outline-green-600 bg-white overflow-visible whitespace-normal text-wrap max-w-none',
    unselected: 'overflow-hidden whitespace-nowrap text-ellipsis',
};

export const rowHeader = {
    base: 'border border-gray-300 flex items-center justify-center text-sm',
    unselected: 'bg-gray-100 font-normal border-b',
    selected: 'bg-gray-300 font-bold border-r-4 border-r-green-600'
}

export const columnHeader = {
    base: 'border border-gray-300 flex items-center justify-center text-sm',
    unselected: 'bg-gray-100 font-normal border-b',
    selected: 'bg-gray-300 font-bold border-b-4 border-b-green-600'
}

export const editCellButton = 'absolute bottom-2 right-2';

export const button = {
    normal: 'px-4 py-2 rounded bg-[#107C41] text-white hover:bg-[#0e6e39] border-[#0e6e39]',
    outlined: 'px-4 py-2 rounded border border-[#107C41] text-[#107C41] hover:bg-green-100',
    disabled: 'px-4 py-2 rounded bg-gray-200 text-gray-500 border-gray-300 cursor-not-allowed'
}

export const input = 'w-full border border-[#107C41] rounded px-2 py-1'

export const modal = {
    modal: 'bg-white rounded-md max-w-md mx-auto mt-24 p-6 outline-none shadow-md border border-green-600',
    overlay: 'fixed inset-0 bg-black/20 flex justify-center items-start z-50',
    title: 'text-xl font-bold mb-4 text-green-700',
    content: 'mb-6 text-gray-800',
    buttons: 'flex justify-between'
}

export const sheetTabs = {
    container: 'flex flex-col h-screen',
    panelsContainer: 'flex-1 overflow-auto relative',
    panels: 'h-full',
    panel: 'h-full',
    listContainer: 'border-t bg-gray-100',
    list: 'flex space-x-1 border-b p-2'
}