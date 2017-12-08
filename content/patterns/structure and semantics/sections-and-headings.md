+++
title = "Sections and headings"
tags = ["section", "heading", "aside", "aria", "epub:type"]
+++

For readers to be able to follow and understand the content, you need to clearly identify the sections of the book. Clearly grouping and identifying content enables better navigation by anyone reading using an assistive technology. To give the book a meaningful structure, follow the steps below.

## Add a section or an aside element

All the primary and secondary sections of a book need to be encapsulated in either a ```<section>``` or an ```<aside>``` element, respectively. 

Primary sections would include content like the dedication, epigraph, prologue, about the author, and chapters. The primary content establishes the book's structural hierarchy and is reflected in the Table Of Contents. Secondary content is related to the content of the section, but can be considered separate from it. Sidebars would be secondary content.

{{% expandable label="Example 1: Identify a section" level="2" %}}

A section of a book should be enclosed in an opening ```<section>``` and closing ```</section>``` element. If there is one section per xhtml file, which is common, then this means that the ```section``` will be placed right after the opening ```<body>``` and before the closing ```</body>``` element.

{{<code>}}
<body>
[[[<section]]] epub:type="acknowledgments" role="doc-acknowledgments">
   <h1>Acknowledgments</h1>
   <p>Thank you to my wife and children for encouraging me and filling my life with love … </p>
   …
[[[</section>]]]
</body>
{{</code>}}

{{% /expandable %}}

{{% expandable label="Example 2: Identify an aside" level="2" %}}

In the below code, the sidebar content is marked up with a ```<p>``` element inside a ```<div>``` element and styled using CSS. You'll need to replace the ```<p>``` with an ```<aside>``` element. This retains the structure and semantics as well as the CSS styling.

{{% codePen gXJvBR %}}

{{% /expandable %}}

{{% expandable label="Example 3: Identify a section that doesn't have a heading" level="2" %}}

If no heading is available, one can be supplied in an ```aria-label``` attribute. The ```aria-label``` attribute is read by assistive technology.

{{<code>}}
<section epub:type="copyright-page" [[[aria-label="copyright page"]]]>
   <p>Once upon a time …</p>
   …
</section>
{{</code>}}

{{% /expandable %}}

{{% expandable label="Example 4: Identify a part" level="2" %}}

Typically if the book contains parts, you will see the below two approaches to marking them up. 

The first approach includes the part heading with the first chapter file:

{{<code>}}
<body>
   [[[<section epub:type="part" role="doc-part">]]]
	  <h1>Part I</h1>
	  [[[<section epub:type="chapter" role="doc-chapter">]]]
		 <h2>Chapter I</h2>
	  [[[</section>]]]
   [[[</section>]]]
</body>
{{</code>}}

The other approach separates the part heading into its own file:

{{<code>}}
<body>
   [[[<section epub:type="part" role="doc-part">]]]
	  <h1>Part I</h1>
   [[[</section>]]]
</body>
{{</code>}}

{{% /expandable %}}

## Add a heading element

Heading elements refer to the six levels of headings in HTML: ```h1```, ```h2```, ```h3```, ```h4```, ```h5```, and ```h6```.  The use of heading tags ensures readers don't have to rely on visual styling to understand and navigate the book.

One heading per section should be used and is placed at the beginning of each section.

{{% expandable label="Example 1: Section with a heading" level="2" %}}

In the below code, the chapter heading is displayed as an image within a paragraph element. 

{{<code>}}
  [[[<p class="chtitle"]]] id="ch1">[[[<img alt="Chapter 1" src="../Images/ch-01.jpg"/>]]]</p>

  <p>Generally I like to assume that it’s not smart to generalize and make assumptions.</p> 
{{</code>}}

You'll need to fix this by deleting the image and replacing the paragraph element with a heading element. 

{{<code>}}
  [[[<h1>Chapter 1</h1>]]]

  <p>Generally I like to assume that it’s not smart to generalize and make assumptions.</p> 
{{</code>}}

{{% /expandable %}}

{{% expandable label="Example 2: Section with a heading and subheading" level="3" %}}

Heading elements are not used for subtitles or subheadings as these will appear as subsections to users of assistive technologies. To identify a subtitle, you should apply the epub:type ```subtitle``` and the ARIA role ```doc-subtitle``` to the ```<p>``` element that follows the heading. The two elements are paired inside a ```header``` element for additional clarity.

{{<code>}}
<section epub:type="chapter" role="doc-chapter">
   <header>
      [[[<h1>1. Europe 1930-1935</h1>]]]
      [[[<p epub:type="subtitle" role="doc-subtitle"]]]>The Foreshadows of War</p>
   </header>
   …
</section>
{{</code>}}

{{% /expandable %}}

{{% expandable label="Example 3: Headingless section" level="2" %}}

The ```aria-label``` attribute provides a meaningful title for a section that does not contain a visual heading. The ```aria-label``` will be announced to readers using assistive technology.

{{<code>}}
<section epub:type="preamble" [[[aria-label="preamble"]]]>
{{</code>}}

{{% /expandable %}}

## Add an ARIA role attribute

The ARIA role attribute provides more precise information about the structure of a book for users of assistive technologies. A *single* ARIA role attribute should be attached to each section to indicate the specific nature of the content, when applicable. 

When the role is not specified, a generic section/subsection nature is assumed based on the nesting level.

View these [common examples of how to use the ARIA role attribute on sections](http://kb.daisy.org/publishing/docs/html/roles.html).

See the [Digital Publishing WAI-ARIA module](https://www.w3.org/TR/dpub-aria-1.0/#roles) for a full list of values that can be used with the attribute.

If a book includes the same role multiple times (i.e. multiple chapters, appendixes or indexes in one file), it is best practice to include a label to differentiate them. A label provides context when deciding where to navigate.

{{% expandable label="Example 1: Multiple chapters" level="2" %}}

{{<code>}}
<section epub:type="chapter" [[[role="doc-chapter"]]]>
   <h1>Chapter One</h1>
   …
</section>
{{</code>}}

{{% /expandable %}}

## Add an epub:type attribute

The epub:type attribute was intended to serve a similar function to the ARIA role attribute in EPUB 3. The attribute is still useful and can enhance the user experience even though the accessibility support for it isn't fully materialized yet. 

The ```epub:type``` attribute should be attached to the ```<section>``` element, where needed.

See the [EPUB 3 Structural Semantics Vocabulary](https://idpf.github.io/epub-vocabs/structure/) for a list of values that can be used with the attribute.

{{% expandable label="Example" level="2" %}}

{{<code>}}
<section [[[epub:type="bibliography"]]] role="doc-bibliography">
<h1 class="chapter_title1" id="bib">SELECT BIBLIOGRAPHY</h1>
<p class="hanging0 left" id="p1"><strong>Library and Archives Canada, Government Records</strong></p>
</section>
{{</code>}}

{{% /expandable %}}

### Identify the cover, frontmatter, bodymatter, and backmatter

There are four ```epub:type``` values, known as "document partitions", that you need to be sure to identify in the book. These are the ```cover```, ```frontmatter```, ```bodymatter```, and ```backmatter```. These should be used only once in the book to define the cover, the start of the frontmatter, the start of the bodymatter, and the start of the backmatter.

These sections will be referenced in the {{% pattern "Landmarks" %}}.

{{% expandable label="Example 1: Identify cover" level="2" %}}

The cover page is usually the first xhtml file in the book and is usually an image of the book cover. You'll need to identify this point in the book by applying the ```epub:type="cover"``` as well as the ARIA ```role=doc-cover``` to the ```section``` element.

{{<code>}}
<body>
<section [[[epub:type="cover"]]] role="doc-cover">
<img alt="cover image" class="squeeze-epub" src="../Images/Saun_9780735273115_epub3_cvi_r1.jpg" style="width:100%;"/>
[[[</section>]]]
</body>
{{</code>}}

{{% /expandable %}}

{{% expandable label="Example 2: Identify frontmatter" level="2" %}}

Frontmatter is preliminary material to the main content of a book, such as the table of contents, dedicate, title page, copyright page, acknowledgments, etc. 

The frontmatter of the book starts after the cover page. You need to identify the start of this frontmatter by applying the ```epub:type="frontmatter"``` to the appropriate ```section``` element. This ```section``` element may have another attribute or value applied to it.

{{<code>}}
<body>
<section [[[epub:type="frontmatter"]]] aria-labelledby="alsoby">
<h1 id="alsoby">Also by Doug Saunders</h1>
<p><em>Arrival City</em></p>
<p><em>The Myth of the Muslim Tide</em></p>
[[[</section>]]]
</body>
{{</code>}}

{{% /expandable %}}

{{% expandable label="Example 3: Identify bodymatter" level="2" %}}

Bodymatter is the main content of a book. It includes sections such as a foreword, preface, prologue, introduction, epigraph, chapters, conclusion, etc. 

You need to identify the start of this bodymatter by applying the ```epub:type="bodymatter"``` to the appropriate ```section``` element. This ```section``` element may have another attribute or value applied to it. 

In the below example, the ```epub:type="part"``` and the ARIA ```role="doc-part" also identify this section. 

{{<code>}}
<body>
<section [[[epub:type="bodymatter part"]]] role="doc-part">
	<h1>Part One: The Minimizing Impulse</h1>
[[[</section>]]]
</body>
{{</code>}}

{{% /expandable %}}

{{% expandable label="Example 4: Identify backmatter" level="2" %}}

Backmatter is ancillary material occurring after the main content of a book, such as an index, appendix, terms of use, etc.

You need to identify the start of this backmatter by applying the ```epub:type="backmatter"``` to the appropriate ```section``` element. This ```section``` element may have another attribute or value applied to it. 

In the below example, the ```epub:type="bibliography"``` and the ARIA ```role="doc-bibliography" also identify this section. 

{{<code>}}
<body>
<section [[[epub:type="backmatter bibliography"]]] role="doc-bibliography">
<h1 class="subchapter2 sans" id="h1">A Note on Sources</h1>
   …
</section>
</body>
{{</code>}}

{{% /expandable %}}

## References

  * HTML5 - [The section element](https://www.w3.org/TR/html/sections.html#the-section-element)
  * HTML5 - [The aside element](https://www.w3.org/TR/html/sections.html#the-aside-element)
  * HTML5 - [Headings and sections](https://www.w3.org/TR/html/sections.html#headings-and-sections)
  * [EPUB 3 Structural Semantics Vocabulary](https://idpf.github.io/epub-vocabs/structure/)
  * [Digital Publishing WAI-ARIA Module 1.0](https://www.w3.org/TR/dpub-aria-1.0/)
  * [EPUB Structural Semantics to ARIA Roles Mapping Guide](https://idpf.github.io/epub-guides/aria-mapping/)
