document.addEventListener("DOMContentLoaded", () => {
  const interestsList = document.querySelector(".list ul");
  const addButton = document.querySelector(".button-add");
  const interestInput = document.querySelector(".form input");
  const clearButton = document.querySelector(".button-clear");
  const newsTitleElement = document.querySelector(".title-news-today");

  function loadInterests() {
    const interests = JSON.parse(localStorage.getItem("meus-interesses")) || [];

    interestsList.innerHTML = "";

    interests.forEach((interest) => {
      const li = document.createElement("li");
      li.textContent = interest;
      interestsList.appendChild(li);
    });
  }

  function addInterest() {
    const interest = interestInput.value.trim();
    if (interest === "") return;

    let interests = JSON.parse(localStorage.getItem("meus-interesses")) || [];
    interests.push(interest);
    localStorage.setItem("meus-interesses", JSON.stringify(interests));

    const li = document.createElement("li");
    li.textContent = interest;
    interestsList.appendChild(li);

    interestInput.value = "";
  }

  function clearInterests() {
    localStorage.removeItem("meus-interesses");
    while (interestsList.firstChild) {
      interestsList.removeChild(interestsList.firstChild);
    }
  }

  async function loadNews() {
    try {
      const response = await fetch(
        "https://servicodados.ibge.gov.br/api/v3/noticias/?tipo=release"
      );
      const data = await response.json();
      if (data.items && data.items.length > 0) {
        const firstNews = data.items[0];
        console.log(data);
        newsTitleElement.textContent = firstNews.titulo;
      } else {
        newsTitleElement.textContent = "Nenhuma notícia encontrada";
      }
    } catch (error) {
      console.error("Erro ao carregar notícias:", error);
      newsTitleElement.textContent = "Erro ao carregar notícias";
    }
  }

  addButton.addEventListener("click", addInterest);
  clearButton.addEventListener("click", clearInterests);

  setInterval(loadInterests, 1000);

  loadNews();
});
