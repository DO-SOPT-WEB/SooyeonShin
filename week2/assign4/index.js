const INIT_BALANCE =0;
const HISTORY_LIST=[
  {category:"과외비",
  content:"10월 월급",
  amount:50000},
  {category:"과외비",
  content:"10월 월급",
  amount:50000},
  {category:"과외비",
  content:"10월 월급",
  amount:50000},
  {category:"과외비",
  content:"10월 월급",
  amount:50000}];

  let listcontainer;
  let category;
  let content;
  let amount;
  let button;



  window.onload = ()=>{
    const listcontent = document.getElementById('lists');


    HISTORY_LIST.forEach(list =>{
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

      let button = document.createElement('button');
      button.textContent = "x";
      button.classList.add("xbtn");
      listcontainer.appendChild(button);

      listcontent.appendChild(listcontainer);
    })
  }