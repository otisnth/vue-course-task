"use strict";(self["webpackChunkvue_course_task"]=self["webpackChunkvue_course_task"]||[]).push([[501],{974:function(t,s,e){e.d(s,{Z:function(){return o}});var i=function(){var t=this,s=t._self._c;return s("ul",t._l(this.sizes,(function(i,a){return s("li",{key:a,class:{active:i},on:{click:()=>t.selectSize(a,i)}},[s("span",[t._v(t._s(a))]),a==t.selectedSize?s("img",{attrs:{src:e(469)}}):t._e()])})),0)},a=[],r={props:{sizes:Object,selectedSize:String},methods:{selectSize(t,s){this.selectedSize==t?this.selectedSize="Выберите размер":s&&(this.selectedSize=t),this.$emit("selectSize",this.selectedSize)}}},c=r,n=e(1),l=(0,n.Z)(c,i,a,!1,null,"352f8275",null),o=l.exports},932:function(t,s,e){e.r(s),e.d(s,{default:function(){return S}});var i=function(){var t=this,s=t._self._c;return s("div",{staticClass:"main-container"},[s("div",{staticClass:"cart-heading"},[s("h2",{staticClass:"header"},[t._v("Корзина")]),t.emptyCart?s("p",{staticClass:"empty-cart"},[t._v("Ваша корзина пуста")]):t._e()]),t.emptyCart?s("hr"):t._e(),t.emptyCart?s("h2",{staticClass:"offers-header"},[t._v("Но у нас есть персональные предложения для вас")]):t._e(),t.emptyCart?s("div",{staticClass:"card-container"},t._l(t.listCard,(function(t,e){return s("Card",{key:e,staticClass:"card-item",attrs:{id:e,item:t}})})),1):s("div",{staticClass:"cart-container"},[s("div",{staticClass:"cart-items"},t._l(this.itemsInCart,(function(t,e){return s("CartItem",{key:e,staticClass:"cart-item",attrs:{id:e,item:t}})})),1),s("div",{staticClass:"payment"},[s("div",{staticClass:"payment-header"},[s("span",[t._v("Итого")]),s("span",{staticClass:"total"},[t._v("К оплате "+t._s(t.totalPrice)+" руб")])]),s("ul",{staticClass:"payment-list"},[t._l(this.itemsInCart,(function(e,i){return s("li",{key:i},[s("span",[t._v(t._s(e.title))]),s("span",{staticClass:"price"},[t._v(t._s(e.transformPrice)+" руб")])])})),s("li",[s("span",[t._v("Доставка")]),s("span",{staticClass:"price"},[t._v(t._s(this.deliveryPrice)+" руб")])])],2),s("p",{staticClass:"payment-login"},[t._v(" Чтобы продолжить оформление заказа, необходимо "),s("span",{on:{click:t.showAuthModal}},[t._v("войти или зарегистрировать аккаунт")])])])])])},a=[],r=function(){var t=this,s=t._self._c;return s("div",{staticClass:"cart-item-container"},[s("img",{attrs:{src:e(459)("./"+t.item.imgPreview)}}),s("div",{staticClass:"cart-item-content"},[s("p",{staticClass:"price"},[t._v(t._s(t.item.transformPrice)+" руб")]),s("div",{staticClass:"info"},[s("p",{staticClass:"brand"},[t._v(" Бренд "),s("span",[t._v(t._s(t.item.brand))])]),s("p",{staticClass:"description"},[t._v(t._s(t.item.description))]),s("div",{staticClass:"size"},[s("p",[t._v("Размер")]),s("span",[t._v(t._s(t.item.selectedSize))]),s("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.hideList,expression:"hideList"}],staticClass:"btn select-size",on:{click:this.showListSizes}},[t._v(" Изменить "),t.showSizes?s("SelectList",{attrs:{selectedSize:this.item.selectedSize,sizes:this.item.sizes},on:{selectSize:t.selectSize}}):t._e()],1)])]),s("hr"),s("p",{staticClass:"delivery"},[t._v("Доставка займёт от 5 до 10 дней")])])])},c=[],n=e(974),l=e(649),o=e.n(l),d={data(){return{showSizes:!1}},components:{SelectList:n.Z},props:{item:Object},methods:{showListSizes(){this.showSizes=!this.showSizes},hideList(){this.showSizes&&(this.showSizes=!this.showSizes)},selectSize(t){this.item.selectedSize=t}},directives:{ClickOutside:o()}},h=d,u=e(1),m=(0,u.Z)(h,r,c,!1,null,"9a915156",null),p=m.exports,v=e(882),_={data(){return{deliveryPrice:750}},methods:{showAuthModal(){this.$emit("showAuthModal")}},components:{CartItem:p,Card:v.Z},props:{itemsInCart:Array,listCard:Array},computed:{emptyCart:function(){return!this.itemsInCart.length},totalPrice:function(){let t=0;for(const s of this.itemsInCart)t+=Number(s.price);return t+=Number(this.deliveryPrice),t.toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")}}},C=_,z=(0,u.Z)(C,i,a,!1,null,"7cfe775a",null),S=z.exports}}]);
//# sourceMappingURL=501.0088e8ca.js.map