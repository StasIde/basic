const item1 = {
  name: "Snowboard Jones",
  price: 500,
  count: 1,
  id: "snowboard",
  img: "./img/snowboard.jpeg",
};



const item2 = {
  name: "Wet suit",

  price: 200,
  count: 1,
  id: "suit",
  img: "./img/Wetsuit.jpeg",
};

const item3 = {
  name: "snowboard boots",
  price: 300,
  count: 1,
  id: "snowboardBoots",
  img: "./img/snowboard-boots.jpeg",
};
let basket = [item1, item2, item3];

const itemsContainer = document.getElementById("items");

const result = document.getElementById("result_sum");

const renderItems = function () {
  let data = "";

  basket.forEach(function (item) {
    data =
      data +
      `
    <div class="item_box flex" data-id="${item.id}">
        <button class="remove-btn" data-type="remove">X</button>
        <div class="item_title"><h3>${item.name}</h3></div>
        <div class="item_image">
          <img src="${item.img}" alt="" />
        </div>
        <div class="item_price">
          <p>Цена: <span>${item.price}</span>$</p>
        </div>
        <div class="quantity">
          <button class="minus-btn" data-type="minus">
            -
          </button>
          <input type="text" class="input" value="${item.count}" />
          <button class="plus-btn" data-type="plus">
            +
          </button>
        </div>
      </div>
    `;
  });

  itemsContainer.innerHTML = data;

  const resultValue = basket.reduce(function (accumulator, item) {
    return accumulator + item.price * item.count;
  }, 0);

  result.innerHTML = resultValue;
};

const removeItem = function (id) {
  basket = basket.filter((item) => item.id !== id);

  renderItems();
};

const addItem = function (id) {
  basket = basket.map(function (item) {
    if (item.id === id) {
      return {
        ...item,
        count: item.count + 1,
      };
    }

    return item;
  });

  renderItems();
};

const minusItem = (id) => {
  basket = basket.map((item) => {
    if (item.id === id) {
      if (item.count === 1) {
        return item;
      }

      return {
        ...item,
        count: item.count - 1,
      };
    }

    return item;
  });

  renderItems();
};

renderItems();

document.addEventListener("click", function (event) {
  const el = event.target;
  const elType = el.dataset.type;
  const parent = el.closest(".item_box");
  const elId = parent.dataset.id;

  if (elType === "plus") {
    addItem(elId);
  }

  if (elType === "minus") {
    minusItem(elId);
  }

  if (elType === "remove") {
    removeItem(elId);
  }
});
console.log('log');