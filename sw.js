/* 临床试验带教导师 · Service Worker
   策略：HTML 页面 network-first（保证题目更新后用户能拿到新版），
   失败时回退缓存（离线可答题）；其他同源 GET 资源 stale-while-revalidate。 */
const CACHE = "ctm-v5";
const PRECACHE = [
  "./",
  "quiz/",
  "quiz/index.html",
  "quiz/quiz.html",
  "quiz/quiz_gcp.html",
  "web-mentor/index.html",
  "manifest.json",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "icons/apple-touch-icon.png"
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    // cache:"reload" 绕过浏览器 HTTP 缓存（GitHub Pages max-age=600），确保预缓存拿到最新文件
    caches.open(CACHE).then((c) => c.addAll(PRECACHE.map((u) => new Request(u, {cache: "reload"})))).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;

  const url = new URL(req.url);
  if (url.origin !== location.origin) return;

  // 页面：网络优先（cache:"no-cache" 绕过 HTTP 缓存的 10 分钟新鲜期），离线回退缓存
  if (req.mode === "navigate" || (req.headers.get("accept") || "").includes("text/html")) {
    e.respondWith(
      fetch(req, {cache: "no-cache"})
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(req, copy));
          return res;
        })
        .catch(() => caches.match(req).then((hit) => hit || caches.match("quiz/index.html")))
    );
    return;
  }

  // 静态资源：先缓存，后台更新
  e.respondWith(
    caches.match(req).then((hit) => {
      const fetching = fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(req, copy));
          return res;
        })
        .catch(() => hit);
      return hit || fetching;
    })
  );
});
