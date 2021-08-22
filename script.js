document.addEventListener("DOMContentLoaded", function () {
	const lazyloadImages = document.querySelectorAll(".lazy");
	const imageObserver = new IntersectionObserver(function (entries) {
		entries.forEach(function (entry) {
			if (entry.isIntersecting) {
				const image = entry.target;
				image.src = image.dataset.src;
				image.classList.remove("lazy");
				imageObserver.unobserve(image);
			}
		});
	});

	lazyloadImages.forEach(function (image) {
		imageObserver.observe(image);
	});
});
