document.querySelector('.image-container').addEventListener('click', function(e) {
  const x = e.clientX;
  const y = e.clientY;
  console.log(`clientX : ${x}, clientY: ${y}`);

  const imgContainerCoord = document.querySelector('.image-container').getBoundingClientRect();
  const iconCoord = document.querySelector(`.plus-icon.item-1`).getBoundingClientRect();
  const iconCoord2 = document.querySelector(`.plus-icon.item-2`).getBoundingClientRect();
  console.log('imgContainerCoord', imgContainerCoord);
  console.log('iconCoord', iconCoord);
  console.log('iconCoord2', iconCoord2);

});

$(document).ready(function() {
  let currentTargetId = null;

  $(`.detail-wrapper.item-1`).css('top', '89%');
  $(`.detail-wrapper.item-1`).css('left', '72%');
  $(`.detail-wrapper.item-2`).css('top', '94%');
  $(`.detail-wrapper.item-2`).css('left', '17%');

  $('.plus-icon').mouseover(function() {
    const targetId = $(this)[0].className.split(' ')[1];
    currentTargetId = targetId;
    $(`.detail-wrapper.${targetId}`).fadeIn();

    $(`.detail-wrapper.${currentTargetId}`).mouseover(function() {
      $(`.detail-wrapper.${currentTargetId}`).fadeIn();
    }).mouseleave(function() {
      $(`.detail-wrapper.${currentTargetId}`).fadeOut();
    })
  }).mouseleave(function() {
    $(`.detail-wrapper.${currentTargetId}`).fadeOut();
  })
})




