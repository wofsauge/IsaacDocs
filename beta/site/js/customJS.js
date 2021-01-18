$(document).ready(function() {
    $(".md-search").append("<img onclick=\"toggleDarkMode()\" src=\"https://raw.githubusercontent.com/wofsauge/IsaacDocs/master/images/darkMode.png\" title=\"Toggle Darkmode\" class=\"darkmodeButton\" width=\"25\" height=\"25\" alt=\"darkmode\" />");

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
            var lastVisitEntry = getRecentList()[index];
            if (lastVisitEntry !== undefined) {
                $(this).attr("href", lastVisitEntry);
                var linkName = lastVisitEntry.substring(1, lastVisitEntry.length - 1);
                $(this).text(linkName);
            } else {
                $(this).parent().hide();
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
    $("div.md-footer-nav").find("a[href*='PLACEHOLDER']").first().hide();

    // Make tables sortable
    document.querySelectorAll("article table").forEach(function(table) {
        new Tablesort(table)
    })

    // handle Copy Buttons
    $(".copyable").append('<button class="md-clipboard copyButton md-icon"><span>Copy to clipboard</span></button>');

    $(".copyButton").click(function() {
        var parent = $(this).parent();
        $(this).find("span").first().text("");

        var pathname = window.location.pathname;
        pathname = pathname.substring(1, pathname.length - 1);
        var splitted = pathname.split("/");
        pathname = splitted[splitted.length - 1];
        var funcNameLine = "";
        parent.each(function(index) {
            funcNameLine = $(this).text();
        });
        var functionString = funcNameLine;
        if (funcNameLine.includes("(")) {
            functionString = funcNameLine.replace(" ( ", "(").replace(" )", "").replace(")", "");
            var funcPart1 = functionString.split("(")[0].split(" ");
            var p1 = funcPart1[funcPart1.length - 1];
            var funcPart2 = "";
            $.each(functionString.split("(")[1].split(", "), function(index, value) {
                if (index > 0) {
                    funcPart2 += ", ";
                }
                if (value.split(" ").length > 1) {
                    funcPart2 += value.split(" ")[1];
                }
            });
            functionString = p1 + "(" + funcPart2 + ")";
        } else {
            functionString = functionString.split(" ")[functionString.split(" ").length - 1]
        }

        var connector = ".";
        if (funcNameLine.includes("(") && !pathname.includes("Isaac")) {
            connector = ":";
        }
        if (!window.location.pathname.includes("enums") && !pathname.includes("Isaac")) {
            pathname = "";
        }

        var copyText = pathname + connector + functionString;

        copyText = copyText.replace("Copy to clipboard", "");
        parent.append('<textarea>' + copyText + '</textarea>');
        parent.find("textarea").each(function(index) {
            $(this).select();
            document.execCommand("copy");
            $(this).remove();
        });
        $(this).find("span").first().text("Copied: \n" + copyText);
    });

    $(".copyButton").mouseleave(function() {
        $(this).find("span").first().text("Copy to clipboard");
    });
});