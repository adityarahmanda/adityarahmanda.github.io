let systemInitiatedDark = window.matchMedia("(prefers-color-scheme: dark)"); 
let theme = sessionStorage.getItem('theme');
const shapeEl = document.querySelector(".theme-toggle--shape");

function prefersColorTest(systemInitiatedDark) {
    let isPreferDarkTheme = systemInitiatedDark.matches;
    
    if (isPreferDarkTheme) {
        document.documentElement.setAttribute('data-theme', 'dark');		
        sessionStorage.setItem('theme', '');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        sessionStorage.setItem('theme', '');
    }

    const replacedClass = theme === "dark" ? "sun" : "moon";
    const replacedWithClass = theme === "dark" ? "moon" : "sun";
    shapeEl.classList.replace(replacedClass, replacedWithClass);
}
systemInitiatedDark.addEventListener("change", prefersColorTest);

if (theme === "dark") {
	document.documentElement.setAttribute('data-theme', 'dark');
	sessionStorage.setItem('theme', 'dark');
} else if (theme === "light") {
	document.documentElement.setAttribute('data-theme', 'light');
	sessionStorage.setItem('theme', 'light');
}

const replacedClass = theme === "dark" ? "sun" : "moon";
const replacedWithClass = theme === "dark" ? "moon" : "sun";
shapeEl.classList.replace(replacedClass, replacedWithClass);

function toggleTheme()
{
	let theme = sessionStorage.getItem('theme');
    
    if (theme === "dark") {
        document.documentElement.setAttribute('data-theme', 'light');
		sessionStorage.setItem('theme', 'light');
    } else if (theme === "light") {
        document.documentElement.setAttribute('data-theme', 'dark');
        sessionStorage.setItem('theme', 'dark');
    } else if (systemInitiatedDark.matches) {
        document.documentElement.setAttribute('data-theme', 'light');
		sessionStorage.setItem('theme', 'light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
		sessionStorage.setItem('theme', 'dark');
    }

    const replacedClass = theme === "dark" ? "moon" : "sun";
    const replacedWithClass = theme === "dark" ? "sun" : "moon";
    shapeEl.classList.replace(replacedClass, replacedWithClass);

    document.dispatchEvent(new Event('colorSchemeChanged'));
}