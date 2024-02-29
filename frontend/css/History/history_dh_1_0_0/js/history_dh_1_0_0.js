// Click Tabs
const tabLinks = document.querySelectorAll('.tab-link');
const tabContents = document.querySelectorAll('.tab-content');

// Thêm sự kiện click cho các tab-link
tabLinks.forEach((tabLink, index) => {
  tabLink.addEventListener('click', (e) => {
    e.preventDefault();

    // Lấy data-tab của tab-link được click
    const tabId = tabLink.getAttribute('data-tab');

    // Ẩn tất cả các tab-content
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove('current');
    });

    // Hiển thị tab-content tương ứng với tab-link được click
    const targetTabContent = document.getElementById(tabId);
    targetTabContent.classList.add('current');

    // Xử lý class 'current' cho các tab-link
    tabLinks.forEach((link, linkIndex) => {
      if (linkIndex === index) {
        link.classList.add('current');
      } else {
        link.classList.remove('current');
      }
    });
  });
});