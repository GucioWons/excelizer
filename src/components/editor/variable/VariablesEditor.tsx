import {VariableType} from "./VariableType.ts";

export interface VariableData {
    name: string;
    type: VariableType;
    nullable: boolean;
}

function VariablesEditor() {
    const variables: VariableData[] = [
        {name: "name", type: VariableType.STRING, nullable: false},
        {name: "number", type: VariableType.NUMERIC, nullable: true},
        {name: "deprecated", type: VariableType.BOOLEAN, nullable: false}
    ];

    return (
        <div>
            {variables.map(variable => (
                <div>
                    <div>{variable.name}</div>
                    <div>{variable.type}</div>
                    <div>{variable.nullable}</div>
                </div>
            ))}
            <button>Add variable</button>
        </div>
    );
}

export default VariablesEditor;