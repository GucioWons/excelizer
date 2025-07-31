import ReactDOM from "react-dom/client";
import type {ReactElement} from "react";

type DialogComponentProps<Result, Props> = Props & {
    onClose: (result: Result | null) => void;
};

export function showDialog<Props, Result>(
    DialogComponent: (props: DialogComponentProps<Result, Props>) => ReactElement,
    props: Props
): Promise<Result | null> {
    return new Promise<Result | null>((resolve) => {
        const container = document.createElement("div");
        document.body.appendChild(container);
        const root = ReactDOM.createRoot(container);

        const handleClose = (result: Result | null) => {
            root.unmount();
            container.remove();
            resolve(result);
        };

        root.render(<DialogComponent {...props} onClose={handleClose} />);
    });
}