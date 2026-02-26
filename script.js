const content=document.getElementById("content");
const code=document.getElementById("code");

document.querySelectorAll(".sidebar li").forEach(item=>{
item.addEventListener("click",()=>{
loadFile(item.dataset.file);
});
});

function typingPersistent(text,element,speed=15){
element.textContent="";
let i=0;

function type(){
if(i<text.length){
element.textContent+=text.charAt(i);
i++;
setTimeout(type,speed);
}
}
type();
}

function loadFile(file){

/* ===================== ABOUT ===================== */

if(file==="about"){

content.innerHTML=`
<h1>About Me</h1>
<p>
My professional path combines two worlds that share more in common than it may seem: music and technology.
For years, I developed my career as a classical guitarist, earning more than nine international awards —
an experience that deeply shaped my discipline, creativity, and attention to detail.
</p>
<br>
<p>
Today, I apply those same principles as a Full Stack Developer, building complete web applications that integrate design,
functionality, and performance. I am motivated by creating well-crafted digital experiences,
solving complex problems, and transforming ideas into real solutions through code.
</p>
`;

const codeText=`> opening about_me.js...

const developer = {
  name: "Ricardo Gómez",
  role: "Full Stack Developer",
  background: "Classical Guitarist",
  awards: "9+ International Awards"
};`;

typingPersistent(codeText,code);
}


/* ===================== PROJECTS ===================== */

if(file==="projects"){

content.innerHTML=`
<h1>Projects</h1>

<div class="projects-grid">

<a href="https://ricardosanzonetti.github.io/web.vanessa.gomez.s/" 
   target="_blank" 
   class="project-card">
   VANESSA GÓMEZ WEBSITE
</a>

<a href="#" target="_blank" class="project-card">
   PROJECT 02
</a>

<a href="#" target="_blank" class="project-card">
   PROJECT 03
</a>

<a href="#" target="_blank" class="project-card">
   PROJECT 04
</a>

</div>
`;

const codeText=`> opening projects.js...

export const projects = [
  {
    name: "Vanessa Gómez Website",
    type: "Frontend Website",
    url: "web.vanessa.gomez.s"
  }
];`;

typingPersistent(codeText,code);
}


/* ===================== STACK ===================== */

if(file==="stack"){

content.innerHTML=`
<h1>Tech Stack</h1>
<p>HTML • CSS • JavaScript • Node.js • Git</p>
`;

const codeText=`> opening stack.json...

{
  "frontend": ["HTML","CSS","JavaScript"],
  "backend": ["Node.js"],
  "tools": ["Git","VS Code"]
}`;

typingPersistent(codeText,code);
}


/* ===================== CONTACT ===================== */

if(file==="contact"){

content.innerHTML=`
<h1>Contact</h1>
<p>Phone: 603 407 315</p>
<p>Email: ricardosanzonetti.tech@gmail.com</p>
`;

const codeText=`> opening contact.ts...

export const contact = {
  phone: "603 407 315",
  email: "ricardosanzonetti.tech@gmail.com"
};`;

typingPersistent(codeText,code);
}

}