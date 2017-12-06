+++
title = "Page titles"
tags = ["example tag", "another tag"]
+++

Each xhtml file in a book has a title. This title can be found at the top of the page in the ```<head>``` element.

Meaningful titles allow readers to find and navigate to pages without having to first read them. Assistive technologies typically announce the title of each page when it's first loaded in a user agent.

It's commonplace to see just the title of the book in the ```<title>``` element on every xhtml page. But this doesn't help readers identify where they are in the book. You'll need to add the title of the page, which can usually be found in the ```<h1>``` element on the page or in the Table of Contents. It is often the title of a chapter.

## Examples

In the example below, the chapter title, as well as the title of the book, should go inside the ```<title>``` element. 
Looking at the ```h1```, we can see that we're on the page for chapter fifteen. In Sigil, you can also verify the title of the xhtml page that you're in by looking at the Table Of Contents pane on the right side (to turn on the TOC pane, press Alt+F3 or go to View > Table of Contents).

{{<code>}}
<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops" lang="en">
<head>
[[[<title>Chapter Fifteen - Run, Hide, Repeat: A Memoir of a Fugitive Childhood</title>]]]
<link href="../Styles/prhStyle.css" rel="stylesheet" type="text/css"/>
<link href="../Styles/prhStyle-media-queries.css" rel="stylesheet" type="text/css"/>
<link href="../Styles/Daki_9780735233232_epub3_css_r1.css" rel="stylesheet" type="text/css"/>
<meta charset="utf-8"/>
</head>
<body>
[[[<h1 class="chapter" id="c15">FIFTEEN</h1>]]]
{{</code>}}

## References

  * HTML 5 - [The title element](https://www.w3.org/TR/html/document-metadata.html#the-title-element) 