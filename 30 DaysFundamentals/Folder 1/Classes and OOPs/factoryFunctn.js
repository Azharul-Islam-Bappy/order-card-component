// Factory Function 

// Factory function basically means a function that returns a object 
 
 // Example;
 function DOM(element,text,color) {
   const functn = {
     element: document.createElement(element),
     setText(text) {
       element.innerText =  text;
     }
   } 
   return functn;
 }
 const h1 = new DOM('h1');
 h1.setText("Hello, World!");
 let n = document.body.appendChild(h1.element);
 let m = document.body.getHTML();