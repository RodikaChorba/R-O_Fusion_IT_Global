import { translations } from "./languages.js";

// Функція для зміни мови
function changeLanguage(lang) {
  console.log("Зміна мови на:", lang);
  const translation = translations[lang];
  if (!translation) {
    console.warn(`Переклад для мови "${lang}" не знайдено.`);
    return;
  }

  // Оновлюємо атрибут lang у тезі <html>
  document.documentElement.lang = lang;

  // Оновлено текст на сторінці
  document.querySelectorAll("[data-key]").forEach((element) => {
    const key = element.getAttribute("data-key");
    if (translation[key]) {
      element.textContent = translation[key];
    } else {
      console.warn(
        `Ключ "${key}" не знайдено в перекладах для мови "${lang}".`
      );
    }
  });

  // Зберігаємо вибрану мову в localStorage
  localStorage.setItem("language", lang);
}

// Збереження мови
function saveLanguage(lang) {
  localStorage.setItem("language", lang);
}

// Завантаження збереженої мови
function loadLanguage() {
  const lang = localStorage.getItem("language") || "en"; // Мова за замовчуванням
  changeLanguage(lang);
  const languageSwitcher = document.getElementById("language-switcher");
  if (languageSwitcher) {
    languageSwitcher.value = lang;
  }
}

// Перевірка наявності елементів перед додаванням обробників подій
const languageSwitcher = document.getElementById("language-switcher");
if (languageSwitcher) {
  languageSwitcher.addEventListener("change", function (event) {
    const lang = event.target.value;
    changeLanguage(lang);
    saveLanguage(lang);
  });
}

// Обробник подій для форми
const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    alert(
      "Дякуємо за ваше повідомлення! Ми зв’яжемося з вами найближчим часом."
    );
  });
}
// Завантажити мову при завантаженні сторінки
window.addEventListener("load", loadLanguage);

// Приклад виклику функції (опціонально)
changeLanguage("en"); // Змінити мову на англійську
