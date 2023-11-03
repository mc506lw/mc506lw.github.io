// 复制到剪贴板
function copyToClipboard(text) {
  const el = document.createElement('textarea');
  el.value = text;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  alert('已复制标题');
}

// 分享到微博
function shareToWeibo(text) {
  const url = `https://service.weibo.com/share/share.php?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
}

// 用百度搜索
function searchBaidu(text) {
  const url = `https://www.baidu.com/s?wd=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
}

// 用bilibili搜索
function searchBilibili(text) {
  const url = `https://search.bilibili.com/all?keyword=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
}

// 用mcmod.cn搜索
function searchMcmod(text) {
  const url = `https://mcmod.cn/search?q=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
}

// 初始化右键菜单
document.addEventListener('DOMContentLoaded', () => {
  const rightClickMenu = document.getElementById('rightClickMenu');
  rightClickMenu.style.display = 'none';

  document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    rightClickMenu.style.left = `${e.pageX}px`;
    rightClickMenu.style.top = `${e.pageY}px`;
    rightClickMenu.style.display = 'block';
  });

  document.addEventListener('click', () => {
    rightClickMenu.style.display = 'none';
  });
});
