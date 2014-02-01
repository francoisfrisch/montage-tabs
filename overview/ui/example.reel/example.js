var Component = require("montage/ui/component").Component;

exports.Example = Component.specialize({

    constructor: {
        value: function Example() {
            this.super();
        }
    },

    tabTitleforKey: {
        value: function(key) {
            if(key === "tabAlpha") {
                return "The alpha tab";
            } else if (key === "tabBeta") {
                return "The beta tab";
            }
        }
    }

});
