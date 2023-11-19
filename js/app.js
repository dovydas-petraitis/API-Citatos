document.addEventListener("DOMContentLoaded", function () {
    
    fetch("https://strangerthings-quotes.vercel.app/api/quotes/50")
        .then(response => response.json())
        .then(data => {
            
            const quoteContainer = document.getElementById("quoteContainer");
            const carouselIndicators = document.getElementById("carouselIndicators");

            if (data) {
            
                data.forEach((quote, index) => {

                    const carouselItem = document.createElement("article");
                    carouselItem.classList.add("carousel-item");
                    
                    if (index === 0) {
                        carouselItem.classList.add("active");
                    }

                    const quoteImg = document.createElement("img");
                    quoteImg.classList.add("quote-image");
                    quoteImg.src = "img/quote.png";

                    const quoteText = document.createElement("p");
                    quoteText.classList.add("lead");

                    quoteText.appendChild(quoteImg);
                    
                    quoteText.appendChild(document.createTextNode(" " + quote.quote));

                    const authorText = document.createElement("h4");
                    authorText.classList.add("name");
                    authorText.innerText = `- ${quote.author}`;

                    carouselItem.appendChild(quoteText);
                    carouselItem.appendChild(authorText);

                    quoteContainer.appendChild(carouselItem);

                    const indicator = document.createElement("button");
                    indicator.setAttribute("type", "button");
                    indicator.setAttribute("data-bs-target", "#carousel");
                    indicator.setAttribute("data-bs-slide-to", index.toString());

                    if (index === 0) {
                        indicator.classList.add("active");
                    }

                    carouselIndicators.appendChild(indicator);
                });

                new bootstrap.Carousel(document.getElementById("carousel"));
            } else {
                console.error("Klaida gaudant duomenis.", error);
            }
        })
});
