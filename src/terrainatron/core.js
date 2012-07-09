
if (typeof (Terrainatron) === 'undefined') {
    Terrainatron = {};
}

jQuery.extend(Terrainatron, {
    table : function (elem, options) {
        this._element = elem;
        this._options = options;
        
        // Initialise the table instance
        this.init();
    }
});

jQuery.fn.terrainatron = function (options) {
    options = jQuery.extend({
        canvasHtml: String() +
            '<canvas class="tat_canvas">' +
                'Your browser does not support HTML5 Canvas.' +
            '</canvas>',
        canvasSelector: ".tat_canvas"
    }, options);

    return this.each(function () {
        // Assigning to _editor because the return value from new isn't
        // actually used, but we need to use new to properly change the
        // prototype
        var _terrainatron = new Terrainatron.table(jQuery(this), options);
    });
};