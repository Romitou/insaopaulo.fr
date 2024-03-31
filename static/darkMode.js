function setDarkMode () {
    const root = document.querySelector(':root');
    if (getComputedStyle(root).getPropertyValue('--text-color') == '#010104') {
        root.style.setProperty('--background-color', '#010104');
        root.style.setProperty('--primary-color', '#68D63C');
        root.style.setProperty('--secondary-color', '#5EC5C0');
        root.style.setProperty('--accent-color', '#D1E537');
        root.style.setProperty('--text-color', '#eae9fc');
        root.style.setProperty('--text-color-30', '#eae9fc60');
        root.style.setProperty('--header-color', '#1c1c1c');
        document.getElementById('ytLogo').setAttribute('stroke', 'white');
        document.getElementById('darkmode').querySelector('svg#dark').style.opacity = 0;
        document.getElementById('darkmode').querySelector('svg#light').style.opacity = 1;
    }
}

function unsetDarkMode () {
    const root = document.querySelector(':root');
    if (getComputedStyle(root).getPropertyValue('--text-color') != '#010104') {
        root.style.setProperty('--background-color', '#e7dede');
        root.style.setProperty('--primary-color', '#30A501');
        root.style.setProperty('--secondary-color', '#3AA29D');
        root.style.setProperty('--accent-color', '#DAF22D');
        root.style.setProperty('--text-color', '#010104');
        root.style.setProperty('--text-color-30', '#01010460');
        root.style.setProperty('--header-color', 'white');
        document.getElementById('ytLogo').setAttribute('stroke', 'black');
        document.getElementById('darkmode').querySelector('svg#dark').style.opacity = 1;
        document.getElementById('darkmode').querySelector('svg#light').style.opacity = 0;
    }
}

function toggleDarkMode () {
    const root = document.querySelector(':root');
    if (getComputedStyle(root).getPropertyValue('--text-color') == '#010104') {
        setDarkMode()
    }
    else {
        unsetDarkMode()
    }
}

const runColorMode = (fn) => {
    if (!window.matchMedia) {
      return;
    }
    
    const query = window.matchMedia('(prefers-color-scheme: dark)');
  
    fn(query.matches);
  
    query.addEventListener('change', (event) => fn(event.matches));
}