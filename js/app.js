/* global require: false */
require([
    "backbone",
    "webcomponents"
], function (Backbone) {
    var tmpl = document.querySelector('template'),
        ActivityItemProto = Object.create(HTMLDivElement.prototype),
        activityItem, model, collection, constr, i;
    
    constr = {
        prototype: ActivityItemProto
    }
   
    Object.defineProperties(constr.prototype, {
        attachedCallback: {
            value () {
                var root = this.createShadowRoot();
                root.appendChild(document.importNode(tmpl.content, true));
                root.querySelector('#entry').innerHTML = this.getAttribute('entry');
                root.querySelector('#name').innerHTML = this.getAttribute('name');
                root.querySelector('.dateTime').innerHTML = this.getAttribute('when');
                root.querySelector('.userIcon').textContent = getInitials(this.getAttribute("name"));
            }
        }
    });

    activityItem = document.registerElement('activity-item', constr);
    
    //Build a fake collection and add some models to it.  Fake "Activity Item" models
    collection = new Backbone.Collection([]);
    for (i = 1 ; i < 25 ; i++)  {
        model = new Backbone.Model({
            name: "Greg Young",
            entry: "Decision Made for asset 'Gregs Asset " + i + ": Approved",
            when: "A day ago",
        });
        collection.add(model);
    }

    collection.models.map(function (model) {
        createActivityEntry('activity-item', model.attributes);
    });
    

    createActivityEntry('activity-item', model.attributes);

    function createActivityEntry (element, attributes) {
        var item = new activityItem();

        for (var key in attributes) {
            var a = document.createAttribute(key);
            a.value = attributes[key];
            item.setAttributeNode(a);
        };

        document.querySelector('.activity').appendChild(item) 
    }

    function getInitials (name) {
        var matches = name.match(/\b(\w)/g);
        return matches.join('');
    }
});





