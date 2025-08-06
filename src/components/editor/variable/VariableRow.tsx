import {type VariableData} from "./VariablesEditor.tsx";

export interface VariableRowProps {
    variable: VariableData;
}

function VariableRow(props: VariableRowProps) {
    const { variable } = props;

    return (
        <div>{variable.name}, {variable.type}, {variable.nullable.toString()}</div>
    )
}

export default VariableRow;