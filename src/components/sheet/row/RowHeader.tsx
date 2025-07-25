export interface RowHeaderProps {
    index: number;
    width: number;
    isSelected: boolean;
}

function RowHeader(props: RowHeaderProps) {
    return (
        <div
            style={{
                width: props.width,
                height: 40,
                borderRight: props.isSelected ? '3px solid green' : '1px solid #ccc',
                backgroundColor: props.isSelected ? '#ddd' : '#f9f9f9',
                fontWeight: props.isSelected ? 'bold' : 'normal',
                boxSizing: 'border-box',
            }}
            className="border border-gray-300 bg-gray-100 flex items-center justify-center text-sm font-bold"
        >
            {props.index + 1}
        </div>
    );
}

export default RowHeader;