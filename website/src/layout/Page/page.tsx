import "./page.scss";

export function Page() {
    const htmlSnippet = `<body>
    <header>
        <nav>
            <a href="/" className="brand">Site Name</a>
            <div>
                <a href="/">Link</a>
                <a href="/">Link</a>
                <a href="/">Link</a>
            </div>
        </nav>
    </header>
    <main>
        <h1>Hello World</h1>
    </main>
    <footer>© John Siddoway</footer>
</body>`;
    const scssSnippet = `body {
    display: flex;
    flex-direction: column;
    min-height: 100vh; // Ensures we fill the whole screen
    background-color: var(--background);
    color: var(--on-background);
    font-family: $font-family-sans-serif;
    font-size: $font-size-base;
    font-weight: $font-weight-base;
    line-height: $line-height-base;
    text-align: $text-align-base;

    // Invert the colors on both the header and footer,
    // as well as prevent links from using the browser default colors
    > header,
    > footer {
        padding: $layout-padding;
        background: var(--on-background);
        color: var(--background);

        a {
            color: var(--background);
            text-decoration: none;
        }
    }

    // Give both the header and main some space below
    > header,
    > main {
        margin-block-end: $layout-margin-block-end;
    }

    > header {
        nav {
            @extend %flex-space-between;
            @extend %container;

            a.brand {
                font-weight: $font-weight-bold;
                font-size: $font-size-lg;
            }

            div {
                @extend %flex-space-between;
            }
        }
    }

    // Only apply inline padding (aka, horizontal padding) to the main content
    > main {
        padding-inline: $layout-padding-inline;
        @extend %container;
    }

    // margin-block-start (aka, margin-top) here works in conjunction with
    // "min-height: 100vh" on the body to keep the footer at the bottom of the page.
    // If the main content was shorter than the visible page height,
    // the footer would move up from the bottom of the page and the rest
    // of the visible space would just be the body background. That's a weird look.
    > footer {
        justify-content: center;
        margin-block-start: auto;
        @extend %flex-space-between;
    }
}`;
    return <div className="body">
    <div className="header">
        <div className="nav">
            <a href="/" className="brand">Site Name</a>
            <div>
                <a href="/">Link</a>
                <a href="/">Link</a>
                <a href="/">Link</a>
            </div>
        </div>
    </div>
    <div className="main">
        <article>
            <h2>Full Page Example</h2>
            <p>This is an example of how to lay out a page. At one point, I tried to include mixins and placeholders for these classes, but it became annoying to manage the difference ways pages get rendered. React nests everything inside a div with a specific id, some static site generators put stuff directly in the body. So for now, I'm just copy-pasting scss and html along these lines to each new website I work on.</p>
            <blockquote>HTML</blockquote>
            <pre>
                <code>
                    {htmlSnippet}
                </code>
            </pre>
            <blockquote>SCSS</blockquote>
            <pre>
                <code>
                    {scssSnippet}
                </code>
            </pre>
        </article>
    </div>
    <div className="footer">
        <div>Footer Item 1</div>
        <div>Footer Item 2</div>
    </div>
</div>;
}