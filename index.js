document.querySelector('.image-container').addEventListener('click', function(e) {
  const x = e.clientX;
  const y = e.clientY;
  console.log(`x좌표 : ${x}, y좌표: ${y}`);

  const imgCoord = document.querySelector('.image-container').getBoundingClientRect();
  const coord = document.querySelector(`.plus-icon.item-1`).getBoundingClientRect();
  console.log('imgCoord', imgCoord);
  console.log('coord', coord);
  const perc_x = coord.x / (imgCoord.width + 24) * 100;
  const perc_y = coord.y / (imgCoord.height + 29) * 100;
  console.log('perc_x : ', perc_x);
  console.log('perc_y : ', perc_y);
});

$(document).ready(function() {
  let currentTargetId = null;
  $('.plus-icon').mouseover(function() {
    const targetId = $(this)[0].className.split(' ')[1];
    currentTargetId = targetId;
    $(`.detail-wrapper.${targetId}`).fadeIn();

    const imgCoord = document.querySelector('.image-container').getBoundingClientRect();
    const coord = document.querySelector(`.plus-icon.${targetId}`).getBoundingClientRect();
    // console.log('imgCoord', imgCoord);
    // console.log('coord', coord);
    const perc_x = coord.x / imgCoord.width * 100;
    const perc_y = coord.y / (imgCoord.height + 80) * 100;
    // console.log('perc_x : ', perc_x);
    // console.log('perc_y : ', perc_y);

    $(`.detail-wrapper.${targetId}`).css('left', `${perc_x}%`);
    $(`.detail-wrapper.${targetId}`).css('top', `${perc_y}%`);

    $(`.detail-wrapper.${currentTargetId}`).mouseover(function() {
      $(`.detail-wrapper.${currentTargetId}`).fadeIn();
    }).mouseleave(function() {
      $(`.detail-wrapper.${currentTargetId}`).fadeOut();
    })
  }).mouseleave(function() {
    $(`.detail-wrapper.${currentTargetId}`).fadeOut();
  })
})




