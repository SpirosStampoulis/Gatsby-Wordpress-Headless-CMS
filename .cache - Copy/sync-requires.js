const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/mnt/e/Udemy/gatsby-horseracingbettingusa/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/mnt/e/Udemy/gatsby-horseracingbettingusa/src/pages/404.js"))),
  "component---src-templates-archive-js": hot(preferDefault(require("/mnt/e/Udemy/gatsby-horseracingbettingusa/src/templates/archive.js"))),
  "component---src-templates-types-page-js": hot(preferDefault(require("/mnt/e/Udemy/gatsby-horseracingbettingusa/src/templates/types/page.js"))),
  "component---src-templates-types-post-js": hot(preferDefault(require("/mnt/e/Udemy/gatsby-horseracingbettingusa/src/templates/types/post.js")))
}

