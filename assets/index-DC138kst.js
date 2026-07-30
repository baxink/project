(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))l(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(a){if(a.ep)return;a.ep=!0;const r=t(a);fetch(a.href,r)}})();const v=["合同","设计","审图","建造","系泊","试航","发证","交船"];function u(e={}){return v.map(s=>({id:s,name:s,status:"idle",score:null,bar:null,summary:"",children:[],...e[s]}))}const h={dock:{id:"dock",name:"中远海重工 30 万吨浮船坞",owner:"中远海重工",since:"2026-05-19",currentPhase:"建造",next:"081：管段↔炉批对照（约1/3通达+2/3前证）；补探伤与现场试验报告电子版；再签认与回填",phases:u({建造:{status:"active",score:"1-10",bar:1,summary:"全局建造仍处启动段；管系专业已深入中后段",children:[{id:"piping",name:"管系",status:"active",score:"8-10",bar:8,metrics:[{label:"装配",value:"87.7%"},{label:"外观",value:"81.9%"},{label:"试压",value:"76.3%"},{label:"HC 报验",value:"97 根待签认"},{label:"NDT",value:"纸质已见·电子待补"}],milestones:[{date:"2026-05-19",title:"管系追溯总表",detail:"2123 根 · 首轮统计归档",ref:"建造_1-10_进行中_2026-05-19/管系追溯"},{date:"2026-06-12",title:"HC 水压 049",detail:"24 根 · 已报验待结果确认",ref:"C30-DS-SY-049"},{date:"2026-07-01",title:"HC 水压 065",detail:"38 根 · 累计 62 · I 级材料档",ref:"C30-DS-SY-065"},{date:"2026-07-30",title:"HC 水压 081",detail:"35 根 · 混用约1/3通达+2/3前证 · 电子报告待补",ref:"C30-DS-SY-081",flag:"focus"}],weak:["坞墙 / 首部平台：装配 0%","泵舱右：试压 56.8%","HC 液压：装配 51.4% / 外观 2.7% / 试压 0%（追溯表口径）","CH / CO / OX 等系统：未开工"]},{id:"class-i",name:"I 级管系证书及试验",status:"blocked",score:"8-10",bar:8,metrics:[{label:"批次",value:"065 / 081"},{label:"WPS",value:"081 已覆盖"},{label:"产品证",value:"通达已归档·混用"},{label:"电子报告",value:"探伤/试验待补"}],notes:["通达证已归档；7 支/3.75t 不够 35 根 → 约 1/3 通达 + 2/3 前批材料","前批段仍可能挂康弘过期/壁厚 16 mm 问题","纸质探伤与现场试验已见；电子版待放入 2026-07-30 文件夹再分析","I 级对接 WPS：2025002 / 2025003"]},{id:"wps",name:"WPS 审核",status:"active",score:"9-10",bar:9,metrics:[{label:"I 级",value:"确认覆盖"},{label:"Ⅲ 级 Φ27×4",value:"暂认 2026008"},{label:"归档",value:"99-其他/WPS-审核"}],notes:["I 级 HC Φ114×17 BW → 2025002 / 2025003（签批齐全）","Ⅲ 级 20# 小径 135 根 → Excel 第三批 2026008；签批 PDF 待补","Excel 与 PDF 不一致（2026003/004 等）以签批件为准"]}]}})},ferry:{id:"ferry",name:"上海轮渡 13",owner:"上海轮渡",since:"2026-04-29",currentPhase:"建造",next:"建造阶段推进；电气审图后续批次",phases:u({审图:{status:"active",score:"1-10",bar:1,summary:"电气审图资料第一批已归档",children:[{id:"elec-review",name:"电气审图 001E",status:"active",score:"1-10",bar:1,metrics:[{label:"编号",value:"SH26DNP20003-001E"},{label:"日期",value:"2026-04-29"},{label:"内容",value:"布置 / 系统 / 计算等"}],milestones:[{date:"2026-04-29",title:"电气审图第一批",detail:"含电力推进、照明、无线电与航行设备等图样",ref:"审图_1-10_进行中_2026-04-29"}]}]},建造:{status:"active",score:"1-10",bar:1,summary:"建造早期，以宣贯与准备为主",children:[{id:"harmonic",name:"谐波计算书事宜",status:"active",score:"1-10",bar:1,metrics:[{label:"状态",value:"已宣贯"}],milestones:[{date:"2026-05-07",title:"谐波计算书宣贯",detail:"建造阶段事项",ref:"建造_1-10_进行中_2026-05-07"}]}]}})}};function $(e,s=10){const t=Math.max(0,Math.min(s,e??0));return"█".repeat(t)+"░".repeat(s-t)}const p=document.querySelector("#tabs"),b=document.querySelector("#hero"),f=document.querySelector("#track"),g=document.querySelector("#detail");let o="dock",n=null;const i={idle:"未开始",active:"进行中",blocked:"待澄清",done:"已完成"};function y(){return h[o]}function S(e){var s;n&&e.phases.some(t=>t.id===n)||(n=e.currentPhase||((s=e.phases.find(t=>t.status==="active"))==null?void 0:s.id)||e.phases[0].id)}function P(){p.innerHTML=Object.values(h).map(e=>`<button type="button" data-id="${e.id}" class="${e.id===o?"is-on":""}">${e.id==="dock"?"浮船坞":"轮渡 13"}</button>`).join(""),p.querySelectorAll("button").forEach(e=>{e.addEventListener("click",()=>{o=e.dataset.id,n=null,d()})})}function H(e){const s=e.phases.find(l=>l.id===e.currentPhase),t=s!=null&&s.score?`（${s.score}）`:"";b.innerHTML=`
    <p class="hero-kicker">当前 · ${e.currentPhase}${t}</p>
    <h1>${e.name}</h1>
    <p class="hero-meta">${e.owner} · 自 ${e.since}</p>
    <p class="hero-next"><strong>下一节点</strong>${e.next}</p>
  `}function k(e){f.innerHTML=e.phases.map((s,t)=>`
        <li>
          <button type="button" class="${["track-item",s.status!=="idle"?`is-${s.status}`:"",s.id===n?"is-selected":""].filter(Boolean).join(" ")}" data-phase="${s.id}">
            <span class="n">${String(t+1).padStart(2,"0")}</span>
            <span class="name">${s.name}</span>
            <span class="score">${s.score?s.score:i[s.status]}</span>
          </button>
        </li>
      `).join(""),f.querySelectorAll("button").forEach(s=>{s.addEventListener("click",()=>{n=s.dataset.phase,d()})})}function E(e,s){if(e==null)return"";const t=Math.round(e/10*100);return`
    <div class="progress">
      <div class="progress-bar"><i style="width:${t}%"></i></div>
      <div class="progress-meta">
        <span class="blocks">${$(e)}</span>
        <span>${s||e+"-10"} · ${t}%</span>
      </div>
    </div>
  `}function C(e){return e!=null&&e.length?`<ul class="metrics">${e.map(s=>`<li><strong>${s.value}</strong><span>${s.label}</span></li>`).join("")}</ul>`:""}function L(e){return e!=null&&e.length?`
    <div>
      <h4>里程碑 / 小节点</h4>
      <ol class="milestones">
        ${e.map(s=>`
          <li class="${s.flag==="focus"?"focus":""}">
            <span class="date">${s.date}</span>
            <span class="title">${s.title}</span>
            <span class="detail">${s.detail}</span>
            ${s.ref?`<span class="ref">${s.ref}</span>`:""}
          </li>`).join("")}
      </ol>
    </div>
  `:""}function m(e,s){return s!=null&&s.length?`
    <div>
      <h4>${e}</h4>
      <ul class="list">${s.map(t=>`<li>${t}</li>`).join("")}</ul>
    </div>
  `:""}function j(e){const s=L(e.milestones)+m("说明",e.notes)+m("薄弱环节",e.weak);return`
    <article class="child ${e.status==="blocked"?"is-blocked":""}">
      <div class="child-top">
        <div>
          <h3>${e.name}</h3>
          <p class="child-status">${i[e.status]||e.status}${e.score?` · ${e.score}`:""}</p>
        </div>
        <span class="badge st-${e.status}">${i[e.status]}</span>
      </div>
      ${E(e.bar,e.score)}
      ${C(e.metrics)}
      ${s?`<div class="subgrid">${s}</div>`:""}
    </article>
  `}function w(e){var l;const s=e.phases.find(a=>a.id===n)||e.phases[0],t=((l=s.children)==null?void 0:l.length)>0;g.innerHTML=`
    <div class="detail-head">
      <div>
        <h2>小阶段</h2>
        <p class="detail-title">${s.name}</p>
        ${s.summary?`<p class="detail-summary">${s.summary}</p>`:""}
      </div>
      <span class="badge st-${s.status}">
        ${i[s.status]}
        ${s.score?` · <strong>${s.score}</strong>`:""}
        ${s.bar!=null?` · <strong>${$(s.bar)}</strong>`:""}
      </span>
    </div>
    ${t?`<div class="children">${s.children.map(j).join("")}</div>`:`<p class="empty">该大阶段下暂无小阶段记录 · 状态：${i[s.status]}</p>`}
  `}function d(){const e=y();S(e),P(),H(e),k(e),w(e)}d();
