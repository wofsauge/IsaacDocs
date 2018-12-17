This project is tries to make the Isaac modding documentation better.
 Process of adding new content to a file:
1. make sure to add this line of code at the top of the head       `<!--Lua Codehightlight--><link href="themes/prism.css" rel="stylesheet" />`  
2. make sure to add this line of code at the bottom of the body     `<!--Lua Codehightlight--><script src="prism.js"></script>`
3. add the following to the "memdoc" div you want to add the text to:
```lua
<!--start Custom comment -->
YOUR DESCRIPTION HERE
<div id="example_code">
<h3>Examplecode:</h3>
YOUR CODE DESCRIPTION HERE
<pre><code class="language-lua">CODE HERE
</code></pre>	
</div>
<!--End Custom comment -->
```