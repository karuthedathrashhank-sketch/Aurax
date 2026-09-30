import type { Project, FileNode } from './types'
export const projects: Project[] = [
 {id:'stellar',name:'Stellar Studio',prompt:'Creative agency portfolio',type:'Website',status:'Published',updated:'12 min ago',accent:'#d9ff66'},
 {id:'nova',name:'Nova Analytics',prompt:'SaaS analytics dashboard',type:'Web App',status:'Draft',updated:'Yesterday',accent:'#8b7cff'},
 {id:'linea',name:'Linea House',prompt:'Architecture portfolio',type:'Portfolio',status:'Published',updated:'3 days ago',accent:'#ff9066'}
]
export const initialFiles: FileNode[] = [
{name:'index.html',language:'html',content:`<main class="site">\n  <nav><strong>STELLAR®</strong><div>Work &nbsp; Studio &nbsp; Contact</div></nav>\n  <section class="hero">\n    <p class="eyebrow">Independent creative studio · 2026</p>\n    <h1>Ideas that move<br/>at the speed of <em>culture.</em></h1>\n    <p class="sub">We build identities, experiences, and digital products for ambitious teams.</p>\n    <button>Start a project <span>↗</span></button>\n  </section>\n  <section class="ticker">Strategy — Identity — Digital — Motion —</section>\n</main>`},
{name:'styles.css',language:'css',content:`* { box-sizing: border-box }\nbody { margin: 0; font-family: Arial, sans-serif; background:#e9ff63; color:#10110d }\n.site { min-height:100vh; padding:28px 42px }\nnav { display:flex; justify-content:space-between; font-size:14px }\n.hero { padding:13vh 0 9vh }\n.eyebrow { text-transform:uppercase; font-size:11px; letter-spacing:.15em }\nh1 { font-size:clamp(48px,8vw,112px); line-height:.88; letter-spacing:-.07em; max-width:1100px; margin:28px 0 }\nh1 em { font-family:Georgia; font-weight:400 }\n.sub { max-width:440px; font-size:18px; line-height:1.5 }\nbutton { margin-top:25px; border:0; background:#10110d; color:white; padding:16px 22px; border-radius:100px }\n.ticker { border-top:1px solid #10110d; padding-top:22px; font-size:24px; word-spacing:25px }`},
{name:'script.js',language:'javascript',content:`const button = document.querySelector('button');\nbutton?.addEventListener('click', () => console.log('Project inquiry opened'));`}
]
export const templates = [
 ['Monolith','SaaS','Editorial landing page for modern software','#dfedff'],['Forma','Portfolio','Minimal portfolio for creative studios','#eaffba'],['Northstar','Finance','Trustworthy fintech experience','#c9beff'],['Maison','E-commerce','Luxury product storefront','#f1d9ce'],['Touchline','Football','Club, fixtures and player profiles','#c6ffdc'],['Metric','Dashboard','Data-rich admin workspace','#cde1ff']
]
