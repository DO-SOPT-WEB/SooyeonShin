let parisContainers = document.querySelectorAll('.parisContainer');

parisContainers.forEach(function(container) {
    container.addEventListener('mouseover', function() {
        let content = container.querySelector('div');
        content.classList.add('show-paris-content');
    });

    container.addEventListener('mouseout', function() {
        let content = container.querySelector('div');
        content.classList.remove('show-paris-content')
        //content.parentNode.removeChild(content);
    });
});

// 버튼 투명도
window.addEventListener('scroll', ()=> {
  let button = document.getElementById('top');
  
  // 최대 스크롤 가능한 높이
  let maxScrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  
  // 현재 스크롤된 높이의 비율 계산 (0에서 1 사이의 값)
  let scrollPercentage = window.scrollY / maxScrollHeight;
  
  // 버튼의 투명도를 스크롤 비율에 따라 설정
  button.style.opacity = scrollPercentage;
});
