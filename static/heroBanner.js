function goToSection (page, section) {
    document.querySelector('div.page.'+page).scrollTo({top: document.querySelector('div.section.'+section).clientHeight, behavior: 'smooth',});
}