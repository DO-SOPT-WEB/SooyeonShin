const INIT_BALANCE =0;
const HISTORY_LIST=[
  {type:"income",category:"과외비",content:"10월 월급",amount:50000},
  {type:"expense",category:"식비",content:"마라탕",amount:10000},
  {type:"income",category:"과외비",content:"10월 월급",amount:50000},
  {type:"expense",category:"식비",content:"커피",amount:6000}];

  //list 추가를 위한 변수들
let listcontainer;
let category;
let content;
let amount;
let button;

let totalIncome=0;
let totalExpense=0;

const listcontent = document.getElementById('lists');

  window.onload = ()=>{ //최초 실행시 렌더링
    


    HISTORY_LIST.forEach(list =>{

      //내역리스트에 HISTORY_LIST 정보 보여주기
      listcontainer = document.createElement('li');//forEach밖에다 해도 되나..? let아니여도 되나..?
      
      category = document.createElement('span');
      category.textContent=list.category;
      listcontainer.appendChild(category);

      content = document.createElement('span');
      content.textContent=list.content;
      listcontainer.appendChild(content);

      amount = document.createElement('span');
      amount.textContent=list.amount;
      listcontainer.appendChild(amount);
      amount.classList.add(list.type);

      let button = document.createElement('button');
      button.textContent = "x";
      button.classList.add("xbtn");
      listcontainer.appendChild(button);

      listcontent.appendChild(listcontainer);

      //총수익, 총지출 구하기
      if(list.type==="income"){
        totalIncome += list.amount;
      } else if(list.type === "expense"){
        totalExpense +=list.amount;
      }
    });

    //총수익, 총지출 html에 표시
    document.getElementById('totalIncome').textContent = totalIncome;
    document.getElementById('totalExpense').textContent = totalExpense;

  }

  //수입/지출 필터링 ->filter
  
  document.getElementById('incomeCheckbox').addEventListener('change',()=>filterList());
  document.getElementById('expenseCheckbox').addEventListener('change',()=>filterList());

  const filterList=()=>{
    const showIncome = document.getElementById('incomeCheckbox').checked;
    const showExpense = document.getElementById('expenseCheckbox').checked;

    console.log(showIncome,showExpense);

    listcontent.innerHTML='';//화면에 보여줄 리스트 초기화 (안해주면 중복해서 뜸)

    const new_list=HISTORY_LIST.filter(list =>{
      if(list.type==="income" && showIncome) return true;
      if(list.type==="expense" && showExpense) return true;
      return false;
    });

    new_list.forEach(list =>{
      listcontainer = document.createElement('li');
      
      category = document.createElement('span');
      category.textContent=list.category;
      listcontainer.appendChild(category);

      content = document.createElement('span');
      content.textContent=list.content;
      listcontainer.appendChild(content);

      amount = document.createElement('span');
      amount.textContent=list.amount;
      listcontainer.appendChild(amount);
      amount.classList.add(list.type);

      let button = document.createElement('button');
      button.textContent = "x";
      button.classList.add("xbtn");
      listcontainer.appendChild(button);

      listcontent.appendChild(listcontainer);

    });
  

  }

