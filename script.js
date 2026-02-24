const content = document.getElementById("info-content");
const preview = document.getElementById("preview-content");
const codeElement = document.getElementById("code");
const tabsContainer = document.querySelector(".tabs-container");

const files = {

about:{
name:"about_me.js",

preview:"Ricardo Gómez — Full Stack Developer",

content:`

<h1>About Me</h1>

<p>
Mi camino profesional combina dos mundos que comparten más de lo que parece: la música y la tecnología. Durante años me desarrollé como guitarrista clásico, obteniendo más de nueve premios internacionales, una etapa que definió profundamente mi disciplina, creatividad y sensibilidad por los detalles.
</p>

<br>

<p>
Hoy aplico esos mismos principios como desarrollador Full Stack, creando aplicaciones web completas que integran diseño, funcionalidad y rendimiento. Me motiva construir experiencias digitales bien pensadas, resolver problemas complejos y transformar ideas en soluciones reales a través del código.
</p>
`,

code:`const developer = {
 name:"Ricardo Gómez",
 role:"Full Stack Developer",
 background:"Classical Guitarist",
 awards:"9+ International Awards"
};`
},

projects:{
name:"projects.js",

preview:"Projects coming soon",

content:`

<h1>Projects</h1>

<p>
En proyectos aún nada, espera que termine algunos proyectos para subirlos.
</p>
`,

code:`function loadProjects(){
 return "Projects coming soon";
}`
},

stack:{
name:"stack.json",

preview:"Tech Stack",

content:`

<h1>Tech Stack</h1>

<p>
HTML • CSS • JavaScript • Node.js • Git
</p>
`,

code:`{
 frontend:["HTML","CSS","JavaScript"],
 backend:["Node.js"],
 tools:["Git","VS Code"]
}`
},

contact:{
name:"contact.ts",

preview:"Contacto",

content:`

<h1>Contacto</h1>

<p>Tlf: 603 407 315</p>
<p>Correo: ricardosanzonetti.tech@gmail.com</p>
`,

code:`type Contact={
 phone:"603407315",
 email:"ricardosanzonetti.tech@gmail.com"
};`
}

};

/* TERMINAL TYPING */

function typeCode(text,file){

codeElement.textContent="";

const full=`> opening ${file}...\n\n` + text;

let i=0;

function type(){
if(i < full.length){

codeElement.textContent += full.charAt(i);

codeElement.parentElement.scrollTop =
codeElement.parentElement.scrollHeight;

i++;

setTimeout(type,20);
}
}

type();
}

/* TABS */

function createTab(key){

let existing=document.querySelector(
`.tab[data-file="${key}"]`
);

if(existing){
activateTab(key);
return;
}

const tab=document.createElement("div");
tab.classList.add("tab");
tab.dataset.file=key;
tab.textContent=files[key].name;

tab.onclick=()=>activateTab(key);

tabsContainer.appendChild(tab);

activateTab(key);
}

function activateTab(key){

document.querySelectorAll(".tab")
.forEach(tab=>tab.classList.remove("active"));

document.querySelector(
`.tab[data-file="${key}"]`
).classList.add("active");

content.innerHTML = files[key].content;
preview.textContent = files[key].preview;

typeCode(files[key].code,files[key].name);

document.querySelectorAll(".sidebar li")
.forEach(li=>li.classList.remove("active-file"));

document.querySelector(
`.sidebar li[data-file="${key}"]`
).classList.add("active-file");
}

/* SIDEBAR EVENTS */

document.querySelectorAll(".sidebar li")
.forEach(item=>{
item.addEventListener("click",()=>{
createTab(item.dataset.file);
});
});

/* AUTO START */

window.onload=()=>{
createTab("about");
};

