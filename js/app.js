document.getElementById('search').addEventListener('click', newsGet);
function newsGet() {
  
  const searchData = document.forms.myForm['search-data'].value;
  // var news_channel = document.forms["myForm"]["news-channel"].value;
  const arr = [];
  for (let i = 0; i < 8; i += 1) {
    if (document.getElementById(`id${i}`).checked) {
      arr.push(document.getElementById(`id${i}`).value);
    }
  }
  //   console.log(a);
  //   a.forEach((Array1)=>{
  //       console.log(Array1)
  //   })
  //     console.log(searchData);
  //  console.log(news_channel);
  if (searchData === '' || arr == '') {
    alert('please  select the channel and enter the data before search');
  } else {
    const first = document.getElementById('first');
  first.innerHTML = '';
    arr.forEach((arrayChannel) => {
      fetch(`https://newsapi.org/v2/everything?q=${searchData}&sources=${arrayChannel}&apiKey=3449fa02267b40518f1422b315334332`)
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
            for (let j = 0; j < data.totalResults; j += 1) {
                console.log("jffhhffh",data.articles[j].urlToImage);
              if (data.articles[j].urlToImage === null || data.articles[j].urlToImage === undefined) {
                console.log(data.articles[j].urlToImage);
              } else {
                let markup = `
                            <div class="row" >
                            <div class="col-md-3">
                            <img src="${data.articles[j].urlToImage}" id="head-img" width="230px" height="180px" >
                            </div>
                            <div class="col-md-9">
                            <h4 id="head-chl" >${data.articles[j].source.name}</h4>
                            <a href="${data.articles[j].url}"><h3>${data.articles[j].title}</h3> </a>
                               <p id="head-des">${data.articles[j].description}</p>
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
    const id = this.id;
    if (id === 'sports' || id === 'technology' || id === 'entertainment') {
        clearfun()
      getnav(this.id);
    } else {
        clearfun()
      gettext(this.id);
    }
    const first = document.getElementById('first');
    first.innerHTML = '';
  });
}
function gettext(news) {
  fetch(`https://newsapi.org/v2/top-headlines?sources=${news}&apiKey=3449fa02267b40518f1422b315334332`)
    .then(res => res.json()).then((data) => {
      // head.replaceChild(block,head)
      for (let j = 0; j < data.totalResults; j += 1) {
        if (data.articles[j].urlToImage === null || data.articles[j].urlToImage === 'undefined') {
          console.log(data.articles[j].urlToImage);
        } else {
          let markup = `
          <div class="row " >
          <div class="col-md-3">
          <img src="${data.articles[j].urlToImage}" id="head-img" width="230px" height="180px" >
          </div>
          <div class="col-md-9">
          
          <a href="${data.articles[j].url}"><h3>${data.articles[j].title}</h3> </a>
             <p id="head-des">${data.articles[j].description}</p>
        </div>
      </div>`;
          let block = document.createElement('div');
          block.setAttribute('id', 'head-news');
          block.innerHTML = markup;
          let head = document.getElementById('first');
          head.appendChild(block);
        }
      }
    }).catch((e) => {
      console.log(e);
    });
}


function getnav(news) {
  fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${news}&apiKey=3449fa02267b40518f1422b315334332`)
    .then(res => res.json()).then((data) => {
      // head.replaceChild(block,head)
      for (let j = 0; j < data.totalResults; j += 1) {
        if (data.articles[j].urlToImage === null || data.articles[j].urlToImage === '{{pageImage}}' || data.articles[j].urlToImage === 'undefined') {
          console.log(data.articles[j].urlToImage);
        } else {
          let markup = `
                       <div class="row ">
                       <div class="col-md-3">
                       <img src="${data.articles[j].urlToImage}" id="head-img" width="230px" height="180px" >
                       </div>
                       <div class="col-md-9">
                       
                       <a href="${data.articles[j].url}"><h3>${data.articles[j].title}</h3> </a>
                          <p id="head-des">${data.articles[j].description}</p>
                     </div>
                   </div>`;
          let block = document.createElement('div');
          block.setAttribute('id', 'head-news');
          block.innerHTML = markup;
          let head = document.getElementById('first');
          head.appendChild(block);
        }
      }
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

