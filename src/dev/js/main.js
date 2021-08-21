import Slider from "./class/Slider.js";
import Cart from "./class/Cart.js";
import $ from "jquery";
import "select2";

$.fn.exists = function () {
  return $(this).length;
};

const projectFunc = {
  initSelect(elem) {
    if ($(elem).exists()) {
      try {
        $(elem).select2();
      } catch (err) {
        console.log(err);
      }
    }
  },
  initElect() {
    if ($(".js-favorite ").exists()) {
      try {
        $(".js-favorite").each((_, item) => {
          $(item).on("click", () => {
            $(item).toggleClass("open");
            if ($(item).find("input").is(":checked")) {
              $(item).find("input").prop("checked", false);
            }
          });
        });
      } catch (err) {
        console.log(err);
      }
    }
  },
  calc(elem, status) {
    if (status) {
      elem.val(+elem.val() + 1);
    } else {
      if (+elem.val() > 0) {
        elem.val(+elem.val() - 1);
      }
    }
  },
  numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  },
  createSlider() {
    const slider = new Slider(".js-slider", 6.37, 18);
    slider.createSlider();

    $(window)
      .on("resize load", function () {
        if ($(window).width() <= 1300 && $(window).width() > 1235) {
          slider.updateSlider("space", 13);
          slider.updateSlider("view", 5);
        } else if ($(window).width() <= 1235 && $(window).width() > 1024) {
          slider.updateSlider("view", 4.6);
        } else if ($(window).width() <= 1024 && $(window).width() > 767) {
          slider.updateSlider("view", 4);
        } else if ($(window).width() <= 767 && $(window).width() > 620) {
          slider.updateSlider("view", 3.3);
        } else if ($(window).width() <= 620 && $(window).width() > 320) {
          slider.updateSlider("view", 2.35);
        } else {
          slider.updateSlider("space", 18);
          slider.updateSlider("view", 6.37);
        }
      })
      .resize();
  },
};

function init() {
  projectFunc.createSlider();
}

$(() => {
  init();

  const cart = {
    p92779: {
      name: "Футболка Теория относительности и коты, серая",
      url: "#",
      image: "./img/cart/p1.jpg",
      price: 1720.0,
      count: 1,
    },
    p93039: {
      name: "Плакат Воздушный шар",
      url: "#",
      image: "./img/cart/p2.jpg",
      price: 872.0,
      count: 1,
    },
    p93034: {
      name: "Блокнот TOP SECRET, A5",
      url: "#",
      image: "./img/cart/p3.jpg",
      price: 672.0,
      count: 1,
    },
    p93035: {
      name: "Услуга подарочной упаковки",
      url: "#",
      image: "./img/cart/p4.jpg",
      price: 2500.0,
      count: 1,
    },
  };

  let shopCart = new Cart(cart);
  document.querySelector(".cart__cards").innerHTML = "";
  document.querySelector(".cart__cards").innerHTML = shopCart.render();
  projectFunc.initSelect(".js-select");
  projectFunc.initElect();

  document.querySelector(".cart__cards").addEventListener("click", (event) => {
    let target = event.target;

    if (target.classList.contains("delete")) {
      shopCart.goodsDelete(target.dataset["articul"]);
      document.querySelector(".cart__cards").innerHTML = "";
      document.querySelector(".cart__cards").innerHTML = shopCart.render();
      projectFunc.initSelect(".js-select");
      projectFunc.initElect();
      return true;
    } else if (target.classList.contains("js-plus")) {
      event.preventDefault();
      shopCart.goodsPlus(target.dataset["articul"]);
      document.querySelector(".cart__cards").innerHTML = "";
      document.querySelector(".cart__cards").innerHTML = shopCart.render();
      projectFunc.initSelect(".js-select");
      projectFunc.initElect();
      return true;
    } else if (target.classList.contains("js-minus")) {
      shopCart.goodsMinus(target.dataset["articul"]);
      document.querySelector(".cart__cards").innerHTML = "";
      document.querySelector(".cart__cards").innerHTML = shopCart.render();
      projectFunc.initSelect(".js-select");
      projectFunc.initElect();
      return true;
    }
  });
});
