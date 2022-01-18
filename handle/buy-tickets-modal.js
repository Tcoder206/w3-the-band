const tickets = document.querySelectorAll('.js-handle-ticket-btn')
const modal = document.querySelector('.modal')
tickets.forEach(ticket=>{
	ticket.addEventListener('click',()=>{
		modal.classList.add('open-modal')
	})
})
document.querySelector('.modal-close').addEventListener('click',()=>{
	modal.classList.remove('open-modal')
})
modal.addEventListener('click',()=>{
	modal.classList.remove('open-modal')
})
document.querySelector('.js-click-modal').addEventListener('click',e=>{
	e.stopPropagation()
})