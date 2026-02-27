const content = document.getElementById("content");
const code = document.getElementById("code");

document.querySelectorAll(".sidebar li").forEach(item => {
  item.addEventListener("click", () => {
    loadFile(item.dataset.file);
  });
});

function typing(text, element, speed = 15){
let i = 0;

function type(){
if(i < text.length){
element.innerHTML = text.substring(0, i + 1) + '<span class="cursor"></span>';
i++;
setTimeout(type, speed);
} else {
element.innerHTML = text + '<span class="cursor"></span>';
}
}
type();
}

function loadFile(file){

if(!file){
content.innerHTML = `
<h1>Welcome</h1>
<div class="terminal">
<div class="welcome-wrapper">
<div class="welcome-text">
<pre id="welcomeTyping"></pre>
</div>
<div class="welcome-image">
<img src="assets/ricardo.png" alt="Ricardo Gómez">
</div>
</div>
</div>
`;

typing(`> initializing portfolio...

System ready.
Select a file from the explorer.`, document.getElementById("welcomeTyping"));

code.innerHTML="";
return;
}

if(file === "about"){
content.innerHTML = `<h1>About Me</h1>
<p>My professional path combines two worlds that share more in common than it may seem: music and technology. For years, I developed my career as a classical guitarist, earning more than nine international awards—an experience that deeply shaped my discipline, creativity, and attention to detail.
Today, I apply those same principles as a Full Stack developer, building complete web applications that integrate design, functionality, and performance. I am motivated by creating well-crafted digital experiences, solving complex problems, and transforming ideas into real solutions through code.</p>`;

typing(`> opening about_me.js...

const developer = {
name: "Ricardo Gómez",
role: "Full Stack Developer",
background: "Classical Guitarist",
awards: "9+ International Awards"
};`, code);
}

if(file === "projects"){
content.innerHTML = `
<h1>Projects</h1>
<div class="projects-grid">

<a href="https://ricardosanzonetti.github.io/web.vanessa.gomez.s/" target="_blank" class="project-card vanessa-card">
<span>WEB ARQUITECTURE</span>
</a>

<a href="https://ricardosanzonetti.github.io/mariachi.azteca/" target="_blank" class="project-card project02-card">
<span>WEB MARIACHI AZTECA</span>
</a>

<a href="#" class="project-card">
comming soon...
</a>

</div>
`;

typing(`> opening projects.js...

export const projects = [
{
name: "Vanessa Gómez Website",
type: "Frontend Website",
url: "web.arquitecture.vanessa.gomez.sanzonetti"
},
{
name: "Mariachi Azteca Website",
type: "Frontend Website",
url: "mariachi.azteca"
}
];`, code);
}

if(file === "stack"){
content.innerHTML = `<h1>Tech Stack</h1>
<p>HTML • CSS • JavaScript • Node • Git</p>`;

typing(`> opening stack.json...

{
"frontend": ["HTML","CSS","JavaScript"],
"backend": ["Node"],
"tools": ["Git"]
}`, code);
}

if(file === "contact"){
content.innerHTML = `<h1>Contact</h1>
<p>Phone: +34 603 407 315</p>
<p>Email: ricardosanzonetti.tech@gmail.com</p>`;

typing(`> opening contact.ts...

const contact = {
phone: "+34 603 407 315",
email: "ricardosanzonetti.tech@gmail.com"
};`, code);
}

}

loadFile();