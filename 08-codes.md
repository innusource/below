---
layout: default
permalink: codes/
title: Codes
toc: true
---
# Codes

### Snippets

Use **<pre>** tag for a snippet code.

{% highlight html %}
<h1>A cool h1 title for an snippet example...</h1>
<div class="example">
    <h2>My h2 title</h2>
</div>
{% endhighlight %}

### Keyboard Input

{% capture example %}
To stop the server, press <kbd>ctrl + c</kbd>
{% endcapture %}
{% include example.html content=example %}
