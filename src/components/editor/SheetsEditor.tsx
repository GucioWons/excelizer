import {TabGroup} from "@headlessui/react";
import {type SheetData} from "./sheet/Sheet.tsx";
import {useState} from "react";
import SheetTabPanels from "./sheet/SheetTabPanels.tsx";
import SheetTabList from "./sheet/SheetTabList.tsx";
import {sheetTabs} from "../common/style/TailwindClasses.ts";

function SheetsEditor() {
    const initialSheets: SheetData[] = [
        {name: 'New sheet', cells: {}}]

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
            [...sheets, {name: "New sheet", cells: {}}],
        );
    }

    return (
        <TabGroup selectedIndex={selectedIndex} onChange={setSelectedIndex}>
            <div className={sheetTabs.container}>
                <SheetTabPanels sheets={sheets} updateSheet={updateSheet} />
                <SheetTabList sheets={sheets} addSheet={addSheet} />
            </div>
        </TabGroup>
    )
}

export default SheetsEditor;