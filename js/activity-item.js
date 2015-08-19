define('Activity Log Item', function () {
    var tmpl = document.querySelector('template'),
        ActivityItemProto = Object.create(HTMLDivElement.prototype),
        activityItem, model, constr, ac1;
    
    constr = {
        prototype: ActivityItemProto
    }
        
    Object.defineProperties(constr.prototype, {
        createdCallback: {
            value () {
                var root = this.createShadowRoot();
                root.appendChild(document.importNode(tmpl.content, true));

                root.querySelector('#entry').innerHTML = this.getAttribute('entry');
                root.querySelector('#name').innerHTML = this.getAttribute('name');
                root.querySelector('.dateTime').innerHTML = this.getAttribute('when');
                root.querySelector('.userIcon').textContent = getInitials(this.getAttribute("name"));
            }
        },
        select: {
            value () {
                this.style.border = '2px red solid';
            }
        }
    });
    
    activityItem = document.registerElement('activity-item', constr);

    debugger;
    //Create an example element
    ac1 = document.createElement('activity-item');
    document.querySelector('.activity').appendChild(ac1)

    function getInitials (name) {
        var matches = name.match(/\b(\w)/g);
        return matches.join('');
    }

}());