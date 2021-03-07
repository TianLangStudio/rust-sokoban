function addCodeLinkClass() {
    var elements = document.getElementsByTagName("blockquote");
    for (var i = 0; i < elements.length; i += 1) {
        var element = elements.item(i);
        if (element.innerHTML.includes("CODELINK")) {
            element.className = "code-link";
        }
    }
}

addCodeLinkClass();
var _hmt = _hmt || [];
(function() {
              var hm = document.createElement("script");
              hm.src = "https://hm.baidu.com/hm.js?5a990c2b8047428b734d3a86ee9e881f";
              var s = document.getElementsByTagName("script")[0];
              s.parentNode.insertBefore(hm, s);
})();

