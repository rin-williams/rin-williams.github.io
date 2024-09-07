function typeWrite(elementId, text, speed) {
    var i = 0;
    var txt = text;
    var isDeleting = false;
    var cursorVisible = true;
    var cursorChar = "_";
    var zeroWidthSpace = "\u200B";


    function getRandomDelay() {
        return Math.random() * (300); // Random delay between 0ms and 300ms
    }

    function typeWriter() {
        if (i < txt.length) {
            document.getElementById(elementId).innerHTML = txt.substring(0, i + 1) + (cursorVisible ? cursorChar : zeroWidthSpace);
            i++;
            setTimeout(typeWriter, getRandomDelay());
        } else {
            setTimeout(deleteText, 2000); // Wait 2 seconds before deleting
        }
    }

    function deleteText() {
        if (i > 0) {
            document.getElementById(elementId).innerHTML = txt.substring(0, i - 1) + (cursorVisible ? cursorChar : zeroWidthSpace);
            i--;
            setTimeout(deleteText, speed); // Linear speed for deletion
        } else {
            setTimeout(typeWriter, 1000); // Wait 1 second before starting over
        }
    }

    function toggleCursor() {
        cursorVisible = !cursorVisible;
        if (i < txt.length) {
            document.getElementById(elementId).innerHTML = txt.substring(0, i) + (cursorVisible ? cursorChar : zeroWidthSpace);
        } else {
            document.getElementById(elementId).innerHTML = txt + (cursorVisible ? cursorChar : zeroWidthSpace);
        }
        setTimeout(toggleCursor, 500); // Toggle cursor every 500ms
    }

    typeWriter();
    toggleCursor();
}

function typeWriteReverse(elementId, text, speed) {
    var i = text.length;
    var txt = text;
    var cursorVisible = true;
    var cursorChar = "_";
    var zeroWidthSpace = "\u200B";

    function getRandomDelay() {
        return Math.random() * (300); // Random delay between 0ms and 300ms
    }

    function typeWriter() {
        if (i > 0) {
            document.getElementById(elementId).innerHTML = (cursorVisible ? cursorChar : zeroWidthSpace) + txt.substring(i - 1);
            i--;
            setTimeout(typeWriter, getRandomDelay());
        } else {
            setTimeout(deleteText, 2000); // Wait 2 seconds before deleting
        }
    }

    function deleteText() {
        if (i < txt.length) {
            document.getElementById(elementId).innerHTML = (cursorVisible ? cursorChar : zeroWidthSpace) + txt.substring(i);
            i++;
            setTimeout(deleteText, speed); // Linear speed for deletion
        } else {
            setTimeout(typeWriter, 1000); // Wait 1 second before starting over
        }
    }

    function toggleCursor() {
        cursorVisible = !cursorVisible;
        if (i > 0) {
            document.getElementById(elementId).innerHTML = (cursorVisible ? cursorChar : zeroWidthSpace) + txt.substring(i);
        } else {
            document.getElementById(elementId).innerHTML = (cursorVisible ? cursorChar : zeroWidthSpace) + txt;
        }
        setTimeout(toggleCursor, 500); // Toggle cursor every 500ms
    }

    typeWriter();
    toggleCursor();
}

typeWrite("portfolio-coding-title", "Coding", 100);
typeWrite("portfolio-coding-text", "Java & JavaScript, Python, HTML, CSS, SQL, and more.", 100);
typeWrite("project-title-1", "1 // Advanced Time-based Scripting & Automation.", 100);
typeWriteReverse("project-title-2", "2 // Web Development.", 100);
typeWrite("project-title-3", "3 // Data Analysis & Visualization", 100);
