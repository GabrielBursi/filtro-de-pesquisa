// get filter element
const filter = document.querySelector('#filter')
// get cards elements
const cards = document.querySelectorAll('li')

// add input event for the filter element
filter.addEventListener('input',filterCard)

// filter function
function filterCard(){
    // if the filter is not empty
    const valueFilter = filter.value
    if(valueFilter != ''){
        // for each card of cards
        for (let card of cards){
            // get card heading (title)
            let title = card.querySelector('h2')
            // tranform to lower case
            title = title.textContent.toLowerCase()
            const filterText = filter.value.toLowerCase()
            // if card title does not include the filter text
            if(!title.includes(filterText)){
                card.style.display = 'none'
            }else{
                card.style.display = "block";
            }
        }
    }else{
        for ( let card of cards){
            card.style.display = 'block'
        }
    }
}
