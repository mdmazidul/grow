import fs from "fs";
import path from "path";
import mammoth from "mammoth";
import pdf from "pdf-parse";

const root = process.cwd();
const incoming = path.join(root,"incoming");
const targets = ["writings","projects"];

for (const type of targets) {
  const dir = path.join(incoming,type);
  if (!fs.existsSync(dir)) continue;
  for (const file of fs.readdirSync(dir)) {
    const full = path.join(dir,file);
    const ext = path.extname(file).toLowerCase();
    if (![".docx",".pdf"].includes(ext)) continue;
    const slug = file.replace(ext,"").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");
    let html="";
    const buf=fs.readFileSync(full);
    if(ext===".docx") html=(await mammoth.convertToHtml({buffer:buf})).value;
    else { const data=await pdf(buf); html=data.text.split(/\n{2,}/).map(p=>`<p>${p.trim()}</p>`).join(""); }
    const outDir=path.join(root,"content",type);
    fs.mkdirSync(outDir,{recursive:true});
    fs.writeFileSync(path.join(outDir,slug+".html"),`<section class="article-copy">${html}</section>`);
    console.log(`Generated ${type}/${slug}.html`);
  }
}
