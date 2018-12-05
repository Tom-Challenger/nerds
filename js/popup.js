var link = document.querySelector(".business-card__button-feedback-open");
var popup = document.querySelector(".modal-feedback");
var close = popup.querySelector(".modal-feedback-close");
var form = popup.querySelector(".feedback-form");
var email = popup.querySelector("[name=email]");


link.addEventListener("click", function (evt) {
	evt.preventDefault();// Перехватываем реакцию по умолчанию
	popup.classList.remove("hidden");
	popup.classList.add("modal-show");
});


close.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.add("hidden");
	popup.classList.remove("modal-show");
	popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
	if (!email.value) {
		evt.preventDefault();
		popup.classList.remove("modal-error");
		popup.offsetWidth = popup.offsetWidth;
		popup.classList.add("modal-error");
	}
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		evt.preventDefault();

		if (!popup.classList.contains("hidden")) {
			popup.classList.add("hidden");
			popup.classList.remove("modal-show");
			popup.classList.remove("modal-error");
		}
	}
});