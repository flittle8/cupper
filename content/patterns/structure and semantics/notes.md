+++
title = "Notes"
tags = ["footnotes", "endnotes", "epub:type", "aria"]
+++

Notes need to be properly identified in the text as either footnotes or endnotes.

To do this, you'll need to apply the appropriate ```epub:type``` and aria roles to both the references and their notes. 

Since notes are formatted consistently throughout the entire book, this means you can use regex to update all of them at once into the correct format. 

## EPUB 2 vs EPUB 3 notes

The difference between EPUB 2 and EPUB 3 notes is one of semantics. And, as we know, semantics greatly affects usability.

In EPUB 2, notes are placed inside a simple ```<a>``` or hyperlink element. There's no way for assistive technology to identify this as a note; it just sees it as more text content. That's why we need to upgrade these notes to EPUB 3 style.

In EPUB 3, the notes are still within an ```<a>``` element, but have additional semantics added so that technology understands exactly what type of link it is (footnote or endnote) and can handle the information more intelligently. For example, with proper semantics applied, user agents can provide readers with the choice to ignore all notes (so as to not interrupt the reading experience). Some reading systems will also handle them as pop-ups. 

Here's how a typical EPUB 2 reference and its note will look:

{{<code>}}
<p>The date of this particular papyrus has been placed in the third century, or somewhere between 250 and 300 A.D.<sup>[[[<a href="../Text/Notes.xhtml#end001">1</a>]]]</sup></p>
…
…
[[[<p class="noindentpara" id="end001">]]]1. Bruce Metzger, The Text of the New Testament (Oxford University Press, New York, 1968), p. 38.</p>
{{</code>}}

You'll notice that the note reference is just a hyperlink that takes the reader to the note itself. The reference is often surrounded by the ```<sup>``` or superscript element for presentational purposes. The note is just text within a paragraph element. The reference and its notes are linked together by the id ```end001```.

You'll need to upgrade these EPUB 2 notes to EPUB 3. Here's how a typical EPUB 3 reference and its note will look:

{{<code>}}
<p>The date of this particular papyrus has been placed in the third century, or somewhere between 250 and 300 A.D.<sup><a [[[epub:type="noteref"]]] [[[role="doc-noteref"]]] href="../Text/Notes.xhtml#end001">1</a></sup></p>
…
…
<[[[li]]] [[[epub:type="endnote"]]] [[[role="doc-endnote"]]] class="noindentpara" id="end001">1. Bruce Metzger, The Text of the New Testament (Oxford University Press, New York, 1968), p. 38.</li>
{{</code>}}

Notice that the ```epub:type="noteref"``` as well as the aria ```role="doc-noteref"``` are applied to the reference, while the ```epub:type="endnote"``` and the aria ```role="doc-endnote"``` are applied to the note itself. The notes are also presented as list items ```<li>``` - and not separate paragraphs ```<p>``` - for easy navigation.

## Examples

Below are some examples of how endnotes, footnotes, and endnote and footnote sections should look after you've worked your regex magic.

{{% expandable label="Example 1: Endnote or footnote reference" level="2" %}}

Here's what a typical EPUB 2 reference would look like that we need to fix:

{{<code>}}
 …between 250 and 300 A.D.<sup><a href="../Text/Notes.xhtml#note001">1</a></sup> …
{{</code>}}

Here's how you could use regex to fix all these references at once:

{{<code>}}
Find: <sup><a href="(.*?)">
Replace: <sup><a epub:type="noteref" role="doc-noteref" href="\1"
{{</code>}}

Basically we've left everything in tact except that we've added in the ```epub:type="noteref"``` and aria ```role="doc-noteref"``` semantics to all the references. I've included the ```<sup>``` in the search just in case there are other links in the book, which aren't notes, that we don't want to capture and replace.

{{% /expandable %}}

{{% expandable label="Example 2: Endnotes or footnotes at the end of a section or book" level="2" %}}

Notes are often grouped together either at the end of a section or at the end of a book. In both cases, the notes should be presented as a list (as opposed to a bunch of paragraphs). You'll also need to add the ```epub:type="endnotes"``` to the ```section``` element, and the aria ```role=doc-endnotes``` to the ```<ol>``` element. Each endnote should be a list item ```<li>``` and given an ```epub:type="endnote"``` and aria ```role=doc-endnote```.

You can add in the section and unordered list elements manually, then use regex to update the endnotes.
 
{{<code>}}
<section epub:type="endnotes">
	<h2>Reference notes</h2>
	<ol role="doc-endnotes">
		[[[<p id="end001">]]]1. Bruce Metzger, The Text of the New Testament (Oxford University Press, New York, 1968), p. 38.[[[</p>]]]
		 …
{{</code>}}

Here's how you could update all these endnotes in the book:

{{<code>}}
Find: <p id=".*?">(.*)</p>
Replace: <li epub:type="endnote" role="doc-endnote" id="\1">\2</li>
{{</code>}}

The resulting code will look like:

{{<code>}}
<section epub:type="endnotes">
	<h2>Reference notes</h2>
	<ol role="doc-endnotes">
		[[[<li]]] [[[epub:type="endnote"]]] [[[role="doc-endnote"]]] id="end001">1. Bruce Metzger, The Text of the New Testament (Oxford University Press, New York, 1968), p. 38.[[[</li>]]]
 		…
	</ol>
{{</code>}}

Again, we've left everything in tact except that we've added in the ```epub:type="endnote"``` and aria ```role="doc-endnote"```. If these were footnotes, you'd use the ```epub:type="footnote"``` and aria ```role="doc-footnote"``` semantics.

Tip: You'll want to avoid capturing innocent paragraph text with your regex. Sometimes it helps to carry out the Find and Replace in one file only (especially the case when all the endnotes are in their own xhtml file).

{{% /expandable %}}

{{% expandable label="Example 3: Footnotes in the body" level="2" %}}

For individual footnotes, or ancillary information like commentary, that occur within the body of the text, you'll need to wrap the note in an ```<aside>``` element and add to it the ```epub:type="footnote"``` and aria ```role=doc-footnote``` semantics. Marking the note as an ```<aside>``` ensures that it's treated as secondary content.

{{<code>}}
<p>In that year<a href="#ft2f" role="doc-noteref" epub:type="noteref">2</a> there were 67 mills engaged in the manufacture of cotton goods …</p>
 …
<[[[aside]]] id="ft2f" [[[epub:type="footnote"]]] [[[role="doc-footnote"]]]>
   <p>2 The manufacturing statistics for 1900 which follow are not those given in the Twelfth Census, but are taken from the <em>Census of Manufactures</em> …</p>
[[[</aside>]]]
{{</code>}}

{{% /expandable %}}

## References

  * DPUB-ARIA — [doc-footnote](https://www.w3.org/TR/dpub-aria-1.0/#doc-footnote)
  * DPUB-ARIA — [doc-endnote](https://www.w3.org/TR/dpub-aria-1.0/#doc-endnote)
  * DPUB-ARIA — [doc-endnotes](https://www.w3.org/TR/dpub-aria-1.0/#doc-endnotes)
  * [EPUB 3 Structural Semantics Vocabulary](https://idpf.github.io/epub-vocabs/structure/)