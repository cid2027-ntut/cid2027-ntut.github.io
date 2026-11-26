const pages = [
  ["about", "關於大會", "About"],
  ["call-for-papers", "徵稿資訊", "Call for Papers"],
  ["speakers", "講者與工作坊", "Speakers & Workshop"],
  ["program", "大會議程", "Program"],
  ["venue", "場地與無障礙", "Venue & Access"],
  ["registration", "報名註冊", "Registration"]
];
const current = document.body.dataset.page || "home";
const navItems = current === "home"
  ? `<a href="#theme" data-zh="會議主題" data-en="Theme">會議主題</a><a href="#tracks" data-zh="六大子題" data-en="Six Tracks">六大子題</a><a href="#contact" data-zh="聯絡方式" data-en="Contact">聯絡方式</a>`
  : pages.map(([slug, zh, en]) => `<a href="${slug}.html" ${current === slug ? 'aria-current="page"' : ""} data-zh="${zh}" data-en="${en}">${zh}</a>`).join("");
const wordmark = current === "home"
  ? `<img class="home-institute-logo" src="assets/cid-logo.png" alt="中華民國設計學會 Chinese Institute of Design"><span class="home-brand-divider" aria-hidden="true"></span><span class="home-brand-event" data-zh="2027 國際設計學術研討會" data-en="2027 International Design Symposium">2027 國際設計學術研討會</span>`
  : `<span class="mark-placeholder" aria-hidden="true">LOGO</span><span>第 32 屆國際設計學術研討會<small>2027 CID INTERNATIONAL DESIGN SYMPOSIUM</small></span>`;
const header = `
  <a class="skip-link" href="#main">跳至主要內容</a>
  <header class="site-header ${current === "home" ? "home-header" : ""}"><div class="shell header-inner">
    <a class="wordmark" href="index.html" aria-label="返回首頁">${wordmark}</a>
    <nav class="main-nav" id="main-nav" aria-label="主選單">${navItems}</nav>
    <div class="header-tools">
      <button class="lang-btn" id="lang-toggle" type="button" aria-label="切換語言" aria-pressed="false">${current === "home" ? "EN / 繁中" : "繁中 / EN"}</button>
      <a class="cta-small" href="registration.html" data-zh="報名註冊" data-en="Registration">報名註冊</a>
      <button class="menu-btn" id="menu-toggle" type="button" aria-expanded="false" aria-controls="main-nav">選單</button>
    </div>
  </div></header>`;
const globalFooter = `
  <footer class="site-footer"><div class="shell">
    <div class="footer-top"><div class="footer-brand">
      <div class="wordmark"><span class="mark-placeholder" aria-hidden="true">LOGO</span><span>共生迭代．典範移轉<small>2027 CID 32ND INTERNATIONAL DESIGN SYMPOSIUM</small></span></div>
      <p>2027 中華民國設計學會第 32 屆國際設計學術研討會暨設計工作坊</p>
      <div class="footer-units" aria-label="主辦、協辦與指導單位">
        <div class="footer-unit"><span data-zh="主辦單位" data-en="Organized by">主辦單位</span><img class="footer-org-logo" src="assets/cid-logo.png" alt="中華民國設計學會 Chinese Institute of Design"></div>
        <div class="footer-unit"><span data-zh="協辦單位" data-en="Co-organized by">協辦單位</span><strong data-zh="臺北科技大學設計學院" data-en="College of Design, Taipei Tech">臺北科技大學設計學院</strong><small>College of Design, Taipei Tech</small></div>
        <div class="footer-unit"><span data-zh="指導單位" data-en="Supervised by">指導單位</span><strong data-zh="國家科學及技術委員會" data-en="National Science and Technology Council">國家科學及技術委員會</strong><small>National Science and Technology Council</small></div>
      </div>
    </div><nav class="footer-links" aria-label="頁尾導覽">
      <a href="call-for-papers.html" data-zh="徵稿資訊" data-en="Call for Papers">徵稿資訊</a><a href="program.html" data-zh="大會議程" data-en="Program">大會議程</a><a href="venue.html" data-zh="無障礙資訊" data-en="Accessibility">無障礙資訊</a><a href="registration.html" data-zh="聯絡與報名" data-en="Contact & Registration">聯絡與報名</a><a href="#" data-notice="歷屆研討會連結待提供。" data-zh="歷屆研討會" data-en="Past Symposia">歷屆研討會</a><a href="#" data-notice="純文字導覽指引將於正式版補上。" data-zh="純文字導覽指引" data-en="Text Navigation Guide">純文字導覽指引</a>
    </nav></div>
    <div class="footer-bottom"><span>© 2027 CID 32nd International Design Symposium</span><span>此為網站原型｜識別、圖片、聯絡方式與外部連結待確認</span></div>
    </div></footer>`;
const homeFooter = `
  <footer class="site-footer home-site-footer"><div class="shell">
    <div class="home-footer-units" aria-label="大會相關單位">
      <div class="home-footer-unit"><small class="home-footer-label" data-zh="主辦單位" data-en="Organizer">主辦單位</small><div class="home-footer-body home-footer-organizer"><img class="home-footer-org-logo" src="assets/cid-logo.png" alt="中華民國設計學會 Chinese Institute of Design"></div></div>
      <div class="home-footer-unit"><small class="home-footer-label" data-zh="協辦單位" data-en="Co-organized by">協辦單位</small><div class="home-footer-body home-footer-body-co"><img class="home-footer-ntut-logo" src="assets/ntut-logo.png" alt="國立臺北科技大學 National Taipei University of Technology"><span class="home-footer-unit-divider" aria-hidden="true"></span><span class="home-footer-mark" role="img" aria-label="設計學院 Logo 圖片待補">學院 Logo<br>圖片待補</span></div></div>
      <div class="home-footer-unit"><small class="home-footer-label" data-zh="指導單位" data-en="Supervised by">指導單位</small><div class="home-footer-body"><span class="home-footer-mark" role="img" aria-label="指導單位 Logo 圖片待補">LOGO<br>圖片待補</span></div></div>
    </div>
    <div class="home-footer-meta">
      <p class="home-footer-copyright" data-zh="2027© CID2027 中華民國設計學會第 32 屆學術研究成果研討會－臺北科技大學設計學系 | All Rights Reserved" data-en="2027© CID2027 Chinese Institute of Design 32nd Academic Research Symposium – Department of Design, National Taipei University of Technology | All Rights Reserved">2027© CID2027 中華民國設計學會第 32 屆學術研究成果研討會－臺北科技大學設計學系 | All Rights Reserved</p>
      <p class="home-footer-contact"><span data-zh="聯絡方式：" data-en="Contact: ">聯絡方式：</span><a href="mailto:cid20270522@gmail.com">cid20270522@gmail.com</a></p>
    </div>
  </div></footer>`;
document.querySelector("#site-header").innerHTML = header;
document.querySelector("#site-footer").innerHTML = current === "home" ? homeFooter : globalFooter;
const linkIsAvailable = (link) => {
  const href = link.getAttribute("href")?.trim() || "";
  return /^mailto:/i.test(href)
    || link.classList.contains("skip-link")
    || /^#[A-Za-z][\w:.-]*$/.test(href)
    || href === "/"
    || /^(?:\.\/)?index\.html(?:[?#].*)?$/i.test(href);
};
document.querySelectorAll("a[href]").forEach((link) => {
  if (linkIsAvailable(link)) return;
  link.dataset.disabledHref = link.getAttribute("href");
  link.removeAttribute("href");
  link.classList.add("link-disabled");
  link.setAttribute("role", "link");
  link.setAttribute("aria-disabled", "true");
  link.setAttribute("tabindex", "0");
  link.title = link.title || "此連結目前暫停使用";
  link.addEventListener("click", (event) => event.preventDefault());
  link.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") event.preventDefault();
  });
});
const toast = document.querySelector("#toast");
let toastTimer;
function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 3200);
}
document.querySelectorAll("[data-notice]").forEach((el) => {
  if (el.classList.contains("link-disabled")) return;
  el.addEventListener("click", (event) => {
    event.preventDefault();
    showToast(el.dataset.notice);
  });
});
const menuButton = document.querySelector("#menu-toggle");
menuButton.addEventListener("click", () => {
  const nav = document.querySelector("#main-nav");
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.textContent = isOpen ? "關閉" : "選單";
});
document.querySelectorAll("#main-nav a").forEach((link) => link.addEventListener("click", () => {
  document.querySelector("#main-nav").classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.textContent = "選單";
}));
document.querySelector("#lang-toggle").addEventListener("click", (event) => {
  const active = document.body.classList.toggle("english");
  event.currentTarget.setAttribute("aria-pressed", String(active));
  document.querySelectorAll("[data-zh][data-en]").forEach((el) => {
    el.textContent = active ? el.dataset.en : el.dataset.zh;
  });
  showToast(active ? "English preview; some prototype labels may remain in Chinese." : "已切換為繁體中文預覽。英文資料依新內容整理。");
});
