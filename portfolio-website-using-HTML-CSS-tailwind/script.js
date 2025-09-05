let sideMenu = document.getElementById('sideMenu');
let navBar = document.querySelector('#nav');
let ul = document.querySelector('nav ul');



function openMenu() {
	sideMenu.style.transform = 'translateX(-16rem)';
}
function closeMenu() {
	sideMenu.style.transform = 'translateX(16rem)';
	
}


window.addEventListener('scroll', () => {
	if (scrollY > 50) {
		navBar.classList.add('dark:bg-transparent', 'bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm')
		ul.classList.remove('bg-white', 'bg-opacity-50', 'shadow-sm')
	} else {
		navBar.classList.remove('dark:bg-transparent', 'bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm')
		ul.classList.add('bg-white', 'bg-opacity-50', 'shadow-sm')
	}
})

/* dark mode */

if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
	document.documentElement.classList.add('dark')
} else {
	document.documentElement.classList.remove('dark')
}



function toggleTheme() {
	document.documentElement.classList.toggle('dark')
	if (document.documentElement.classList.contains('dark')) {
		localStorage.theme = 'dark'
	} else {
		localStorage.theme = 'light'
		
	}
}


