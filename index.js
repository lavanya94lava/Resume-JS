<!DOCTYPE html>
<html>
  <head>
    <title>Walk through your first HTML page | blog.codingninjas.in</title>
  </head>
  <body>
    <header id="main-header">
      <a href="http://blog.codingninjas.in/" id="logo"
        ><img
          src="https://ninjasfiles.s3.amazonaws.com/0000000000001394.png"
          alt="coding ninjas logo"
      /></a>

      <div>
        <p id="site-title">
          <a href="http://blog.codingninjas.in/">blog.codingninjas.in</a>
        </p>
        <p id="about-site">Coding Ninjas Official Blog</p>
      </div>

      <div id="header-image-container">
        <img
          src="https://ninjasfiles.s3.amazonaws.com/0000000000001395.png"
          alt="coding ninjas love coding"
        />
      </div>
    </header>

    <div id="content">
      <main>
        <header id="blog-header">
          <h1>A step-by-step walk through of your first HTML page</h1>
        </header>

        <article id="blog-content">
          <div id="blog-image-container">
            <img
              src="https://ninjasfiles.s3.amazonaws.com/asset_0000000000000010_1548494846_coding-ninjas-step-by-step.png"
              alt="Step-by-step walk"
            />
          </div>

          <p>
            HTML is short for HyperText Markup Language.Basically, it’s the
            “code” behind every webpage – even this one. If you’re just
            beginning to learn HTML, let us tell you that it’s a fairly easy
            task. HTML, without styling, can’t do anything more than setting a
            layout, drawing a table, or creating frames – but it is handy as it
            helps you structure the content correctly, which is important when
            you sit down to add style to your HTML.
          </p>

          <img
            src="https://ninjasfiles.s3.amazonaws.com/asset_0000000000000005_1548426333_coding-ninjas-code-screenshot.jpeg"
            alt="Code screenshot from laptop"
          />

          <p>
            However simple this might seem, it is a mighty useful tool when it
            comes to full-fledged web development. Various tools easily
            eliminate the HTML coding from your work process – but if you want
            to be in full control of your web-page, you’ll need to have some
            command over HTML.
          </p>

          <p>
            Through this article, we aim to give you the essential HTML building
            blocks that’ll help you get up and running. Reading this, you’ll be
            able to understand an HTML source code and even modify it for your
            own good!
          </p>

          <section>
            <h3>Step One - TAGS</h3>

            <img
              src="https://ninjasfiles.s3.amazonaws.com/asset_0000000000000004_1548426302_coding-ninjas-angle-brackets.png"
              alt="Angle Brackets photo"
            />

            <p>
              Tags are what you’ll see the most when you look at any HTML source
              code. A tag can ideally be seen as a wrapper to any item on your
              HTML document. Tags tell what magic is to be done on the content
              enclosed by them.
            </p>

            <p>Let’s look at two types of tags:</p>

            <ol>
              <li>
                &lt;tag-example-1&gt;I need a closign tag&lt;tag-example-1&gt;
              </li>
              <li>&lt;tag-example-2/&gt;I don't need a cloding tag.</li>
            </ol>

            <p>
              In the first example, the sentence is wrapped by two tags. The
              first one is called the opening tag and the second one is called
              the closing tag. Everything in between is affected by the
              properties of the tag. Very commonly used examples of such tags
              are &lt;html&gt;, &lt;head&gt;, &lt;body&gt;, &lt;strong&gt;, etc.
            </p>

            <p>
              The second example tags about loner tags – as in, they don’t need
              a closing tag to function. Although it’s not required, these type
              of tags are often written as &lt;tag/&gt; to make the debugging of
              code easier. Common examples of such tags are &lt;hr/&gt; – used
              for horizontal line, &lt;br/&gt; – to break the line, etc.
            </p>
          </section>

          <section>
            <h3>
              Step Two – HTML, HEAD, and BODY: The three pillars of your
              document
            </h3>

            <img
              src="https://ninjasfiles.s3.amazonaws.com/asset_0000000000000007_1548426400_coding-ninjas-html-head-body.jpg"
              alt="Head Body photo"
            />

            <p>
              These tags are essential for any HTML document. They parcel out
              the significant parts of your HTML code.
            </p>

            <ul>
              <li>
                &lt;BODY&gt; &lt;/BODY&gt; is placed below your &lt;HEAD&gt;
                tag, and everything that you want to be displayed on your screen
                comes under this tag. Text, images, links, and pretty much
                anything you can see in your browser live inside this tag.
              </li>
              <br />
              <li>
                &lt;HTML&gt; &lt;/HTML&gt; wraps your entire code. Everything
                else in your HTML document needs to come inside these tags.
              </li>
              <li>
                &lt;HEAD&gt; &lt;/HEAD&gt; includes things like title, styles,
                and scripts. Head is usually present at the top (hah!), just
                inside the &lt;/HTML&gt; tag.
              </li>
            </ul>
          </section>

          <section>
            <h3>Step three – A few tags that’ll make your page pretty</h3>

            <p>
              Now that you know how to set up the skeleton of your document,
              let’s proceed with the things that will go inside your
              &lt;BODY&gt; tag and do some magic!
            </p>

            <p>Some basic text formatting tags:</p>

            <ul>
              <li>&lt;b&gt; &lt;/b&gt; makes your text look <b>bold</b></li>
              <li>&lt;i&gt; &lt;/i&gt; makes you write in <i>cursive</i></li>
              <li>
                &lt;u&gt; &lt;/u&gt; <u>underlines</u> what you just wrote
              </li>
            </ul>

            <p>For example, this piece of code</p>

            <hr />
            <code>&lt;html&gt;</code>
            <br /><br />
            <code>&ensp; &lt;head&gt; &lt;/head&gt;</code>
            <br /><br />
            <code>&ensp; &lt;body&gt;</code>
            <br /><br />
            <code
              >&ensp; &ensp; &lt;i&gt; I am italics! &lt;/i&gt;
              &lt;br/&gt;</code
            >
            <br />
            <code
              >&ensp; &ensp; &lt;b&gt; I am bold! &lt;/b&gt; &lt;br/&gt;</code
            >
            <br />
            <code
              >&ensp; &ensp; &lt;u&gt; And me, well, I'm underlined! &lt;/u&gt;
              &lt;br/&gt;</code
            >
            <br /><br />
            <code>&ensp; &lt;/body&gt;</code>
            <br /><br />
            <code>&lt;/html&gt;</code>
            <hr />

            <br />
            <br />

            <p>
              Should produce something like this on your browser: Don’t fret too
              much about the &lt;br/&gt;. It’s just for breaking the line so
              that you can start from the next line. Enter key does little when
              it comes to changing lines in your HTML document.
            </p>

            <img
              src="https://ninjasfiles.s3.amazonaws.com/asset_0000000000000009_1548426552_coding-ninjas-html-page-screenshot.png"
              alt="Bold, Italic and Underline"
            />

            <p><b>Tags to help you structure your content:</b></p>

            <ul>
              <li>
                &lt;br/&gt; breaks the line, making you continue to the next
                line
              </li>
              <li>
                &lt;p&gt; stands for paragraph. It divides your content into
                paragraphs
              </li>
            </ul>

            <p>
              <i
                >Note: You need to use these tags as space and enter keys do
                very little when it comes to formatting content inside an HTML
                document.</i
              >
            </p>

            <section>
              <h4>Heading Tags:</h4>

              <p>
                HTML provides you with six tags, from &lt;H1&gt; &lt;/H1&gt; to
                &lt;H6&gt; &lt;/H6&gt; to help you create different sized
                headers quickly.
              </p>

              <img
                src="https://ninjasfiles.s3.amazonaws.com/asset_0000000000000006_1548426364_coding-ninjas-headings.png"
                alt="All heading photos"
              />
            </section>

            <section>
              <h4>Inserting an Image:</h4>

              <p>
                All that’s good, but what fun without images on the webpage?
                Don’t worry, &lt;IMG/&gt; to the rescue! The image tag has a
                mandatory attribute called “source”. Basically, it tells the
                browser where it should look for the image. The syntax goes
                something like:
              </p>

              <p><i>&lt; img src = “path_to_your_image” /&gt; </i></p>

              <p>
                Furthermore, it also has attributes like height and width that
                let you specify the height and width you want your image to
                take.
              </p>
            </section>

            <section>
              <h4>Lists:</h4>

              <p>
                HTML has two types of lists – ordered and unordered. Each item
                of your list has to be enclosed in a tag. The syntax for
                creating a list is fairly simple.
              </p>

              <p>Suppose you want to create a list like:</p>

              <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
              </ul>

              <p>The following code will easily do the job for you:</p>

              <hr />
              <code>&lt;ul&gt;</code>
              <br />
              <code>&ensp; &lt;li&gt;</code>
              <code>Item 1</code>
              <code>&lt;/li&gt;</code>
              <br />
              <code>&ensp; &lt;li&gt;</code>
              <code>Item 2</code>
              <code>&lt;/li&gt;</code>
              <br />
              <code>&ensp; &lt;li&gt;</code>
              <code>Item 3</code>
              <code>&lt;/li&gt;</code>
              <br />
              <code>&lt;/ul&gt;</code>
              <hr />

              <br />
              <br />

              <p>
                This, by the way, was an example of an unordered list. For an
                ordered list, all you need to do is replace &lt;ul&gt; with
                &lt;ol&gt; and &lt;/ul&gt; with &lt;/ol&gt;.
              </p>

              <p>Let’s see what the following code does:</p>

              <hr />
              <code>&lt;html&gt;</code>
              <br /><br />
              <code>&ensp; &lt;head&gt; &lt;/head&gt;</code>
              <br /><br />
              <code>&ensp; &lt;body&gt;</code>
              <br /><br />
              <code>&ensp; &ensp; &lt;ul&gt;</code>
              <br />
              <code
                >&ensp; &ensp; &ensp; &lt;li&gt; I am unordered list's item 1!
                &lt;/li&gt;</code
              >
              <br />
              <code
                >&ensp; &ensp; &ensp; &lt;li&gt; I am unordered list's item 2!
                &lt;/li&gt;</code
              >
              <br />
              <code
                >&ensp; &ensp; &ensp; &lt;li&gt; I am unordered list's item 3!
                &lt;/li&gt;</code
              >
              <br />
              <code
                >&ensp; &ensp; &ensp; &lt;li&gt; I am unordered list's item 4!
                &lt;/li&gt;</code
              >
              <br />
              <code>&ensp; &ensp; &lt;/ul&gt;</code>
              <br />
              <code>&ensp; &ensp; &lt;ol&gt;</code>
              <br />
              <code
                >&ensp; &ensp; &ensp; &lt;li&gt; I am ordered list's item 1!
                &lt;/li&gt;</code
              >
              <br />
              <code
                >&ensp; &ensp; &ensp; &lt;li&gt; I am ordered list's item 2!
                &lt;/li&gt;</code
              >
              <br />
              <code
                >&ensp; &ensp; &ensp; &lt;li&gt; I am ordered list's item 3!
                &lt;/li&gt;</code
              >
              <br />
              <code
                >&ensp; &ensp; &ensp; &lt;li&gt; I am ordered list's item 4!
                &lt;/li&gt;</code
              >
              <br />
              <code>&ensp; &ensp; &lt;/ol&gt;</code>
              <br /><br />
              <code>&ensp; &lt;/body&gt;</code>
              <br /><br />
              <code>&lt;/html&gt;</code>
              <hr />

              <br />
              <br />

              <img
                src="https://ninjasfiles.s3.amazonaws.com/asset_0000000000000008_1548426521_coding-ninjas-html-page-list-screenshot.png"
                alt="Ordered and Unordered List on HTML page"
              />

              <p>
                All of these tags, when arranged coherently, will provide you
                with a simple webpage consisting of images, headings, and lists.
                Further, there are various tags that HTML supports, and we
                thoroughly recommend you to check them out and play with them!
              </p>
            </section>

            <section>
              <h2>In Conclusion</h2>

              <p>
                You now know enough to skim through and understand any part of
                an HTML code. We request you to go ahead and try skimming
                through the source code of any website (you’ll find some tags
                you don’t know, but that’s how you learn!). Oh, and welcome to
                the world of web development. With HTML under your belt, your
                next stop should be making your page look beautiful using CSS.
              </p>

              <p>
                Let us know if you had any problems in the article, and don’t
                forget to have a look at a source code or two!
              </p>
            </section>
          </section>
        </article>
      </main>
    </div>
  </body>
</html>