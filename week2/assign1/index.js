const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);
//연서언니 방법 완전 편함!!!

const parisContainer = $('.paris-img-container');
const parisImg = $$('.paris-img-container img');

/** 제목,설명 태그 추가*/
const addDescriptionTag=()=>{


    parisImg.forEach(img => {
        let title = img.getAttribute('title');// img태그의 요소 title가져오기
        let content = img.getAttribute('content');
        
        let descriptionContainer=document.createElement('div');//제목과 설명 담을 div
        descriptionContainer.classList.add('paris-description-container');
        let titleP = document.createElement('p'); //제목 p
        titleP.classList.add('paris-title');
        titleP.innerText=title;
        let contentP = document.createElement('p');
        contentP.classList.add('paris-content');
        contentP.innerText=content;
        
        img.parentNode.appendChild(descriptionContainer);//img태그의 부모인 paris-img-container태그의 자식으로 넣어줘야함
        descriptionContainer.appendChild(titleP);
        descriptionContainer.appendChild(contentP);
        descriptionContainer.style.visibility = 'hidden';

        addReadMoreBtn(contentP);

        //추후에 함수로 따로 빼내기!
        img.parentNode.addEventListener('mouseover', ()=> {
            descriptionContainer.style.visibility = 'visible';
          });
      
        img.parentNode.addEventListener('mouseout', ()=> {
            descriptionContainer.style.visibility = 'hidden';
          });
    })
    
}

const addReadMoreBtn = (contentP) => {
    // 줄 높이와 줄 수에 따라 p 태그의 최대 높이를 계산
    
    const lineHeight = parseInt(window.getComputedStyle(contentP).lineHeight);
    const maxHeight = lineHeight * 3;
  
    // content의 실제 높이가 계산된 최대 높이를 초과하는지 확인
    // display:none이면 렌더링 되지않아 scrollHeight를 못가져옴 
    //  -> visibilty로 레이아웃 상 공간은 차지하지만 보이지 않게
    if (contentP.scrollHeight > maxHeight) {
  
      // 더보기 버튼 생성
      let readMoreBtn = document.createElement('button');
      readMoreBtn.innerText = '더보기';
      readMoreBtn.classList.add('read-more-btn');

      contentP.parentNode.appendChild(readMoreBtn);
  
      // 더보기 버튼 클릭 이벤트 리스너
      readMoreBtn.addEventListener('click', () => {
        contentP.classList.remove('paris-content');
        readMoreBtn.remove();
      });
  

    }
  };


addDescriptionTag();


//preview 버튼로직
const goLeft=$("#preview-go-left");
const goRight=$("#preview-go-right");
const previewImgContainer=$("#preview-imgs");

goLeft.addEventListener("click",()=>{
    previewImgContainer.scrollLeft=0;
})

goRight.addEventListener("click",()=>{
    previewImgContainer.scrollLeft=previewImgContainer.clientWidth;
})


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
