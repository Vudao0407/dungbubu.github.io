let list_product = [
  // Ghi chú về cách đặt tên Class
  //     slide              : Đặt cho Presentation
  //     cv                 : Đặt cho Curriculum Vitae

  {
    id:        4,
    class:     "slide",
    name:      "Business Pitch Deck PPT",
    credit:    "from: Creative Market",
    type:      "style: Business, Elegant, Mordern",
    created:   "Jun 24, 2022",
    model:     "PPT240622D",
    url:       "./img/project/Zozo_Mobile.webp",
    function:  '<a href="./img/project/Zozo_Mobile.webp" download><i>download</i></a>',
  },

  {
    id:        3,
    class:     "slide",
    name:      "Business Pitch Deck PPT",
    credit:    "from: Creative Market",
    type:      "style: Business, Elegant, Mordern",
    created:   "Jun 24, 2022",
    model:     "PPT240622D",
    url:       "./img/project/Zozo_Mobile.webp",
    function:  '<a href="./img/project/Zozo_Mobile.webp" download><i>download</i></a>',
  },

  {
    id:        2,
    class:     "slide",
    name:      "Business Pitch Deck PPT",
    credit:    "from: Creative Market",
    type:      "style: Business, Elegant, Mordern",
    created:   "Jun 24, 2022",
    model:     "PPT240622D",
    url:       "./img/project/Zozo_Mobile.webp",
    function:  '<a href="./img/project/Zozo_Mobile.webp" download><i>download</i></a>',
  },

  {
    id:        1,
    class:     "slide",
    name:      "Business Pitch Deck PPT",
    credit:    "from: Creative Market",
    type:      "style: Business, Elegant, Mordern",
    created:   "Jun 24, 2022",
    model:     "PPT240622D",
    url:       "./img/project/Zozo_Mobile.webp",
    function:  '<a href="./img/project/Zozo_Mobile.webp" download><i>download</i></a>',
  },

  {
    id:        4,
    class:     "slide",
    name:      "Business Pitch Deck PPT",
    credit:    "from: Creative Market",
    type:      "style: Business, Elegant, Mordern",
    created:   "Jun 24, 2022",
    model:     "PPT240622D",
    url:       "./img/project/Zozo_Mobile.webp",
    function:  '<a href="./img/project/Zozo_Mobile.webp" download><i>download</i></a>',
  },

  {
    id:        3,
    class:     "slide",
    name:      "Business Pitch Deck PPT",
    credit:    "from: Creative Market",
    type:      "style: Business, Elegant, Mordern",
    created:   "Jun 24, 2022",
    model:     "PPT240622D",
    url:       "./img/project/Zozo_Mobile.webp",
    function:  '<a href="./img/project/Zozo_Mobile.webp" download><i>download</i></a>',
  },

  {
    id:        2,
    class:     "slide",
    name:      "Business Pitch Deck PPT",
    credit:    "from: Creative Market",
    type:      "style: Business, Elegant, Mordern",
    created:   "Jun 24, 2022",
    model:     "PPT240622D",
    url:       "./img/project/Zozo_Mobile.webp",
    function:  '<a href="./img/project/Zozo_Mobile.webp" download><i>download</i></a>',
  },

  {
    id:        1,
    class:     "slide",
    name:      "Business Pitch Deck PPT",
    credit:    "from: Creative Market",
    type:      "style: Business, Elegant, Mordern",
    created:   "Jun 24, 2022",
    model:     "PPT240622D",
    url:       "./img/project/Zozo_Mobile.webp",
    function:  '<a href="./img/project/Zozo_Mobile.webp" download><i>download</i></a>',
  }
];


// Import List Product rồi Render ra HTML
var html = '';
list_product.forEach(function(item) {
  html += `<div class="grid-item `+item.class+`">
            <img src="`+item.url+`" alt="`+item.name+`">
            <div class="content">
              <h4 class="name">`+item.name+`</h4>
              <p class="credit">`+item.credit+`</p>
              <p class="type">`+item.type+`</p>
            </div>
            <div class="function">
              `+item.function+`
            </div>
          </div>`;
});
$('.grid').append(html);