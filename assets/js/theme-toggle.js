let systemInitiatedDark = window.matchMedia("(prefers-color-scheme: dark)"); 
let theme = localStorage.getItem('theme');
const shapeEl = document.querySelector(".theme-toggle--shape");

function prefersColorTest(systemInitiatedDark) {
    let isPreferDarkTheme = systemInitiatedDark.matches;
    
    if (isPreferDarkTheme) {
        document.documentElement.setAttribute('data-theme', 'dark');		
        shapeEl.classList.remove("sun");
        shapeEl.classList.add("moon");
        localStorage.setItem('theme', '');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        shapeEl.classList.remove("moon");
        shapeEl.classList.add("sun");
        localStorage.setItem('theme', '');
    }
}
systemInitiatedDark.addEventListener("change", prefersColorTest);

if (theme === "dark") {
	document.documentElement.setAttribute('data-theme', 'dark');
    shapeEl.classList.remove("sun");
    shapeEl.classList.add("moon");
	localStorage.setItem('theme', 'dark');
} else if (theme === "light") {
	document.documentElement.setAttribute('data-theme', 'light');
    shapeEl.classList.remove("moon");
    shapeEl.classList.add("sun");
	localStorage.setItem('theme', 'light');
}

function toggleTheme()
{
	let theme = localStorage.getItem('theme');
    
    if (theme === "dark") {
        document.documentElement.setAttribute('data-theme', 'light');
        shapeEl.classList.remove("moon");
        shapeEl.classList.add("sun");
		localStorage.setItem('theme', 'light');
    } else if (theme === "light") {
        document.documentElement.setAttribute('data-theme', 'dark');
        shapeEl.classList.remove("sun");
        shapeEl.classList.add("moon");
        localStorage.setItem('theme', 'dark');
    } else if (systemInitiatedDark.matches) {
        document.documentElement.setAttribute('data-theme', 'light');
        shapeEl.classList.remove("moon");
        shapeEl.classList.add("sun");
		localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        shapeEl.classList.remove("sun");
        shapeEl.classList.add("moon");
		localStorage.setItem('theme', 'dark');
    }

    document.dispatchEvent(new Event('colorSchemeChanged'));
}