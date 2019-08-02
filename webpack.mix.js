var assets = [
    //JSZip
    'assets/JSZip-2.5.0/jszip.js',
    //pdfmake
    'assets/pdfmake-0.1.36/pdfmake.js',
    'assets/pdfmake-0.1.36/vfs_fonts.js',
    //DataTables
    'assets/DataTables-1.10.18/css/dataTables.bootstrap4.css',
    'assets/DataTables-1.10.18/js/dataTables.bootstrap4.js',
    'assets/DataTables-1.10.18/js/jquery.dataTables.js',
    //AutoFill
    'assets/AutoFill-2.3.3/css/autoFill.bootstrap4.min.css',
    'assets/AutoFill-2.3.3/js/autoFill.bootstrap4.js',
    'assets/AutoFill-2.3.3/js/dataTables.autoFill.js',
    //Buttons
    'assets/Buttons-1.5.6/css/buttons.bootstrap4.css',
    'assets/Buttons-1.5.6/js/buttons.bootstrap4.js',
    'assets/Buttons-1.5.6/js/buttons.colVis.js',
    'assets/Buttons-1.5.6/js/buttons.flash.js',
    'assets/Buttons-1.5.6/js/buttons.html5.js',
    'assets/Buttons-1.5.6/js/buttons.print.js',
    'assets/Buttons-1.5.6/js/dataTables.buttons.js',
    //ColReorder
    'assets/ColReorder-1.5.0/css/colReorder.bootstrap4.css',
    'assets/ColReorder-1.5.0/js/dataTables.colReorder.js',
    //FixedColumns
    'assets/FixedColumns-3.2.5/css/fixedColumns.bootstrap4.css',
    'assets/FixedColumns-3.2.5/js/dataTables.fixedColumns.js',
    //FixedHeader
    'assets/FixedHeader-3.1.4/css/fixedHeader.bootstrap4.css',
    'assets/FixedHeader-3.1.4/js/dataTables.fixedHeader.js',
    //KeyTable
    'assets/KeyTable-2.5.0/css/keyTable.bootstrap4.css',
    'assets/KeyTable-2.5.0/js/dataTables.keyTable.js',
    //Responsive
    'assets/Responsive-2.2.2/css/responsive.bootstrap4.css',
    'assets/Responsive-2.2.2/js/dataTables.responsive.js',
    //RowGroup
    'assets/RowGroup-1.1.0/css/rowGroup.bootstrap4.css',
    'assets/RowGroup-1.1.0/js/dataTables.rowGroup.js',
    'assets/RowReorder-1.2.4/css/rowReorder.bootstrap4.css',
    'assets/RowReorder-1.2.4/js/dataTables.rowReorder.js',
    //Scroller
    'assets/Scroller-2.0.0/css/scroller.bootstrap4.css',
    'assets/Scroller-2.0.0/js/dataTables.scroller.js',
    //Select
    'assets/Select-1.3.0/css/select.bootstrap4.css',
    'assets/Select-1.3.0/js/dataTables.select.js',
];

var combinedJs = './dist/js/app.bundle.js';
var combinedCss = './dist/css/app.bundle.css';
var fontsFolder = './dist/fonts';

const mix = require('laravel-mix');
var styles = [],
    scripts = [],
    fonts = [];
assets.forEach(element => {
    if (element.endsWith(".js")) {
        scripts.push(element);
    } else if (element.endsWith(".css")) {
        styles.push(element);
    } else if (element.endsWith("fonts/*")) {
        fonts.push(element);
    }
});

mix
    .combine(scripts, combinedJs)
    .combine(styles, combinedCss)
    .copyDirectory(fonts, fontsFolder)
    .minify(combinedJs)
    .minify(combinedCss);