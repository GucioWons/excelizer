import { Tab } from "@headlessui/react";
import Sheet, {type SheetData} from "../sheet/Sheet.tsx";
import {useState} from "react";

function Editor() {
    const initialSheets: SheetData[] = [
        {id: 1, name: 'twoja stara', order: 1, cells: {}},
        {id: 2, name: 'twoja stara2', order: 2, cells: {}}]

    const [sheets, setSheets] = useState<SheetData[]>( initialSheets );
    // const [selectedSheetIndex, setSelectedSheetIndex] = useState(0);

    function addSheet() {
        setSheets(
            [...sheets, {id: 3, name: "New sheet", order: 3, cells: {}}],
        );
    }

    return (
        <Tab.Group>
            <Tab.Panels>
                {sheets.map((sheet) => (
                    <Tab.Panel key={sheet.id}>
                        <Sheet/>
                    </Tab.Panel>
                ))}
            </Tab.Panels>
                <div className="absolute bottom-0 left-0 right-0 border-t bg-gray-100">

                    <Tab.List className="flex space-x-1 border-b mb-4">
                        {sheets.map((sheet) => (
                            <Tab
                                id={sheet.id as unknown as string}
                            >
                                {sheet.name}
                            </Tab>
                        ))}
                        <button
                            onClick={() => addSheet()}
                            className="px-4 py-2 rounded-t-md bg-gray-100 hover:bg-gray-200"
                        >
                            +
                        </button>
                    </Tab.List>
                </div>
        </Tab.Group>
)
}

export default Editor;