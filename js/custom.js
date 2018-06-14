
const portfolioContainer = document.querySelector('.portfolio-items');
//console.log(portfolioContainer);

portfolioContainer.addEventListener('click', e => {
  //console.log(e);

  const modalToggle = e.target.closest('.project-link')
  console.log(modalToggle);

  if(!modalToggle) return

  const toggle = modalToggle.parentNode.parentNode.nextElementSibling
  console.log(toggle);

  const modalClose = toggle.querySelector('.modal-close')

  const modalOpen = _ =>{
    toggle.classList.add('show-modal')
    toggle.style.animation = 'modalIn 500ms forwards'
    document.body.style.overflowY = 'hidden'
  }

  const modalClosefn = _ =>{
    toggle.classList.remove('show-modal')
    toggle.removeEventListener('animationend',modalClosefn)
  }

  modalClose.addEventListener('click', _ =>{

    toggle.style.animation = 'modalOut 500ms forwards'
    toggle.addEventListener('animationend',modalClosefn)
    document.body.style.overflowY = 'scroll'


  })
  document.addEventListener('keydown', e =>{
      console.log(e);

    console.log(e.keyCode)
    if(e.keyCode === 27){
    toggle.style.animation = 'modalOut 500ms forwards'
    toggle.addEventListener('animationend',modalClosefn)
    document.body.style.overflowY = 'scroll'
    }
  })

  modalOpen()
  
})

