const INIT_BALANCE =0;
let HISTORY_LIST=[
  {id:0,type:"income",category:"과외비",content:"10월 월급",amount:50000},
  {id:1,type:"expense",category:"식비",content:"마라탕",amount:10000},
  {id:2,type:"income",category:"과외비",content:"10월 월급",amount:50000},
  {id:3,type:"expense",category:"식비",content:"커피",amount:6000}];

  //list 추가를 위한 변수들
let itemContainer;
let type='income';
let category;
let content;
let amount;
let nowid=3;
// let button;

let totalIncome=0;
let totalExpense=0;

const listcontent = document.getElementById('lists'); //내역리스트 담는 ul태그
const BALANCE = document.getElementById('balance');
let balance=INIT_BALANCE;
BALANCE.textContent= balance;

//각 list의 정보 보여주는 함수 (중복해서 쓰여서 따로 뺌)
const showList =(list)=>{
  itemContainer = document.createElement('li');
      
  category = document.createElement('span');
  category.classList.add("list-category")
  category.textContent=list.category;
  itemContainer.appendChild(category);

  content = document.createElement('span');
  content.classList.add("list-content");
  content.textContent=list.content;
  itemContainer.appendChild(content);

  amount = document.createElement('span');
  amount.classList.add("list-amount");
  amount.classList.add(list.type);
  amount.textContent=list.amount;
  itemContainer.appendChild(amount);
  amount.classList.add(list.type);

  const button = document.createElement('button');
  button.textContent = 'x';
  button.classList.add("xbtn");
  button.id=list.id;
  itemContainer.appendChild(button);
  //x버튼 클릭시 이벤트
  button.addEventListener('click',(e)=>{
    console.log(e.target.id);
    deleteid=e.target.id;
    let deletemodal=document.getElementById('delete-modal');
    deletemodal.style.display='flex';
    deletemodalfuc();
    console.log(HISTORY_LIST)
  });

  listcontent.appendChild(itemContainer);

  
}

//총수익, 총지출, 잔액 구하기
const calculateTotal=()=>{
  totalExpense=0;
  totalIncome=0;
  HISTORY_LIST.forEach((item)=>{
    //총수익, 총지출 구하기
    if(item.type==="income"){
      totalIncome += item.amount;
    } else if(item.type === "expense"){
      totalExpense +=item.amount;
    }
  })
  //총수익, 총지출 html에 표시
  document.getElementById('totalIncome').textContent = totalIncome;
  document.getElementById('totalExpense').textContent = totalExpense;

  balance=totalIncome-totalExpense;
  BALANCE.textContent=balance;
}

window.onload = ()=>{ //최초 실행시 렌더링

  HISTORY_LIST.forEach((list) =>showList(list));
  calculateTotal();

}

//수입/지출 필터링 ->filter
document.getElementById('incomeCheckbox').addEventListener('change',()=>filterList());
document.getElementById('expenseCheckbox').addEventListener('change',()=>filterList());

const filterList=()=>{
  const showIncome = document.getElementById('incomeCheckbox').checked;
  const showExpense = document.getElementById('expenseCheckbox').checked;

  console.log(showIncome,showExpense);

  listcontent.innerHTML='';//화면에 보여줄 리스트 초기화 (안해주면 중복해서 뜸)

  HISTORY_LIST.filter(list =>{
    if(list.type==="income" && showIncome) return true;
    if(list.type==="expense" && showExpense) return true;
    return false;
  }).forEach((list) =>showList(list));

};

//리스트 삭제
const deleteItem=(deleteid)=>{

  HISTORY_LIST = HISTORY_LIST.filter(item => item.id!==deleteid);
  listcontent.innerHTML='';
  HISTORY_LIST.forEach(list=>showList(list));
  calculateTotal();
}

let deleteid=null;
//삭제시 뜨는 모달
const deletemodalfuc=()=>{
  let deleteBtn = document.querySelector('.delete');
  let closeModalButton = document.querySelector('#delete-modal .closemodal');
  let deletemodal=document.getElementById('delete-modal');



  deleteBtn.addEventListener('click',()=>{
    deleteItem(deleteid);
    deletemodal.style.display='none';
    deleteid=null;
  })

  // 닫기 버튼을 클릭하면 모달을 닫음
  closeModalButton.addEventListener('click', ()=> {
    deletemodal.style.display='none';
  });

  // 화면 어디든지 클릭하면 모달을 닫음 (모달 자체 위를 제외하고)
  window.addEventListener('click', (e)=> {
    if (e.target === deletemodal) {
      deletemodal.style.display='none';
    }
  });
}

deletemodalfuc();

/*----------------------------- */
//모달 표시하고 닫기
//dom tree가 완전히 로드 되고 실행할 함수 (굳이 필요할거 같진 않지만 사진관하다가 dom로드 안돼서 null값 뜨는 경우가 있어서.. 추가해 봤슴다)
document.addEventListener('DOMContentLoaded', ()=>{
  const openModalButton = document.querySelector('footer > button');
  const closeModalBtn = document.querySelector('#add-modal .closemodal');
  const addmodal = document.getElementById('add-modal');

  // + 버튼을 클릭하면 모달을 표시
  openModalButton.addEventListener('click', ()=> {
    addmodal.style.display = 'block';
  });

  // 닫기 버튼을 클릭하면 모달을 닫음
  closeModalBtn.addEventListener('click', ()=> {
    addmodal.style.display = 'none';
  });

  // 화면 어디든지 클릭하면 모달을 닫음 (모달 자체 위를 제외하고)
  window.addEventListener('click', (e)=> {
    if (e.target === addmodal) {
      addmodal.style.display = 'none';
    }
  });
});


//수입 지출에 따른 카테고리 나누기

const typeBtns=document.querySelectorAll('.select-type-btn'); //radio인 요소들
const categorySelect = document.getElementById('select-category');//select태그


typeBtns.forEach(radio => {
  radio.addEventListener('change', ()=> {
    type=radio.value;
    changeCategoryType(type);
    console.log(type);
  });
});//radio값이 바뀌면 카테고리 바꿔주는 함수 실행


const changeCategoryType=(type)=>{
  categorySelect.innerHTML = '';

    let options;

    if (type === 'income') {
      options = [
        { value: '과외비', text: '과외비' },
        { value: '용돈', text: '용돈' },
        { value: '기타', text: '기타' }
      ];
    } else if (type==='expense') {
      options = [
        { value: '식비', text: '식비' },
        { value: '교통비', text: '교통비' },
        { value: '기타', text: '기타' }
      ];
    }

    // 새로운 option을 select에 추가
    options.forEach(option => {
      const optionElement = document.createElement('option');
      optionElement.value = option.value;
      optionElement.textContent = option.text;
      categorySelect.appendChild(optionElement);
    });

}

changeCategoryType('income');

//입력값들로 내역 추가하기
const addListBtn=document.querySelector('.addbtn');
const addList=()=>{
  category = document.getElementById('select-category').value;
  amount=document.getElementById('addamount').value;
  content = document.getElementById('addcontent').value;

  const newListItem = {
    id: nowid+1,
    type: type,
    category: category,
    amount:parseInt(amount),
    content: content,
  };
  nowid+=1
  console.log(newListItem);

  if (!amount || !content) {
    alert("금액과 내용을 입력해주세요.");
    return;
}

  HISTORY_LIST.push(newListItem);
  listcontent.innerHTML='';
  HISTORY_LIST.forEach(list=>showList(list));
  calculateTotal();

  alert("저장이 완료되었습니다!!");
  document.getElementById('addamount').value='';
  document.getElementById('addcontent').value="";
}

addListBtn.addEventListener('click',addList);

