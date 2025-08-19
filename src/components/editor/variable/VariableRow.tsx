import {type VariableData} from "./VariablesEditor.tsx";
import {VariableType} from "./VariableType.ts";

export interface VariableRowProps {
    variable: VariableData;
    onChange: (updated: VariableData) => void;
}

function VariableRow(props: VariableRowProps) {
    const { variable, onChange } = props;

    return (
        <div className="flex gap-4">
            <input
                type="text"
                value={variable.name}
                onChange={(e) =>
                    onChange({...variable, name: e.target.value})
                }
                className='flex-[3] border border-[#107C41] rounded px-2 py-1'
                placeholder="Name"
            />

            <select
                value={variable.type}
                onChange={(e) =>
                    onChange({...variable, type: e.target.value as VariableType})
                }
                className='flex-[3] border border-[#107C41] rounded px-2 py-1'
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
                className='flex-[1]'
                onChange={(e) =>
                    onChange({...variable, nullable: e.target.checked})
                }
            />
        </div>
)
}

export default VariableRow;