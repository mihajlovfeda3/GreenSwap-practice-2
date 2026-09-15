const plants = [
  { name: "Монстера", type: "indoor", owner: "Анна", status: "Доступно" },
  { name: "Базилик", type: "seeds", owner: "Илья", status: "Доступно" },
  { name: "Фикус", type: "indoor", owner: "Мария", status: "Забронировано" }
];

const list = document.querySelector("#plant-list");
const filter = document.querySelector("#type-filter");

function render(selectedType = "all") {
  const visible = plants.filter(({ type }) => selectedType === "all" || type === selectedType);
  list.innerHTML = visible.map(({ name, owner, status }) => `
    <article class="card">
      <div class="card-topline">
        <span class="status ${status === "Доступно" ? "available" : "reserved"}">${status}</span>
      </div>
      <h3>${name}</h3>
      <p class="owner">Владелец: <strong>${owner}</strong></p>
    </article>
  `).join("");
}

filter.addEventListener("change", (event) => render(event.target.value));
render();
