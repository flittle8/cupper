+++
title = "Check the EPUB version"
tags = ["example tag", "another tag"]
weight = 1
+++

This first step to editing an EPUB is to check what version of EPUB the book is. We want it to be an EPUB 3, and not an EPUB 2. If it's an EPUB 2, then we need to upgrade it. 

Follow the steps below to check what version of EPUB you're working with.

## Open the EPUB in Sigil

There are very ways to do this: you can right-click on the EPUB and open with Sigil; you can open Sigil and then go to File > Open; you can open Sigil and press Command+O or ⌘O.

## Open the OPF File
In the Book Browser pane on the left, find and open the OPF file. This is a file with the extension ".opf" and is often called "content.opf" or "package.opf".  The OPF file contains the book's metadata (like title, author, publisher, publication date) as well as the "manifest" (a listing of all the files that compose the EPUB) and the "spine" (an ordered list of all the "chapters" or .html/.xhtml files in the book).

## Check the version
Find the package tag, which should be near the very top of the file. Inside the package tag, you'll see a version attribute. In the below example, we have an EPUB 3.

```html
<?xml version="1.0" encoding="utf-8"?>
<package version="3.0" unique-identifier="BookId" prefix="rendition: http://www.idpf.org/vocab/rendition/#" xmlns="http://www.idpf.org/2007/opf">
```

{{% note %}}
You may ask, why EPUB 3? The short answer: it's more accessible. If you want to know more, a good primer on the topic is Laura Brady's [EPUB 2 or EPUB 3: That Is Not a Question](http://epubsecrets.com/epub-2-or-epub-3-that-is-not-a-question.php).
{{% /note %}}

Now it's time to {{% pattern "Create a page list" %}}