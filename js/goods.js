'use strict';

var data = [
  {
    "name": "Мисс креветка",
    "kind": "Зефир",
    "picture": "gum-cedar.jpg",
    "amount": 8,
    "price": 70,
    "weight": 39,
    "rating": {
      "value": 2,
      "number": 759
    },
    "nutritionFacts": {
      "sugar": false,
      "gluten": false,
      "vegetarian": false,
      "energy": 52,
      "contents": "сливки"
    }
  },
  {
    "name": "Чернющий мистер чеснок",
    "kind": "Жевательная резинка",
    "picture": "gum-portwine.jpg",
    "amount": 12,
    "price": 40,
    "weight": 52,
    "rating": {
      "value": 4,
      "number": 898
    },
    "nutritionFacts": {
      "sugar": true,
      "gluten": false,
      "vegetarian": false,
      "energy": 41,
      "contents": "вилларибо, консервант: сорбат калия, сливки, пищевой краситель"
    }
  },
  {
    "name": "Кедровая липучка",
    "kind": "Мороженое",
    "picture": "ice-garlic.jpg",
    "amount": 2,
    "price": 90,
    "weight": 90,
    "rating": {
      "value": 2,
      "number": 817
    },
    "nutritionFacts": {
      "sugar": true,
      "gluten": false,
      "vegetarian": false,
      "energy": 23,
      "contents": "патока, ксилит "
    }
  },
  {
    "name": "Кукурузное утро",
    "kind": "Жевательная резинка",
    "picture": "marmalade-beer.jpg",
    "amount": 8,
    "price": 90,
    "weight": 70,
    "rating": {
      "value": 4,
      "number": 741
    },
    "nutritionFacts": {
      "sugar": true,
      "gluten": false,
      "vegetarian": true,
      "energy": 2,
      "contents": "посолочная смесь: соль, нитрит натрия, консервант: сорбат калия"
    }
  },
  {
    "name": "Корманный портвейн",
    "kind": "Мороженое",
    "picture": "marmalade-sour.jpg",
    "amount": 11,
    "price": 60,
    "weight": 77,
    "rating": {
      "value": 4,
      "number": 603
    },
    "nutritionFacts": {
      "sugar": true,
      "gluten": false,
      "vegetarian": false,
      "energy": 37,
      "contents": "пищевой краситель, эмульгатор"
    }
  },
  {
    "name": "Початок в бутылке",
    "kind": "Зефир",
    "picture": "marshmallow-spicy.jpg",
    "amount": 11,
    "price": 0,
    "weight": 38,
    "rating": {
      "value": 4,
      "number": 530
    },
    "nutritionFacts": {
      "sugar": true,
      "gluten": false,
      "vegetarian": false,
      "energy": 22,
      "contents": "лимонная кислота, виллабаджо, консервант: сорбат калия, карбамид"
    }
  },
  {
    "name": "Огуречный педант",
    "kind": "Газировка",
    "picture": "soda-cob.jpg",
    "amount": 9,
    "price": 70,
    "weight": 66,
    "rating": {
      "value": 2,
      "number": 232
    },
    "nutritionFacts": {
      "sugar": true,
      "gluten": true,
      "vegetarian": true,
      "energy": 29,
      "contents": "ароматизатор бекона, сливки, лимонная кислота, вода"
    }
  },
  {
    "name": "Нинзя-удар васаби",
    "kind": "Зефир",
    "picture": "gum-chile.jpg",
    "amount": 9,
    "price": 40,
    "weight": 92,
    "rating": {
      "value": 2,
      "number": 134
    },
    "nutritionFacts": {
      "sugar": true,
      "gluten": true,
      "vegetarian": true,
      "energy": 29,
      "contents": "вилларибо, карбамид"
    }
  },
  {
    "name": "Раша федераша",
    "kind": "Зефир",
    "picture": "gum-wasabi.jpg",
    "amount": 18,
    "price": 0,
    "weight": 78,
    "rating": {
      "value": 2,
      "number": 840
    },
    "nutritionFacts": {
      "sugar": false,
      "gluten": false,
      "vegetarian": false,
      "energy": 64,
      "contents": "сливки, вода, посолочная смесь: соль, нитрит натрия, ароматизатор дуба, идентичный натуральному"
    }
  },
  {
    "name": "Грибной шейк",
    "kind": "Мармелад",
    "picture": "ice-italian.jpg",
    "amount": 4,
    "price": 90,
    "weight": 82,
    "rating": {
      "value": 4,
      "number": 360
    },
    "nutritionFacts": {
      "sugar": true,
      "gluten": false,
      "vegetarian": true,
      "energy": 59,
      "contents": "вода, эмульгатор"
    }
  },
  {
    "name": "Горчичный вызов",
    "kind": "Зефир",
    "picture": "marmalade-caviar.jpg",
    "amount": 16,
    "price": 50,
    "weight": 75,
    "rating": {
      "value": 4,
      "number": 350
    },
    "nutritionFacts": {
      "sugar": false,
      "gluten": false,
      "vegetarian": true,
      "energy": 26,
      "contents": "посолочная смесь: соль, нитрит натрия, ароматизатор дуба, идентичный натуральному"
    }
  },
  {
    "name": "Баклажановое безумие",
    "kind": "Мармелад",
    "picture": "marshmallow-bacon.jpg",
    "amount": 4,
    "price": 30,
    "weight": 61,
    "rating": {
      "value": 1,
      "number": 849
    },
    "nutritionFacts": {
      "sugar": true,
      "gluten": true,
      "vegetarian": true,
      "energy": 7,
      "contents": "молоко, сливки, загуститель, виллабаджо"
    }
  },
  {
    "name": "Кислая мина",
    "kind": "Газировка",
    "picture": "marshmallow-wine.jpg",
    "amount": 2,
    "price": 60,
    "weight": 41,
    "rating": {
      "value": 3,
      "number": 201
    },
    "nutritionFacts": {
      "sugar": false,
      "gluten": true,
      "vegetarian": true,
      "energy": 39,
      "contents": "ароматизатор дуба, идентичный натуральному, загуститель"
    }
  },
  {
    "name": "Чесночные сливки",
    "kind": "Мороженое",
    "picture": "soda-garlic.jpg",
    "amount": 8,
    "price": 50,
    "weight": 74,
    "rating": {
      "value": 2,
      "number": 580
    },
    "nutritionFacts": {
      "sugar": false,
      "gluten": false,
      "vegetarian": false,
      "energy": 1,
      "contents": "консервант: сорбат калия"
    }
  },
  {
    "name": "Чилийский задира",
    "kind": "Жевательная резинка",
    "picture": "gum-eggplant.jpg",
    "amount": 3,
    "price": 20,
    "weight": 44,
    "rating": {
      "value": 2,
      "number": 50
    },
    "nutritionFacts": {
      "sugar": false,
      "gluten": false,
      "vegetarian": true,
      "energy": 65,
      "contents": "ароматизатор дуба, идентичный натуральному, ароматизатор свинца"
    }
  },
  {
    "name": "Острый язычок",
    "kind": "Мороженое",
    "picture": "ice-cucumber.jpg",
    "amount": 14,
    "price": 90,
    "weight": 80,
    "rating": {
      "value": 4,
      "number": 205
    },
    "nutritionFacts": {
      "sugar": true,
      "gluten": false,
      "vegetarian": true,
      "energy": 42,
      "contents": "загуститель, лимонная кислота, ароматизатор дуба, идентичный натуральному, вилларибо"
    }
  },
  {
    "name": "С пивком потянет",
    "kind": "Жевательная резинка",
    "picture": "ice-mushroom.jpg",
    "amount": 1,
    "price": 50,
    "weight": 36,
    "rating": {
      "value": 1,
      "number": 301
    },
    "nutritionFacts": {
      "sugar": false,
      "gluten": true,
      "vegetarian": true,
      "energy": 31,
      "contents": "молоко, посолочная смесь: соль, нитрит натрия, ароматизатор картофеля, эмульгатор"
    }
  },
  {
    "name": "Бельгийское пенное",
    "kind": "Мороженое",
    "picture": "marmalade-corn.jpg",
    "amount": 3,
    "price": 90,
    "weight": 94,
    "rating": {
      "value": 1,
      "number": 340
    },
    "nutritionFacts": {
      "sugar": false,
      "gluten": true,
      "vegetarian": true,
      "energy": 52,
      "contents": "консервант: сорбат калия, вода, пищевой краситель, загуститель"
    }
  },
  {
    "name": "Беконовый взрыв",
    "kind": "Мармелад",
    "picture": "marshmallow-beer.jpg",
    "amount": 13,
    "price": 50,
    "weight": 55,
    "rating": {
      "value": 1,
      "number": 752
    },
    "nutritionFacts": {
      "sugar": false,
      "gluten": false,
      "vegetarian": false,
      "energy": 11,
      "contents": "ароматизатор дуба, идентичный натуральному, вода, посолочная смесь: соль, нитрит натрия, ароматизатор бекона"
    }
  },
  {
    "name": "Молочная хрюша",
    "kind": "Жевательная резинка",
    "picture": "soda-bacon.jpg",
    "amount": 13,
    "price": 20,
    "weight": 35,
    "rating": {
      "value": 1,
      "number": 645
    },
    "nutritionFacts": {
      "sugar": true,
      "gluten": true,
      "vegetarian": true,
      "energy": 67,
      "contents": "ксилит , посолочная смесь: соль, нитрит натрия"
    }
  },
  {
    "name": "Арахис vs виноград",
    "kind": "Жевательная резинка",
    "picture": "soda-peanut-grapes.jpg",
    "amount": 18,
    "price": 30,
    "weight": 70,
    "rating": {
      "value": 4,
      "number": 751
    },
    "nutritionFacts": {
      "sugar": false,
      "gluten": false,
      "vegetarian": false,
      "energy": 11,
      "contents": "посолочная смесь: соль, нитрит натрия, ксилит , ароматизатор дуба, идентичный натуральному, пищевой краситель"
    }
  },
  {
    "name": "Сельдерейная душа",
    "kind": "Газировка",
    "picture": "gum-mustard.jpg",
    "amount": 17,
    "price": 90,
    "weight": 87,
    "rating": {
      "value": 1,
      "number": 281
    },
    "nutritionFacts": {
      "sugar": true,
      "gluten": true,
      "vegetarian": true,
      "energy": 5,
      "contents": "пищевой краситель, посолочная смесь: соль, нитрит натрия"
    }
  },
  {
    "name": "Икорный фуршет",
    "kind": "Мармелад",
    "picture": "ice-eggplant.jpg",
    "amount": 6,
    "price": 80,
    "weight": 54,
    "rating": {
      "value": 3,
      "number": 98
    },
    "nutritionFacts": {
      "sugar": true,
      "gluten": true,
      "vegetarian": true,
      "energy": 9,
      "contents": "эмульгатор"
    }
  },
  {
    "name": "Паприколу итальяно",
    "kind": "Газировка",
    "picture": "ice-pig.jpg",
    "amount": 6,
    "price": 0,
    "weight": 32,
    "rating": {
      "value": 2,
      "number": 554
    },
    "nutritionFacts": {
      "sugar": true,
      "gluten": true,
      "vegetarian": false,
      "energy": 51,
      "contents": "ароматизатор картофеля, ароматизатор бекона"
    }
  },
  {
    "name": "Невинные винные",
    "kind": "Мармелад",
    "picture": "marmalade-new-year.jpg",
    "amount": 13,
    "price": 30,
    "weight": 89,
    "rating": {
      "value": 3,
      "number": 364
    },
    "nutritionFacts": {
      "sugar": true,
      "gluten": true,
      "vegetarian": false,
      "energy": 20,
      "contents": "вилларибо, ароматизатор свинца"
    }
  },
  {
    "name": "Новогоднее настроение",
    "kind": "Мороженое",
    "picture": "marshmallow-shrimp.jpg",
    "amount": 10,
    "price": 20,
    "weight": 59,
    "rating": {
      "value": 2,
      "number": 45
    },
    "nutritionFacts": {
      "sugar": true,
      "gluten": true,
      "vegetarian": false,
      "energy": 37,
      "contents": "посолочная смесь: соль, нитрит натрия"
    }
  },
  {
    "name": "Хитрый баклажан",
    "kind": "Мармелад",
    "picture": "soda-celery.jpg",
    "amount": 8,
    "price": 0,
    "weight": 81,
    "rating": {
      "value": 4,
      "number": 413
    },
    "nutritionFacts": {
      "sugar": true,
      "gluten": false,
      "vegetarian": true,
      "energy": 10,
      "contents": "пищевой краситель"
    }
  },
  {
    "name": "Бесконечный взрыв",
    "kind": "Зефир",
    "picture": "soda-russian.jpg",
    "amount": 14,
    "price": 80,
    "weight": 85,
    "rating": {
      "value": 2,
      "number": 239
    },
    "nutritionFacts": {
      "sugar": false,
      "gluten": false,
      "vegetarian": false,
      "energy": 53,
      "contents": "консервант: сорбат калия"
    }
  }
];

var testData = {
    "name": "Бесконечный взрыв",
    "kind": "Зефир",
    "picture": "soda-russian.jpg",
    "amount": 0,
    "price": 80,
    "weight": 85,
    "rating": {
      "value": 2,
      "number": 239
    },
    "nutritionFacts": {
      "sugar": false,
      "gluten": false,
      "vegetarian": false,
      "energy": 53,
      "contents": "консервант: сорбат калия"
    }
  };

// Контейнер сообщения о загрузке данных
var catalogCardsList = document.querySelector('.catalog__cards');
catalogCardsList.classList.remove('catalog__cards--load');
// Сообщение загрузки
var loadMessage = catalogCardsList.querySelector('.catalog__load');
loadMessage.classList.add('visually-hidden');

// Шаблон карточки товара
var cardItemTemplate = document.querySelector('#card').content;

// Получить рейтинг товара
var getStarRaiting = function (rating) {
  var starRating;

  switch (rating) {
    case 1:
      starRating = 'stars__rating--one';
      break;
    case 2:
      starRating = 'stars__rating--two';
      break;
    case 3:
      starRating = 'stars__rating--three';
      break;
    case 4:
      starRating = 'stars__rating--four';
      break;
    case 5:
      starRating = 'stars__rating--five';
      break;
  }

  return starRating;
};

// Получить класс состояния товара
var getCardClass = function (amount) {
  var cardClassName;

  if (amount > 5) {
    cardClassName = 'card--in-stock';
  } else if (amount >= 1 && amount <= 5) {
    cardClassName = 'card--little';
  } else if (amount === 0) {
    cardClassName = 'card--soon';
  }

  return cardClassName;
};

// Получить сообщение
var getCharacteristicMessage = function (msg) {
  var message;

  if (msg) {
    message = 'Содержит сахар';
  } else {
    message = "Без сахара";
  }

  return message;
};

// Создать карточку товара
var createCard = function (card) {
  var newCardItem = cardItemTemplate.querySelector('.catalog__card').cloneNode(true);
  newCardItem.querySelector('.card__title').textContent = card.name;
  newCardItem.querySelector('.card__price').firstChild.textContent = card.price + ' ';
  newCardItem.querySelector('.card__weight').textContent = '/' + card.weight + 'г';
  newCardItem.classList.remove('card--in-stock');
  newCardItem.classList.add(getCardClass(card.amount));
  newCardItem.querySelector('.stars__rating').classList.remove('stars__rating--five');
  newCardItem.querySelector('.stars__rating').classList.add(getStarRaiting(card.rating.value));
  newCardItem.querySelector('.star__count').textContent = '(' + card.rating.number + ')';
  newCardItem.querySelector('.card__characteristic').textContent = getCharacteristicMessage(card.nutritionFacts.sugar);
  newCardItem.querySelector('.card__composition-list').textContent = card.nutritionFacts.contents;

  return newCardItem;
};

// Отрисовать карточки товара
var renderCards = function (cards) {
  var cardsContainer = document.createDocumentFragment();
  for (var i = 0; i <= 8; i++) {
    cardsContainer.appendChild(createCard(cards[i]));
  }
  catalogCardsList.appendChild(cardsContainer);
};

renderCards(data);

