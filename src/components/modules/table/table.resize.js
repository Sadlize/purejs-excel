import $ from 'core/DOM';

export default function resizeHandler($root, event) {
  const $resizer = $(event.target);
  $resizer.setAttribute('data-active');
  const resizerType = $resizer.data.resize;

  const $parent = $resizer.closest('[data-type="resizable"]');
  const initCords = $parent.getCoords();
  let resizeValue = 0;

  document.onmousemove = (e) => {
    if (resizerType === 'col') {
      const delta = e.pageX - initCords.right;
      resizeValue = initCords.width + delta;
      $resizer.css({ right: `${-delta}px` });
    } else {
      const delta = e.pageY - initCords.bottom;
      resizeValue = initCords.height + delta;
      $resizer.css({ bottom: `${-delta}px` });
    }
  };

  document.onmouseup = () => {
    document.onmousemove = null;
    document.onmouseup = null;
    $resizer.removeAttribute('data-active');
    if (resizerType === 'col') {
      $root.findAll(`[data-col="${$parent.data.col}"]`).forEach((item) => {
        item.style.width = `${resizeValue}px`;
      });
      $resizer.css({ right: null });
    } else {
      $parent.css({ height: `${resizeValue}px` });
      $resizer.css({ bottom: null });
    }
  };
}
