This project aims to make the Binding of Isaac modding documentation better by providing additional informations and features.

 Process of adding new content to a file:
1. make sure to add this line of code at the top of the head       `<!--Lua Codehightlight--><link href="prism.css" rel="stylesheet" />`  
2. make sure to add this line of code at the bottom of the body     `<!--Lua Codehightlight--><script src="prism.js"></script>`
3. add the following to the "memdoc" div you want to add the text to:
```html
<!--start Custom comment -->
<p>YOUR DESCRIPTION HERE</p>
<div class="example_code">
YOUR CODE DESCRIPTION HERE
<pre><code class="language-lua">CODE HERE
</code></pre>	
</div>
<!--End Custom comment -->
```



Add notes like this:
```html 
<div class="notes">
YOU CONTENT HERE
</div>
```

Add bugs like this
```html 
<div class="bugs">
YOU CONTENT HERE
</div>
```

Removed original description can be marked like this:
```html
<!--start Custom comment -->
<!-- Removed false description -->
<!--End Custom comment -->
```
