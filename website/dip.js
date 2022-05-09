function lala (){
    const cart = document.querySelector('.cart')
    
    //сщетчик 
    window.addEventListener('click' , function(event){
        if(event.target.dataset.action === 'plus' || 
        event.target.dataset.action === 'minus' ||
        event.target.dataset.counter === 'brush'|| 
        event.target.dataset.action === 'pluss'){
            const parent = event.target.closest('.brush')
            const score = parent.querySelector('[data-counter]')
            if(event.target.dataset.action === 'plus'){
                const limit = event.target.closest('.product')
                const noMore = limit.querySelector('.hohoho')
                if (parseInt(score.innerText) === (parseInt(noMore.innerText))) {
                   alert("я конечно дико извиняюсь но у нас только " + (parseInt(noMore.innerText)))
                    } else 
                       score.innerText = ++score.innerText;
            }
            if(event.target.dataset.action === 'minus'){
                if (parseInt(score.innerText) === 0) {
                    alert('хочешь купить меньше 0?')
                    } else 
                       score.innerText = --score.innerText;
            }
            if(event.target.dataset.counter === 'brush'){
                score.innerText = '0'
            }
            if(event.target.dataset.action === 'pluss'){
                const cartLimit = event.target.closest('.cartProduct')
                const cartNoMore = cartLimit.querySelector('.hohoho')
                if (parseInt(score.innerText) === (parseInt(cartNoMore.innerText))) {
                    alert("я конечно дико извиняюсь но у нас только " + (parseInt(cartNoMore.innerText)))
                     } else 
                        score.innerText = ++score.innerText;
            }
        }
    });
    let reckon = 0
    // корзина
    window.addEventListener('click', function(event){
        if(event.target.dataset.action === 'cart'){
            if (reckon > 3){
                alert("извини но пока в корзину можно положить только 3 товара. сделай заказ и набирай ещё")
            } else {
                const card = event.target.closest('.product')
                const productInfo = {
                    img: card.querySelector('.picturee').src,
                    title: card.querySelector('.title').innerText,
                    price: card.querySelector('.cost').innerText,
                    counter: card.querySelector('.score').innerText,
                    availability: card.querySelector('.hohoho').innerText,
                    id: card.dataset.id
                }
                const gaga = cart.querySelector(`[data-id = "${productInfo.id}"]`)
                if (gaga) {
                    console.log(gaga)
                    const fefo = gaga.querySelector(('[data-counter]'))
                    console.log(fefo.innerText)
                    fefo.innerText = parseInt(fefo.innerText) + parseInt(productInfo.counter)

                } else {
                    const ProductCart = `<div data-id ="${productInfo.id}" class="cartProduct id">
                                            <div class="picture cartImg"> <img src="${productInfo.img}" alt=""></div>
                                            <div class="cartBody">
                                                    <div class ="firstLine"> 
                                                        <div class="card-text name characteristic">${productInfo.title}</div>
                                                        <button class="del bott">Х</button>
                                                    </div>
                                                    <div class ="SecondLine">
                                                        <div class="card-text characteristic">${productInfo.price} </div>
                                                        <div class="availability hohoho invisible">${productInfo.availability}</div>
                                                    </div>
                                                    <div class="brush cartBrush">
                                                        <button class="bott cartBott" data-action="pluss">+</button>
                                                        <button class="bott cartBott" data-counter="brush">${productInfo.counter}</button>
                                                        <button class="bott cartBott" data-action="minus">-</button>
                                                    </div>
                                            </div>
                                        </div>`
                                        cart.insertAdjacentHTML("beforeend", ProductCart)
                                        reckon = reckon + 1;
                                        console.log("я не должен работать")  
                }
                
                
                
                    
            }
        

            
        }
        
       
        
    });
    
    

    
    
}










































setTimeout(lala, 100);



