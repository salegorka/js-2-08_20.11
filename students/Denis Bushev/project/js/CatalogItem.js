Vue.component('catalog-item', {
    props: ['img', 'el'],
    template: `
    <div class="product-item">
        <img :src="img" alt="Some img">
        <div class="desc">
            <h3>{{ el.title }}</h3>
            <p>{{ el.price }} $</p>
            <button class="buy-btn" @click="$root.$children.addProduct(el)">Купить</button>
        </div>
    </div>
    `,
    mounted() {
        console.log(this)
    }
})