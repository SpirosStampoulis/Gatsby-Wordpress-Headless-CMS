// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("./../../dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("./../../../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-templates-archive-js": () => import("./../../../src/templates/archive.js" /* webpackChunkName: "component---src-templates-archive-js" */),
  "component---src-templates-types-page-js": () => import("./../../../src/templates/types/page.js" /* webpackChunkName: "component---src-templates-types-page-js" */),
  "component---src-templates-types-post-js": () => import("./../../../src/templates/types/post.js" /* webpackChunkName: "component---src-templates-types-post-js" */)
}

