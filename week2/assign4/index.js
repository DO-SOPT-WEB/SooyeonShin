const INIT_BALANCE =0;
let HISTORY_LIST=[
  {id:0,type:"income",category:"과외비",content:"10월 월급",amount:50000},
  {id:1,type:"expense",category:"식비",content:"마라탕",amount:10000},
  {id:2,type:"income",category:"과외비",content:"10월 월급",amount:50000},
  {id:3,type:"expense",category:"식비",content:"커피",amount:6000}];

  //list 추가를 위한 변수들
let itemContainer;
let category;
let content;
let amount;
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
  category.textContent=list.category;
  itemContainer.appendChild(category);

  content = document.createElement('span');
  content.textContent=list.content;
  itemContainer.appendChild(content);

  amount = document.createElement('span');
  amount.textContent=list.amount;
  itemContainer.appendChild(amount);
  amount.classList.add(list.type);

  const button = document.createElement('button');
  button.textContent = "x";
  button.classList.add("xbtn");
  itemContainer.appendChild(button);
  //x버튼 클릭시 이벤트
  button.addEventListener('click',()=>{
    console.log(list.id,"삭제 버튼"); 
    deleteItem(list.id);
    console.log(HISTORY_LIST)
  });

  listcontent.appendChild(itemContainer);

  
}

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


