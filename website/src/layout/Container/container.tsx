import { HTMLAttributes } from "react";
import "./container.scss";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
}

export function Container({ ...props }: ContainerProps) {
    const codeSnippet = `%container {
    margin-left: auto;
    margin-right: auto;
    width: 100%;
}

$grid-breakpoint: map.get($container-grid-breakpoints, #{$breakpoint});
$max-width: map.get($container-max-widths, #{$breakpoint});

@media (min-width: $grid-breakpoint) {
    max-width: $max-width;
}
`;
    return <div className="container" {...props}>
        <article>
            <h2>Container Example</h2>
            <p>This is a <code>%container</code> example. Largely copied from Bootstrap, we use some basic styles to horizontally center the container. Then, we use a couple of maps to control breakpoints to change the max-width on the <code>%container</code>.</p>
            <pre>
                <code>
                    {codeSnippet}
                </code>
            </pre>
        </article>
    </div>;
}