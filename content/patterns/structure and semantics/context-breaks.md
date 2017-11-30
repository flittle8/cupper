+++
title = "Context breaks"
tags = ["breaks", "horizontal rule"]
+++

A context break is a thematic break, such as, a scene change in a story, or a transition to another topic within a section of a book.

The ```<hr />```, or horizontal rule, element is used to represent a context break. The use of the ```hr``` element to indicate context breaks allows assistive technologies to inform users of this shift in thought, time, location, or similiar. 

You may come across all sorts of different, and creative, ways that are used to denote a change in context in a book (see [Examples](#examples)). These ways may be useful cues for visual readers, but for non-visual readers they are meaningless. Only one way - the ```hr``` - is meaningful to assistive technologies.

Go through the book and add in the ```<hr />``` element wherever a context break occurs.  Note that the ```hr``` element is self-closing.

{{% warning %}}

The ```hr``` element should not be used for purely decorative purposes, such as decoration between sections (the ```<section>``` element), or at the beginning or end of them. We'll discuss sections more in {{% pattern "Sections and headings" %}}.

{{% /warning %}}

## Examples

Context breaks are represented in books in many ways. Below are just a few examples. You can see more [types of context breaks in this article from The Book Designer](https://www.thebookdesigner.com/2010/06/book-design-8-solutions-to-the-text-break-dilemma/). 

{{% expandable label="1: The blank space" level="3" %}}

Extra blank space between paragraphs is commonly used to identify a change in context. This is done by using CSS, and you'll see the guilty class attribute lingering nearby in the code. 

In the below example, the paragraph class value ```bodytext_epspbe``` is the offending culprit. If you're curious, you can search the CSS file to see exactly what's going on; in this case, the text with this class value has a top margin of 36 pixels.

You can insert a ```<hr />``` between the two paragraphs.

{{% code %}}
<p>They also paid a visit to the security guards at the Intercity mall. One of the guards had torn down a missing persons poster of Jordan that was posted in the mall and thrown it into the trash.</p>
<p [[[class="bodytext_epspbe"]]]>Here’s the thing about the north: Everybody knows everyone else.</p>
{{% /code %}}

Below is how the above code renders in the book:  

![Extract from a book. There's extra blank space between the paragraphs to denote a context break.](/images/extra-blank-space-context-break.png)

{{% /expandable %}}

{{% expandable label="2: The drop caps or all caps" level="3" %}}

A sentence within a chapter that begins with drop caps or all caps is usually a sure sign that there's a break in the continuity of the narrative. 

You can insert a ```<hr />``` right before that sentence.

{{% code %}}
<p>To a certain degree, this is normal. Historians are not eyewitnesses—they construct knowledge—others transmit experience.</p>
[[[<hr/>]]]
<p>I HAVE LIVED at Versailles for more than thirty years now and feel I have become a witness. My experience and life depend upon these stones, like ivy clambering up a wall.</p> 
{{% /code %}}

{{% /expandable %}}

{{% expandable label="3: Asterisms and other decorations" level="3" %}}

The asterism (***) and other such decorative elements are also commonly used for context breaks. In the below example, an em dash is used in combination with CSS styling that adds extra space.

You can replace all the highlighted text below with a simple ```<hr />``` element.

{{% code %}}
<p>In the midst of the world’s largest immigration boom, underway even as Canada achieved nationhood through Confederation, the country not only failed to attract people but provoked millions of its own residents to depart—an enormous missed opportunity from which Canada has not yet recovered.</p>
[[[<div class="section_break" id="div2">]]][[[—]]][[[</div>]]]
<p>In the wake of the 1837 rebellions, Britain’s Whig government dispatched John Lambton, the Earl of Durham, to investigate what exactly had gone so terribly wrong in the North American colonies.</p>
{{% /code %}}

Below is how the above code renders in the book:  

![Extract from a book. There's extra blank space between the paragraphs, as well as a centrally aligned em dash, to denote a context break.](/images/em-dash-context-break.png)

{{% /expandable %}}

{{% expandable label="4: Images" level="3" %}}

Images, like the previous methods, are a suboptimal way to indicate a context change because they carry no semantic information. 

Go ahead and replace these images with the ```hr``` element.

Below is an example of an image used for a decorative context break. Say goodbye to the ```div``` and ```img``` elements and hello to the ```hr```.

{{% code %}}
<p>As winter wore on, they endured relentless Arctic winds, waist-deep snow, the ravages of scurvy, and continuous assaults by the feral blue foxes.</p>
[[[<div class="Divider">]]][[[<img alt="" class="_idGenObjectAttribute-1" src="../Images/25194_Stellers_sea_cow_text_break.png"/>]]][[[</div>]]]
<p class="Justify"><span class="SmallCaps">The St. Peter was one of two ships commissioned for the Great Northern Expedition (1733–1743), also known as the Second Kamchatka Expedition.</p> 
{{% /code %}}

Below is how this code is rendered in the book. You'll also notice that the sentence after the break begins in small caps, styled using CSS.

![Extract from a book. There's an image of a fish between the paragraphs to denote a context break.](/images/image-context-break.png)

{{% /expandable %}}

## References

  * HTML5 - [The hr element](https://www.w3.org/TR/html/grouping-content.html#the-hr-element)
