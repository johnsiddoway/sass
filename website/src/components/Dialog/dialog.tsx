import { DialogHTMLAttributes, useRef } from "react";

export interface DialogProps extends DialogHTMLAttributes<HTMLDialogElement> {
    label?: string;
}

export function Dialog({ id, label, ...props }: DialogProps) {
    // See https://stackoverflow.com/a/76567796
    const dialogRef = useRef<HTMLDialogElement>(null);

return <>
        <dialog ref={dialogRef} id={id} {...props}>
            <article>
                <h2>Dialog Example</h2>
                <p>This is a <code>dialog</code> example.</p>
            </article>
            <form method="dialog">
                <button value="no">No</button>
                &nbsp;
                <button value="yes">Yes</button>
            </form>
        </dialog>
        <button type="button" data-dialog={id} onClick={() => dialogRef.current?.showModal()}>{label}</button>
    </>;
}