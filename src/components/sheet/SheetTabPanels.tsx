import {TabPanel, TabPanels} from "@headlessui/react";
import Sheet, {type SheetData} from "./Sheet.tsx";

export interface SheetTabPanelsProps {
    sheets: SheetData[]
    updateSheet: (data: SheetData) => void;
}

function SheetTabPanels(props: SheetTabPanelsProps) {
    const { sheets, updateSheet } = props

    return (
        <div className="flex-1 overflow-auto relative">
            <TabPanels className="h-full">
                {sheets.map((sheet, index) => (
                    <TabPanel key={index} className="h-full">
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