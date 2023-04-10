var basedrive_url = "https://drive.google.com/uc?id=";

var menulist = {};
menulist.oats = [
  {
    name: "Maple & Walnut Overnight Oats",
    ingredients: "Oats, Maple Syrup, Walnuts, Milk, Vanilla Extract, Cinnamon",
    price: 100,
    url: basedrive_url + "1IwduX6OJ_LY3VdpL2Bwg3Uuf__lMKT8P"
  },
  {
    name: "Apple Pie Oats",
    ingredients: "Oats, Apples, Milk, Maple Syrup, Cinnamon, Walnuts",
    price: 110,
    url: basedrive_url + "1GpeAoH3gEKYcgKlk8laAMSG8tYrcmGGf"
  },
  {
    name: "Chia Seed & Blueberry Oats",
    ingredients:
      "Oats, Chia Seeds, Blueberries, Milk, Maple Syrup, VanillaExtract",
    price: 100,
    url: basedrive_url + "1LKfDpl4kSHYLTOoKpw2lH0irOMkEtOeF"
  },
  {
    name: "Peanut Butter & Banana Oats",
    ingredients:
      "Oats, Peanut Butter, Bananas, Milk, Maple Syrup, VanillaExtract",
    price: 110,
    url: basedrive_url + "1wzp79di9f18bl3SJXML1Q3ivyepOhouK"
  }
];
menulist.smoothies = [
  {
    name: "Mango & Banana Smoothie",
    ingredients: "Mango, Banana, Milk, Honey, Vanilla Extract",
    price: 90,
    url: basedrive_url + "12Cw_t_cumZWrjWK-v2pFkBledQrprW_G"
  },
  {
    name: "Blueberry & Oat Smoothie",
    ingredients: "Blueberries, Oats, Milk, Honey, Vanilla Extract",
    price: 95,
    url: basedrive_url + "1NV21CoxQ2qerQkVIZfw5P0HwpvCPL5dX"
  },
  {
    name: "Strawberry & Almond Smoothie",
    ingredients: "Strawberries, Almonds, Milk, Honey, Vanilla Extract",
    price: 90,
    url: basedrive_url + "1x0bAFj2DGKy19oFaTeLZSpz6mFxX2F2p"
  },
  {
    name: "Pineapple & Coconut Smoothie",
    ingredients: "Pineapple, Coconut Milk, Honey, Vanilla Extract",
    price: 95,
    url: basedrive_url + "1k-NQdcOahMgOOQP7-UIP8cO2zhNLisMw"
  }
];
menulist.salads = [
  {
    name: "Avocado & Tomato Salad",
    ingredients:
      "Avocado, Tomatoes, Lettuce, Olive Oil, Balsamic Vinegar, Salt, Pepper",
    price: 120,
    url: basedrive_url + "1twyFoEv9_J5n7HSdYxq0sNsJfu5448Dl"
  },
  {
    name: "Greek Salad",
    ingredients:
      "Cucumbers, Tomatoes, Olives, Feta Cheese, Olive Oil, Red Wine Vinegar, Oregano",
    price: 110,
    url: basedrive_url + "1own87ctP9_rjqYYgIA5hgu6xq836UmHq"
  },
  {
    name: "Kale & Apple Salad",
    ingredients:
      "Kale, Apples, Walnuts, Cranberries, Olive Oil, Lemon Juice, Salt, Pepper",
    price: 120,
    url: basedrive_url + "1HqIQvDlucGjQHWsLndYVNEDbnolt6_tv"
  },
  {
    name: "Spinach & Strawberry Salad",
    ingredients:
      "Spinach, Strawberries, Almonds, Feta Cheese, Olive Oil, Balsamic Vinegar, Salt, Pepper",
    price: 120,
    url: basedrive_url + "1-eAB_7XQmtsNnm-0yfL9gRbW6yt4fHJ7"
  }
];
menulist.snacks = [
  {
    name: "Trail Mix",
    ingredients:
      "Almonds, Walnuts, Cashews, Raisins, Coconut Flakes, Dark Chocolate Chips",
    price: 100,
    url: basedrive_url + "1qPSfh0alNtUHHMyrZlvuhjEH6uHWqtAj"
  },
  {
    name: "Apple Chips",
    ingredients: "Apples, Cinnamon, Coconut Oil",
    price: 130,
    url: basedrive_url + "1ynnYrdDbhpqwJ6nImVDERb7OSe6W835l"
  },
  {
    name: "Hummus and Veggie Sticks",
    ingredients: "Hummus, Carrots, Celery, Cucumbers",
    price: 100,
    url: basedrive_url + "1G29wN8FqToRkIPBC4S6m8NhC6_VWkSXO"
  },
  {
    name: "Yogurt Parfait",
    ingredients: "Greek Yogurt, Berries, Granola, Honey",
    price: 120,
    url: basedrive_url + "1phobUr6e6ysB58YYPPK8ySX3UV-SrRlg"
  }
];

//------------------------------------------------------------------------------------MENU

var item_html =
  "<li><div class='top'><div class='recipe_name title'>{{num}}. {{name}}</div><div class='recipe_price'>$ {{price}}</div></div><div class='mainview'><div class='left'><img src={{url}} alt=''/></div> <div class='right'><div class='recipe_ingredient'>{{ingredients}}</div></div></div></li>";

displayMenu("snacks");
displayMenu("salads");
displayMenu("smoothies");
displayMenu("oats");

function displayMenu(menuType) {
  $("#list_item").empty();
  for (var i = 0; i < menulist[menuType].length; i++) {
    var item = menulist[menuType][i];
    var num = 1;
    var current_item_html = item_html
      .replace("{{num}}", i + 1)
      .replace("{{url}}", item.url)
      .replace("{{name}}", item.name)
      .replace("{{price}}", item.price)
      .replace("{{ingredients}}", item.ingredients);
    $("#list_item").append(current_item_html);
  }

  $(".addcart_btn").click(function () {
    check();
    var itemName = $(this)
      .closest("li")
      .find(".recipe_name")
      .text()
      .replace(/^\d+.\s*/, "");
    var itemAmount = 1;
    var itemPrice = $(this)
      .closest("li")
      .find(".recipe_price")
      .text()
      .replace("$ ", "");
    AddtoCart(itemName, itemAmount, itemPrice);
  });
}

$(document).ready(function () {
  $(".selectionview").scrollTop(0);
});

$(".menu_oats").click(function () {
  displayMenu("oats");
});

$(".menu_smoothies").click(function () {
  displayMenu("smoothies");
});

$(".menu_salads").click(function () {
  displayMenu("salads");
});

$(".menu_healthysnacks").click(function () {
  displayMenu("snacks");
});