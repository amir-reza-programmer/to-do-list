toDoList  = document.querySelector('#to-do')
doingList = document.querySelector('#doing')
doneList  = document.querySelector('#done')


toDoListBottomSection = toDoList.querySelector('.list-bottom-section')
doingListBottomSection = doingList.querySelector('.list-bottom-section')
doneListBottomSection = doneList.querySelector('.list-bottom-section')

toDoListCardContainer = toDoList.querySelector('.card-container')
doingListCardContainer = doingList.querySelector('.card-container')
doneListCardContainer = doneList.querySelector('.card-container')

toDoListAddCardButton = toDoList.querySelector('.add-card')
doingListAddCardButton = doingList.querySelector('.add-card')
doneListAddCardButton = doneList.querySelector('.add-card')

function initDeleteCard(cardContainer) {
    cardContainer.addEventListener('click', function(e) {
        const tgt = e.target;
        if (tgt.classList.contains('fa-trash-alt')) tgt.closest('div').remove();
      })
}

initDeleteCard(toDoListCardContainer)
initDeleteCard(doingListCardContainer)
initDeleteCard(doneListCardContainer)

addCardInit(toDoList, toDoListAddCardButton, toDoListBottomSection)
addCardInit(doingList, doingListAddCardButton, doingListBottomSection)
addCardInit(doneList, doneListAddCardButton, doneListBottomSection)


function addCardInit(list, listAddCardButton, listBottomSection) {
    listAddCardButton.addEventListener('click',()=> {

        listBottomSection.innerHTML = `<textarea name="text1" id="" cols="30" rows="5" placeholder="Enter Title..."></textarea>
        <div class="bottom-section">
            <div class="tag">
            <div class="dropdown">
                            <select class="importance-value dropbtn">
                                <div class="dropdown-content">
                                <option class="low"value="1">Low</option>
                                <option class="normal" value="2" selected="selected">Normal</option>
                                <option class="high" value="3">High</option>
                            </div>
                              </select>
                 </div>
            </div>
            <button class="submit">Add Card</button>
            <button class="cancel">Cancel</button>`
             
            setTimeout(() => {
                list.querySelector('.cancel').addEventListener('click', () =>{
                    listBottomSection.innerHTML = ""
                    listBottomSection.appendChild(listAddCardButton)}
                )
                list.querySelector('.submit').addEventListener('click', () =>{
                    textValue = list.querySelector('textarea').value.trim()
                    if (textValue.length > 0){
                        newCard = document.createElement('div')
                        newCard.classList.add('card')
                        newCard.setAttribute('draggable', true);
                        newCard.innerHTML = textValue + '<i class="far fa-trash-alt"></i>';
                        var color
                        switch (parseInt(list.querySelector('.importance-value').value)) {
                            case 1:
                                color = 'rgb(43,184,231)'
                                break;
                            case 3:
                                color = 'rgb(228,67,67)'
                                    break;
                            default:
                                color = 'white'
                                break;
                        }
                        newCard.style.backgroundColor = color
                        list.querySelector('.card-container').appendChild(newCard)
                        listBottomSection.innerHTML = ""
                    listBottomSection.appendChild(listAddCardButton)}
                    }
                
                )
            }, false);
             
    
    })    
}


var dragged
document.addEventListener("drag", function( event ) {
    event.preventDefault()
}, false);
let rect
let listt
document.addEventListener("dragstart", function( event ) {
    if (event.target.className == 'card') {

    dragged = event.target;
    rect = event.target.parentNode;
    listt = event.target.parentNode.parentNode

    setTimeout(() => {
        rect.parentNode.querySelectorAll('.card-container')[1].classList.add('active')
    rect.parentNode.querySelectorAll('.card-container')[1].style.height = dragged.getBoundingClientRect().height + 'px'
    }, 0);
    }
    
}, false);

document.addEventListener("dragenter", function( event ) {
    if ( event.target.className == "card-container real" ) {
        rect = event.target;
    
        rect.parentNode.querySelectorAll('.card-container')[1].classList.add('active')
        
        rect.parentNode.querySelectorAll('.card-container')[1].style.height = dragged.getBoundingClientRect().height + 'px'

    }
    if ( event.target.className == "list" ) {
        listt = event.target;
        
    }
    
})
document.addEventListener("dragleave", function( event ) {
    
    if(event.clientY <= rect.getBoundingClientRect().top || event.clientY >= rect.getBoundingClientRect().bottom || event.clientX <= rect.getBoundingClientRect().left || event.clientX >= rect.getBoundingClientRect().right) {
        
    }
    setTimeout(() => {
        if (event.clientY <= listt.getBoundingClientRect().top || event.clientY >= listt.getBoundingClientRect().bottom || event.clientX <= listt.getBoundingClientRect().left || event.clientX >= listt.getBoundingClientRect().right) {
            if (event.target.className == 'list') {
                
                event.target.querySelectorAll('.card-container')[1].classList.remove('active');
                event.target.querySelectorAll('.card-container')[1].style.height = 0
            }
            
           }
    }, false);
   
})

document.addEventListener("dragover", function( event ) {
    
    event.preventDefault()
}, false);
document.addEventListener("drop", function( event ) {
   
    event.preventDefault();
    
    
    if ( event.target.className == "card-container active" ) {    
           
        event.target.parentNode.querySelectorAll('.card-container')[0].appendChild(dragged)
        
        
    }
        try {
            toDoList.querySelectorAll('.card-container')[1].classList.remove('active');
            toDoList.querySelectorAll('.card-container')[1].style.height = 0
          }
          catch(err) {

          }
          try {
            doneList.querySelectorAll('.card-container')[1].classList.remove('active');
        doneList.querySelectorAll('.card-container')[1].style.height = 0
          }
          catch(err) {

          }
          try {
            doingList.querySelectorAll('.card-container')[1].classList.remove('active');
        doingList.querySelectorAll('.card-container')[1].style.height = 0
          }
          catch(err) {

          }
         
        
        
    
    
  
}, false);