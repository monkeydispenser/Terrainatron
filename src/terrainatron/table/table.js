

Terrainatron.table.prototype.init = function () {

    if (this._options.canvasWidth === undefined) {
        this._options.canvasWidth = jQuery(this._element).width();
    }
    if (this._options.canvasHeight === undefined) {
        this._options.canvasHeight = jQuery(this._element).height();
    }

    this._table = jQuery(this._element).empty().append(this._options.canvasHtml);
    
    jQuery(this._options.canvasSelector).width(this._options.canvasWidth);
    jQuery(this._options.canvasSelector).height(this._options.canvasHeight);
    
};