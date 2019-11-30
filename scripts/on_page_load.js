'use strict';

// actually do stuff
addLoadEvent(displayLastModified);
addLoadEvent(setUpCollapsibles);
addLoadEvent(setUpLazyLoading);
addLoadEvent(bringNavBarToFront);

// sources:
// https://css-tricks.com/the-complete-guide-to-lazy-loading-images/
// https://developers.google.com/web/fundamentals/performance/lazy-loading-guidance/images-and-video/
function lazyLoad() {
    if ('IntersectionObserver' in window) {
        let lazyObjects = document.querySelectorAll('.lazy');

        let lazyObjectObserver = new IntersectionObserver(
            // callback
            function (entries) {
                entries.forEach(
                    function (entry) {
                        if (entry.isIntersecting) {
                            let lazyObject = entry.target;

                            lazyObject.src = lazyObject.dataset.src;
                            // lazyObject.srcset = lazyObject.dataset.srcset;

                            lazyObject.classList.remove('lazy');
                            lazyObjectObserver.unobserve(lazyObject);
                        }
                    }
                );
            }
        );

        lazyObjects.forEach(
            function (lazyObject) {
                lazyObjectObserver.observe(lazyObject);
            }
        );
    }
    else // browser does not support IntersectionObserver
    {
        window.alert("This browser does not support lazy loading.\nImages may not load properly");

        lazyObjects.forEach(
            function (lazyObject) {
                lazyObject.src = lazyObject.dataset.src;
                lazyObject.srcset = lazyObject.dataset.srcset;
            }
        );
    }
}


function setUpLazyLoading() {
    // https://stackoverflow.com/a/39993724/9171260
    if (document.readyState !== 'loading') {
        lazyLoad(); // DOMContentLoaded may be fired already
    }
    else {
        document.addEventListener(
            'DOMContentLoaded', 
            lazyLoad()
        );
    }
}

// https://www.w3schools.com/howto/howto_js_collapsible.asp
function setUpCollapsibles() {
    let collapsibles = document.getElementsByClassName("collapsible");

    for (let i = 0; i < collapsibles.length; ++i) 
    {
        collapsibles[i].addEventListener(
            "click", 
            function() {
                this.classList.toggle("collapsible-active");
                let content = this.nextElementSibling;
                
                if (content.style.maxHeight) {
                    content.style.maxHeight = null;
                } 
                else {
                    content.style.maxHeight = content.scrollHeight + "px";
                } 
            }
        );
    }
}

function displayLastModified() {
    let date = new Date(document.lastModified);

    document.getElementById('last_modified').innerHTML = date.toLocaleDateString();
}

// https://www.htmlgoodies.com/beyond/javascript/article.php/3724571/Using-Multiple-JavaScript-Onload-Functions.htm
function addLoadEvent(onLoadEvent) {
    let oldOnload = window.onload;

    if (typeof oldOnload != 'function') {
        window.onload = onLoadEvent;
    } 
    else {
        window.onload = function() {
            if (oldOnload) {
                oldOnload();
            }

            onLoadEvent();
        }
    }
}


// https://stackoverflow.com/questions/4012112/how-to-bring-the-selected-div-on-top-of-all-other-divs
function bringNavBarToFront() {
    let navbar = document.getElementsByClassName('navbar')[0];
    navbar.style.zIndex = 1;
    
    let allDivs = document.getElementsByTagName('div');

    for (let index = 0; index < allDivs.length; ++index) {
        if (allDivs[index].style.zIndex > navbar.style.zIndex) {
            navbar.style.zIndex = allDivs[index].style.zIndex + 1;
        }
    }
}