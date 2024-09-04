import { DialogHTMLAttributes } from "react";

export interface DialogProps extends DialogHTMLAttributes<HTMLDialogElement> {
    label?: string;
}

export function Dialog({ label, ...props}: DialogProps) {
    // See https://stackoverflow.com/a/76567796
    const id = props.id ?? 'dialog-example';
    return <>
        <dialog id={id} { ...props } />
        <button type="button" data-dialog={id}>{label}</button>
    </>;
}