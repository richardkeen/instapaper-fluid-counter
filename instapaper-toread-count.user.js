// ==UserScript==
// @name        Instapaper "to read" count
// @namespace   http://richardkeen.net
// @description Adds a dock batch with the number of "to read" articles
// @include     http://www.instapaper.com/u
// @author      Richard keen (http://richardkeen.net)
// ==/UserScript==

(function () {
    if (window.fluid) {
        nodes = document.getElementsByClassName("tableViewCell");
        window.fluid.dockBadge = nodes.length;

        contentdiv = document.getElementById('content');
        content.addEventListener('click', function(e) {
            if (e.target.className == 'tableViewCellTitleLink' ||
                  e.target.className == 'deleteButton' ||
                  e.target.className == 'textButton') {
                window.fluid.dockBadge = window.fluid.dockBadge - 1;
            }
        }, false);
    }
})();