var baseUrl = `https://newsapi.org/v2`;
var apiKey= `3449fa02267b40518f1422b315334332`;
var demo="";
var id1;
var color;
document.getElementById('search').addEventListener('click', function(){
  if(demo == ""){
    secondsearch()
   
  }else{
    newsGet()
  }
});
 function secondsearch() {
  const searchData1 = document.forms.myForm['search-data'].value;
  const arr = [];
  for (let i = 0; i < 8; i += 1) {
    if (document.getElementById(`id${i}`).checked) {
      arr.push(document.getElementById(`id${i}`).value);
    }
  }
  if (searchData1 === '') {
    alert('please enter the data before search');
  } else if(searchData1 !== '' || arr == "") {
  
      fetch(`${baseUrl}/everything?q=${searchData1}&apiKey=${apiKey}`)
        .then(res => res.json())
        .then((data) => {
          
          if (data.articles == '') {
            let head = document.getElementById('first');
            let block = document.createElement('div');
            block.innerHTML = `<center><h3>NO data is present on this search of <b>${searchData1}</b></h3></center>`;
            head.appendChild(block);
          } else if (data.status == 'error') {
            const head = document.getElementById('first');
            const block = document.createElement('div');
            block.innerHTML = 'NO data is present on this search';
            head.appendChild(block);
          } else {
            var demo = data;
           display(demo); 
          }
          console.log(data);
        }).catch((e) => {
          console.log(e);
        });
  }else{
    arr.forEach((arrayChannel) => {
      fetch(`${baseUrl}/everything?q=${searchData1}&sources=${arrayChannel}&apiKey=${apiKey}`)
        .then(res => res.json())
        .then((data) => {
          if (data.articles == '') {
            let head = document.getElementById('first');
            let block = document.createElement('div');
            block.innerHTML = `<center><h3>NO data is present on this search of <b>${searchData1}</b> on this <b>${arrayChannel}</b> channel </h3></center>`;
            head.appendChild(block);
          } else if (data.status == 'error') {
            const head = document.getElementById('first');
            const block = document.createElement('div');
            block.innerHTML = 'NO data is present on this search';
            head.appendChild(block);
          } else {
            var demo=data;
           display(demo);
            
          }
        }).catch((e) => {
          console.log(e);
        });
    });
  }
 }


const buttons = document.getElementsByClassName('button');
const buttonsCount = buttons.length;
for (let i = 0; i < buttonsCount; i += 1) {
  buttons[i].addEventListener('click', function() {
  
   
    id1='';
    id1=this.id;
    const id = this.id;
    if (id === 'sports' || id === 'technology' || id === 'entertainment') {
      clearfun();
      fetchData(`${baseUrl}/top-headlines?country=in&category=${this.id}&apiKey=${apiKey}`);
      console.log(demo);
      //getnav(this.id);
    } else {
      const btnstyle=document.getElementById(`${id1}`);
      color = 'blue';
      btnstyle.style.backgroundColor = color;
      clearfun();
      fetchData(`${baseUrl}/top-headlines?sources=${this.id}&apiKey=${apiKey}`);
     
    }
    
  });
}

function fetchData(url) {
  fetch(url)
  .then(res => res.json()).then((data) => {
    
    demo = data;

    display(demo);
  }).catch((e) => {
    console.log(e);
  });
}

function clearfun(){
  if(document.forms.myForm['search-data'].value != ""){
    document.forms.myForm['search-data'].value="";
  }
  for (let z = 0; z < 8; z += 1) {
    if (document.getElementById(`id${z}`).checked) {
      document.getElementById(`id${z}`).checked=false;
    }
  }
}

function display(data){
  const first = document.getElementById('first');
  first.innerHTML = '';

  for (let j = 0; j < data.totalResults; j += 1) {
   
    let dataValue=data.articles[j]
    if (dataValue.urlToImage === null || dataValue.urlToImage === undefined){
      console.log(dataValue.urlToImage);
    } else {
      let markup = `
      <div class="row " >
      <div class="col-md-3">
      <img src="${dataValue.urlToImage}" id="head-img" width="230px" height="180px" >
      </div>
      <div class="col-md-9">
    
      <a href="${dataValue.url}"><h3>${dataValue.title}</h3> </a>
         <p id="head-des">${dataValue.description}</p>
    </div>
  </div>`;
      let block = document.createElement('div');
      block.setAttribute('id', 'head-news');
      block.innerHTML = markup;
      let head = document.getElementById('first');
      head.appendChild(block);
    }
  }
}

	   
function newsGet() {
  var y=[];
  const first = document.getElementById('first');
  first.innerHTML = '';
 console.log(demo);
  var searchData = document.forms.myForm['search-data'].value;
  if(searchData != ""){
    console.log(searchData);
    demo.articles.forEach((z)=>{
     let f = (z.title).toLowerCase().includes(searchData)
     let g = (z.description).toLowerCase().includes(searchData)
     if(f == true || g == true){
      y.push(z)
     }
    })
    if(y.length != ""){
      display1(y);
      }else{
                  let head = document.getElementById('first');
                  let block = document.createElement('div');
                  block.innerHTML = `<center><h3>NO data is present on this search </h3></center>
                    <button class="btn btn-success" id="seemore" >see more</button>`;
                  head.appendChild(block);
                  demo="";
     }
  }
  document.getElementById('seemore').addEventListener('click', function(){
    gettext(searchData,id1);
    const btnstyle=document.getElementById(`${id1}`);
    color = ""
    btnstyle.style.backgroundColor = color;
  });
}
 

 function display1(data){

  for (let j = 0; j < data.length; j += 1) {
    if (data[j].urlToImage === null || data[j].urlToImage === 'undefined') {
      console.log(data[j].urlToImage);
    } else {
      let markup = `
      <div class="row " >
      <div class="col-md-3">
      <img src="${data[j].urlToImage}" id="head-img" width="230px" height="180px" >
      </div>
      <div class="col-md-9">
      <a href="${data[j].url}"><h3>${data[j].title}</h3> </a>
         <p id="head-des">${data[j].description}</p>
    </div>
  </div>`;
      let block = document.createElement('div');
      block.setAttribute('id', 'head-news');
      block.innerHTML = markup;
      let head = document.getElementById('first');
      head.appendChild(block);
    }
  }
}

function gettext(searchData,arrayChannel) {

      fetch(`${baseUrl}/everything?q=${searchData}&sources=${arrayChannel}&apiKey=${apiKey}`)
        .then(res => res.json())
        .then((data) => {
          if (data.articles == '') {
            let head = document.getElementById('first');
            let block = document.createElement('div');
            block.innerHTML = `<center><h3>NO data is present on this search of <b>${searchData}</b> on this <b>${arrayChannel}</b> channel </h3></center>`;
            head.appendChild(block);
          } else if (data.status == 'error') {
            const head = document.getElementById('first');
            const block = document.createElement('div');
            block.innerHTML = 'NO data is present on this search';
            head.appendChild(block);
          } else {
            
           display(data);
            
          }
        }).catch((e) => {
          console.log(e);
        });
  

 }

