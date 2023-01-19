import { getLoggedUser } from "./storage/userStorage.js";
import { transactionsElements } from "./elements/transactionsElements.js";
import { changeChartVisibilityDougnat, changeChartVisibilityBar, changeChartToNormal } from "./auxiliary/chartVisibility.js";

import data1 from './transactions/1.json' assert { type: "json" };
import data2 from './transactions/2.json' assert { type: "json" };
import data3 from './transactions/3.json' assert { type: "json" };
import data4 from './transactions/4.json' assert { type: "json" };

let transactions;
let transactionsTypes;

let date1 = '2022-11-09';
let date2 = '2022-11-10';
let date3 = '2022-11-12';
let date4 = '2022-11-13';
let date5 = '2022-11-14';
let date6 = '2022-11-15';
let date7 = '2022-11-16';

export async function loadData() {
    await fetch('https://api.npoint.io/38edf0c5f3eb9ac768bd').then(res => res.json()).then(data => {
        transactions = data.transactions;
        transactionsTypes = data.transacationTypes;
    });

    extendRandomData();
    createDoughnutChart();
    createBarChart();
    createTransactionList();
}

window.addEventListener('resize', () => {
  if(window.innerWidth > 768) {
    changeChartToNormal();
  }
})

transactionsElements.doughnut.addEventListener('touchend', () => {
  changeChartVisibilityDougnat();
});

transactionsElements.bar.addEventListener('touchend', () => {
  changeChartVisibilityBar();
});

function extendRandomData() {
    const randTrans = getLoggedUser().userLogged.randTransactions;
    const addTransactions = getRandTransactions(randTrans).transactions;
    transactions = addTransactions.concat(transactions);
}

function getRandTransactions(number) {
    if(number == 1) return data1;
    else if(number == 2) return data2;
    else if(number == 3) return data3;
    else if(number == 4) return data4;
    else return null;
}

function createDoughnutChart() {
    let ctx = transactionsElements.doughnut;
    let myChart =  new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: [transactionsTypes[1], transactionsTypes[2], transactionsTypes[3], transactionsTypes[4]],
          datasets: [{
            label: 'PLN',
            data: [countTransactionsTypes(1), countTransactionsTypes(2), countTransactionsTypes(3), countTransactionsTypes(4)],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
}

function createBarChart() {
    let find1 = transactions.find((element) => element.date == date1);
    let find2 = transactions.find((element) => element.date == date2);
    let find3 = transactions.find((element) => element.date == date3);
    let find4 = transactions.find((element) => element.date == date4);
    let find5 = transactions.find((element) => element.date == date5);
    let find6 = transactions.find((element) => element.date == date6);
    let find7 = transactions.find((element) => element.date == date7);
    let ctx = transactionsElements.bar;
    let myChart =  new Chart(ctx, {
        type: 'bar',
        data: {
          labels: [date1, date2, date3, date4, date5, date6, date7],
          datasets: [{
            label: 'PLN',
            data: [find1.balance, find2.balance, find3.balance, find4.balance, find5.balance, find6.balance, find7.balance],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
}

function countTransactionsTypes(number) {
    let res = 0;
    transactions.forEach(transaction => {
        if(transaction.type == number) {
            res += Math.abs(parseInt(transaction.amount));
        }
    });
    return res;
}

function createTransactionList() {
  createLiElements();
}

function createLiElements() {
  transactions.forEach(el => {
    let li = document.createElement('li');
    li.appendChild(createDateElement(el.date));
    li.appendChild(createTranscationType(el.type));
    li.appendChild(createDescription(el.description, transactionsTypes[el.type]));
    li.appendChild(createSum(el.amount));
    li.appendChild(createBalance(el.balance));
    transactionsElements.list.appendChild(li);
  })
}

function createDateElement(date) {
  let data = document.createElement('div');
  data.innerHTML = '<b>Data: </b>' + date;
  data.classList.add('li-date');
  return data;
}

function createTranscationType(type) {
  let data = document.createElement('div');
  let img = document.createElement('img');
  img.src = './scripts/images/shop.webp';
  data.appendChild(img);
  data.classList.add('li-img');
  return data;
}

function createDescription(description, tranType) {
  let data = document.createElement('div');
  let desc = document.createElement('div');
  let type = document.createElement('div');
  desc.innerHTML = '<b>OPIS: </b>' + description;
  type.innerHTML = '<b>TYP TRANSAKCJI: </b>' + tranType;
  data.appendChild(desc);
  data.appendChild(type);
  data.classList.add('li-description');
  return data;
}

function createSum(sum) {
  let data = document.createElement('div');
  data.innerHTML = '<b>KWOTA: </b>' + sum;
  data.classList.add('li-sum');
  return data;
}

function createBalance(balance) {
  let data = document.createElement('div');
  data.innerHTML = '<b>BALANS KONTA: </b>' + balance;
  data.classList.add('li-balance');
  return data;
}
