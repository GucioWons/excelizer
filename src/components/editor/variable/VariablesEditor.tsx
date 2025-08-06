import {VariableType} from "./VariableType.ts";
import {useCallback, useState} from "react";

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
            {variables.map(variable => (
                <div>
                    <div>{variable.name}, {variable.type}, {variable.nullable.toString()}</div>
                </div>
            ))}
            <button onClick={addVariable}>Add variable</button>
        </div>
    );
}

export default VariablesEditor;