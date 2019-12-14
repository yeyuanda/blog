const sidebar = require("./sidebar-auto.js");

module.exports = {
    repo: "yeyuanda/blog",
    navbar: true,
    editLinks: true,
    editLinkText: "在 GitHub 上编辑此页",
    lastUpdated: "更新于",
    sidebar,
    nav: [
        {
            text: "最新",
            link: "/guide/"
        },
        // 每周分享
        {
            text: "每周分享",
            items: [
                { text: "2019", link: "/passages/2019-03-15-weekly-share-3/" }
            ]
        }
    ]
};
