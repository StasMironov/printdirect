class Cart {
  constructor(
    items,
    cartClass = "cart",
    plusClass = "js-plus",
    minusClass = "js-minus",
    deleteClass = "delete",
  ) {
    this.items = items;
    this.plusClass = plusClass;
    this.minusClass = minusClass;
    this.deleteClass = deleteClass;
    this.cartClass = cartClass;
    this.currency = "₽";
  }
  goodsPlus(art) {
    this.items[art]["count"]++;
  }
  goodsMinus(art) {
    if (this.items[art]["count"] - 1 <= 0) {
      this.goodsDelete(art);
    } else {
      this.items[art]["count"]--;
    }
  }
  goodsDelete(art) {
    delete this.items[art];
  }
  getTotal() {
    let total = 0;
    for (let key in this.items) {
      total += this.items[key]["count"] * this.items[key]["price"];
    }
    return total;
  }
  render() {
    let out = "";
    for (let key in this.items) {
      out += `<div class="cart-card js-card">`;
      out += `<div class="cart-card__column cart-card__column--img">`;
      out += `<img src="${this.items[key]["image"]}">`;
      out += `</div>`;
      out += `<div class="cart-card__column cart-card__column--title">`;
      out += `${this.items[key]["name"]}`;
      out += `</div>`;
      out += `<div class="cart-card__column cart-card__column--size">`;
      out += `<div class="qty-bloc">`;
      out += `<div class="qty-bloc__txt">Размер:</div>`;
      out += `<select class="js-select">`;
      out += `<option value="S">S</option>`;
      out += `<option value="M">M</option>`;
      out += `<option value="L">L</option>`;
      out += `</select>`;
      out += `</div>`;
      out += `</div>`;
      out += `<div class="cart-card__column cart-card__column--qty">`;
      out += `<div class="quantity">`;
      out += `<div class="quantity__txt">Кол-во:</div>`;
      out += `<div class="quantity__box">`;
      out += `<button class="minus js-minus" data-articul="${key}"><svg class="b-svg svg-minus"><use xlink:href="svg/symbol/sprite.svg#minus"></use></svg></button>`;
      out += `<input class="quantity__field js-input-qty" type="text" data-min="1" value=${this.items[key]["count"]} data-step="1">`;
      out += `<button class="plus js-plus" data-articul="${key}"><svg class="b-svg svg-plus"><use xlink:href="svg/symbol/sprite.svg#plus"></use></svg></button>`;
      out += `</div>`;
      out += `<div class="quantity__cost">`;
      out += `<span class="cost js-cost">${this.items[key]["price"]}</span>`;
      out += `<span class="symbol">₽/шт.</span>`;
      out += `</div>`;
      out += `</div>`;
      out += `</div>`;
      out += `<div class="cart-card__column cart-card__column--favourites">`;
      out += `<label class="favorite">`;
      out += `<input type="checkbox">`;
      out += `<span class="favorite__icon js-favorite"><svg width="20" height="22" viewBox="-1 0 28 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.9 0C15.4 0 13.3 1.4 12.2 3.5C11.1 1.4 9 0 6.5 0C2.9 0 0 3 0 6.7C0 7.8 0.3 8.9 0.8 9.8C0.8 9.9 1 10.2 1.3 10.6C1.5 10.9 1.7 11.1 2 11.4C4.9 14.8 12.3 22 12.3 22C12.3 22 19.7 14.8 22.6 11.4C22.8 11.2 23.1 10.9 23.3 10.6C23.6 10.2 23.8 9.9 23.8 9.8C24.3 8.9 24.6 7.8 24.6 6.7C24.4 3 21.5 0 17.9 0Z" fill="#FF6C96"></path>
        </svg></span>`;
      out += `<span class="favorite__txt">В избранное</span>`;
      out += `</label>`;
      out += `</div>`;
      out += `<div class="cart-card__column cart-card__column--price">`;
      out += `<span class="cost">${
        this.items[key]["price"] * this.items[key]["count"]
      }</span>`;
      out += `<span class="symbol">₽</span>`;
      out += `</div>`;
      out += `<div class="cart-card__column cart-card__column--del">`;
      out += `<div class="delete" data-articul="${key}">`;
      out += `<div class="delete__txt"> Удалить`;
      out += `</div>`;
      out += `</div>`;
      out += `</div>`;
      out += `</div>`;
    }

    $(".js-itog").text(this.getTotal());
    $(".js-cart-qty").text(`(${Object.keys(this.items).length})`);
    $(".js-cart-dis").text(this.getTotal());

    return out;
  }
}

export default Cart;
