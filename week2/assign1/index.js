const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);
//연서언니 방법 완전 편함!!!

const parisContainer = $('.paris-img-container');
const parisImg = $$('.paris-img-container img');

/** 제목,설명 태그 추가*/
const addDescriptionTag=()=>{


    parisImg.forEach(img => {
        let title = img.getAttribute('title');// img태그의 요소 title가져오기
        console.log(title);
        let content = img.getAttribute('content');
        
        let descriptionContainer=document.createElement('div');//제목과 설명 담을 div
        descriptionContainer.classList.add('paris-description-container');
        let titleP = document.createElement('p'); //제목 p
        titleP.classList.add('paris-title');
        titleP.innerText=title;
        let contentP = document.createElement('p');
        titleP.classList.add('paris-content');
        contentP.innerText=content;
        
        img.parentNode.appendChild(descriptionContainer);//img태그의 부모인 paris-img-container태그의 자식으로 넣어줘야함
        descriptionContainer.appendChild(titleP);
        descriptionContainer.appendChild(contentP);

        img.parentNode.addEventListener('mouseover', ()=> {
            descriptionContainer.classList.add('show');
          });
      
        img.parentNode.addEventListener('mouseout', ()=> {
            descriptionContainer.classList.remove('show'); // 마우스를 떼면 숨깁니다.
          });
    })
    
}

// const showDescription=()=>{
//     parisContainer.addEventListener('mouseover', () => {
//         descriptionContainer.style.display = 'block'; 
//       });
// }

// const hideDescription=()=>{
//     parisContainer.addEventListener('mouseout',()=>{
//         descriptionContainer.style.display = 'none'; 
//     })
// }

addDescriptionTag();
// showDescription();
// hideDescription();

/*
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
*/

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
