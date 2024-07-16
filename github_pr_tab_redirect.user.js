// ==UserScript==
// @name         GitHub PR Tab Redirect
// @match        https://github.com/*
// @version      1.0
// @author       celynw
// @description  Redirect to unfiltered PR list when clicking PR tab on GitHub
// @namespace    https://github.com/celynw/userscripts
// @homepageURL  https://github.com/celynw/userscripts
// @supportURL   https://github.com/celynw/userscripts/issues
// @updateURL    https://github.com/celynw/userscripts/raw/master/github_pr_tab_redirect.user.js
// @downloadURL  https://github.com/celynw/userscripts/raw/master/github_pr_tab_redirect.user.js
// ==/UserScript==


(function() {
    'use strict';

    // Function to modify the PR tab link
    function modifyPRTabLink() {
        const prTab = document.getElementById('pull-requests-tab');
        if (prTab) {
            const originalHref = prTab.getAttribute('href');
            if (originalHref && !originalHref.includes('?q=is%3Apr')) {
                prTab.setAttribute('href', originalHref + '?q=is%3Apr');
            }
        }
    }

    // Run the function initially
    modifyPRTabLink();

    // Create a MutationObserver to watch for changes in the DOM
    const observer = new MutationObserver(modifyPRTabLink);

    // Start observing the document with the configured parameters
    observer.observe(document.body, { childList: true, subtree: true });
})();
