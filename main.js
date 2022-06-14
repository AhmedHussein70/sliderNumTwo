 let Images = document.querySelectorAll("img")
 let mainDiv = document.querySelector(".mainDiv")
 Images.forEach((item , index)=> {

  item.addEventListener("click",(e)=>{
    console.log(item);
    let getSrcImafe = item.src

    let img = `<img src="${getSrcImafe}" alt="">`
    mainDiv.innerHTML = img
    let myDivText = `
    <div class="posi">
    ${index} of 6
  </div>
    `
    mainDiv.innerHTML += myDivText
  })

 });