import {Tab, TabList} from "@headlessui/react";
import type {SheetData} from "./Sheet.tsx";
import {sheetTabs} from "../../common/style/TailwindClasses.ts";

export interface SheetTabListProps {
    sheets: SheetData[];
    addSheet: () => void;
}

function SheetTabList(props: SheetTabListProps) {
    const { sheets, addSheet } = props;

    return (
        <div className={sheetTabs.listContainer}>
            <TabList className={sheetTabs.list}>
                {sheets.map((sheet, i) => (
                    <Tab key={i}>
                        {sheet.name}
                    </Tab>
                ))}
                <button onClick={addSheet}>+</button>
            </TabList>
        </div>
    );
}

export default SheetTabList;