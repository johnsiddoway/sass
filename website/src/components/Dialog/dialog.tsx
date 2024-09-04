import { DialogHTMLAttributes, useEffect, useRef, useState } from "react";

export interface DialogProps extends DialogHTMLAttributes<HTMLDialogElement> {
    label?: string;
}

export function Dialog({ children, id, label, ...props }: DialogProps) {
    // See https://stackoverflow.com/a/76567796
    const dialogRef = useRef<HTMLDialogElement>(null);
    const [showModal, setShowModal] = useState<boolean>(false);

    useEffect(() => {
        if (dialogRef.current?.open) {
            dialogRef.current?.close();
        } else {
            dialogRef.current?.showModal();
        }
    }, [showModal]);

    return <>
        <dialog ref={dialogRef} id={id} {...props}>
            {children}
        </dialog>
        <button type="button" data-dialog={id} onClick={() => setShowModal(!showModal)}>{label}</button>
    </>;
}