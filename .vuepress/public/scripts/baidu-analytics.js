(() => {
    var _hmt = _hmt || [];

    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?ffc686514833ae8bf9e0560896cbbd44";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);

    _hmt.push("_requirePlugin", "UrlChangeTracker", {
        shouldTrackUrlChange: function (newPath, oldPath) {
            return newPath && oldPath;
        }
    });
})();
