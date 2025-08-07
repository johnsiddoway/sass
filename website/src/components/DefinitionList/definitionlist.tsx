import { HTMLAttributes } from "react";

export interface DefinitionListProps extends HTMLAttributes<HTMLDListElement> {
}

export function DefinitionList({ ...props }: DefinitionListProps) {
    return <dl { ...props }>
        <dt>Description lists</dt>
        <dd>A description list is perfect for defining terms.</dd>
        <dt>First Term</dt>
        <dt>Second Term</dt>
        <dd>Multiple Terms can have a single Definition</dd>
        <dt>Term</dt>
        <dd>A single Term can have multiple Definiitions</dd>
        <dd>This is another Definition</dd>
        <dt>Term</dt>
        <dd>
            <p>You can nest Paragraphs inside a Definition</p>
            <p>And some more placeholder definition text.</p>
        </dd>
        <dt>This term is very long</dt>
        <dd>This can be useful when space is tight. Adds an ellipsis at the end.</dd>
        <dt>Nesting</dt>
        <dd>This is a regular Definition</dd>
        <dd>
            <dl>
                <dt>Nested definition list</dt>
                <dd>I heard you like definition lists. Let me put a definition list inside your definition list.</dd>
            </dl>
        </dd>
        <dd>This is another regular Definition</dd>
    </dl>;
}