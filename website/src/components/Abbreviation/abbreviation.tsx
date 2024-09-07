import { HTMLAttributes } from "react";

export interface AbbreviationProps extends HTMLAttributes<HTMLElement> {
    dataTooltip?: string;
}

export function Abbreviation({ dataTooltip, ...props }: AbbreviationProps) {
    if (dataTooltip) {
        return <abbr data-tooltip={dataTooltip} {...props} />;
    } else {
        return <abbr {...props} />;
    }
}