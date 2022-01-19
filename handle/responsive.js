const header = document.getElementById('header')
const mobileMenu = document.querySelector('.js-mobile-menu')
let headerHeight = header.clientHeight
mobileMenu.onclick=()=>{
	header.style.height = (header.clientHeight === headerHeight)?'auto':null
}
const menuItems = document.querySelectorAll('#nav li a[href*="#"]')
menuItems.forEach(menuItem=>{
	menuItem.onclick=e=>{
		const isParentMenu = this?.nextElementSibling?.classList.contains('subnav')
		isParentMenu?e.preventDefault():header.style.height=null
	}
})