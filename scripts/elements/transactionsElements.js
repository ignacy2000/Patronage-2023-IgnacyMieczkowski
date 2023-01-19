class TransactionsElements {
    constructor() {
        this.doughnut = document.getElementById('doughnut-chart');
        this.bar = document.getElementById('bar-chart');
        this.list = document.querySelector('.transactions-list');
    }
}

export const transactionsElements = new TransactionsElements();