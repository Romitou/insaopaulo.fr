export function setDarkMode () {
    const root = document.querySelector(':root');
    if (getComputedStyle(root).getPropertyValue('--text-color') == '#010104') {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
}

export function unsetDarkMode () {
    const root = document.querySelector(':root');
    if (getComputedStyle(root).getPropertyValue('--text-color') != '#010104') {
        document.documentElement.setAttribute('data-theme', 'light');
    }
}

export function toggleDarkMode () {
    const root = document.querySelector(':root');
    if (getComputedStyle(root).getPropertyValue('--text-color') == '#010104') {
        setDarkMode()
    }
    else {
        unsetDarkMode()
    }
}

export const runColorMode = (fn) => {
    if (!window.matchMedia) {
      return;
    }

    const query = window.matchMedia('(prefers-color-scheme: dark)');

    fn(query.matches);

    query.addEventListener('change', (event) => fn(event.matches));
}
