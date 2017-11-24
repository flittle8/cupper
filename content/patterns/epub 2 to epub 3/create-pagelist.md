+++
title = "Create a page list"
tags = ["navigation", "pages", "plugins"]
weight = 2
+++

The first step, before we start the nitty-gritty of editing, is to create what's called a "page list". 

A page list is exactly what it sounds like - a list of all the pages (or, "page breaks") in the book. These pages correspond to pages in the print edition.  The page list allows users in mixed print-digital environments, like classrooms and book clubs, to coordinate their reading. It's a great navigational aid.

Follow the steps below to create a page list in the EPUB.

## Check if a page list already exists

Many publishers already include a page list. (Kudos to those publishers!)

{{% expandable label="EPUB 2" level="3" %}}

If you're working with an EPUB 2, the page list will be in the NCX file. This is a file with the extension ".ncx", and is often called "toc.ncx". It is specific to EPUB 2, although some EPUB 3 books include them for backwards-compatibility.

The NCX file contains all the points in the book to which the user may navigate. It determines what links appear in the main navigation panel of reading systems.

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

If you're working with an EPUB 3, the page list will be found in a XHTML navigation document (hereafter refered to as the NAV file). This file is often named "nav.xhtml" or contains the word "nav" in the filename. It's specific to EPUB 3.

Like the NCX in EPUB 2, this file contains all the navigational points in the book, which appear in the main navigation panel of reading systems. Most commonly this includes: Table of Contents, Landmarks, and, a Page List.

If the EPUB 3 contains a page list, you'll find it inside a pagelist element in the NAV file, like below.

```html
<nav epub:type="page-list" hidden=""> 
      <ol class="pageList">
        <li><a href="../Text/02_ALSO_BY_DANIEL_J_LEVITIN.xhtml#pageMap_i">i</a></li>
        <li><a href="../Text/02_ALSO_BY_DANIEL_J_LEVITIN.xhtml#pageMap_ii">ii</a></li>
        <li><a href="../Text/02_ALSO_BY_DANIEL_J_LEVITIN.xhtml#pageMap_iii">iii</a></li>
        <li><a href="../Text/04_COPYRIGHT.xhtml#pageMap_iv">iv</a></li>
        <li><a href="../Text/05_DEDICATION.xhtml#pageMap_v">v</a></li>
        <li><a href="../Text/05_DEDICATION.xhtml#pageMap_vi">vi</a></li>
        <li><a href="../Text/06_CONTENTS.xhtml#pageMap_vii">vii</a></li>
        <li><a href="../Text/06_CONTENTS.xhtml#pageMap_viii">viii</a></li>
        <li><a href="../Text/06_CONTENTS.xhtml#pageMap_ix">ix</a></li>
        <li><a href="../Text/06_CONTENTS.xhtml#pageMap_x">x</a></li>
        <li><a href="../Text/06_CONTENTS.xhtml#pageMap_xi">xi</a></li>
        <li><a href="../Text/06_CONTENTS.xhtml#pageMap_xii">xii</a></li>
        .
        .
      </ol>
  </nav>
```
If you find a page list here, continue on to {{% pattern "Create an EPUB 3" %}}.

If there's no page list, then [check if page breaks exist](#check-if-page-breaks-exist).

{{% /expandable %}}

## Check if page breaks exist

Sometimes page breaks exist in the book, but the publisher hasn't bothered to use them to create a page list (makes you wonder why they put them there in the first place?). In this case, we can make use of those page breaks to generate a page list so that users can easily navigate to page numbers.

{{% expandable label="EPUB 2" level="3" %}}

In EPUB 2, page breaks are indicated by the a element. The exact formatting of what's inside the id attribute may vary (i.e. page126, page_126), but is nothing to worry about.

```html
<a id="page126"></a>
```
Search the EPUB for this code. If you find page breaks, move on to [convert the page breaks into EPUB 3 format](#convert-the-page-breaks-into-EPUB-3-format). 

If the publisher doesn't provide page breaks, then unfortunately we're not able to create a page list. Continue on to {{% pattern "Create an EPUB 3" %}}.

{{% /expandable %}}

{{% expandable label="EPUB 3" level="3" %}}

In EPUB 3, page breaks are indicated by the span element with an epub:type="pagebreak". Exact formatting may vary slightly. Below are the common ways to code the page breaks in EPUB 3:

```html
<span epub:type="pagebreak" id="page31" title="31"/>
```

```html
<span epub:type="pagebreak" id="page31">31</span>
```
Search the EPUB for this code. If you find page breaks, you'll need to [create a page list manually](#create-a-page-list-manually).

If the publisher doesn't provide page breaks, then unfortunately we're not able to create a page list. Continue on to INSERT PATTERN.

{{% /expandable %}}

## Convert the page breaks into EPUB 3 format

{{% expandable label="EPUB 2" level="3" %}}

When working with EPUB 2, you need to convert the EPUB 2 page breaks into EPUB 3 page breaks. This is easy to do with some regex (or, "regular expressions"). Regex lets us do a bulk Find and Replace, and will become your editing friend.

In Sigil, go to the Search menu bar and select "Find and Replace", or simply press Command+F or ⌘+F. A new pane will appear at the bottom of the page. Here you can enter a Find and Replace expression like: 

Find: ```<a id="page(\d+?)"></a>```

Replace: ```<span epub:type="pagebreak" id="\1">\1</span>```

{{% figure caption="Regex for converting EPUB 2 page breaks into EPUB 3 page breaks" %}}
![See the Find and Replace regex expressions above.](/images/epub2-epub3-pages-regex.png)
{{% /figure %}}

Ensure "regex" and "all HTML files" are selected for the Mode. You may need to modify the regex slightly to capture the specific formatting used in the EPUB. It's always a good idea to test out your regex before you hit "Replace All". Once it's working how you want it to, hit "Replace All", then double check that the page breaks were converted into EPUB 3 page breaks.

{{% note %}}
There is plenty of information online to help you learn regex. Here's a [regex cheatsheet](http://www.rexegg.com/regex-quickstart.html#ref) to get you started.
{{% /note %}}

{{% /expandable %}}

## Run the PageList plug-in

{{% expandable label="EPUB 2" level="3" %}}

Now for the magic. Time to run the Pagelist plug-in, and watch it take those page breaks and create a beautiful page list for the EPUB.

To run it, go to Plugins in the menu bar, select Edit and then PageList. If it runs successfully, you'll receive a message that page number targets were found, and the NCX file was updated.

{{% /expandable %}}

## Create a page list manually

{{% expandable label="EPUB 3" level="3" %}}

In an EPUB 3, each type of navigation is contained in it's own nav element with a corresponding epub:type attribute.

Below is an example page list for a short 10-page book.

{{<code>}}
<[[[nav]]] [[[epub:type="page-list"]]]>
[[[<ol>]]]
[[[<li>]]][[[<a href="../Text/Off_9780345811448_epub3_adc_r1.xhtml#pagei">i</a>]]]</li>
<li><a href="../Text/Off_9780345811448_epub3_tp_r1.xhtml#pageii">ii</a></li>
<li><a href="../Text/Off_9780345811448_epub3_cop_r1.xhtml#pageiii">iii</a></li>
<li><a href="../Text/Off_9780345811448_epub3_ded_r1.xhtml#pageiv">iv</a></li>
<li><a href="../Text/Off_9780345811448_epub3_epi_r1.xhtml#pagev">v</a></li>
<li><a href="../Text/Off_9780345811448_epub3_toc_r1.xhtml#pagevi">vi</a></li>
<li><a href="../Text/Off_9780345811448_epub3_map_r1.xhtml#pagevii">vii</a></li>
<li><a href="../Text/Off_9780345811448_epub3_itr_r1.xhtml#page1">1</a></li>
<li><a href="../Text/Off_9780345811448_epub3_itr_r1.xhtml#page2">2</a></li>
<li><a href="../Text/Off_9780345811448_epub3_itr_r1.xhtml#page3">3</a></li>
<li><a href="../Text/Off_9780345811448_epub3_itr_r1.xhtml#page4">4</a></li>
<li><a href="../Text/Off_9780345811448_epub3_itr_r1.xhtml#page5">5</a></li>
<li><a href="../Text/Off_9780345811448_epub3_itr_r1.xhtml#page6">6</a></li>
<li><a href="../Text/Off_9780345811448_epub3_itr_r1.xhtml#page7">7</a></li>
<li><a href="../Text/Off_9780345811448_epub3_itr_r1.xhtml#page8">8</a></li>
<li><a href="../Text/Off_9780345811448_epub3_itr_r1.xhtml#page9">9</a></li>
<li><a href="../Text/Off_9780345811448_epub3_itr_r1.xhtml#page10">10</a></li>
</ol>
</nav>
{{</code>}}

{{% /expandable %}}


