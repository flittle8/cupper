+++
title = "Create a page list"
tags = ["navigation", "pages", "plugins"]
weight = 2
+++

Before we can convert to an EPUB 3, we need to create what's called a "Page list". A page list is exactly what it sounds like - a list of all the pages (or, "page breaks") in the book. These pages correspond to pages in the print edition.  As such, the page list allows users in mixed print-digital environments, like classrooms and book clubs, to coordinate their reading. 

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

If you're working with an EPUB 3, the page list will be found in a XHTML navigation document. This files is often named "nav.xhtml" or contains the word "nav" in the filename. This file is specific to EPUB 3.

Like the NCX in EPUB 2, this file contains all the navigational points in the book, which appear in the main navigation panel of reading systems. Most commonly this includes: Table of Contents, Landmarks, and, a Page List.

{{% /expandable %}}

## Check if page breaks exist

Sometimes page breaks exist in the book, but the publisher hasn't bothered to use them to create a page list. In this case, we can make use of those page breaks to generate a page list so that users can easily navigate to page numbers.

{{% expandable label="EPUB 2" level="3" %}}

In EPUB 2, page breaks are indicated by the a element, which defines a hyperlink. The exact formatting of what's inside the id attribute may vary (i.e. page126, page_126), but is nothing to worry about.

```html
<a id="page126"></a>
```
Search the EPUB for this code. If you find page breaks, move on to [convert the page breaks into EPUB 3 format](#convert-the-page-breaks-into-EPUB-3-format). 

{{% /expandable %}}

{{% expandable label="EPUB 3" level="3" %}}

In EPUB 3, page breaks are indicated by the span element with an epub:type="pagebreak". Exact formatting may vary slightly. Below are the common ways to code the page breaks in EPUB 3:

```html
<span epub:type="pagebreak" id="page31" title="31"/>
```

```html
<span epub:type="pagebreak" id="page31">31</span>
```
Search the EPUB for this code. If you find page breaks, move on to [convert the page breaks into EPUB 3 format](#convert-the-page-breaks-into-EPUB-3-format). 

{{% /expandable %}}

## Convert the page breaks into EPUB 3 format

{{% expandable label="EPUB 2" level="3" %}}

When working with EPUB 2, you need to convert the EPUB 2 page breaks into EPUB 3 page breaks. This is easy to do with some regex (or, "regular expressions"). Regex lets us do a bulk Find and Replace, and will become your editing friend.

In Sigil, go to the Search menu bar and select "Find and Replace", or simply press Command+F or ⌘+F. Then enter the below Find and Replace expressions: 

Find: ```<a id="page(\d+?)"></a>```

Replace: ```<span epub:type="pagebreak" id="\1">\1</span>```

{{% figure caption="Sample regex for converting EPUB 2 page breaks into EPUB 3 page breaks" %}}
![See the Find and Replace regex expressions above.](/images/epub2-epub3-pages-regex.png)
{{% /figure %}}

Ensure "regex" and "all HTML files" are selected for the Mode. You may need to modify the regex slightly to capture the specific formatting used in the EPUB. When it all looks good, you can hit "Replace All".

{{% note %}}
There is plenty of information online to help you learn regex. Here's a [regex cheatsheet](http://www.rexegg.com/regex-quickstart.html#ref) to get you started.
{{% /note %}}

{{% /expandable %}}

{{% expandable label="EPUB 3" level="3" %}}

When working with EPUB 3, you need to check that the page breaks are coded in one of the ways below. This will ensure that the Pagelist plug-in generates the page list.

```html
<span epub:type="pagebreak" id="page31" title="31"/>
```

```html
<span epub:type="pagebreak" id="page31">31</span>
```
You can use regex to re-format the page breaks as needed. When it all looks good, we can run the PageList plug-in.

{{% /expandable %}}

## Run the PageList plug-in

Now for the magic. Time to run the Pagelist plug-in, and watch it take those page breaks and create a beautiful page list for the EPUB.

To run it, go to Plugins in the menu bar, select Edit and then PageList. If it runs successfully, you'll receive a message that page number targets were found, and the NCX file was updated.








