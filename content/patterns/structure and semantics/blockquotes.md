+++
title = "Blockquotes"
tags = ["quotes", "another tag"]
+++

A blockquote represents a section that is quoted from another source. It's represented by the ```<blockquote>``` element.

Often times, you will see books that use the ```<p>``` or paragraph element, instead of the semantically correct ```<blockquote>```. This ```<p>``` element is often followed by a ```class="quote"``` attribute, or a similiar class value (we'll talk more about getting rid of classes later). 

Using the ```<p>``` element when a more specific element is appropriate is a violation of the HTML specification.

Go though the book and replace this meaningless "p soup" with ```<blockquote>``` where appropriate.

## Examples

### Good example

Below is an example of a properly used blockquote element in code:

{{<code>}}
        <p>In the waning days of 1724, Peter spoke to his closest adviser from his deathbed. He outlined his ideas and plans to his attendants and, “concerned that his end was near,” was eager to get the expedition under way. Calling the general-admiral Count Apraxin (Fedor Matveevich) to his bedside, he said:</p>
        [[[<blockquote>]]]
            <p>Bad health has obliged me to remain home. Recently I have been thinking over a matter which has been on my mind for many years but other affairs have prevented me from carrying it out. I have reference to the finding of a passage to China and India through the Arctic Sea. On the map before me there is indicated such a passage bearing the name of Anian. There must be some reason for that. In my last travels I discussed the subject with learned men and they were of opinion that such a passage could be found. Now that the country is in no danger from enemies we should strive to win for her glory along the lines of the Arts and Sciences. In seeking such a passage who knows but perhaps we may be more successful than the Dutch and English who have made many attempts along the American coast.</p>
        [[[</blockquote>]]]
{{</code>}}

Reading systems will render the above code similiar to below. Text-to-speech software will often announce "quote" and "end quote" at the start and end of the quotation. 

![A visual rendering of the above code as it would look in a book. The text that is wrapped in a blockquote element is indented.](/images/blockquote.png)

### Bad example

Below is a bad example of code that uses class and id attributes (and CSS) to present the text in a particular way. Not only is this extra work, but it makes for meaningless text - as far as the computer knows, it's just a bunch of paragraphs as opposed to a quotation. 

{{<code>}}
Indigenous people have been accepting new Canadians to their lands ever since. In Richard’s words:</p>
[[[<p class="chap_opener smaller spaceabove" id="p9">]]]“…so maybe this is what it comes to mean</p>
[[[<p class="chap_opener smaller" id="p10">]]]this word, this name, this Kanata</p>
[[[<p class="chap_opener smaller" id="p11">]]]the Huron word for village that has</p>
[[[<p class="chap_opener smaller" id="p12">]]]come to mean ‘our home’</p>
[[[<p class="chap_opener smaller" id="p13">]]]maybe in the end it’s a word for one fire</p>
[[[<p class="chap_opener smaller" id="p14">]]]burning where a circle of people gathers</p>
[[[<p class="chap_opener smaller" id="p15">]]]to hear the stories that define them”</p>
{{</code>}}

Below is how the above code renders visually in the book. It's indented, just like a blockquote, but the blockquote element has more specific semantics.

![A visual rendering of the above code as it would look in a book. The text that is wrapped in the paragraph element with class attributes appears aligned in the center.](/images/blockquote-bad.png)

## References

  * HTML5 - [The blockquote element](https://www.w3.org/TR/html/grouping-content.html#elementdef-blockquote)

ADD ABOUT USE OF CITE ELEMENT
