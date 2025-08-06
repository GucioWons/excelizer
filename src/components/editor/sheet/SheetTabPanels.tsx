import {TabPanel, TabPanels} from "@headlessui/react";
import Sheet, {type SheetData} from "./Sheet.tsx";
import {sheetTabs} from "../../common/style/TailwindClasses.ts";

export interface SheetTabPanelsProps {
    sheets: SheetData[]
    updateSheet: (data: SheetData) => void;
}

function SheetTabPanels(props: SheetTabPanelsProps) {
    const { sheets, updateSheet } = props

    return (
        <div className={sheetTabs.panelsContainer}>
            <TabPanels className={sheetTabs.panels}>
                {sheets.map((sheet, index) => (
                    <TabPanel key={index} className={sheetTabs.panel}>
                        <Sheet
                            sheet={sheet}
                            setSheetData={updateSheet}
                        />
                    </TabPanel>
                ))}
            </TabPanels>
        </div>
    );
}

export default SheetTabPanels;