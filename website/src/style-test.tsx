import { useRef } from "react";

export function StyleTest() {
    const dialogAutoRef = useRef<HTMLDialogElement>(null);
    const dialogManualRef = useRef<HTMLDialogElement>(null);

    return <>
        <p>This post is meant to be a test-bed for my personal SASS library that I plan on sharing across my personal sites. I plan on posting information on how it's supposed to work in a separate post (or maybe series of posts).</p>
        <p>
            A hesitant shout-out to a recent article I read, <a href="https://www.infoq.com/articles/no-need-css-framework/">You Don't Need a CSS Framework</a>.
            I don't agree with several points made in the article, but the author's reference site, <a href="https://www.starterapp.style/">starterapp.style</a>, is really well laid out for showcasing how a stylesheet will render.
        </p>
        <section id="typography">
            <h2>Typography</h2>
            <section>
                <h3>Basic Text</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </section>
            <section>
                <h3>Abbreviations</h3>
                <p><div className="test"></div>The <code>&lt;abbr/&gt;</code> element receives basic styling to make it stand out amongst paragraph text. You can also use a <code>[data-abbr]</code> attribute by itself or on the <code>&lt;abbr/&gt;</code> element to use some custom styling.</p>
                <p>The <abbr title="Hypertext Markup Language">HTML</abbr> abbreviation element.</p>
                <p>The <abbr data-abbr="Hypertext Markup Language">HTML</abbr> abbreviation element, using <code>data-abbr</code> instead of <code>title</code></p>
            </section>
            <section>
                <h3>Titles</h3>
                <p>By adding a <code>[data-title]</code> attribute to an element, you can add a more stylish version of the default <code>[title]</code> attribute.
                   The popup uses the same style as the <code>[data-abbr]</code> popup. The difference is that the <code>[data-title]</code> doesn't add styles to the anchoring element.
                   Currently, these do not respect new line characters. I'd like to fix that.</p>
                <p><span data-title="Here is some additional info">Hover over me to see a tooltip.</span></p>
                <p><span data-title="Here is some additional info. This one is very long. Just to show what it looks like.">Hover over me to see a tooltip with a ton of text.</span></p>
            </section>
            <section>
                <h3>Links</h3>
                <p><a href="#">Test a:link</a></p>
                <p><a href="#" className="visited">Test a:visited</a></p>
                <p><a href="#" className="hover">Test a:hover</a></p>
                <p><a href="#" className="active">Test a:active</a></p>
            </section>
            <section>
                <h3>Truncated Text</h3>
                <p>Have a long block of text that you don't want to mess with the layout of some containers? No problem! Just use <code>.text-truncate</code>.
                   You can pair this with a <code>[title]</code> to let users actually read all of the text.</p>
                <div className="text-truncate" style={{width: "200px", border: "1px solid currentColor", padding: "var(--component-padding)"}} title="[title] Example of a long block of text that goes on forever.">
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
                <input type="button" value="Input"/>
                <input type="submit" value="Submit"/>
                <input type="reset" value="Reset"/>
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
                        <th role="columnheader" style={{minWidth: "100px"}}></th>
                        <th role="columnheader" style={{minWidth: "100px"}}>Heading</th>
                        <th role="columnheader" style={{minWidth: "100px"}}>Heading</th>
                        <th role="columnheader" style={{minWidth: "100px"}}>Heading</th>
                        <th role="columnheader" style={{minWidth: "100px"}}>Heading</th>
                        <th role="columnheader" style={{minWidth: "100px"}}>Heading</th>
                        <th role="columnheader" style={{minWidth: "100px"}}>Heading</th>
                        <th role="columnheader" style={{minWidth: "100px"}}>Heading</th>
                        <th role="columnheader" style={{minWidth: "100px"}}>Heading</th>
                        <th role="columnheader" style={{minWidth: "100px"}}>Heading</th>
                        <th role="columnheader" style={{minWidth: "100px"}}>Heading</th>
                        <th role="columnheader" style={{minWidth: "100px"}}>Heading</th>
                        <th role="columnheader" style={{minWidth: "100px"}}>Heading</th>
                        <th role="columnheader" style={{minWidth: "100px"}}>Heading</th>
                        <th role="columnheader" style={{minWidth: "100px"}}>Heading</th>
                        <th role="columnheader" style={{minWidth: "100px"}}>Heading</th>
                        <th role="columnheader" style={{minWidth: "100px"}}>Heading</th>
                        <th role="columnheader" style={{minWidth: "100px"}}>Heading</th>
                        <th role="columnheader" style={{minWidth: "100px"}}>Overflow?</th>
                        <th role="columnheader" style={{minWidth: "100px"}}>Overflow?</th>
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
                <article >
                    <h2>Dialog Example</h2>
                    <p>This is a <code>dialog</code> example.</p>
                    <button className="btn-primary" onClick={() => dialogAutoRef.current?.close()}>Close</button>
                </article>
            </dialog>
            <dialog ref={dialogManualRef}>
                <form method="dialog">
                    <h2>Dialog Example</h2>
                    <p>This is a <code>dialog</code> example.</p>
                    <label htmlFor="dialog-input">Example input</label>
                    <input type="text" id="dialog-input" placeholder="Example input"/>
                    <button className="btn-primary" type="submit">Close</button>
                </form>
            </dialog>
            <div id="popover-auto" popover="auto">
                <article>
                    <h2>Auto Popovers</h2>
                    This is a <code>&lt;div popover="auto"&gt;popover&lt;/div&gt;</code> example.
                    You can click anywhere outside this popover to close it, or click the button.
                </article>
                <button className="btn-primary" popoverTarget="popover-auto" popoverTargetAction="hide">Close</button>
            </div>
            <div id="popover-manual" popover="manual">
                <article>
                    <h2>Manual Popover</h2>
                    This is a <code>&lt;div popover="manual"&gt;popover&lt;/div&gt;</code> example.
                </article>
                <button value="no" popoverTarget="popover-manual" popoverTargetAction="hide">No</button>
                <button value="yes" popoverTarget="popover-manual" popoverTargetAction="hide">Yes</button>
            </div>
            <div className="button-grid">
                <button type="button" className="btn-primary" onClick={() => dialogAutoRef.current?.showModal()}>Open Auto Dialog</button>
                <button type="button" className="btn-primary" onClick={() => dialogManualRef.current?.showModal()}>Open Manual Dialog</button>
                <button type="button" className="btn-primary" popoverTarget="popover-auto">Open Auto Popover</button>
                <button type="button" className="btn-primary" popoverTarget="popover-manual">Open Manual Popover</button>
            </div>
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
                <input type="checkbox" name="turn-it-up-to-eleven" defaultChecked={false}/>
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
        <h2>Forms</h2>
        <form>
            <fieldset>
                <legend>Example legend</legend>
                <fieldset>
                    <label htmlFor="input">Example input</label>
                    <input type="text" id="input" placeholder="Example input"/>
                </fieldset>
                <p>
                    <label htmlFor="email">Example email</label>
                    <input type="email" id="email" placeholder="test@example.com"/>
                </p>
                <p>
                    <label htmlFor="tel">Example telephone</label>
                    <input type="tel" id="tel"/>
                </p>
                <p>
                    <label htmlFor="url">Example url</label>
                    <input type="url" id="url"/>
                </p>
                <p>
                    <label htmlFor="number">Example number</label>
                    <input type="number" id="number"/>
                </p>
                <p>
                    <label htmlFor="search">Example search</label>
                    <input type="search" id="search"/>
                </p>
                <p>
                    <label htmlFor="range">Example range</label>
                    <input type="range" id="range" min="0" max="10"/>
                </p>
                <p>
                    <label htmlFor="file">Example file input</label>
                    <input type="file" id="file"/>
                </p>
                <p>
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
                </p>
                <p>
                    <label>
                        <input type="checkbox" value=""/>
                        Check this checkbox
                    </label>
                </p>
                <p>
                    <label>
                        <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" defaultChecked={true}/>
                        Option one is this and that
                    </label>
                    <label>
                        <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2"/>
                        Option two is something else that's also super long to demonstrate the wrapping of these fancy form controls.
                    </label>
                    <label>
                        <input type="radio" name="optionsRadios" id="optionsRadios3" value="option3" disabled/>
                        Option three is disabled
                    </label>
                </p>
                <p>
                    <label htmlFor="textarea">Example textarea</label>
                    <textarea id="textarea" rows={3}></textarea>
                </p>
                <p>
                    <label htmlFor="date">Example date</label>
                    <input type="date" id="date"/>
                </p>
                <p>
                    <label htmlFor="time">Example time</label>
                    <input type="time" id="time"/>
                </p>
                <p>
                    <label htmlFor="password">Example password</label>
                    <input type="password" id="password"/>
                </p>
                <p>
                <label htmlFor="datetime-local">Example datetime-local</label>
                <input type="datetime-local" id="datetime-local"/>
                </p>
                <p>
                <label htmlFor="week">Example week</label>
                <input type="week" id="week"/>
                </p>
                <p>
                <label htmlFor="month">Example month</label>
                <input type="month" id="month"/>
                </p>
                <p>
                <label htmlFor="color">Example color</label>
                <input type="color" id="color"/>
                </p>
                <p>
                <label htmlFor="output">Example output</label>
                <output name="result" id="output">100</output>
                </p>
                <p>
                <button type="submit">Button submit</button>
                <input type="submit" value="Input submit button"/>
                <input type="reset" value="Input reset button"/>
                <input type="button" value="Input button"/>
                </p>
                <p>
                <button type="submit" disabled>Button submit</button>
                <input type="submit" value="Input submit button" disabled/>
                <input type="reset" value="Input reset button" disabled/>
                <input type="button" value="Input button" disabled/>
                </p>
            </fieldset>
        </form>
    </>;
}