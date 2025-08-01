import {Tab, TabList} from "@headlessui/react";
import type {SheetData} from "./Sheet.tsx";

export interface SheetTabListProps {
    sheets: SheetData[];
    addSheet: () => void;
}

function SheetTabList(props: SheetTabListProps) {
    const { sheets, addSheet } = props;

    return (
        <div className="border-t bg-gray-100">
            <TabList className="flex space-x-1 border-b p-2">
                {sheets.map((sheet, i) => (
                    <Tab key={i}>{sheet.name}</Tab>
                ))}
                <button onClick={addSheet}>+</button>
            </TabList>
        </div>
    );
}

export default SheetTabList;