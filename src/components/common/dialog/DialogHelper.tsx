import React from 'react';
import { createRoot } from 'react-dom/client';

type DialogProps<R> = {
    onClose: (result: R) => void;
};

export function openDialog<P, R>(
    DialogComponent: React.ComponentType<P & DialogProps<R>>,
    props: P
): Promise<R> {
    const container = document.createElement('div');
    document.body.appendChild(container);

    return new Promise<R>((resolve) => {
        const handleClose = (result: R) => {
            root.unmount();
            container.remove();
            resolve(result);
        };

        const root = createRoot(container);
        root.render(<DialogComponent {...props} onClose={handleClose} />);
    });
}