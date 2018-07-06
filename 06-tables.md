---
layout: default
permalink: tables/
title: Tables
toc: true
---
# Tables

### Default
{% capture example %}
<table class="table">
  <thead>
    <tr>
      <th>#</th>
      <th>First</th>
      <th>Last</th>
      <th>GitHub</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>1</th>
      <td>Milton</td>
      <td>Olaf</td>
      <td>miltonolaf</td>
    </tr>
    <tr>
      <th>2</th>
      <td>Jesus</td>
      <td>T.</td>
      <td>jestov</td>
    </tr>
    <tr>
      <th>3</th>
      <td>Isaac</td>
      <td>B.</td>
      <td>Isaac343</td>
    </tr>
  </tbody>
</table>
{% endcapture %}
{% include example.html content=example %}



### Bordered Tables

#### Border out
{% capture example %}
<table class="table bordered">
  <thead>
    <tr>
      <th>#</th>
      <th>First</th>
      <th>Last</th>
      <th>GitHub</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>1</th>
      <td>Milton</td>
      <td>Olaf</td>
      <td>miltonolaf</td>
    </tr>
    <tr>
      <th>2</th>
      <td>Jesus</td>
      <td>T.</td>
      <td>jestov</td>
    </tr>
    <tr>
      <th>3</th>
      <td>Isaac</td>
      <td>B.</td>
      <td>Isac343</td>
    </tr>
  </tbody>
</table>
{% endcapture %}
{% include example.html content=example %}

#### Border in all the cols and rows
{% capture example %}
<table class="table bordered-all">
  <thead>
    <tr>
      <th>#</th>
      <th>First</th>
      <th>Last</th>
      <th>GitHub</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>1</th>
      <td>Milton</td>
      <td>Olaf</td>
      <td>miltonolaf</td>
    </tr>
    <tr>
      <th>2</th>
      <td>Jesus</td>
      <td>T.</td>
      <td>jestov</td>
    </tr>
    <tr>
      <th>3</th>
      <td>Isaac</td>
      <td>B.</td>
      <td>Isaac343</td>
    </tr>
  </tbody>
</table>
{% endcapture %}
{% include example.html content=example %}

### Striped Rows
{% capture example %}
<table class="table striped">
  <thead>
    <tr>
      <th>#</th>
      <th>First</th>
      <th>Last</th>
      <th>GitHub</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>1</th>
      <td>Milton</td>
      <td>Olaf</td>
      <td>miltonolaf</td>
    </tr>
    <tr>
      <th>2</th>
      <td>Jesus</td>
      <td>T.</td>
      <td>jestov</td>
    </tr>
    <tr>
      <th>3</th>
      <td>Isaac</td>
      <td>B.</td>
      <td>Isaac343</td>
    </tr>
  </tbody>
</table>
{% endcapture %}
{% include example.html content=example %}

### Borderless Table
{% capture example %}
<table class="table borderless">
  <thead>
    <tr>
      <th>#</th>
      <th>First</th>
      <th>Last</th>
      <th>GitHub</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>1</th>
      <td>Milton</td>
      <td>Olaf</td>
      <td>miltonolaf</td>
    </tr>
    <tr>
      <th>2</th>
      <td>Jesus</td>
      <td>T.</td>
      <td>jestov</td>
    </tr>
    <tr>
      <th>3</th>
      <td>Isaac</td>
      <td>B.</td>
      <td>Isaac343</td>
    </tr>
  </tbody>
</table>
{% endcapture %}
{% include example.html content=example %}
