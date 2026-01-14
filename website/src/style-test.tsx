import { useRef, useState } from "react";

export function StyleTest() {
    const dialogAutoRef = useRef<HTMLDialogElement>(null);
    const dialogManualRef = useRef<HTMLDialogElement>(null);
    const [manualDialogOutput, setManualDialogOutput] = useState<string>('');
    const [manualPopoverOutput, setManualPopoverOutput] = useState<string>('');

    const handleClose = (e: React.SyntheticEvent<HTMLDialogElement>) => {
        const formData = new FormData((e.currentTarget as HTMLElement).querySelector('form')!);
        setManualDialogOutput(JSON.stringify(Object.fromEntries(formData)));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        ((e.currentTarget as HTMLElement).closest('[popover]') as any)?.hidePopover();
    };

    const handleToggle = (e: any) => {
        if (e.newState === 'open') {
            // I think React switched this from e.source to e.target
            e.target.querySelector('input').focus();
        } else if (e.newState === 'closed') {
            const formData = new FormData(e.target.querySelector('form'));
            setManualPopoverOutput(JSON.stringify(Object.fromEntries(formData)));
        }
    }

    return <>
        <p>This post is meant to be a test-bed for my personal SASS library that I plan on sharing across my personal sites. I plan on posting information on how it's supposed to work in a separate post (or maybe series of posts).</p>
        <p>
            A hesitant shout-out to a recent article I read, <a href="https://www.infoq.com/articles/no-need-css-framework/">You Don't Need a CSS Framework</a>.
            I don't agree with several points made in the article, but the author's reference site, <a href="https://www.starterapp.style/">starterapp.style</a>, is really well laid out for showcasing how a stylesheet will render.
        </p>
        <section id="rating">
            <h2>Ratings</h2>
            <div className="rating">
                <input id="rating-5" type="radio" name="rating" value="5" />
                <label htmlFor="rating-5">{'\u2605'}</label>
                <input id="rating-4" type="radio" name="rating" value="4" />
                <label htmlFor="rating-4">{'\u2605'}</label>
                <input id="rating-3" type="radio" name="rating" value="3" defaultChecked />
                <label htmlFor="rating-3">{'\u2605'}</label>
                <input id="rating-2" type="radio" name="rating" value="2" />
                <label htmlFor="rating-2">{'\u2605'}</label>
                <input id="rating-1" type="radio" name="rating" value="1" />
                <label htmlFor="rating-1">{'\u2605'}</label>
            </div>
        </section>
        <section id="typography">
            <h2>Typography</h2>
            <section id="basic-text">
                <h3>Basic Text</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </section>
            <section id="abbr">
                <h3>Abbreviations</h3>
                <p>The <code>&lt;abbr/&gt;</code> element receives basic styling to make it stand out amongst paragraph text. You can also use a <code>[data-abbr]</code> attribute by itself or on the <code>&lt;abbr/&gt;</code> element to use some custom styling.</p>
                <p>The <abbr title="Hypertext Markup Language">HTML</abbr> abbreviation element.</p>
                <p>The <abbr data-abbr="Hypertext Markup Language">HTML</abbr> abbreviation element, using <code>data-abbr</code> instead of <code>title</code></p>
            </section>
            <section id="title">
                <h3>Titles</h3>
                <p>By adding a <code>[data-title]</code> attribute to an element, you can add a more stylish version of the default <code>[title]</code> attribute.
                    The popup uses the same style as the <code>[data-abbr]</code> popup. The difference is that the <code>[data-title]</code> doesn't add styles to the anchoring element.
                    Currently, these do not respect new line characters. I'd like to fix that.</p>
                <p><span data-title="Here is some additional info">Hover over me to see a tooltip.</span></p>
                <p><span data-title="Here is some additional info. This one is very long. Just to show what it looks like.">Hover over me to see a tooltip with a ton of text.</span></p>
            </section>
            <section id="a">
                <h3>Links</h3>
                <p><a href="#">Test a:link</a></p>
                <p><a href="#" className="visited">Test a:visited</a></p>
                <p><a href="#" className="hover">Test a:hover</a></p>
                <p><a href="#" className="active">Test a:active</a></p>
            </section>
            <section id="text-truncate">
                <h3>Truncated Text</h3>
                <p>Have a long block of text that you don't want to mess with the layout of some containers? No problem! Just use <code>.text-truncate</code>.
                    You can pair this with a <code>[title]</code> to let users actually read all of the text.</p>
                <div className="text-truncate" style={{ width: "200px", border: "1px solid currentColor", padding: "var(--component-padding)" }} title="[title] Example of a long block of text that goes on forever.">
                    [title] Example of a long block of text that goes on forever.
                </div>
            </section>
            <section>
                <h3>Lists</h3>
                <ol>
                    <li>Some</li>
                    <li>List</li>
                    <li>Items</li>
                </ol>
                <ul>
                    <li>Some</li>
                    <li>List</li>
                    <li>Items</li>
                </ul>
            </section>
            <section>
                <h3>Code</h3>
                <p>Code can be displayed inline with the <code>&lt;code&gt;</code> tag, or in a block.</p>
                <pre><code>
                    like this,
                    with &lt;pre&gt; and &lt;code&gt;
                </code></pre>
            </section>
            <section id="definition-list">
                <h3>Definition Lists</h3>
                <dl>
                    <dt>Description lists</dt>
                    <dd>A description list is perfect for defining terms.</dd>
                    <dt>Term</dt>
                    <dd>
                        <p>Definition for the term.</p>
                        <p>And some more placeholder definition text.</p>
                    </dd>
                    <dt>Another term</dt>
                    <dd>This definition is short, so no extra paragraphs or anything.</dd>
                    <dt>First Term</dt>
                    <dt>Second Term</dt>
                    <dd>This description should apply to both terms above</dd>
                    <dt>Nesting</dt>
                    <dd>
                        <dl>
                            <dt>Nested definition list</dt>
                            <dd>I heard you like definition lists. Let me put a definition list inside your definition list.</dd>
                        </dl>
                    </dd>
                </dl>
                <dl className="row">
                    <dt>Row-Based Description lists</dt>
                    <dd>A description list is perfect for defining terms.</dd>
                    <dt>Row-Based Term</dt>
                    <dd>
                        <p>Definition for the term.</p>
                        <p>And some more placeholder definition text.</p>
                    </dd>
                    <dt>Another term</dt>
                    <dd>This definition is short, so no extra paragraphs or anything.</dd>
                    <dt>First Term</dt>
                    <dt>Second Term</dt>
                    <dd>This description should apply to both terms above</dd>
                    <dt className="text-truncate" aria-describedby="dl-row-truncated-text"><span id="dl-row-truncated-text">Extremely long text will eventually get truncated depending on how wide your screen is</span></dt>
                    <dd>This can be useful when space is tight. Adds an ellipsis at the end.</dd>
                    <dt>Nesting</dt>
                    <dd>
                        <dl>
                            <dt>Nested definition list</dt>
                            <dd>I heard you like definition lists. Let me put a definition list inside your definition list.</dd>
                        </dl>
                    </dd>
                </dl>
            </section>
        </section>
        <section id="buttons">
            <h2>Buttons</h2>
            <h3>Sized Buttons</h3>
            <div className="button-grid">
                <button>Default</button>
                <button className="btn-lg">Large</button>
                <button className="btn-sm">Small</button>
            </div>
            <h3>Links and Inputs</h3>
            <div className="button-grid">
                <a href="#" role="button">Link</a>
                <button type="submit">Button</button>
                <input type="button" value="Input" />
                <input type="submit" value="Submit" />
                <input type="reset" value="Reset" />
            </div>
            <h3>Themed Buttons</h3>
            <div className="button-grid">
                <button className="btn-primary">Primary</button>
                <button className="btn-info">Info</button>
                <button className="btn-success">Success</button>
                <button className="btn-danger">Danger</button>
                <button className="btn-orange">Orange</button>
                <button className="btn-yellow">Yellow</button>
                <button className="btn-green">Green</button>
                <button className="btn-teal">Teal</button>
                <button className="btn-cyan">Cyan</button>
                <button className="btn-blue">Blue</button>
                <button className="btn-indigo">Indigo</button>
                <button className="btn-violet">Violet</button>
                <button className="btn-pink">Pink</button>
                <button className="btn-red">Red</button>
            </div>
            <h3>Inverted Themed Buttons</h3>
            <div className="button-grid">
                <button className="btn-primary-inverted">Primary</button>
                <button className="btn-info-inverted">Info</button>
                <button className="btn-success-inverted">Success</button>
                <button className="btn-danger-inverted">Danger</button>
                <button className="btn-orange-inverted">Orange</button>
                <button className="btn-yellow-inverted">Yellow</button>
                <button className="btn-green-inverted">Green</button>
                <button className="btn-teal-inverted">Teal</button>
                <button className="btn-cyan-inverted">Cyan</button>
                <button className="btn-blue-inverted">Blue</button>
                <button className="btn-indigo-inverted">Indigo</button>
                <button className="btn-violet-inverted">Violet</button>
                <button className="btn-pink-inverted">Pink</button>
                <button className="btn-red-inverted">Red</button>
            </div>
        </section>
        <section id="tables">
            <h2>Tables</h2>
            <div className="table-wrapper">
                <table>
                    <thead>
                        <tr>
                            <th role="columnheader" style={{ minWidth: "100px" }}></th>
                            <th role="columnheader" style={{ minWidth: "100px" }}>Heading</th>
                            <th role="columnheader" style={{ minWidth: "100px" }}>Heading</th>
                            <th role="columnheader" style={{ minWidth: "100px" }}>Heading</th>
                            <th role="columnheader" style={{ minWidth: "100px" }}>Heading</th>
                            <th role="columnheader" style={{ minWidth: "100px" }}>Heading</th>
                            <th role="columnheader" style={{ minWidth: "100px" }}>Heading</th>
                            <th role="columnheader" style={{ minWidth: "100px" }}>Heading</th>
                            <th role="columnheader" style={{ minWidth: "100px" }}>Heading</th>
                            <th role="columnheader" style={{ minWidth: "100px" }}>Heading</th>
                            <th role="columnheader" style={{ minWidth: "100px" }}>Heading</th>
                            <th role="columnheader" style={{ minWidth: "100px" }}>Heading</th>
                            <th role="columnheader" style={{ minWidth: "100px" }}>Heading</th>
                            <th role="columnheader" style={{ minWidth: "100px" }}>Heading</th>
                            <th role="columnheader" style={{ minWidth: "100px" }}>Heading</th>
                            <th role="columnheader" style={{ minWidth: "100px" }}>Heading</th>
                            <th role="columnheader" style={{ minWidth: "100px" }}>Heading</th>
                            <th role="columnheader" style={{ minWidth: "100px" }}>Heading</th>
                            <th role="columnheader" style={{ minWidth: "100px" }}>Overflow?</th>
                            <th role="columnheader" style={{ minWidth: "100px" }}>Overflow?</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th role="rowheader">Row</th>
                            <td>Cell</td>
                            <td>Cell</td>
                            <td>Cell</td>
                            <td>Cell</td>
                            <td>Cell</td>
                            <td>Cell</td>
                            <td>Cell</td>
                            <td>Cell</td>
                            <td>Cell</td>
                            <td>Cell</td>
                            <td>Cell</td>
                            <td>Cell</td>
                            <td>Cell</td>
                            <td>Cell</td>
                            <td>Cell</td>
                            <td>Cell</td>
                            <td>Cell</td>
                            <td>Overflow Cell</td>
                            <td>Overflow Cell</td>
                        </tr>
                        <tr>
                            <th role="rowheader">Row</th>
                            <td>Cell</td>
                            <td>Cell</td>
                            <td>Cell</td>
                            <td>Cell</td>
                            <td>Cell</td>
                            <td>Cell</td>
                            <td>Cell</td>
                            <td>Cell</td>
                            <td>Cell</td>
                            <td>Cell</td>
                            <td>Cell</td>
                            <td>Cell</td>
                            <td>Cell</td>
                            <td>Cell</td>
                            <td>Cell</td>
                            <td>Cell</td>
                            <td>Cell</td>
                            <td>Overflow Cell</td>
                            <td>Overflow Cell</td>
                        </tr>
                        <tr>
                            <th role="rowheader">Row</th>
                            <td>Cell</td>
                            <td>Cell</td>
                            <td>Cell</td>
                            <td>Cell</td>
                            <td>Cell</td>
                            <td>Cell</td>
                            <td>Cell</td>
                            <td>Cell</td>
                            <td>Cell</td>
                            <td>Cell</td>
                            <td>Cell</td>
                            <td>Cell</td>
                            <td>Cell</td>
                            <td>Cell</td>
                            <td>Cell</td>
                            <td>Cell</td>
                            <td>Cell</td>
                            <td>Overflow Cell</td>
                            <td>Overflow Cell</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th role="rowheader">Total</th>
                            <td>Total</td>
                            <td>Total</td>
                            <td>Total</td>
                            <td>Total</td>
                            <td>Total</td>
                            <td>Total</td>
                            <td>Total</td>
                            <td>Total</td>
                            <td>Total</td>
                            <td>Total</td>
                            <td>Total</td>
                            <td>Total</td>
                            <td>Total</td>
                            <td>Total</td>
                            <td>Total</td>
                            <td>Total</td>
                            <td>Total</td>
                            <td>Overflow Total</td>
                            <td>Overflow Total</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </section>
        <section id="popovers">
            <h2>Dialogs and Popovers</h2>
            <dialog closedby="any" ref={dialogAutoRef}>
                <article>
                    <h2>Dialog Example</h2>
                    <p>This is a <code>dialog</code> example. To close it, you can click anywhere outside of the dialog, click the button, or press <kbd>Esc</kbd>.</p>
                    <button className="btn-primary" onClick={() => dialogAutoRef.current?.close()}>Close</button>
                </article>
            </dialog>
            <dialog ref={dialogManualRef} onClose={handleClose}>
                <form method="dialog">
                    <h2>Dialog Example</h2>
                    <p>This is a <code>dialog</code> example.</p>
                    <p>I have wired up this form to have all of its inputs reset if you do not submit it. That is not the default behavior.</p>
                    <label className="form-row">
                        Example Text Input
                        <input type="text" name="text" placeholder="Example input" required />
                    </label>
                    <label className="form-row">
                        Example Select
                        <select name="select" required >
                            <option value="">Choose...</option>
                            <optgroup label="Option group 1">
                                <option value="1">Option 1</option>
                                <option value="2">Option 2</option>
                                <option value="3">Option 3</option>
                            </optgroup>
                            <optgroup label="Option group 2">
                                <option value="4">Option 4</option>
                                <option value="5">Option 5</option>
                                <option value="6">Option 6</option>
                            </optgroup>
                        </select>
                    </label>
                    <div className="form-row">
                        <button className="btn-primary" type="submit" value="submit">Close</button>
                        <button className="btn-secondary" formNoValidate>Cancel</button>
                    </div>
                </form>
            </dialog>
            <div id="popover-auto-1" popover="auto">
                <article>
                    <h2>Auto Popovers</h2>
                    <p>This is a <code>popover</code> example. To close it, you can click anywhere outside of the popover, click the button, or press <kbd>Esc</kbd>.</p>
                    <p>If you click the "Show #2" button below, it will open another popover <em>inside</em> this popover.</p>
                    <p>If you click the "Show #2" button on the main page, that will technically close this popover first, and then open the other popover.</p>
                    <div className="button-grid">
                        <button className="btn-primary" popoverTarget="popover-auto-1" popoverTargetAction="hide">Close Auto #1</button>
                        <button className="btn-primary" popoverTarget="popover-auto-2">Open Auto #2</button>
                    </div>
                </article>
            </div>
            <div id="popover-auto-2" popover="auto">
                <article>
                    <h2>Auto #2</h2>
                    <p>I am a small auto popover!</p>
                    <button className="btn-primary" popoverTarget="popover-auto-2" popoverTargetAction="hide">Close</button>
                </article>
            </div>
            <div id="popover-hint-1" popover="hint">
                <article>
                    <h2>Hint Popovers</h2>
                    <p>This is a <code>popover</code> example. To close it, you can click anywhere outside of the popover, click the button, or press <kbd>Esc</kbd>.</p>
                    <p>If you click the "Show #2" button below, it will open another popover <em>inside</em> this popover.</p>
                    <p>If you click the "Show #2" button on the main page, that will technically close this popover first, and then open the other popover.</p>
                    <div className="button-grid">
                        <button className="btn-primary" popoverTarget="popover-hint-1" popoverTargetAction="hide">Close</button>
                        <button className="btn-primary" popoverTarget="popover-hint-2">Show #2</button>
                    </div>
                </article>
            </div>
            <div id="popover-hint-2" popover="hint">
                <article>
                    <h2>Hint #2</h2>
                    <p>I am very small!</p>
                    <button className="btn-primary" popoverTarget="popover-hint-2" popoverTargetAction="hide">Close</button>
                </article>
            </div>
            <div id="popover-manual" popover="manual" onToggle={handleToggle}>
                <form onSubmit={handleSubmit}>
                    <h2>Manual Popover Example</h2>
                    <p>This is a <code>popover</code> example.</p>
                    <p>I have overridden the default form action to simply close the popover.</p>
                    <label className="form-row">
                        Example Text Input
                        <input type="text" name="text" placeholder="Example input" required autoFocus />
                    </label>
                    <label className="form-row">
                        Example Select
                        <select name="select" required >
                            <option value="">Choose...</option>
                            <optgroup label="Option group 1">
                                <option value="1">Option 1</option>
                                <option value="2">Option 2</option>
                                <option value="3">Option 3</option>
                            </optgroup>
                            <optgroup label="Option group 2">
                                <option value="4">Option 4</option>
                                <option value="5">Option 5</option>
                                <option value="6">Option 6</option>
                            </optgroup>
                        </select>
                    </label>
                    <div className="form-row">
                        <button className="btn-primary" type="submit" value="submit">Submit</button>
                        <button className="btn-secondary" type="button" popoverTarget="popover-manual" popoverTargetAction="hide">Cancel</button>
                    </div>
                </form>
            </div>
            <div className="button-grid">
                <button type="button" className="btn-primary" onClick={() => dialogAutoRef.current?.showModal()}>Open Auto Dialog</button>
                <button type="button" className="btn-primary" onClick={() => dialogManualRef.current?.showModal()}>Open Manual Dialog</button>
                <button type="button" className="btn-primary" popoverTarget="popover-auto-1">Toggle Auto Popover #1</button>
                <button type="button" className="btn-primary" popoverTarget="popover-auto-2">Toggle Auto Popover #2</button>
                <button type="button" className="btn-primary" popoverTarget="popover-hint-1">Toggle Hint Popover #1</button>
                <button type="button" className="btn-primary" popoverTarget="popover-hint-2">Toggle Hint Popover #2</button>
                <button type="button" className="btn-primary" popoverTarget="popover-manual">Toggle Manual Popover</button>
            </div>
            <div>Output of the Manual Dialog: <span>{manualDialogOutput}</span></div>
            <div>Output of the Manual Popover: <span>{manualPopoverOutput}</span></div>
        </section>
        <section id="cards">
            <h2>Cards</h2>
            <div className="card">
                <h3>Lorem ipsum</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat, enim id efficitur porta,
                    diam sem porta sapien, ut dignissim velit erat quis sapien. Nullam vulputate enim placerat tortor
                    consequat, vulputate blandit nunc tempor. Integer purus augue, fringilla eu molestie in, consequat
                    at turpis.
                </p>
            </div>
            <div className="card">
                <h3>Orci varius</h3>
                <p>
                    Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus vel
                    pulvinar orci, ac auctor urna. Nulla aliquam enim rutrum, auctor urna at, facilisis metus. Vivamus
                    euismod arcu ut leo tincidunt auctor. Vestibulum auctor neque leo, vitae dignissim tellus lobortis
                    vitae. Fusce vestibulum eleifend tortor et convallis. Aliquam congue nec ipsum id accumsan. Ut et
                    sagittis velit. Vestibulum lacinia, diam vitae sodales euismod, nulla diam molestie velit, vitae
                    iaculis neque nisl sit amet metus. Cras vehicula auctor fermentum.
                </p>
            </div>
            <div className="card">
                <h3>Mauris felis</h3>
                <p>
                    Mauris felis lorem, condimentum vel lobortis et, condimentum eu libero. Fusce eget iaculis metus.
                    Pellentesque quis ligula eget sem bibendum ultrices. Maecenas et ante id ex ultrices sagittis.
                    Suspendisse malesuada eleifend arcu congue tempus. Pellentesque sed dictum ex. Pellentesque orci mi,
                    vestibulum quis enim at, posuere iaculis neque.
                </p>
            </div>
        </section>
        <section id="switches">
            <h2>Switches</h2>
            <p>Switches should be used for actions that take effect on click, as opposed to checkboxes, which should be used for actions that take effect when a form is submitted.</p>
            <label className="switch">
                <input type="checkbox" name="turn-it-up-to-eleven" defaultChecked={false} />
                <span>Turn it up to eleven</span>
            </label>
        </section>
        <section id="details">
            <h2>Accordions</h2>
            <p>If a group of <code>&lt;details&gt;</code> elements all have the same <code>name</code> attribute, most browsers will only allow one of them to be open at a time. Firefox <a href="https://caniuse.com/mdn-html_elements_details_name">doesn't support this</a>, but it's supported by most other browsers, and degrades relatively gracefully.</p>
            <details name="accordion-demo">
                <summary>
                    This is a details summary
                </summary>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat, enim id efficitur porta, diam
                    sem porta sapien, ut dignissim velit erat quis sapien.
                    Nullam vulputate enim placerat tortor consequat, vulputate blandit nunc tempor.
                    Integer purus augue, fringilla eu molestie in, consequat at turpis.
                </p>
            </details>
            <details name="accordion-demo">
                <summary>
                    This is another details summary
                </summary>
                <ul>
                    <li>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</li>
                    <li>Phasellus vel pulvinar orci, ac auctor urna.</li>
                    <li>Nulla aliquam enim rutrum, auctor urna at, facilisis metus.</li>
                </ul>
            </details>
        </section>
        <section id="forms">
            <h2>Forms</h2>
            <form>
                <fieldset>
                    <legend>Example legend</legend>
                    <fieldset className="form-row">
                        <label htmlFor="input-after-label">Example text</label>
                        <input type="text" id="input-after-label" placeholder="Example input" />
                    </fieldset>
                    <label>
                        Example text
                        <input type="text" id="input-inside-label-after-text" placeholder="Example input" />
                    </label>
                    <label>
                        <input type="text" id="input-inside-label-before-text" placeholder="Example input" />
                        Example text
                    </label>
                    <div className="form-row">
                        <input type="text" id="input-before-label" placeholder="Example input" />
                        <label htmlFor="input-before-label">Example text</label>
                    </div>
                    <div className="form-row">
                        <label htmlFor="email">Example email</label>
                        <input type="email" id="email" placeholder="test@example.com" />
                    </div>
                    <div className="form-row">
                        <label htmlFor="tel">Example telephone</label>
                        <input type="tel" id="tel" />
                    </div>
                    <div className="form-row">
                        <label htmlFor="url">Example url</label>
                        <input type="url" id="url" />
                    </div>
                    <div className="form-row">
                        <label htmlFor="number">Example number</label>
                        <input type="number" id="number" />
                    </div>
                    <div className="form-row">
                        <label htmlFor="search">Example search</label>
                        <input type="search" id="search" />
                    </div>
                    <div className="form-row">
                        <label htmlFor="range">Example range</label>
                        <input type="range" id="range" min="0" max="10" step="0.5" />
                    </div>
                    <div className="form-row">
                        <label htmlFor="file">Example file input</label>
                        <input type="file" id="file" />
                    </div>
                    <div className="form-row">
                        <label htmlFor="select">Example select</label>
                        <select id="select">
                            <option value="">Choose...</option>
                            <optgroup label="Option group 1">
                                <option value="">Option 1</option>
                                <option value="">Option 2</option>
                                <option value="">Option 3</option>
                            </optgroup>
                            <optgroup label="Option group 2">
                                <option value="">Option 4</option>
                                <option value="">Option 5</option>
                                <option value="">Option 6</option>
                            </optgroup>
                        </select>
                    </div>
                    <p>
                        <label>
                            <input type="checkbox" name="example-checkbox" value="1" />
                            Check this checkbox
                        </label>
                        <label>
                            <input type="checkbox" name="example-checkbox" value="2" defaultChecked={true} />
                            This one is checked by default
                        </label>
                        <label>
                            <input type="checkbox" name="example-checkbox" value="3" disabled={true} />
                            This one is disabled
                        </label>
                        <label>
                            <input type="checkbox" name="example-checkbox" value="4" disabled={true} defaultChecked={true} />
                            This one is disabled and checked by default
                        </label>
                    </p>
                    <p>
                        <label>
                            <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" defaultChecked={true} />
                            Option one is this and that
                        </label>
                        <label>
                            <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2" />
                            Option two is something else that's also super long to demonstrate the wrapping of these fancy form controls.
                        </label>
                        <label>
                            <input type="radio" name="optionsRadios" id="optionsRadios3" value="option3" disabled />
                            Option three is disabled
                        </label>
                    </p>
                    <div className="form-row">
                        <label htmlFor="textarea">Example textarea</label>
                        <textarea id="textarea" rows={3}></textarea>
                    </div>
                    <div className="form-row">
                        <label htmlFor="date">Example date</label>
                        <input type="date" id="date" />
                    </div>
                    <div className="form-row">
                        <label htmlFor="time">Example time</label>
                        <input type="time" id="time" />
                    </div>
                    <div className="form-row">
                        <label htmlFor="password">Example password</label>
                        <input type="password" id="password" />
                    </div>
                    <div className="form-row">
                        <label htmlFor="datetime-local">Example datetime-local</label>
                        <input type="datetime-local" id="datetime-local" />
                    </div>
                    <div className="form-row">
                        <label htmlFor="week">Example week</label>
                        <input type="week" id="week" />
                    </div>
                    <div className="form-row">
                        <label htmlFor="month">Example month</label>
                        <input type="month" id="month" />
                    </div>
                    <div className="form-row">
                        <label htmlFor="color">Example color</label>
                        <input type="color" id="color" />
                    </div>
                    <div className="form-row">
                        <label htmlFor="output">Example output</label>
                        <output name="result" id="output">100</output>
                    </div>
                    <h3>Submit Buttons</h3>
                    <p>All of base styling is taken care of as part of the buttons component.</p>
                    <div className="button-grid">
                        <button type="reset">Reset Button</button>
                        <button type="submit">Submit Button</button>
                        <input type="reset" value="Reset Input" />
                        <input type="submit" value="Submit Input" />
                        <input type="button" value="Button Input" />
                        <button type="reset" className="btn-secondary">Reset Button</button>
                        <button type="submit" className="btn-success">Submit Button</button>
                        <input type="reset" className="btn-secondary" value="Reset Input" />
                        <input type="submit" className="btn-success" value="Submit Input" />
                        <input type="button" value="Button Input" />
                    </div>
                    <p>The only additional styling as part of the forms component is the <code>disabled</code> styles to show the cursor as no actions allowed and reduce the opacity.
                        This works whether you explicitly set the button to disabled, or if you include it in a fieldset that has been disabled.</p>
                    <fieldset className="button-grid" disabled>
                        <button type="reset">Reset Button</button>
                        <button type="submit">Submit Button</button>
                        <input type="reset" value="Reset Input" />
                        <input type="submit" value="Submit Input" />
                        <input type="button" value="Button Input" />
                        <button type="reset" className="btn-secondary">Reset Button</button>
                        <button type="submit" className="btn-success">Submit Button</button>
                        <input type="reset" className="btn-secondary" value="Reset Input" />
                        <input type="submit" className="btn-success" value="Submit Input" />
                        <input type="button" value="Button Input" />
                    </fieldset>
                </fieldset>
            </form>
        </section>
    </>;
}
