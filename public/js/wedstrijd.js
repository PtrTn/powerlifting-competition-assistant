webpackJsonp([2],{

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(69);


/***/ }),

/***/ 69:
/***/ (function(module, exports) {

jQuery(document).ready(function () {
    $.fn.editable.defaults.mode = 'inline';
    $.fn.editable.defaults.showbuttons = false;
    $.fn.editable.defaults.onblur = 'submit';
    $.fn.editable.defaults.emptytext = '-';

    $('table.lifters tbody td').each(function () {
        var $td = $(this),
            $editable = $td.find('a.editable'),
            pk = $td.closest('tr').data('pk'),
            cellIndex = $td.index(),
            $nextTd = $td.closest('tr').next().children('td').eq(cellIndex),
            $nextEditable = $nextTd.find('a');

        $editable.editable({
            type: 'text',
            pk: pk,
            url: '/api/lift'
        });

        $editable.on('hidden', function (e, reason) {
            if (reason === 'save' || reason === 'cancel') {
                $nextEditable.editable('show');
            }
        });
    });
});

/***/ })

},[68]);