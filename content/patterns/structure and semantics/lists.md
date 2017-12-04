+++
title = "Lists"
tags = ["example tag", "another tag"]
+++

A list of items needs to be tagged appropriately so that users can easily navigate through it. The ability to move quickly and effectively through long lists is a key reading need and often overlooked as an accessibility feature.

Sighted readers rarely notice the advantage of being able to quickly skim a list, determine if it's of any interest and/or selectively read items. Properly tagging lists is a small measure that can greatly decrease user frustration. It allows readers to quickly navigate between items as well as move in and out of lists. It also allows assistive technologies or reading systems to announce the total number of items in the list and the reader's current position as they navigate through, making it simpler for them to reference the location again should they need.

To facilitate navigation of lists, always tag the items in the set using one of the list elements: the ordered list (```ol``` element), the unordered list (```ul``` element), or the definiton list (```dl``` element). For further explanation of when and how to use each list type, see [References](#references).

You'll often see lists marked up improperly, i.e. using a new paragraph or div tag (```<p>``` or ```<div>```) for each item, using a hard line break (```<br />```) to separate items, or using similiar styling tricks to make the visual appearance of a list. 

Be on the look out for lists that should be *real* lists, and make sure that they're marked up with the correct list type element.

Also, keep in mind that list elements must not be used for purely presentational purposes. 

## Examples

{{% expandable label="1: Ordered lists" level="3" %}}

Ordered lists need to be marked up with the ```<ol>``` and ```<li>``` elements. 

In the below example, the list is surrounded by a meaningless ```<div>``` tag and the list items are marked up using paragraph tags ```<p>```. The use of CSS styling make the text visually appear like a numbered list (```class="num_item``` and ```span class="num"```).

You may also notice that the title of the list ("The Basics") is within a paragraph tag that is styled to look like the title of the list. Another no-no. We need to tag this as the list header.

{{<code>}}
<h1 class="chapter2 sans" id="h1"><strong>RECOMMENDED READING</strong></h1>
<p class="spaceabove" id="p1">This section is designed for readers who want to delve deeper into any of the Big Ideas. Under each heading I include a short list of my top picks: books, websites, and online articles that I frequently recommend to people who want to learn more, and that are current as of 2016. Some are written for a lay audience, while others are more academic. They don’t represent an exhaustive list or cover the whole landscape—they’re just my favourites.</p>
[[[<p class="sans spaceabove3" id="p2">THE BASICS</p>]]]
[[[<div class="num_list" id="div1">]]]
[[[<p class="num_item" id="p3">]]][[[<span class="num">1. </span>]]]For a rigorous overview of the structure, governance, financing and delivery, and quality of Canadian health care, including the Canada Health Act and its implications, see Gregory Marchildon’s 2013 book <em>Health Systems in Transition</em>: <em>Canada</em>, Second Edition, or Katherine Fierlbeck’s 2011 <em>Health Care in Canada: A Citizen’s Guide to Policy and Politics</em>.</p>
[[[<p class="num_item" id="p4">]]][[[<span class="num">2. </span>]]]For a good snapshot of wait times in Canada, the Wait Time Alliance produces reliable reports, which can be found at <a href="http://www.waittimealliance.ca">www.​waittime​alliance.​ca</a>.</p>
[[[<p class="num_item" id="p5">]]][[[<span class="num">3. </span>]]]Other general dimensions of health system performance can be explored using the interactive tools found on the website of the Canadian Institute for Health Information (CIHI), including the user-friendly site <a href="http://yourhealthsystem.cihi.ca">http://yourh​ealthsystem.​cihi.​ca</a>.</p>
[[[<p class="num_item" id="p6">]]][[[<span class="num">4. </span>]]]Excellent myth-busters on the aging population, private funding for public wait times, user fees, and other health care zombies can be found in the Canadian Foundation for Healthcare Improvement’s Mythbuster series.</p>
[[[</div>]]]
{{</code>}}

The above code is rendered like below: 

![A visual rendering of the above code that shows a numbered list of 4 items.](/images/ordered-list.png)

You need to transform this list into code that is meaningful to machines.

{{<code numbered="true">}}
<h1 class="chapter2 sans" id="h1"><strong>RECOMMENDED READING</strong></h1>
<p class="spaceabove" id="p1">This section is designed for readers who want to delve deeper into any of the Big Ideas. Under each heading I include a short list of my top picks: books, websites, and online articles that I frequently recommend to people who want to learn more, and that are current as of 2016. Some are written for a lay audience, while others are more academic. They don’t represent an exhaustive list or cover the whole landscape—they’re just my favourites.</p>
<p class="sans spaceabove3" id="p2">THE BASICS</p>
[[[<ol]]] [[[aria-labelledby="p2"]]]>
[[[<li>]]]For a rigorous overview of the structure, governance, financing and delivery, and quality of Canadian health care, including the Canada Health Act and its implications, see Gregory Marchildon’s 2013 book <em>Health Systems in Transition</em>: <em>Canada</em>, Second Edition, or Katherine Fierlbeck’s 2011 <em>Health Care in Canada: A Citizen’s Guide to Policy and Politics</em>.[[[</li>]]]
<li>For a good snapshot of wait times in Canada, the Wait Time Alliance produces reliable reports, which can be found at <a href="http://www.waittimealliance.ca">www.​waittime​alliance.​ca</a>.</li>
<li>Other general dimensions of health system performance can be explored using the interactive tools found on the website of the Canadian Institute for Health Information (CIHI), including the user-friendly site <a href="http://yourhealthsystem.cihi.ca">http://yourh​ealthsystem.​cihi.​ca</a>.</li>
<li>Excellent myth-busters on the aging population, private funding for public wait times, user fees, and other health care zombies can be found in the Canadian Foundation for Healthcare Improvement’s Mythbuster series.</li>
[[[</ol>]]]
{{</code>}}

1. Get rid of those ```<div>``` tags. Instead, wrap the list in the ordered list, or ```<ol>``` element. 
2. A header is associated with a list using the ```aria-labelledby``` attribute. The value of the attribute points to the id of the element that contains the list header. In this case, this is ```p2```, which identifies the paragraph above that contains the text "The Basics".
3. As you're turning this block of text into a list, you must also change each of those ```<p>``` tags into list item, or ```<li>``` tags. Since we've specified that this is an ordered list, each list item will be automatically numbered and we can remove the manual numbering.
4. The ```</li>``` tells us that this is the end of the particular list item.
5. The ```</ol>``` tells us that this is the end of the ordered list. Always remember to close your tags. 

The above code is rendered like below. It looks almost identical to the original, yet it contains underlying meaning that is useful to non-visual readers.

![A visual rendering of the above code that shows a numbered list of 4 items.](/images/ordered-list-2.png)

{{% /expandable %}}

{{% expandable label="2: Unordered lists" level="3" %}}

Unordered lists are exactly like ordered lists, except that they're not ordered or numbered. The actual order of the entries is not critical to understanding. It could be reversed, or even shuffled, and not lose meaning.

Unordered lists need to be marked up with the ```<ul>``` and ```<li>``` elements. These elements will be applied in the same manner as for ordered lists above.

Below is an example of an unordered list within a book.

{{<code>}}
<p>On street safety, the guidebook points out to students that they must always follow these rules:</p>
	[[[<ul>]]]
		[[[<li]]] class="list_spab">Learn what traffic signs mean.[[[</li>]]]
		<li class="list">Before crossing a street, stop at the curb or the edge of the road and never run into the street.</li>
		<li class="list">Look and listen for cars and trucks to the left, then to the right, and then to the left again.</li>
		<li class="list---sp-after">Look confident, walk with your head up as if you know where you are going. The appearance of being lost or being anxious may render you vulnerable to unwanted attention.</li>
	[[[</ul>]]]
{{</code>}}

The above code renders like below:

![A visual rendering of the above code that shows a list of 4 items. The list is rendered with bullets instead of numbers.](/images/unordered-list.png)

{{% /expandable %}}

{{% expandable label="3: Definition lists" level="3" %}}

A definition list, or ```<dl>``` element, is used for name/value lists. These can include dictionaries, glossaries, frequently asked questions and similar. 

The definition list ```<dl>``` is composed of two terms - a term or ```<dt>``` element and its definition/value or ```<dd>``` element. Each ```dt``` element is meant to define a unique value. When the definition term or ```dt``` element represents a definition for a term, then use the ```<dfn>``` element to represent a definition.

{{<code>}}
[[[<dl>]]]
  [[[<dt>]]][[[<dfn>]]]Colour</dfn></dt>
  [[[<dd>]]]A sensation which (in humans) derives from the ability of the fine structure of the eye to distinguish three differently filtered analyses of a view.</dd>
</dl>
{{</code>}}

{{% /expandable %}}

## References

  * HTML 5 - [The ol element](https://www.w3.org/TR/html/grouping-content.html#the-ol-element)
  * HTML 5 - [The ul element](https://www.w3.org/TR/html/grouping-content.html#the-ul-element)
  * HTML 5 - [The dl element](https://www.w3.org/TR/html/grouping-content.html#the-dl-element)
