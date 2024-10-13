// Quiz Project || Project 2 

const QnA = [
  {
    que: "What is the full form of 'WWW'?",
    opt: ["World Wide Web", "World Web Wide", "World Wide Webcam"],
    ans: "World Wide Web"
  },
  {
    que: "Which language is used to build Web Site structure?",
    opt: ["CSS","HTML","C++"],
    ans: "HTML"
  },
  {
    que: "Who built the World Wide Web?",
    opt: ["Sir Timothy Berner's", "Jhon F. Kenedy", "James Clerk Maxwell"],
    ans: "Sir Timothy Berner's"
  }
  ];
  
let holder = document.querySelector(".holder");

// for (let i=0; i<QnA.length; i++) {
//   let div = document.createElement('div');
//   let q = document.createElement('p');
//   let b1 = document.createElement('button');
//   let b2 = document.createElement('button');
//   let b3 = document.createElement('button');
  
//   q.innerText = QnA[i].que;
//   b1.innerText = QnA[i].opt[0];
//   b2.innerText = QnA[i].opt[1];
//   b3.innerText = QnA[i].opt[2];
  
  
//   q.id = "que";
//   b1.id = "b1";
//   b2.id = "b2";
//   b3.id = "b3";
//   div.id = "contain";
  
//   q.classList.add("que");
//   b1.classList.add("btn");
//   b2.classList.add("btn");
//   b3.classList.add("btn");
  
//   div.classList.add("contain");
  
  
//   div.appendChild(q);
//   div.appendChild(b1);
//   div.appendChild(b2);
//   div.appendChild(b3);
//   holder.appendChild(div);
  
  
// }



QnA.forEach((item)=> {
  let div = document.createElement('div');
  let q = document.createElement('p');
  let b1 = document.createElement('button');
  let b2 = document.createElement('button');
  let b3 = document.createElement('button');
  
  
  q.innerText = item.que;
  b1.innerText = item.opt[0];
  b2.innerText = item.opt[1];
  b3.innerText = item.opt[2];
  
  
  q.classList.add("que");
  b1.classList.add("btn");
  b2.classList.add("btn");
  b3.classList.add("btn");
  div.classList.add("contain");
  
  
  div.appendChild(q);
  div.appendChild(b1);
  div.appendChild(b2);
  div.appendChild(b3);
  holder.appendChild(div);
  
  [b1,b2,b3].forEach(button => {
    button.addEventListener("click", () => {
      if (button.innerText === item.ans) {
        button.classList.add("correct");
      } else {
        button.classList.add("wrong");
      }
    });
  });
});