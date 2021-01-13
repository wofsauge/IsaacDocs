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


function reevaluateLastVisit() {
    if (typeof(Storage) !== "undefined") {
        $(".md-nav[aria-label=\"Last visited\"]").find("a").each(function(index) {
            console.log("Test" + index);
            var lastVisitEntry = getRecentList()[index];
            if (lastVisitEntry !== null) {
                $(this).attr("href", lastVisitEntry);
                var linkName = lastVisitEntry.substring(1, lastVisitEntry.length - 1);
                $(this).text(linkName);
            } else {
                $(this).hide();
            }
        });

    } else {
        $(".md-nav[aria-label=\"Last visited\"]").parent().hide();
    }
}

function getRecentList() {
    var recentList = localStorage.getItem("recentlyVisited");
    if (recentList == null) {
        recentList = [];
    } else {
        recentList = recentList.split(',');
    }
    return recentList;
}

app.document$.subscribe(function() {
    console.log("SUB");
    if (typeof(Storage) !== "undefined") {
        if (localStorage.getItem("darkMode") == 1) {
            $("body").addClass("darkMode");
        }

        // handle recently visited
        var recentList = getRecentList();

        var pathname = window.location.pathname;
        if (pathname !== "/") {
            const index = recentList.indexOf(pathname);
            if (index > -1) {
                recentList.splice(index, 1);
            }
            recentList.unshift(pathname);
            recentList.splice(10, 1);
            localStorage.setItem("recentlyVisited", recentList.toString());
        }
    }
    // handle badge line object
    $(".badge").parent().addClass("badgeLine");

    // handle frequently used Entry
    $("nav[aria-label=\"Frequently used\"]").parent().addClass("frequentlyUsed");

    $(".md-nav[aria-label=\"Last visited\"]").siblings().click(function() {
        reevaluateLastVisit();
    });
});