// динамические компоненты 
Vue.component('comp-one', {
    template: `<p>1.Необязательный параметр. Указывает символы, используемые в качестве разделителя внутри строки. Параметр separator может быть как строкой, так и регулярным выражением. Если параметр опущен, возвращённый массив будет содержать один элемент со всей строкой. Если параметр равен пустой строке, строка str будет преобразована в массив символов.</p>`
})
Vue.component('comp-two', {
    template: `<p>2.Необязательный параметр. Указывает символы, используемые в качестве разделителя внутри строки. Параметр separator может быть как строкой, так и регулярным выражением. Если параметр опущен, возвращённый массив будет содержать один элемент со всей строкой. Если параметр равен пустой строке, строка str будет преобразована в массив символов.</p>`
})
Vue.component('comp-three', {
    template: `<p>3.Необязательный параметр. Указывает символы, используемые в качестве разделителя внутри строки. Параметр separator может быть как строкой, так и регулярным выражением. Если параметр опущен, возвращённый массив будет содержать один элемент со всей строкой. Если параметр равен пустой строке, строка str будет преобразована в массив символов.</p>`
})
//=======================================================
// регистрируем его в локальном компоненте someEl компоненте что бы передать его
// const error = {
//     template: 
//         `<h2>Error component</h2>`
    
// }
// Важна последовательность обьявления компонентов если компонент erroe обьявить ниже компонента someEL то js его прочтет раньше его обьявления и вот ошибка
// локальный компонент - требует регистрации в глобальном вью
// глобальные компоненты нельзя самостоятельно отрисовывать в html только через компоненты
// const someEl = {
//     props:['title', 'counter'],//представляет собой массив пробрасываемых данных, содержащие имена данных .
//     data() {//data в компонентах это функция которая возвращает
//         return {
//           counter: 0
//         }
//     },
//     components: {
//         'error': error
//     },
//     methods: {// методы
//         increase() {
//             this.counter++
//         },
//         some() {
//             console.log(this)
//         }
//     },
   // "$emit('increase')" создание события
   // h2>Error component</h2> можно компонент в компоненте и тот компонент в который вложили становится родительским
   //<slot></slot> - динамеческий элемент для проброса html (разматка)
//     template:
//     `<div class="wrap">
//         <h1 @click="some">{{ title }}</h1>
//         <button @click="$emit('increase')">Increase</button>
//         <slot></slot>
//         <h2> Counter: {{ counter }}</h2>
//         <error></error>
//     </div>`
// };
//------------------------------------------------------

//=======================================================
// Глобальныая регистрация.
// Глобальный компонент доступен везде 
// Vue.component('some-el', {
//     // prots не пренадлежит компоненту
//     props:['title', 'counter'],//представляет собой массив пробрасываемых данных, содержащие имена данных .
//     data() {//data в компонентах это функция которая возвращает
//         return {
//           counter: 0
//         }
//     },
//     methods: {// методы
//         increase() {
//             this.counter++
//         },
//         some() {
//             console.log(this)
//         }
//     },
//    // "$emit('increase')" создание события
//    // h2>Error component</h2> можно компонент в компоненте и тот компонент в который вложили становится родительским
//    //<slot></slot> - динамеческий элемент для проброса html (разматка)
//     template:
//     `<div class="wrap">
//         <h1 @click="some">{{ title }}</h1>
//         <button @click="$emit('increase')">Increase</button>
//         <slot></slot>
//         <h2> Counter: {{ counter }}</h2>
//         <error></error>
//     </div>`
// })
// Vue.component('error',{
//     template: 
//         `<h2>Error component</h2>`
// })