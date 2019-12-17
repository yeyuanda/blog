const { headConf, mdConf, themeConf } = require("./config/");

module.exports = {
    lang: "zh-CN",
    title: "JOJO的奇妙笔记",
    description: "专注前端方向与可视化领域的博客",
    base: '/blog/', // 这是部署到github相关的配置
    head: headConf,
    markdown: mdConf,
    themeConfig: themeConf,
    plugins: [
        require("./plugins/my-router"),
        require("./plugins/my-loader"),
        require("vuepress-plugin-viewer"),
        "@vuepress/back-to-top",
        "@vuepress/active-header-links",
        // ["@vuepress/google-analytics", { ga: "UA-124601890-1" }],
        [
            "@vuepress/pwa",
            {
                serviceWorker: true,
                updatePopup: {
                    message: "发现页面有新内容",
                    buttonText: "刷新"
                }
            }
        ],
        [
            "vuepress-plugin-comment",
            {
                choosen: "gitalk",
                options: {
                    clientID: "9ec245bc0f06bddfdb3e",
                    clientSecret: '0897b3baf3619a9cd6abefb6d5dcbecfe3a423d6',
                    repo: "blog",
                    owner: "yeyuanda",
                    admin: ["yeyuanda"],
                    id: "<%- frontmatter.commentid || frontmatter.permalink %>", // Ensure uniqueness and length less than 50
                    distractionFreeMode: false, // Facebook-like distraction free mode
                    labels: ["Gitalk", "Comment"],
                    title: "「评论」<%- frontmatter.title %>",
                    body:
                        "<%- frontmatter.title %>：<%- window.location.origin %><%- frontmatter.to.path || window.location.pathname %>"
                }
            }
        ]
    ]
};