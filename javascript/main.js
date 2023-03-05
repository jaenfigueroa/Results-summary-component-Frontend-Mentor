const container = document.getElementById('cardContainer')

traerdatos = async () => {
  const response = await fetch('../data.json')
  const data = await response.json()

  // console.log(data)

  data.forEach(element => {
    
    const plantilla = `
<article class="card__block-2__item card__block-2__item--${element.color}">
  <div>
    <div class="card__block-2__mask">
      <img src="${element.icon}" alt="">
    </div>
    <h4 class="card__block-2__item__title">${element.category}</h4>
  </div>
  <h5><span class="card__block-2__item__number">${element.score}</span>/<span>100</span></h5>
</article>`

    container.innerHTML += plantilla

  });
}

traerdatos()
