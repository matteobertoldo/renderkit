/**
 * @test "default" properties used in stylesheet
 * @return: true || false
 * @param: {Object}
 * @require: {Modernizr}
 * @description: _underscore renaming hack to load the script first of all (highly recommended)
 * @author: mbertoldo@alpenite.com
 */

(function() {
    var baseProp = {
        csscalc: Modernizr.csscalc,
        csstransitions: Modernizr.csstransitions,
        flexbox: Modernizr.flexbox,
        hashchange: Modernizr.hashchange
    },
    outdatedProp = false;

    function createOutdated() {
        var outdated = document.createElement('div'),
        h6 = document.createElement('h6'),
        p = document.createElement('p'),
        a = document.createElement('a'),
        closeBtn = document.createElement('div'),
        h6Txt = document.createTextNode('ops...your browser is out-of-date!'),
        pTxt = document.createTextNode('update your browser to view this website correctly'),
        aTxt = document.createTextNode('update'),
        closeBtnTxt = document.createTextNode('\xD7');

        outdated.setAttribute('id', 'outdated');
        outdated.style.fontSize = '13px';
        a.setAttribute('href', 'http://outdatedbrowser.com/en');
        a.setAttribute('target', '_blank');
        closeBtn.setAttribute('id', 'close-outdated');
        h6.appendChild(h6Txt);
        h6.style.fontSize = '18px';
        p.appendChild(pTxt);
        a.appendChild(aTxt);
        closeBtn.appendChild(closeBtnTxt);
        closeBtn.style.fontSize = '28px';
        outdated.appendChild(h6);
        outdated.appendChild(p);
        outdated.appendChild(a);
        outdated.appendChild(closeBtn);
        document.body.appendChild(outdated);

        var hideOutdated = function() {
            outdated.style.display = 'none';
        };

        if (closeBtn.addEventListener) {
            closeBtn.addEventListener('click', hideOutdated);
        } else {
            closeBtn.attachEvent('onclick', hideOutdated);
        }
    }

    for (var prop in baseProp) {
        if (baseProp[prop] === false) {
            outdatedProp = true;
        }
    }

    if(outdatedProp) {
        createOutdated();
    }
})();
