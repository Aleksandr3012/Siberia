// // прилипание правого бара
// var h_hght = 740; // высота бара
// var h_mrg = 0;    // отступ когда бар уже не виден
//
// $(function () {
//
//     var elem = $('.sidebar');
//     var top = $(this).scrollTop();
//
//     if (top > h_hght) {
//         elem.css('top', h_mrg);
//     }
//
//     $(window).scroll(function () {
//         top = $(this).scrollTop();
//
//         if (top + h_mrg < h_hght) {
//             elem.css('top', (h_hght - top));
//         } else {
//             elem.css('top', h_mrg);
//         }
//     });
//
// });