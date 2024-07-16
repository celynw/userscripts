// ==UserScript==
// @name        Chocolatey Command Formatter
// @namespace   Violentmonkey Scripts
// @match       *://community.chocolatey.org/packages*
// @grant       none
// @version     1.0
// @author      celynw
// @description Formats Chocolatey install command for running from WSL
// ==/UserScript==

(function() {
    'use strict';

	// Get the input element containing the install command
	var inputElements = document.querySelectorAll('.user-select-all');

    // Iterate over each element
    inputElements.forEach(function(inputElement) {
        // Check if the element is an input
        if (inputElement.tagName === 'INPUT') {
            // Get the current install command value
            var installCommand = inputElement.value;

            // Modify the format as needed
            var modifiedCommand = installCommand.replace('choco install ', 'choco.exe install -yr ');

            // Update the input element with the modified command
            inputElement.value = modifiedCommand;
        }
    });
})();
