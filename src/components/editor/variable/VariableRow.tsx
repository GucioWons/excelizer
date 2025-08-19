import {type VariableData} from "./VariablesEditor.tsx";
import {VariableType} from "./VariableType.ts";

export interface VariableRowProps {
    variable: VariableData;
    onChange: (updated: VariableData) => void;
}

function VariableRow(props: VariableRowProps) {
    const { variable, onChange } = props;

    return (
        <div className="flex gap-2">
            <input
                type="text"
                value={variable.name}
                onChange={(e) =>
                    onChange({...variable, name: e.target.value})
                }
                className="border p-1 rounded"
                placeholder="Name"
            />

            <select
                value={variable.type}
                onChange={(e) =>
                    onChange({...variable, type: e.target.value as VariableType})
                }
                className="border p-1 rounded"
            >
                {Object.values(VariableType).map((type) => (
                    <option key={type} value={type}>
                        {type}
                    </option>
                ))}
            </select>

            <input
                type="checkbox"
                checked={variable.nullable}
                onChange={(e) =>
                    onChange({...variable, nullable: e.target.checked})
                }
            />
        </div>
)
}

export default VariableRow;