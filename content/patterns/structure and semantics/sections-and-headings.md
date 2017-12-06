+++
title = "Sections and headings"
tags = ["example tag", "another tag"]
+++

## Adding sections, asides, headings, and attributes

Don't be off-put by the heading, this is pretty straightforward.

For readers to be able to follow and understand the content, you need to clearly identify the sections of the book. Clearly grouping and identifying content enables better navigation by anyone reading using an assistive technology. To give the book a meaningful structure, follow the steps below.

### 1: Add a section or an aside element

All the primary and secondary sections of a book need to be encapsulated in either a ```<section>``` or an ```<aside>``` element, respectively. 

Primary sections would include content like the dedication, epigraph, prologue, about the author, and chapters. The primary content establishes the book's structural hierarchy and is reflected in the Table Of Contents. Secondary content is related to the content of the section, but can be considered separate from it. Sidebars would be secondary content.

{{% expandable label="Identify a chapter" level="3" %}}
{{% /expandable %}}

{{% expandable label="Identify a footnote section" level="3" %}}
{{% /expandable %}}

{{% expandable label="Identify a section that doesn't have a heading" level="3" %}}
{{% /expandable %}}

{{% expandable label="Identify a part" level="3" %}}
{{% /expandable %}}

### 2: Add a heading element

Heading elements refer to the six levels of headings in HTML: ```h1```, ```h2```, ```h3```, ```h4```, ```h5```, and ```h6```.

Note that we don't use heading elements for subtitles as these will appear as subsections to users of assistive technologies. To identify a subtitle, you should apply the role ```doc-subtitle``` to the ```<p>``` element that follows the heading. 

{{% expandable label="Section with a heading" level="3" %}}
{{% /expandable %}}

{{% expandable label="Section with a heading and sub-heading" level="3" %}}
{{% /expandable %}}

### 3: Add an ARIA role attribute

The ARIA role attribute provides more precise information about the structure of a book for users of assistive technologies. The ARIA role attribute should be attached to each section to indicate the specific nature of the content, when applicable. See the [Digital Publishing WAI-ARIA module](https://www.w3.org/TR/dpub-aria-1.0/#roles) for a list of values that can be used with the attribute.

When the role is not specified, a generic section/subsection nature is assumed based on the nesting level.

{{% expandable label="Example 1 " level="3" %}}
{{% /expandable %}}

{{% expandable label="Example 2 " level="3" %}}
{{% /expandable %}}

### 4: Add an epub:type attribute

The epub:type attribute was intended to serve a similar function to the ARIA role attribute in EPUB 3. The attribute is still useful and can enhance the user experience even though the accessibility support for it isn't fully materialized yet. 

See the [EPUB 3 Structural Semantics Vocabulary](http://www.idpf.org/epub/31/spec/epub-contentdocs.html#refEPUBStructureVocab) for a list of values that can be used with the attribute.

{{% expandable label="Identify endnote and reference" level="3" %}}
{{% /expandable %}}

{{% expandable label="Identify chapters" level="3" %}}
{{% /expandable %}}

## References

  * HTML5 - [The section element](https://www.w3.org/TR/html/sections.html#the-section-element)
  * HTML5 - [The aside element](https://www.w3.org/TR/html/sections.html#the-aside-element)
  * HTML5 - [Headings and sections](https://www.w3.org/TR/html/sections.html#headings-and-sections)
  * [EPUB 3 Structural Semantics Vocabulary](http://www.idpf.org/epub/31/spec/epub-contentdocs.html#refEPUBStructureVocab)
