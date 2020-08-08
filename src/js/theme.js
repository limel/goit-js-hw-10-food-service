const theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  currentLocalStorage: localStorage.getItem('theme'),
  switch: document.querySelector('.js-switch-input'),
  body: document.querySelector('body'),
};

// localStorage.setItem('theme', theme.DARK);
// localStorage.setItem('theme', theme.LIGHT);
// console.log(refs.currentLocalStorage);

const setDarkTheme = () => {
  localStorage.setItem('theme', theme.DARK);
  refs.body.classList.add(theme.DARK);
  refs.body.classList.remove(theme.LIGHT);
};

const setLightTheme = () => {
  localStorage.setItem('theme', theme.LIGHT);
  refs.body.classList.add(theme.LIGHT);
  refs.body.classList.remove(theme.DARK);
};

const onThemeChenge = event => {
  if (event.target.checked) {
    setDarkTheme();
  } else {
    setLightTheme();
  }
};

const checkLocalStorage = () => {
  if (refs.currentLocalStorage) {
    refs.body.classList.add(refs.currentLocalStorage);
    if (refs.currentLocalStorage === theme.DARK) {
      refs.switch.checked = true;
    } else {
      ('');
    }
  }
};

checkLocalStorage();
refs.switch.addEventListener('change', onThemeChenge);
