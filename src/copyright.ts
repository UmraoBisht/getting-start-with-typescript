// const year =document.getElementById('year')
// const thisYear  =new Date().getFullYear()
// year.setAttribute('datetime',thisYear)
// year.textContent=thisYear


const year:HTMLElement = document.getElementById('year')!
const thisYear: string = new Date().getFullYear().toString()
year.setAttribute('datetime', thisYear)
year.textContent = thisYear