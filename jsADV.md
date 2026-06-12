const x = document.getElementById('welcome');

// Safely changing the text

x.textContent = "Welcome back, Alex!";



// Secure behavior:

x.textContent = "<strong>Oops!</strong>"; 

// The page will actually display the literal words "<strong>Oops!</strong>"



/\*

textContent treats everything as plain text. It is fast and secure.



innerHTML parses strings as actual HTML. It allows you to inject new structural elements (like bold tags, links, or lists), but it opens up security vulnerabilities if you are inserting untrusted user input.

\*/





