export function requestAnimationFrame(cb: () => void) {
  const systemInfo = wx.getSystemInfoSync();

  if (systemInfo.platform === 'devtools') {
    return setTimeout(() => {
      cb();
    }, 1000 / 30);
  }

  return wx
    .createSelectorQuery()
    .selectViewport()
    .boundingClientRect()
    .exec(() => {
      cb();
    });
}