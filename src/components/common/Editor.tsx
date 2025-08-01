import {TabGroup} from "@headlessui/react";
import {type SheetData} from "../sheet/Sheet.tsx";
import {useState} from "react";
import SheetTabPanels from "../sheet/SheetTabPanels.tsx";
import SheetTabList from "../sheet/SheetTabList.tsx";

function Editor() {
    const initialSheets: SheetData[] = [
        {name: 'twoja stara', order: 1, cells: {}},
        {name: 'twoja stara2', order: 2, cells: {}}]

    const [sheets, setSheets] = useState<SheetData[]>( initialSheets );
    const [selectedIndex, setSelectedIndex] = useState(0);

    function updateSheet(updatedSheet: SheetData) {
        setSheets(prev => {
            const updatedSheets = [...prev];
            updatedSheets[selectedIndex] = updatedSheet;
            return updatedSheets;
        });
    }

    function addSheet() {
        setSheets(
            [...sheets, {name: "New sheet", order: 3, cells: {}}],
        );
    }

    return (
        <TabGroup selectedIndex={selectedIndex} onChange={setSelectedIndex}>
            <div className="flex flex-col h-screen">
                <SheetTabPanels sheets={sheets} updateSheet={updateSheet} />
                <SheetTabList sheets={sheets} updateSheet={addSheet} />
            </div>
        </TabGroup>
    )
}

export default Editor;