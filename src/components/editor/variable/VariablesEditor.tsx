import {VariableType} from "./VariableType.ts";
import {useCallback, useState} from "react";
import VariableRow from "./VariableRow.tsx";

export interface VariableData {
    name: string;
    type: VariableType;
    nullable: boolean;
}

function VariablesEditor() {
    const initialVariables: VariableData[] = [
        {name: "name", type: VariableType.STRING, nullable: false},
        {name: "number", type: VariableType.NUMERIC, nullable: true},
        {name: "deprecated", type: VariableType.BOOLEAN, nullable: false}
    ];

    const [variables, setVariables] = useState(initialVariables)

    const addVariable = useCallback(() => {
        setVariables(
            [...variables, {name: "", type: VariableType.STRING, nullable: false}],
        );
    }, [variables]);

    return (
        <div>
            {variables.map(variable => <VariableRow variable={variable} />)}
            <button onClick={addVariable}>Add variable</button>
        </div>
    );
}

export default VariablesEditor;