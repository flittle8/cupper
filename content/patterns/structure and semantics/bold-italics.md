+++
title = "Bold and italics"
tags = ["bold", "italics", "emphasis"]
+++

**Strong** vs. **Bold**. *Emphasis* vs. *Italics*. What's the difference? And what should we do about it?

In HTML5, there are two types of "bold" - represented by the ```<strong>``` and the ```<b>``` elements. There also two types of "italics" - represented by the ```<em>``` and the ```<i>``` elements. Each of these elements conveys different information to the reading system. If you're curious about their uses, you can explore the links in the [References](#references).

These four elements are often misused. Determining whether or not these elements have been applied correctly throughout the book is not only a laborious task, but, arguably, it's a job for the book's editor and not the book's remediators. Therefore, we're not going to worry about fixing up any code related to italics or bolding. We will assume, for better or worse, that the most appropriate markup has been applied.

If the intent is to use emphasis and bolding for purely stylistic reasons, then CSS may be used. You may come across something similiar to the below example where the ```<span>``` element (which doesn't have any meaning on its own) is used with the class attribute ```ital``` in order to present the text as italicized using CSS.

{{<code>}}

<p>Reading this book will not be like reading the [[[<span class="ital">]]]Reader’s Digest,[[[</span>]]] or [[[<span class="ital">]]]The Adventures of Tom Sawyer.[[[</span>]]] You cannot read this book casually or breeze through it quickly.</p> 

{{</code>}}

The above code will be rendered as italicized text in reading systems, but will have no meaning associated with it. 
## References

  * HTML 5 - [The em element](https://www.w3.org/TR/html/textlevel-semantics.html#the-em-element)
  * HTML 5 - [The strong element](https://www.w3.org/TR/html/textlevel-semantics.html#the-strong-element)
  * HTML 5 - [The i element](https://www.w3.org/TR/html/textlevel-semantics.html#the-i-element)
  * HTML 5 - [The b element](https://www.w3.org/TR/html/textlevel-semantics.html#the-b-element)