export interface RowHeaderProps {
    index: number;
    width: number;
}

function RowHeader(props: RowHeaderProps) {
    return (
        <div
            style={{width: props.width, height: 40}}
            className="border border-gray-300 bg-gray-100 flex items-center justify-center text-sm font-bold"
        >
            {props.index + 1}
        </div>
    );
}

export default RowHeader;