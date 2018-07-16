---
layout: default
permalink: codes/
title: Codes
toc: true
---
# Codes

### Snippets

Use **<pre>** tag for a snippet code.

{% capture example %}
<pre>
.below{
    background: white;
    color: black;
}
</pre>
{% endcapture %}
{% include example.html content=example %}


### Keyboard Input

{% capture example %}
To stop the server, press <kbd>ctrl + c</kbd>
{% endcapture %}
{% include example.html content=example %}
