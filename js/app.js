import { jewelrys }  from '../datas/jewelry.js';

export class App {
  #category;
  #root;

  /**
   * Construct and render a kind of jewelry passed by category param
   *
   * @constructor
   * @param {HTMLElement} root The HTML element that will render all page datas
   * @param {String} category The jewelry type category
   */
  constructor(root, category) {
    this.#root = document.querySelector(root);
    this.#category = category;

    this.#render();
  };

  /**
   * Create the category title
   *
   * @private
   * @returns The category title
   */
  #createTitle() {
    const h2 = document.createElement('h2');
    h2.innerHTML = this.#category;

    return h2;
  };

  /**
   * Create the unordered list
   *
   * @private
   * @returns The category unordered list
   */
  #createUnorderedList() {
    const ul = document.createElement('ul');
    ul.classList.add(this.#category);

    return ul;
  }

  /**
   * Create the list template to be worked on application
   *
   * @private
   * @returns The list content template
   */
  #createList() {
    const li = document.createElement('li');

    const content = `
      <a class="item-link" href="">
        <div class="details">
          <h3 class="item-name"></h3>
          <img class="item-image" src="" alt="">
        </div>
        <strong class="price"></strong>
      </a>
    `;

    li.innerHTML = content;

    return li;
  };

  /**
   * Render the category jewelry list
   *
   * @private
   */
  #render() {
    this.#root.append(this.#createTitle());
    this.#root.append(this.#createUnorderedList());

    jewelrys.forEach(jewelry => {
      if (jewelry.category !== this.#category) {
        return;
      };

      const list = this.#createList();

      list.querySelector(".item-link").href = `https://api.whatsapp.com/send?phone=5533984552608&text=Olá, eu gostei da ${this.#category}  ${jewelry.name}`;
      list.querySelector(".item-name").innerHTML = jewelry.name
      list.querySelector(".item-image").src = `../images/${jewelry.code}.jpg`;
      list.querySelector('.item-image').alt = `${this.#category} ${jewelry.name}`;
      list.querySelector('.price').innerHTML = `R$ ${jewelry.price}`;

      document.querySelector(`.${this.#category}`).append(list);
    });
  };
};
