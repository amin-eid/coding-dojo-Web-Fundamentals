

const likes=[0,0,0];
const elements=[
document.querySelector('.one'),
document.querySelector('.two'),
document.querySelector('.three')
];

function like(id){
likes[id]++;
elements[id].innerText=likes[id];
}