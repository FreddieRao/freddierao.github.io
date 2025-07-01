// Navigation function
function navigate(location, isExternal = false) {
    if (isExternal) {
        window.open(location, '_blank');
        return;
    }

    // If the target id exists on the current page, simply update the hash.
    if (document.getElementById(location)) {
        window.location.hash = location;
    } else {
        // Fallback to the homepage with the section hash
        window.location.href = './index.html#' + location;
    }
}

// Your other JavaScript code...
