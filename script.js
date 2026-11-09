'use strict';
const bib = {
 nexus: `@inproceedings{ye2026nexusqa,
  title = {NexusQA: Spatio-Temporal Interlacement Grounded VideoQA},
  author = {Ye, Xiaojun and Wang, Chun and Chen, Junliang and Zhou, Sheng and Wang, Rui and Yan, Zixu and Jia, Bingxin and Li, Bin and Song, Yiren and Bu, Jiajun},
  booktitle = {Proceedings of the 34th ACM International Conference on Multimedia},
  year = {2026},
  doi = {10.1145/3767308.3835487}
}`,
 gre: `@inproceedings{wang2025gresuite,
  title = {GRE Suite: Geo-localization Inference via Fine-Tuned Vision-Language Models and Enhanced Reasoning Chains},
  author = {Wang, Chun and Ye, Xiaojun and Pan, Xiaoran and Pan, Zihao and Wang, Haofan and Song, Yiren},
  booktitle = {Advances in Neural Information Processing Systems},
  year = {2025}
}`,
 m4: `@inproceedings{ye2025m4bench,
  title = {M4Bench: A Benchmark of Multi-domain Multi-granularity Multi-image Understanding for Multi-modal Large Language Models},
  author = {Ye, Xiaojun and Liang, Guanbao and Wang, Chun and Li, Liangcheng and Ke, Pengfei and Wang, Rui and Jia, Bingxin and Huang, Gang and Sun, Qiao and Zhou, Sheng},
  booktitle = {Proceedings of the Thirty-Fourth International Joint Conference on Artificial Intelligence},
  pages = {6848--6856},
  year = {2025},
  doi = {10.24963/ijcai.2025/762},
  url = {https://www.ijcai.org/proceedings/2025/762}
}`,
 mmad: `@inproceedings{ye2024mmad,
  title = {MMAD: Multi-modal Movie Audio Description},
  author = {Ye, Xiaojun and Chen, Junhao and Li, Xiang and Xin, Haidong and Li, Chao and Zhou, Sheng and Bu, Jiajun},
  booktitle = {Proceedings of the 2024 Joint International Conference on Computational Linguistics, Language Resources and Evaluation (LREC-COLING 2024)},
  pages = {11415--11428},
  year = {2024},
  publisher = {ELRA and ICCL},
  url = {https://aclanthology.org/2024.lrec-main.998/}
}`
};
const translations = {
 'zh-CN': {
  navAbout:'关于我',navPapers:'论文',navEducation:'教育经历',navContact:'联系',role:'计算机科学博士生',university:'浙江大学',undergraduateUniversity:'哈尔滨工程大学',location:'中国 · 杭州',interestsLabel:'研究方向',interest1:'多模态学习',interest2:'视觉证据与推理',interest3:'视频理解',explore:'查看我的研究',aboutLabel:'关于我',headline:'理解视觉世界，<br>让推理<em>有据可依。</em>',
  bio1:'我是一名浙江大学计算机科学博士生，就读于 EagleLab，导师为<strong>周晟副教授</strong>。',
  bio2:'我的研究聚焦于<strong>多模态学习与视觉推理</strong>，探索如何将模型看到的内容与推断过程相联系，使其预测建立在细粒度视觉证据之上。',
  bio3:'研究工作涉及基于证据的视频问答、多图像理解、图像地理定位，以及面向无障碍体验的电影音频描述。',researchNote:'从感知走向推理，探索多模态模型理解背后的依据。',newsHeading:'近期研究',
  news1:'<a href="#paper-nexus">NexusQA</a>：利用多粒度时空证据实现有据可依的视频问答。<span class="news-venue">ACM MM 2026</span>',
  news2:'<a href="#paper-gre">GRE Suite</a>：通过结构化视觉推理进行图像地理定位。<span class="news-venue">NeurIPS 2025</span>',
  news3:'<a href="#paper-m4">M⁴Bench</a>：评测多模态模型对多幅图像的对比理解能力。<span class="news-venue">IJCAI 2025</span>',
  news4:'<a href="#paper-mmad">MMAD</a>：结合视觉、音频与叙事上下文，生成无障碍电影音频描述。<span class="news-venue">LREC-COLING 2024</span>',
  papersHeading:'学术论文',downloadBib:'下载 BibTeX ↗',all:'全部论文',video:'视频与音频',image:'视觉推理',equalNote:'* 表示共同第一作者。',overview:'研究概述',projectLink:'项目主页 ↗',
  nexusDescription:'融合细粒度时空证据与多智能体协作，提升视频推理的视觉依据。',greDescription:'从图像中的视觉线索出发，通过结构化推理逐步确定地理位置。',m4Description:'评测多模态模型跨图像、跨领域和跨粒度的对齐与区分能力。',mmadDescription:'结合声音、人物与叙事上下文，为视障观众生成更丰富的电影音频描述。',
  nexusOverview:'NexusBench 以分层视频场景图为基础，检验模型能否识别支撑答案的正确对象、局部细节和时间片段。NexusScore 评估模型利用证据的能力；NexusQA 基线通过策略智能体与定位智能体协作，无需额外训练即可收集证据并完成推理。',
  greOverview:'GRE Suite 包括地理定位推理数据集、视觉语言模型和评测基准。通过冷启动微调与两阶段强化学习，将场景级上下文与细粒度地理线索相联系，实现全球范围的图像地理定位。',
  m4Overview:'M⁴Bench 包含状态不变性、状态比较、细节差异、空间感知和实例比较五类任务。利用粗粒度与细粒度视觉提示，评估模型在单领域与跨领域场景下的多图像比较能力，并减少对语言先验的依赖。',
  mmadOverview:'MMAD 结合音频感知特征增强、人物跟踪与基于字幕的上下文对齐，为电影生成更丰富的音频描述，将多模态感知与面向盲人及低视力观众的无障碍叙事相结合。',
  educationHeading:'教育经历',phd:'计算机科学博士 · 直接攻博',advisor:'导师：周晟副教授 · EagleLab',phdDate:'2024 — 2029（预计）',beng:'计算机科学工学学士',contactLabel:'联系我',contactHeading:'期待与你交流。',contactText:'欢迎就研究问题与学术合作通过邮件联系。',updated:'最近更新 · 2026 年 11 月',citationHeading:'引用这项研究',copyCitation:'复制 BibTeX'
 }
};
const original = new Map();
document.querySelectorAll('[data-i18n], [data-i18n-html]').forEach(el => original.set(el, el.innerHTML));
let lang = 'en';
try { if (localStorage.getItem('xy-language') === 'zh-CN') lang = 'zh-CN'; } catch {}
function setLanguage(next) {
 lang = next;
 document.documentElement.lang = next;
 document.querySelectorAll('[data-i18n], [data-i18n-html]').forEach(el => {
  const key = el.dataset.i18n || el.dataset.i18nHtml;
  if (next === 'en') el.innerHTML = original.get(el);
  else if (translations[next]?.[key] !== undefined) {
   if (el.hasAttribute('data-i18n-html')) el.innerHTML = translations[next][key];
   else el.textContent = translations[next][key];
  }
 });
 document.getElementById('language').innerHTML = next === 'en' ? '中文 <span aria-hidden="true">↗</span>' : 'EN <span aria-hidden="true">↗</span>';
 document.getElementById('language').setAttribute('aria-label', next === 'en' ? 'Switch to Chinese' : 'Switch to English');
 document.querySelector('.filters').setAttribute('aria-label', next === 'en' ? 'Filter publications' : '筛选论文');
 updateCount();
 try {localStorage.setItem('xy-language', next);} catch {}
}
function updateCount(){
 const count = [...document.querySelectorAll('.paper')].filter(p => !p.hidden).length;
 document.getElementById('paper-count').textContent = lang === 'en' ? `${count} papers` : `${count} 篇论文`;
}
document.getElementById('language').addEventListener('click',()=>setLanguage(lang==='en'?'zh-CN':'en'));
document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click',()=>{
 document.querySelectorAll('[data-filter]').forEach(b=>{b.classList.toggle('selected',b===button);b.setAttribute('aria-pressed',String(b===button));});
 document.querySelectorAll('.paper').forEach(p=>{p.hidden=button.dataset.filter!=='all'&&p.dataset.category!==button.dataset.filter;});
 updateCount();
}));
// Direct links always reveal the requested paper, including after a filter is used.
function revealHash(){
 const id=location.hash.slice(1);
 if(!id.startsWith('paper-'))return;
 const paper=document.getElementById(id);
 if(paper?.hidden){document.querySelector('[data-filter="all"]').click();paper.scrollIntoView({block:'start'});}
}
window.addEventListener('hashchange',revealHash);
document.querySelectorAll('a[href^="#paper-"]').forEach(a=>a.addEventListener('click',()=>{
 const paper=document.getElementById(a.hash.slice(1));
 if(paper?.hidden)document.querySelector('[data-filter="all"]').click();
}));
const dialog=document.getElementById('citation-dialog');
const citationText=document.getElementById('citation-text');
const status=document.querySelector('.copy-status');
document.querySelectorAll('[data-cite]').forEach(button=>button.addEventListener('click',()=>{
 citationText.textContent=bib[button.dataset.cite];status.textContent='';dialog.showModal();
}));
document.querySelector('.close-dialog').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
document.getElementById('copy-citation').addEventListener('click',async()=>{
 try {await navigator.clipboard.writeText(citationText.textContent);status.textContent=lang==='en'?'Copied to clipboard.':'已复制到剪贴板。';}
 catch {const selection=window.getSelection();const range=document.createRange();range.selectNodeContents(citationText);selection.removeAllRanges();selection.addRange(range);status.textContent=lang==='en'?'Select and copy the citation above.':'请选中并复制上方引用。';}
});
const sections=[...document.querySelectorAll('main > section')];
if('IntersectionObserver' in window){
 const observer=new IntersectionObserver(entries=>{
  const visible=entries.filter(e=>e.isIntersecting);
  if(!visible.length)return;
  let id=visible[0].target.id;
  if(id==='news')id='about';
  document.querySelectorAll('nav a').forEach(a=>{const active=a.hash===`#${id}`;a.classList.toggle('active',active);if(active)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');});
 },{rootMargin:'-110px 0px -55% 0px',threshold:0});
 sections.forEach(s=>observer.observe(s));
}
document.getElementById('year').textContent=new Date().getFullYear();
setLanguage(lang);revealHash();
