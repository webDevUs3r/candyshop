'use strict';

(function () {
  var findPriceValue = window.findPriceValue;
  var getUnique = window.utils.getUnique;
  var debounce = window.utils.debounce;

  var filterSubmitButton = document.querySelector('.catalog__submit');

  var rangePriceMin = document.querySelector('.range__price--min');
  var rangePriceMax = document.querySelector('.range__price--max');

  var filterTypeArea = document.querySelector('.catalog__filter.type');
  var filterPropertyArea = document.querySelector('.catalog__filter.property');
  var filterPriceArea = document.querySelector('.catalog__filter.range');
  var filterSortArea = document.querySelector('.catalog__filter.sort');
  var favoriteInput = document.querySelector('#filter-favorite');
  var availabilityInput = document.querySelector('#filter-availability');

  var filterArea = document.querySelector('.catalog__sidebar');

  var typeFilterInputs = filterArea.querySelectorAll('input[name="food-type"]');
  var propertyFilterInputs = filterArea.querySelectorAll('input[name="food-property"]');
  var sortFilterInputs = filterArea.querySelectorAll('input[name="sort"]');

  var nutritionFacts = ['sugar', 'vegetarian', 'gluten'];
  var nutritionFactsCounts = [0, 0, 0];
  var availabilityAmount = 0;

  var valueToKind = {
    'marshmallows': 'Зефир',
    'marmalade': 'Мармелад',
    'icecream': 'Мороженое',
    'soda': 'Газировка',
    'gum': 'Жевательная резинка'
  };

  var valueToFact = {
    'sugar-free': 'sugar',
    'vegetarian': 'vegetarian',
    'gluten-free': 'gluten'
  };

  var activeFilters = {
    type: null,
    property: null,
    price: null,
    sort: null,
    favorite: null,
    availability: null
  };

  var typeInputsContainers = Array.prototype.map.call(typeFilterInputs, function (input) {
    return input.parentNode;
  });

  var propertyInputsContainers = Array.prototype.map.call(propertyFilterInputs, function (input) {
    return input.parentNode;
  });

  var findNumberByType = function (goods) {
    typeInputsContainers.forEach(function (item) {
      var typeName = item.querySelector('label').textContent;

      var goodsNum = goods.filter(function (good) {
        return good.kind === typeName;
      }).length;

      item.querySelector('.input-btn__item-count').textContent = '(' + goodsNum + ')';
    });
  };

  var findNumberByProperty = function (goods) {
    goods.forEach(function (item, i) {
      nutritionFacts.forEach(function (fact, j) {

        if (fact === 'vegetarian') {
          if (goods[i].nutritionFacts[fact]) {
            nutritionFactsCounts[j]++;
          }
        } else {
          if (!goods[i].nutritionFacts[fact]) {
            nutritionFactsCounts[j]++;
          }
        }
      });
    });

    propertyInputsContainers.forEach(function (item, i) {
      item.querySelector('.input-btn__item-count').textContent = '(' + nutritionFactsCounts[i] + ')';
    });
  };

  var findGoodsNumber = function (goods) {
    findNumberByType(goods);
    findNumberByProperty(goods);

    favoriteInput.parentNode.querySelector('.input-btn__item-count').textContent = '(0)';

    goods.forEach(function (item) {
      if (item.amount > 0) {
        availabilityAmount++;
      }
    });

    availabilityInput.parentNode.querySelector('.input-btn__item-count').textContent = '(' + availabilityAmount + ')';
  };

  var getActiveInputsValue = function (inputs) {
    var activeInputs = [];
    Array.prototype.forEach.call(inputs, function (input) {
      if (input.checked) {
        activeInputs.push(input.value);
      }
    });
    return activeInputs;
  };

  var checkedActiveValues = function (name, filterInputs) {
    var activeInputs = getActiveInputsValue(filterInputs);
    activeFilters[name] = (!activeInputs.length) ? null : activeInputs;
  };

  var resetFilters = function () {
    var activeFiltersKeys = Object.keys(activeFilters);
    activeFiltersKeys.forEach(function (keys) {
      activeFilters[keys] = null;
    });

    findPriceValue(window.goods.data);

    Array.prototype.forEach.call(typeFilterInputs, function (input) {
      input.checked = false;
    });

    Array.prototype.forEach.call(propertyFilterInputs, function (input) {
      input.checked = false;
    });

    sortFilterInputs[0].checked = true;
    favoriteInput.checked = false;
    availabilityInput.checked = false;
  };

  var getFilteredByType = function (goods, values) {
    var filteredByTypeGoods = [];

    values.forEach(function (value) {
      filteredByTypeGoods = filteredByTypeGoods.concat(goods.filter(function (good) {
        return good.kind === valueToKind[value];
      }));
    });

    return filteredByTypeGoods;
  };

  var getFilteredByProperty = function (goods, values) {
    var filteredByPropertyGoods = [];

    values.forEach(function (value) {
      var boolStatus = (value === 'vegetarian');

      filteredByPropertyGoods = filteredByPropertyGoods.concat(goods.filter(function (item) {
        return item.nutritionFacts[valueToFact[value]] === boolStatus;
      }));
    });

    return getUnique(filteredByPropertyGoods);
  };

  var getFilteredByPrice = function (goods, values) {
    return goods.filter(function (item) {
      return item.price <= values.max && item.price >= values.min;
    });
  };

  var showFavoriteGoods = function (goods, value) {
    if (value) {

      var favoriteGoods = window.goods.favorite;
      var filteredByfavoriteGoods = [];

      favoriteGoods.forEach(function (favoriteItem) {
        filteredByfavoriteGoods = filteredByfavoriteGoods.concat(goods.filter(function (good) {
          return good.name === favoriteItem.name;
        }));
      });
      return filteredByfavoriteGoods;
    }
    return goods;
  };

  var showAvailabilityGoods = function (goods, value) {
    if (value) {
      return goods.filter(function (good) {
        return good.amount > 0;
      });
    }
    return goods;
  };

  var getSorteredGoods = function (goods, values) {
    var sorteredGoods = [];

    values.forEach(function (valueItem) {
      sorteredGoods = goods.sort(function (a, b) {
        if (valueItem === 'popular') {
          return b.rating.number - a.rating.number;

        } else if (valueItem === 'expensive') {
          return b.price - a.price;

        } else if (valueItem === 'cheep') {
          return a.price - b.price;

        } else if (valueItem === 'rating') {
          return b.rating.value - a.rating.value;
        }
        return null;
      });
    });
    return sorteredGoods;
  };

  var clickFilterTypeHandler = function (evt) {
    if (evt.target.classList.contains('input-btn__input')) {
      checkedActiveValues('type', typeFilterInputs);

      debounce(window.goods.updateCollection, activeFilters);
    }
  };

  var clickFilterPropertyHandler = function (evt) {
    if (evt.target.classList.contains('input-btn__input')) {
      checkedActiveValues('property', propertyFilterInputs);
      debounce(window.goods.updateCollection, activeFilters);
    }
  };

  var mouseUpFilterPriceHandler = function () {
    var priceMin = parseInt(rangePriceMin.textContent, 10);
    var priceMax = parseInt(rangePriceMax.textContent, 10);

    activeFilters.price = {
      min: priceMin,
      max: priceMax
    };

    debounce(window.goods.updateCollection, activeFilters);

    document.removeEventListener('mouseup', mouseUpFilterPriceHandler);
  };

  var mouseDownFilterPriceHandler = function (evt) {
    if (evt.target.classList.contains('range__btn') ||
      evt.target.classList.contains('range__filter') ||
      evt.target.classList.contains('range__fill-line')) {

      document.addEventListener('mouseup', mouseUpFilterPriceHandler);
    }
  };

  var clickFavoriteAvailabilityHandler = function (evt) {
    resetFilters();

    if (evt.target === favoriteInput) {
      favoriteInput.checked = true;
      availabilityInput.checked = false;
      activeFilters.availability = null;
      activeFilters.favorite = true;


    }

    if (evt.target === availabilityInput) {
      availabilityInput.checked = true;
      favoriteInput.checked = false;
      activeFilters.availability = true;
      activeFilters.favorite = null;
    }
    debounce(window.goods.updateCollection, activeFilters);
  };

  var clickFilterSortHandler = function (evt) {
    if (evt.target.classList.contains('input-btn__input')) {
      checkedActiveValues('sort', sortFilterInputs);

      debounce(window.goods.updateCollection, activeFilters);
    }
  };

  var clickSubmitBtnHandler = function (evt) {
    evt.preventDefault();

    resetFilters();
    debounce(window.goods.updateCollection, activeFilters);
  };

  filterTypeArea.addEventListener('click', clickFilterTypeHandler);
  filterPropertyArea.addEventListener('click', clickFilterPropertyHandler);
  filterPriceArea.addEventListener('mousedown', mouseDownFilterPriceHandler);
  filterSortArea.addEventListener('click', clickFilterSortHandler);
  favoriteInput.addEventListener('click', clickFavoriteAvailabilityHandler);
  availabilityInput.addEventListener('click', clickFavoriteAvailabilityHandler);
  filterSubmitButton.addEventListener('click', clickSubmitBtnHandler);

  var filterFunctions = {
    type: getFilteredByType,
    property: getFilteredByProperty,
    price: getFilteredByPrice,
    favorite: showFavoriteGoods,
    sort: getSorteredGoods,
    availability: showAvailabilityGoods
  };

  window.filter = {
    findGoodsNumber: findGoodsNumber,
    functions: filterFunctions
  };
})();
