var allProducts = [
    {
        colors: ['red', 'gray'],
        viewer: 82,
        star: 5,
        seller: 'دیجی‌کالا',
        name: 'لپ تاپ 15 اینچی ایسوس مدل VivoBook X543MA - A',
        price: '۳,۲۶۰,۰۰۰ تومان',
        image_url: 'https://dkstatics-public.digikala.com/digikala-products/113460092.jpg'
    },
    {
        colors: ['black', 'pink', 'yellow'],
        viewer: 34,
        star: 4,
        seller: 'کالاوما',
        name: 'لپ تاپ 15 اینچی لنوو مدل Ideapad 330 - F',
        price: '۲,۹۶۹,۰۰۰ تومان',
        image_url: 'https://dkstatics-public.digikala.com/digikala-products/4546967.jpg'
    },
    {
        colors: ['white', 'gray', 'blue'],
        viewer: 48,
        star: 3,
        seller: 'دی جی لند پلاس',
        name: 'لپ تاپ 15 اینچی ایسوس مدل VivoBook K540UB - F',
        price: '۷,۲۶۰,۰۰۰ تومان',
        image_url: 'https://dkstatics-public.digikala.com/digikala-products/114936893.jpg'
    },
    {
        colors: ['black'],
        viewer: 12,
        star: 2,
        seller: 'کندل ایران',
        name: 'لپ تاپ 15 اینچی دل مدل XPS 7590-A',
        price: '۳۵,۶۰۰,۰۰۰ تومان',
        image_url: 'https://dkstatics-public.digikala.com/digikala-products/114047572.jpg'
    },
    {
        colors: ['brown', 'green'],
        viewer: 97,
        star: 1,
        seller: 'دیجی‌کالا',
        name: 'لپ تاپ 15 اینچی لنوو مدل Ideapad 330 - FA',
        price: '۴,۵۲۰,۰۰۰ تومان',
        image_url: 'https://dkstatics-public.digikala.com/digikala-products/4213736.jpg'
    },
    {
        colors: ['purple'],
        viewer: 21,
        star: 3,
        seller: 'دیجی‌کالا',
        name: 'لپ تاپ 15 اینچی ایسوس مدل  VivoBook K550IK- A',
        price: '۸,۸۹۹,۰۰۰ تومان',
        image_url: 'https://dkstatics-public.digikala.com/digikala-products/462024.jpg'
    },
    {
        colors: [],
        viewer: 5,
        star: 2,
        seller: 'دیجی‌کالا',
        name: 'لپ تاپ 15 اینچی ایسوس مدل VivoBook K540UB - D',
        price: '۷,۶۳۹,۰۰۰ تومان',
        image_url: 'https://dkstatics-public.digikala.com/digikala-products/111958009.jpg'
    },
    {
        colors: ['red'],
        viewer: 23,
        star: 1,
        seller: 'کسری کامپیوتر',
        name: 'لپ تاپ 15 اینچی اچ پی مدل RA008 - A',
        price: '۳,۴۷۵,۰۰۰ تومان',
        image_url: 'https://dkstatics-public-2.digikala.com/digikala-products/110307311.jpg'
    },
    {
        colors: [],
        viewer: 34,
        star: 5,
        seller: 'فن آوران',
        name: 'لپ تاپ 14 اینچی آی لایف مدل Zed Air H2',
        price: '۲,۲۴۹,۰۰۰ تومان',
        image_url: 'https://dkstatics-public.digikala.com/digikala-products/1601135.jpg'
    },
    {
        colors: ['white'],
        viewer: 34,
        star: 4,
        seller: 'پیشرو تک',
        name: 'لپ تاپ 15 اینچی مایکروسافت مدل Surface Book 2- C',
        price: '۳۴,۴۹۹,۰۰۰ تومان',
        image_url: 'https://dkstatics-public.digikala.com/digikala-products/3105744.jpg'
    },
    {
        colors: ['yellow', 'green'],
        viewer: 34,
        star: 5,
        seller: 'آداک شاپ',
        name: 'لپ تاپ 15 اینچی ایسوس مدل VivoBook K540UB - B',
        price: '۶,۱۹۹,۰۰۰ تومان',
        image_url: 'https://dkstatics-public.digikala.com/digikala-products/111335555.jpg'
    },
    {
        colors: ['black'],
        viewer: 34,
        star: 2,
        seller: 'پیشرو تک',
        name: 'لپ تاپ 16 اینچی اپل مدل MacBook Pro MVVK2 2019 همراه با تاچ بار',
        price: '۴۰,۸۹۹,۰۰۰ تومان',
        image_url: 'https://dkstatics-public.digikala.com/digikala-products/114389900.jpg'
    }
];

function search() {
    var searchProduct = document.getElementsByTagName('input')[0].value;

    if (!searchProduct) {
        var products = allProducts;
    } else {
        var products = allProducts.filter((product) => {
            return product.name.includes(searchProduct)
        })
    }
    var productsHtml = '';


    products.forEach((product) => {
        var starsHtml = '';
        var colorsHtml = '';
        for (var i = 0; i < 5 - product.star; i++) {
            starsHtml += '<i class="far fa-star"></i>';
        }
        for (var i = 0; i < product.star; i++) {
            starsHtml += '<i class="fas fa-star"></i>';
        }
        product.colors.forEach(color => {
            colorsHtml += `<li><div class="color" style="background-color: ${color}"></div></li>`;
        });

        productsHtml += `<div class="col-lg-3 col-md-6 product-card">
                    <div class="card">
                    <ul class="colors-list">
                    ${colorsHtml}
                </ul>

                        <img src=${product.image_url} alt="..." class="img-fluid">
                        <div class="card-body">
                            <h5 class="card-title">${product.name}</h5>
                            <div class="row">
                            <div class="col-4">
                  <div class="r-comparison">
                  <input type="checkbox" name="compare" id="" value="0" class="comparison-box"> مقایسه
</div>          
</div>
                            <div class="col-8">
                            <p class="l-stars">
                            ${product.viewer} نفر ${starsHtml}
</p>
</div> 

</div>
                            <p class="card-text">${product.price}</p>
                            <p class="card-text" id="seller"><strong><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path fill="#5F5F5F" fill-rule="nonzero" d="M20.89 7.14l1.09 5.447a1.095 1.095 0 0 1-1.068 1.308h-.196v5.447c0 .6-.49 1.09-1.09 1.09-.599 0-1.09-.49-1.09-1.09v-5.447H14.18v5.447c0 .6-.49 1.09-1.09 1.09H4.374c-.6 0-1.09-.49-1.09-1.09v-5.447h-.196a1.095 1.095 0 0 1-1.068-1.308L3.11 7.14a1.087 1.087 0 0 1 1.068-.872h15.644c.523 0 .97.37 1.068.872zM12 18.253v-4.358H5.463v4.358H12zM4.374 5.179c-.6 0-1.09-.49-1.09-1.09 0-.599.49-1.089 1.09-1.089h15.252c.6 0 1.09.49 1.09 1.09 0 .599-.49 1.089-1.09 1.089H4.374z"/>
</svg> فروشنده: </strong>${product.seller}</p>
                        </div>
                    </div>
                </div>`
    });

    document.getElementById('products').innerHTML = productsHtml;
}

search()