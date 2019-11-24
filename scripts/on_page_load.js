'use strict';

// sources:
// https://css-tricks.com/the-complete-guide-to-lazy-loading-images/
// https://developers.google.com/web/fundamentals/performance/lazy-loading-guidance/images-and-video/
function setUpLazyLoading() {
    document.addEventListener(
        'DOMContentLoaded', 
        function () {
            if ('IntersectionObserver' in window) {
                let lazyObjects = document.querySelectorAll('.lazy');
                console.log(lazyObjects);

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
    );
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

addLoadEvent(displayLastModified);
addLoadEvent(setUpCollapsibles);
addLoadEvent(setUpLazyLoading);
