import VariablesEditor from "./variable/VariablesEditor.tsx";
import {sheetTabs} from "../common/style/TailwindClasses.ts";
import {Tab, TabGroup, TabList, TabPanel, TabPanels} from "@headlessui/react";
import SheetsEditor from "./SheetsEditor.tsx";
import {useState} from "react";

function TemplateEditor() {
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <TabGroup selectedIndex={selectedIndex} onChange={setSelectedIndex}>
            <div className={sheetTabs.listContainer}>
                <TabList className={sheetTabs.list}>
                    <Tab>
                        Variables
                    </Tab>
                    <Tab>
                        Sheets
                    </Tab>
                </TabList>
            </div>
            <div className={sheetTabs.panelsContainer}>
                <TabPanels className={sheetTabs.panels}>
                    <TabPanel className={sheetTabs.panel} unmount={false}>
                        <VariablesEditor />
                    </TabPanel>
                    <TabPanel className={sheetTabs.panel} unmount={false}>
                        <SheetsEditor />
                    </TabPanel>
                </TabPanels>
            </div>
        </TabGroup>
    );
}

export default TemplateEditor;