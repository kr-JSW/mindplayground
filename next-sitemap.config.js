/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_URL,
  generateRobotsTxt: true,
  sitemapSize: 5000, // sitemap별 최대 크기 (최대 크기가 넘어갈 경우 복수개의 sitemap으로 분리됨)
  changefreq: "daily",
  priority: 1,
  exclude: ["/exclude/review", "/exclude/**"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/exclude"],
      },
    ],
  },
};
