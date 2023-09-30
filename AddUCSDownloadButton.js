// ==UserScript==
// @name         Add UCS download button
// @namespace    http://ucs.piugame.com/
// @version      0.1
// @description  Adds download button on UCS site
// @author       Conjo
// @match        https://ucs.piugame.com/ucs_share?wr_id=*
// @match        https://ucs.piugame.com/bbs/board.php?bo_table=ucs_share&wr_id=*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function addDownloadButton() {
        const buttons = document.querySelector(".btn_wrap > div:nth-child(1)");
        const downloadButton = buttons.children[1].cloneNode(true);
        const downloadURL = new URL("https://ucs.piugame.com/ucs_player/file.php");
        const qstrings = new URLSearchParams(window.location.search)

        downloadURL.search = "wr_id=" + qstrings.get("wr_id") ;
        downloadButton.children[0].href=downloadURL.pathname + downloadURL.search;
        downloadButton.getElementsByClassName("tt")[0].innerHTML = "Download"
        buttons.append(downloadButton);
    }

    addDownloadButton();
})();