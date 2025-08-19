import {VariableType} from "./VariableType.ts";
import {useCallback, useState} from "react";
import VariableRow from "./VariableRow.tsx";
import {button} from "../../common/style/TailwindClasses.ts";
import VariablesHeaders from "./VariablesHeaders.tsx";

export interface VariableData {
    name: string;
    type: VariableType;
    nullable: boolean;
}

function VariablesEditor() {
    const [variables, setVariables] = useState<VariableData[]>([])

    const addVariable = useCallback(() => {
        setVariables(
            [...variables, {name: "", type: VariableType.STRING, nullable: false}],
        );
    }, [variables, setVariables]);

    const updateVariable = useCallback((index: number, updated: VariableData) => {
        setVariables((prev) => {
            const copy = [...prev];
            copy[index] = updated;
            return copy;
        });
    }, [setVariables])

    return (
        <div className={"flex flex-col m-10 gap-4"}>
            <VariablesHeaders/>
            {variables.map((variable, index) =>
                <VariableRow
                    variable={variable}
                    onChange={(updated) => updateVariable(index, updated)}
                />
            )}
            <button className={button.normal} onClick={addVariable}>Add variable</button>
        </div>
    );
}

export default VariablesEditor;