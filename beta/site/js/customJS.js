$(document).ready(function() {
    $(".md-search").append("<img onclick=\"toggleDarkMode()\" src=\"images/darkMode.png\" title=\"Toggle Darkmode\" class=\"darkmodeButton\" width=\"25\" height=\"25\" alt=\"darkmode\" />");
});

function toggleDarkMode() {
    if (typeof(Storage) !== "undefined") {
        var darkModeState = localStorage.getItem("darkMode");
        if (darkModeState == null || darkModeState == 0) {
            darkModeState = 1;
            $("body").addClass("darkMode");
        } else {
            darkModeState = 0;
            $("body").removeClass("darkMode");
        }
        localStorage.setItem("darkMode", darkModeState);
    } else {
        $("body").toggleClass("darkMode");
    }
}

app.document$.subscribe(function() {
    if (typeof(Storage) !== "undefined") {
        if (localStorage.getItem("darkMode") == 1) {
            $("body").addClass("darkMode");
        }

        // handle recently visited
        var recentList = localStorage.getItem("recentlyVisited");
        if (recentList == null) {
            recentList = [];
        } else {
            recentList = recentList.split(',');
        }
        var pathname = window.location.pathname;

        const index = recentList.indexOf(pathname);
        if (index > -1) {
            recentList.splice(index, 1);
        }
        recentList.unshift(pathname);
        recentList.splice(10, 1);
        localStorage.setItem("recentlyVisited", recentList.toString());
    }

    // handle badge line object
    $(".badge").parent().addClass("badgeLine");
});