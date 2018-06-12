
// =================================================
// =================================================
// collapsable sections, in conjunction components css file
// =================================================
// =================================================

toggleSection = function(bid, tid) {
  let aId = ['#',bid, '> span#overview-arrow'].join('');
  if($(aId).attr('class') == 'arrow_down') {
    $(aId).removeClass('arrow_down').addClass('arrow_right');
  } else {
    $(aId).removeClass('arrow_right').addClass('arrow_down')
  }
  $(tid).toggle();
}


// =================================================
// =================================================
//
// =================================================
// =================================================
