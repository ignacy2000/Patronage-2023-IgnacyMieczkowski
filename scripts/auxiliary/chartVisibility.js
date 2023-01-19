import { transactionsElements } from "../elements/transactionsElements.js";

export function changeChartVisibilityDougnat() {
    transactionsElements.doughnut.setAttribute('style', 'display:none !important');
    transactionsElements.bar.setAttribute('style', 'display:flex !important');
}

export function changeChartVisibilityBar() {
    transactionsElements.bar.setAttribute('style', 'display:none !important');
    transactionsElements.doughnut.setAttribute('style', 'display:flex !important');
}

export function changeChartToNormal() {
    transactionsElements.doughnut.setAttribute('style', 'display:flex !important');
    transactionsElements.bar.setAttribute('style', 'display:flex !important');
}