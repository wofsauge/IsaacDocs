$(document).ready(function() {
    $(".md-search").append("<img onclick=\"toggleDarkMode()\" src=\"https://raw.githubusercontent.com/wofsauge/IsaacDocs/master/docs/images/darkMode.png\" title=\"Toggle Darkmode\" class=\"darkmodeButton\" width=\"25\" height=\"25\" alt=\"darkmode\" />");
    $("div.md-search-result").prepend("<span class=\"clearSearchMarks\" onclick=\"unmarkStuff()\">Remove current highlights X</span>");

    if (window.location.hash.replace("#", "") != "") {
        jumpToElement($(window.location.hash));
    }
});

function unmarkStuff() {
    $content.unmark();
}

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
                lastVisitEntry = lastVisitEntry.replace("IsaacDocs/", "").replace("rep/", "").replace("abp/", "").replace("docs/", "");
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

function buildContentMap() {
    if (!$("h1").first().text().includes("Class ")) {
        //only build map on class-related pages
        return;
    }
    var mapObj = $("<div class=\"contentMap\"><h2 class=\"overviewHeader\">Content Overview</h2><table class=\"contentTable\" id=\"contentOverviewTable\"><thead><tr><th>Return value</th><th>Function</th></tr></thead><tbody></tbody></table><hr/></div>");
    if ($(".inheritance").length == 0) {
        mapObj.insertAfter($(".md-content__inner").find("h1"));
    } else {
        mapObj.insertAfter($(".md-content__inner").find("p").first());
    }

    var tableContent = "";
    $("h4").each(function(index) {
        //remove anchor links from variable description headers... we dont need them and they suck
        $(this).find("a.headerlink").remove();

        var funcParts = $(this).html().split(" (");
        var funcFront = funcParts[0].split(" ");
        var funcName = funcFront.pop();
        var parentH3Node = $(this).prev();
        while (parentH3Node.prop("tagName") != "H3") {
            parentH3Node = parentH3Node.prev();
        }
        var funcLink = parentH3Node.find("a").last().attr("href");
        funcName = "<a href=\"" + funcLink + "\">" + funcName + "</a>";
        var ariaLabel = $(this).attr("aria-label");
        if (funcParts.length > 1) {
            tableContent = tableContent + "<tr aria-label=\"" + ariaLabel + "\"><td>" + funcFront.join(" ") + "</td><td aria-label=\"" + ariaLabel + "\" class=\"copyable\">" + funcName + " (" + funcParts[1] + "</td></tr>";
        } else {
            tableContent = tableContent + "<tr aria-label=\"" + ariaLabel + "\"><td>" + funcFront.join(" ") + "</td><td aria-label=\"" + ariaLabel + "\" class=\"copyable\">" + funcName + "</td></tr>";
        }
    });

    $('#contentOverviewTable > tbody').append(tableContent);
}

function modifyCallbackPageLayout() {
    if (!window.location.pathname.includes("ModCallbacks")) {
        return;
    }

    var curH3;
    var mcTableData;
    var tableContent = "";
    $("article.md-content__inner").children().each(function(index) {
        if ($(this).get(0).tagName == "H3") {
            if (mcTableData != null && curH3 != null) {
                var headerLink = mcTableData.find("td:eq(2)").text().toLowerCase();
                tableContent = tableContent + "<tr><td class=\"copyable\"><a href=\"#" + headerLink + "\">" + mcTableData.find("td:eq(2)").text() + "</a></td>"
                tableContent = tableContent + "<td>" + mcTableData.find("td:eq(3)").html() + "</td><td>" + mcTableData.find("td:eq(4)").html() + "</td></tr>";
            }
            curH3 = $(this);
        } else if ($(this).get(0).tagName == "DIV") {
            if (curH3 != null) {
                mcTableData = $(this);
            }
        }
    });
    var mapObj = $("<div class=\"contentMap\"><h2 class=\"overviewHeader\">Content Overview</h2><table class=\"contentTable\" id=\"contentOverviewTable\"><thead><tr><th>Name</th><th>Function Args</th><th>Optional Args</th></tr></thead><tbody></tbody></table><hr/></div>");
    mapObj.insertAfter($(".md-content__inner").find("p").first());

    $('#contentOverviewTable > tbody').append(tableContent);
}

document$.subscribe(function() {
    if (typeof(Storage) !== "undefined") {
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
    $(".badge").each(function(table) {
        if ($(this).parent().prop("tagName") == "P") {
            $(this).parent().addClass("badgeLine");
        }
    });

    modifyCallbackPageLayout();
    buildContentMap();
    $(".overviewHeader").click(function() {
        $(this).toggleClass("collapsed");
        $(".contentTable").toggle();
    });

    // handle frequently used Entry
    $("nav[aria-label=\"Frequently used\"]").parent().addClass("frequentlyUsed");

    $(".md-nav[aria-label=\"Last visited\"]").siblings().click(function() {
        reevaluateLastVisit();
    });
    $("div.md-footer-nav").find("a[href*='PLACEHOLDER']").first().hide();

    //moves scroll position on href clicking a bit further up
    $('a[href^="#"]').on('click', function(e) {
        var href = $(this).attr('href');
        jumpToElement(href);
    });

    // Add "jump to top" button into sidebar
    var firstLink = $("a.headerlink").first().attr('href');
    var jumpToEntry = $("<li class=\"md-nav__item\"><a href=\"" + firstLink + "\" class=\"md-nav__link\"> ~~~ Jump to Top ~~~</a></li>");
    $(".md-nav__list[data-md-component=\"toc\"]").prepend(jumpToEntry);

    // Make tables sortable
    document.querySelectorAll("article table").forEach(function(table) {
        new Tablesort(table)
    })

    // Handle Version-selector list
    waitForElementToDisplay(".md-version__list", function() {
        var sourceFolder = "IsaacDocs"
        if (window.location.host.includes("moddingofisaac.com")) {
            sourceFolder = "docs"
        }
        $(".md-version__list").append('<li class="md-version__item"><a href="/' + sourceFolder + '/oldDocs/index.html" class="md-version__link">Original AB+ Docs</a></li>')
    }, 500, 9000);


    // handle Copy Buttons
    $(".copyable").append('<button class="md-clipboard copyButton md-icon"><span>Copy to clipboard</span></button>');

    $(".copyButton").click(function() {
        var parent = $(this).parent();
        $(this).find("span").first().text("");

        var pathname = window.location.pathname;
        pathname = pathname.replace(".html", "").substring(1, pathname.length - 1);
        var splitted = pathname.split("/");
        pathname = splitted[splitted.length - 1];
        var funcNameLine = "";
        parent.each(function(index) {
            funcNameLine = $(this).text();
        });
        var functionString = funcNameLine;
        if (funcNameLine.includes("(")) {
            functionString = funcNameLine.replace(" ( ", "(");
            var funcPart1 = functionString.split("(")[0].split(" ");
            var p1 = funcPart1[funcPart1.length - 1];
            var funcPart2 = "";
            var funcVars = functionString.replace(functionString.split("(")[0], "")
            $.each(funcVars.split(", "), function(index, value) {
                if (index > 0) {
                    funcPart2 += ", ";
                }
                if (value.split(" ").length > 1) {
                    funcPart2 += value.split(" ")[1].replace(" )", "").replace(")", "");
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
        if (parent.attr("aria-label") == "Constructors") {
            connector = "";
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

    //Adds search query string to search result links
    // We use an Element observer, to change the search results AFTER they where placed
    var target = document.querySelector('.md-search-result__list')
    var observer = new MutationObserver(function(mutations) {
        var searchText = $("input[aria-label=\"Search\"]").val();
        $("li.md-search-result__item").find('a').each(function(e) {
            var jumpTargetValue = $(this).attr('href').split("#");
            var jumpTarget = "";
            if (jumpTargetValue.length > 1) {
                jumpTarget = "#" + jumpTargetValue[1];
            }
            var link = $(this).attr('href').split("?")[0].split("#")[0];
            $(this).attr('href', link + "?q=" + searchText + jumpTarget);

            hidePlaceholderChar($(this));
            colorizeSearchResults($(this));
        });
    });
    var config = { attributes: true, childList: true, characterData: true };
    observer.observe(target, config);

    //Hide Placeholder chars everywhere
    $("h3, a.md-nav__link").each(function(e) {
        hidePlaceholderChar($(this));
    })

    mark();
});


// mark.js functionality
var $results;
var $content = $("article");
var mark = function() {
    // Read the url
    var sPageURL = window.location.search;
    if (sPageURL.indexOf("?") !== -1) {

        // Generate an array with all referrer parameters
        var qs = sPageURL.substr(sPageURL.indexOf('?') + 1);
        var qsa = qs.split('&');

        // Get search keywords
        var keyword = "";
        for (var i = 0; i < qsa.length; i++) {
            var currentParam = qsa[i].split('=');
            if (currentParam.length !== 2) {
                continue;
            }
            if (currentParam[0] == "q") {
                keyword = decodeURIComponent(currentParam[1].replace(/\+/g, "%20"));
            }
        }

        if (keyword != "") {
            // Mark the keyword inside the context
            $content.unmark({
                done: function() {
                    $content.mark(keyword, {
                        separateWordSearch: true,
                        done: function() {
                            $results = $content.find("mark");
                            jumpToFirst();
                        }
                    });
                }
            });
        }
    }
};

function jumpToFirst() {
    if ($results.length) {
        var position,
            $current = $results.eq(0);
        if ($current.length) {
            position = $current.offset().top - 75;
            window.scrollTo(0, position);
        }
    }
    if (window.location.hash.replace("#", "") != "") {
        jumpToElement($(window.location.hash));
    }
}

function jumpToElement(element) {
    $('html, body').animate({
        scrollTop: $(element).offset().top - 75
    }, 5);
}

function hidePlaceholderChar(element) {
    element.html(element.html().replaceAll('·', ""));
}

function colorizeSearchResults(element) {
    var text = element.text();
    if (text.includes("Class ")) {
        element.addClass("searchClass");
    } else if (text.includes("Tutorial")) {
        element.addClass("searchTutorial");
    } else if (text.includes("Enum ")) {
        element.addClass("searchEnum");
    } else if (text.includes("File ")) {
        element.addClass("searchFile");
    }
}


function waitForElementToDisplay(selector, callback, checkFrequencyInMs, timeoutInMs) {
    var startTimeInMs = Date.now();
    (function loopSearch() {
        if (document.querySelector(selector) != null) {
            callback();
            return;
        } else {
            setTimeout(function() {
                if (timeoutInMs && Date.now() - startTimeInMs > timeoutInMs)
                    return;
                loopSearch();
            }, checkFrequencyInMs);
        }
    })();
}