const categories = Array.from( jcatogry)
document.getElementById('searchBar').addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();
    const filteredItems = categories.filter((item) =>  
        item.title.toLowerCase().includes(searchString) 
   )
    dispalyitems(filteredItems); 
}) 
const dispalyitems = (items) => {
    const rootElement = document.getElementById('root');
    rootElement.innerHTML = '';

    items.forEach((item)=>{
        const { index, image, title, rate, av} = item;
        const  jlist = document.createElement('div');
         jlist.className = 'jlist'; 
        jlist.innerHTML =  `
       <img src="${image}"alt="">
              <h3>${title} </h3>
              <p>${rate}</p>
              <span id="key">${av}</span>
      `;
        rootElement.appendChild(jlist);

        jlist.addEventListener('click', ()=>{
            window.location.href = `job-detail.html?id=${index}`;
        })
    })
};dispalyitems(categories)  
 