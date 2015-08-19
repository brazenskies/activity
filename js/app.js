/* global require: false */
require([
    "backbone",
    "webcomponents"
], function (Backbone) {
    var tmpl = document.querySelector('template'),
        ActivityItemProto = Object.create(HTMLDivElement.prototype),
        activityItem, model, collection, constr, i, api;



    /*************************************************************/
    /*** Define the custom element, its properties and methods ***/
    /*** Register the new element in the document              ***/
    /*************************************************************/
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
        },
        attributeChangedCallback: {
            value (attrName, oldVal, newVal) {
                if (oldVal) {
                    this.shadowRoot.querySelector("#"+attrName).innerHTML = newVal;
                }
            }
        }
    });

    activityItem = document.registerElement('activity-item', constr);



    /*************************************************************/
    /*** To demonstrate how this could work in a backbone app  ***/
    /*** build a dummy collection and add some models to it    ***/
    /*************************************************************/
    collection = new Backbone.Collection([]);
    for (i = 1 ; i < 7 ; i++)  {
        model = new Backbone.Model({
            name: "Greg Young",
            entry: "Decision Made for asset 'Gregs Asset " + i + ": Approved",
            when: "A day ago",
        });
        collection.add(model);
    }



    /*************************************************************/
    /*** To render an activity row for each model in the       ***/
    /*** simply instantiate a new activity item passing the    ***/
    /*** custom element type and model                         ***/
    /*************************************************************/
    collection.models.map(function (model) {
        createActivityEntry(model);
    });



    /**
     * Creates a new activity entry (row) and renders its contents
     * @param {Backbone.Model} model - The Backbone model we wish to render
     */
    function createActivityEntry (model) {
        var item = new activityItem(),
            key, attribute;

        for (key in model.attributes) {
            attribute = document.createAttribute(key);
            attribute.value = model.attributes[key];
            item.setAttributeNode(attribute);
        };

        document.querySelector('.activity').appendChild(item);
    }

    /**
     * Gets the users initials to display in the userIcon
     * @param {String} name - username from the supplied model
     * @returns {String} - user's initials parsed from the username
     */
    function getInitials (name) {
        var matches = name.match(/\b(\w)/g);
        return matches.join('');
    }

    /**
     * Function to simulate updating of attributes
     */
    window.setAttr = function () {
        var elements = document.querySelectorAll("activity-item"),
            array = Array.prototype.slice.call(elements);

        array.forEach(function (element) {
            element.setAttribute('name', Math.random().toString(36).substring(5));
        });
    };
});





