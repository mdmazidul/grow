const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const pathToRoot = () => {
  const p = location.pathname;
  return p.includes("/pages/") ? "../" : "";
};
const ROOT = pathToRoot();
const el = (sel) => document.querySelector(sel);
const read = (key) => SITE[key] || [];
const sortNewest = a => [...a].sort((x,y) => String(y.date).localeCompare(String(x.date)));

function nav(active="") {
  return `<header class="site-header"><div class="wrap nav-wrap">
    <a class="brand" href="${ROOT}index.html">MAZIDUL<span>.</span></a>
    <button class="nav-toggle" aria-label="Open menu" aria-expanded="false">☰</button>
    <nav class="main-nav">
      <a href="${ROOT}index.html" ${active==="home"?'aria-current="page"':''}>Home</a>
      <a href="${ROOT}pages/about.html" ${active==="about"?'aria-current="page"':''}>About</a>
      <a href="${ROOT}pages/projects.html" ${active==="projects"?'aria-current="page"':''}>Projects</a>
      <a href="${ROOT}pages/writing.html" ${active==="writing"?'aria-current="page"':''}>Writing</a>
      <a href="${ROOT}pages/published.html" ${active==="published"?'aria-current="page"':''}>Published</a>
      <a href="${ROOT}pages/glimpses.html" ${active==="glimpses"?'aria-current="page"':''}>Glimpses</a>
    </nav>
  </div></header>`;
}
function footer(){
 return `<footer class="site-footer"><div class="wrap footer-inner"><div>© ${new Date().getFullYear()} ${esc(SITE.profile.name)}</div><div class="footer-social"><a href="${SITE.profile.linkedin}" target="_blank" rel="noreferrer">LinkedIn</a><a href="${SITE.profile.instagram}" target="_blank" rel="noreferrer">Instagram</a><a href="mailto:${SITE.profile.email}">Email</a></div></div></footer>`;
}
function shell(title, active, content){
 document.title = `${title} — ${SITE.profile.name}`;
 document.body.innerHTML = nav(active)+content+footer();
 initUI();
}
function projectCard(p, i=0){
 return `<article class="work-card reveal" style="--i:${i}"><div class="card-top"><span>${esc(p.category)}</span><span>${esc(p.date)}</span></div><h3>${esc(p.title)}</h3><p>${esc(p.summary)}</p><div class="tags">${p.tags.map(t=>`<span>${esc(t)}</span>`).join("")}</div><a class="text-link" href="${ROOT}pages/project.html?slug=${encodeURIComponent(p.slug)}">Explore project <span>↗</span></a></article>`;
}
function writingCard(w,i=0){
 return `<article class="work-card reveal" style="--i:${i}"><div class="card-top"><span>${esc(w.category)}</span><span>${esc(w.date)}</span></div><h3>${esc(w.title)}</h3><p>${esc(w.excerpt)}</p><a class="text-link" href="${ROOT}pages/writing-detail.html?slug=${encodeURIComponent(w.slug)}">Read <span>↗</span></a></article>`;
}
function pageIntro(eyebrow,title,text=""){
 return `<section class="page-intro wrap"><span class="eyebrow">${esc(eyebrow)}</span><h1>${title}</h1>${text?`<p>${text}</p>`:""}</section>`;
}
function initUI(){
 const toggle=document.querySelector(".nav-toggle"), navEl=document.querySelector(".main-nav");
 if(toggle) toggle.onclick=()=>{const open=navEl.classList.toggle("is-open");toggle.setAttribute("aria-expanded",open)};
 const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add("is-visible")),{threshold:.08});
 document.querySelectorAll(".reveal").forEach(x=>io.observe(x));
 document.querySelectorAll("[data-filter]").forEach(btn=>btn.onclick=()=>{
   document.querySelectorAll("[data-filter]").forEach(b=>b.classList.remove("is-active")); btn.classList.add("is-active");
   const cat=btn.dataset.filter;
   document.querySelectorAll("[data-category]").forEach(x=>x.hidden=cat!=="All"&&x.dataset.category!==cat);
 });
}

function renderHome(){
 const ps=sortNewest(read("projects")), ws=sortNewest(read("writings"));
 const latest=[ps[0]&&{type:"PROJECT",title:ps[0].title,text:ps[0].summary,href:`${ROOT}pages/project.html?slug=${ps[0].slug}`},
 ws[0]&&{type:"WRITING",title:ws[0].title,text:ws[0].excerpt,href:`${ROOT}pages/writing-detail.html?slug=${ws[0].slug}`}].filter(Boolean);
 shell("Home","home",`<main>
 <section class="hero wrap"><div class="hero-copy reveal"><span class="eyebrow">STATISTICS × PYTHON × DATA</span><h1>Turning numbers into <em>stories</em>, and stories into code.</h1><p class="hero-lead">${esc(SITE.profile.tagline)}</p><div class="hero-actions"><a class="btn btn-primary" href="${ROOT}pages/projects.html">Explore projects</a><a class="btn btn-ghost" href="${ROOT}pages/about.html">About me</a></div><div class="hero-meta"><span>Based in ${esc(SITE.profile.location)}</span><span>Building in public</span></div></div><div class="hero-visual reveal"><div class="photo-frame"><img src="${ROOT}${SITE.profile.photo}" alt="${esc(SITE.profile.name)}"></div><div class="orb orb-a"></div><div class="orb orb-b"></div></div></section>
 <section class="marquee"><div>STATISTICS&nbsp;&nbsp; / &nbsp;&nbsp;PYTHON&nbsp;&nbsp; / &nbsp;&nbsp;DATA ANALYSIS&nbsp;&nbsp; / &nbsp;&nbsp;WRITING&nbsp;&nbsp; / &nbsp;&nbsp;RESEARCH&nbsp;&nbsp; / &nbsp;&nbsp;</div></section>
 <section class="section wrap"><div class="section-head"><div><span class="eyebrow">LATEST</span><h2>What I’m building now</h2></div><a class="text-link" href="${ROOT}pages/projects.html">View all projects ↗</a></div><div class="work-grid">${latest.map((x,i)=>`<article class="latest-feature reveal" style="--i:${i}"><span class="eyebrow">${x.type}</span><h3>${esc(x.title)}</h3><p>${esc(x.text)}</p><a class="text-link" href="${x.href}">Open <span>↗</span></a></article>`).join("")}</div></section>
 <section class="section section-alt"><div class="wrap split"><div><span class="eyebrow">THE IDEA</span><h2>A portfolio that grows with the work.</h2></div><div><p>I’m using this site as a living archive rather than a static résumé. Projects show what I can build; writing shows how I think; glimpses show the person behind the work.</p><a class="text-link" href="${ROOT}pages/about.html">More about me ↗</a></div></div></section>
 </main>`);
}
function renderProjects(){
 const ps=sortNewest(read("projects")), cats=["All",...new Set(ps.map(p=>p.category))];
 shell("Projects","projects",pageIntro("WORK","Projects","Data analysis, Python tools, statistical work and research notes — five projects selected as the public portfolio.")+
 `<main class="wrap section"><div class="chips">${cats.map(c=>`<button class="chip ${c==="All"?"is-active":""}" data-filter="${esc(c)}">${esc(c)}</button>`).join("")}</div><div class="work-grid">${ps.map((p,i)=>`<div data-category="${esc(p.category)}">${projectCard(p,i)}</div>`).join("")}</div></main>`);
}
function renderWriting(){
 const ws=sortNewest(read("writings"));
 shell("Writing","writing",pageIntro("WRITING","Writing","Articles, short stories, reflections and technical notes. This section is intentionally broader than the portfolio.")+
 `<main class="wrap section"><div class="work-grid">${ws.map(writingCard).join("")}</div></main>`);
}
function renderAbout(){
 shell("About","about",`<main>${pageIntro("ABOUT","A little about me","The person, education and interests behind the projects.")}<section class="wrap section about-grid"><aside><div class="portrait"><img src="${ROOT}${SITE.profile.photo}" alt="${esc(SITE.profile.name)}"></div><div class="contact-card"><span class="eyebrow">CONTACT</span><a href="${SITE.profile.linkedin}" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="${SITE.profile.instagram}" target="_blank" rel="noreferrer">Instagram ↗</a><a href="mailto:${SITE.profile.email}">Email ↗</a></div></aside><div class="about-copy">${SITE.profile.bio.map(x=>`<p class="lead">${esc(x)}</p>`).join("")}<div class="info-block"><h2>Education</h2>${SITE.profile.education.map(x=>`<div class="info-row"><strong>${esc(x.title)}</strong><span>${esc(x.place)} · ${esc(x.years)}</span></div>`).join("")}</div><div class="info-block"><h2>Interests</h2><div class="tags big">${SITE.profile.interests.map(x=>`<span>${esc(x)}</span>`).join("")}</div></div><div class="info-block"><h2>Courses</h2>${SITE.profile.courses.map(x=>`<div class="info-row"><strong>${esc(x)}</strong></div>`).join("")}</div></div></section></main>`);
}
function renderPublished(){
 shell("Published","published",pageIntro("COMMUNITY","Published","A space for selected creations submitted by other people.")+
 `<main class="wrap section"><div class="publish-banner"><div><span class="eyebrow">YOUR CREATION</span><h2>Have something worth sharing?</h2><p>Submit an article, story, project, artwork or other creation for review.</p></div><a class="btn btn-primary" href="mailto:${SITE.profile.email}?subject=Submission%20for%20Mazidul's%20site">Submit by email</a></div><div class="subnav"><a class="is-active" href="#">Published</a><a href="mailto:${SITE.profile.email}?subject=Submission%20for%20publication">Submit</a></div>${SITE.published.length?`<div class="work-grid">${SITE.published.map(x=>`<article class="work-card"><span class="eyebrow">${esc(x.category)}</span><h3>${esc(x.title)}</h3><p>${esc(x.author)} · ${esc(x.date)}</p><a class="text-link" href="${x.link}">Open ↗</a></article>`).join("")}</div>`:`<div class="empty-state">The first community submissions will appear here.</div>`}</main>`);
}
function renderGlimpses(){
 shell("Glimpses","glimpses",pageIntro("LIFE","Glimpses","Small moments from the journey — places, people, travel and everyday life.")+
 `<main class="wrap section"><div class="glimpse-grid">${SITE.glimpses.map((g,i)=>`<figure class="glimpse-tile reveal" style="--i:${i}"><img src="${ROOT}${g.image}" alt="${esc(g.caption)}" loading="lazy"><figcaption>${esc(g.caption)}<small>${esc(g.date)}</small></figcaption></figure>`).join("")}</div></main>`);
}
async function loadFile(url){
 const r=await fetch(ROOT+url); if(!r.ok) throw new Error("Could not load content"); return r.text();
}
async function renderDetail(type){
 const params=new URLSearchParams(location.search), slug=params.get("slug");
 const arr=type==="project"?SITE.projects:SITE.writings, item=arr.find(x=>x.slug===slug)||arr[0];
 if(!item){shell("Not found","",pageIntro("404","Not found","This page does not exist."));return;}
 const body=await loadFile(item.content);
 shell(item.title,type==="project"?"projects":"writing",`<main><section class="detail-head wrap"><a class="back-link" href="${ROOT}pages/${type==="project"?"projects":"writing"}.html">← Back</a><span class="eyebrow">${esc(item.category)}</span><h1>${esc(item.title)}</h1><div class="detail-meta"><span>${esc(item.date)}</span>${item.tags?`<span>${item.tags.map(esc).join(" · ")}</span>`:""}</div></section><article class="article-body">${body}</article></main>`);
}
const page=document.body.dataset.page;
if(page==="home") renderHome();
if(page==="projects") renderProjects();
if(page==="writing") renderWriting();
if(page==="about") renderAbout();
if(page==="published") renderPublished();
if(page==="glimpses") renderGlimpses();
if(page==="project-detail") renderDetail("project");
if(page==="writing-detail") renderDetail("writing");
