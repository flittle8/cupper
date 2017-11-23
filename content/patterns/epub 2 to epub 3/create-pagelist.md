+++
title = "Create a page list"
tags = ["navigation", "pages", "plugins"]
weight = 2
+++

Before we can convert this baby to an EPUB 3, we need to create what's called a "Page list". A page list is exactly what it sounds like - a list of all the pages (or, "page breaks") in the book. 

Of course, as EPUB is reflowable (page-less), these pages correspond to pages in the print edition.  Therefore the page list allows users in mixed print-digital environments, such as classrooms and book clubs, to coordinate their reading. 

To determine if we need to create a page list, follow the steps below.

## Check if a page list already exists

Many publishers already include a page list.

{{% expandable label="EPUB 2" level="3" %}}

If you're working with an EPUB 2, the page list would be found in the NCX file. This is a file with the extension ".ncx", and is often called "toc.ncx". It is specific to EPUB 2, although EPUB 3 files include them for backwards-compatibility.

The NCX file contains all the points in the book to which the user may navigate. It determines what links appear in the main navigation panel.

If the EPUB 2 contains a page list, you'll find it inside a pagelist element in the NCX file, like below.

```html
<pageList>
    <navLabel>
      <text>Pages</text>
    </navLabel>
    <pageTarget id="page11" type="normal" value="11">
      <navLabel>
        <text>11</text>
      </navLabel>
      <content src="Text/_05_Contents.xhtml#page11"/>
    </pageTarget>
    <pageTarget id="page12" type="normal" value="12">
      <navLabel>
        <text>12</text>
      </navLabel>
      <content src="Text/_05_Contents.xhtml#page12"/>
    </pageTarget>
    <pageTarget id="page13" type="normal" value="13">
      <navLabel>
        <text>13</text>
      </navLabel>
      <content src="Text/_05_Contents.xhtml#page13"/>
    </pageTarget>
    .
    .
  </pageList>
```
If you find a page list here, continue on to {{% pattern "Create an EPUB 3" %}}

If there's no page list, then [check if page breaks exist](#check-if-page-breaks-exist).

{{% /expandable %}}


{{% expandable label="EPUB 3" level="3" %}}

If you're working with an EPUB 3, the page list will be found in a XHTML navigation document, often named "nav.xhtml". This file is specific to EPUB 3.

Like the NCX in EPUB 2, this file contains all the navigational points in the book, which appear in the main navigation panel of reading systems. Most commonly this includes: Table of Contents, Landmarks, and, a Page List.

{{% /expandable %}}

## Check if page breaks exist

## Convert the page breaks into EPUB 3 format

## Run the Pagelist plug-in
