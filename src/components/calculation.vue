<template>
    <div>
        <div class="card card-header text-center">
            <div class="main-title main-color py-0">Coco Savon Calc</div>
        </div>

        <div class="container px-0" id="vue_component">
            <div class="card mb-2">
                <div class="card-header info-color white-text text-center py-2">
                    <span class="material-icons">
                        オイル (Oil)
                    </span>
                </div>
                <div class="card-body">
                    <template v-if="loading">
                        <div class="text-center">
                            <div class="spinner-border text-info" role="status">
                                  <span class="sr-only">Loading...</span>
                            </div>
                        </div>
                    </template>
                    <template v-else>
                        <template v-for="oil in oils_array">
                            <template v-if="oil.selected">
                                <transition name="aho">
                                <div class="container mb-2 rounded oil_wrapper" :class="get_being_input_class(oil)">
<!--
                                    <div class="oil_close_icon" @click="oilCloseClicked($event, oil)">
                                        <span class="fa-stack fa-1x">
                                            <i class="fas fa-circle fa-stack-2x"></i>
                                            <i class="fas fa-times fa-stack-1x fa-inverse"></i>
                                        </span>
                                    </div>
-->
                                    <div class="row rounded" :class="get_being_input_class(oil)" @click="oilClicked($event, oil)" :key="oil.id">
                                        <div class="col-7 pt-1">
                                            <div class="">{{ oil.name_jp }}</div>
                                            <div class="small">({{ oil.name }})</div>
                                        </div>
                                        <div class="col-5 pt-1 text-right h1">
                                            {{ oil.quantity }} <span class="small">{{ oil.unit }}</span>
                                        </div>
                                    </div>
                                    <div class="row small">
                                        <div class="col-2 mx-0 px-0 text-center" @click="minus100($event, oil)">
                                            <button type="button" class="btn btn-deep-orange mx-0 my-0 px-2 py-1">
                                                <div><i class="fa fa-minus-circle" aria-hidden="true"></i></div>
                                                <div>100</div>
                                            </button>
                                        </div>
                                        <div class="col-2 mx-0 px-0 text-center" @click="minus10($event, oil)">
                                            <button type="button" class="btn btn-deep-orange mx-0 my-0 px-2 py-1">
                                                <div><i class="fa fa-minus-circle" aria-hidden="true"></i></div>
                                                <div>10</div>
                                            </button>
                                        </div>
                                        <div class="col-2 mx-0 px-0 text-center" @click="minus1($event, oil)">
                                            <button type="button" class="btn btn-deep-orange mx-0 my-0 px-2 py-1">
                                                <div><i class="fa fa-minus-circle" aria-hidden="true"></i></div>
                                                <div>1</div>
                                            </button>
                                        </div>
                                        <div class="col-2 mx-0 px-0 text-center" @click="plus1($event, oil)">
                                            <button type="button" class="btn btn-cyan mx-0 my-0 px-2 py-1">
                                                <div><i class="fa fa-plus-circle" aria-hidden="true"></i></div>
                                                <div>1</div>
                                            </button>
                                        </div>
                                        <div class="col-2 mx-0 px-0 text-center" @click="plus10($event, oil)">
                                            <button type="button" class="btn btn-cyan mx-0 my-0 px-2 py-1">
                                                <div><i class="fa fa-plus-circle" aria-hidden="true"></i></div>
                                                <div>10</div>
                                            </button>
                                        </div>
                                        <div class="col-2 mx-0 px-0 text-center" @click="plus100($event, oil)">
                                            <button type="button" class="btn btn-cyan mx-0 my-0 px-2 py-1">
                                                <div><i class="fa fa-plus-circle" aria-hidden="true"></i></div>
                                                <div>100</div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                </transition>
                            </template>
                            <template v-else>
                                <div class="container mb-2">
                                    <div class="row" :key="oil.id">
                                        <div class="col-12 pt-1 pb-1" @click="oilClicked($event, oil)">
                                            <div class="">{{ oil.name_jp }}</div>
                                            <div class="small">({{ oil.name }})</div>
                                        </div>
                                    </div>
                                </div>
                            </template>
                        </template>
                    </template>
                </div>
            </div>

            <div class="card mb-2">
                <div class="card-header configuration-color text-center white-text py-2" @click="configurationClicked">その他の設定</div>
                <div class="card-body" id="configuration">
                    <template v-if="selected_percentage_of_water">
                        <div class="container mb-2 bg-selected rounded">
                            <div class="row" @click="confClicked('percentage_of_water')">
                                <div class="col-7 small pt-1">
                                    油脂に対する精製水の割合<div class="small">通常 30 〜 40 %</div>
                                </div>
                                <div class="col-3 rounded mb-1 text-right h3">
                                    {{ percentage_of_water }}
                                </div>
                                <div class="col-1 pt-2">
                                    %
                                </div>
                            </div>
                            <div class="row small">
                                <div class="col-2 mx-0 px-0 text-center" @click="configMinus1($event, 'percentage_of_water')">
                                    <button type="button" class="btn btn-deep-orange mx-0 my-0 px-2 py-1">
                                        <i class="fa fa-minus-circle" aria-hidden="true"></i>&nbsp;&nbsp;1
                                    </button>
                                </div>
                                <div class="col-2 mx-0 px-0 text-center" @click="configPlus1($event, 'percentage_of_water')">
                                    <button type="button" class="btn btn-cyan mx-0 my-0 px-2 py-1">
                                        <i class="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;&nbsp;1
                                    </button>
                                </div>
                            </div>
                        </div>
                    </template>
                    <template v-else>
                        <div class="container mb-2 rounded">
                            <div class="row" @click="confClicked('percentage_of_water')">
                                <div class="col-7 small pt-1">
                                    油脂に対する精製水の割合<div class="small">通常 30 〜 40 %</div>
                                </div>
                                <div class="col-3 rounded mb-1 text-right h3">
                                    {{ percentage_of_water }}
                                </div>
                                <div class="col-1 pt-2">
                                    %
                                </div>
                            </div>
                        </div>
                    </template>

                    <template v-if="selected_purity_of_naoh">
                        <div class="container mb-2 bg-selected rounded">
                            <div class="row" @click="confClicked('purity_of_naoh')">
                                <div class="col-7 small pt-1">
                                    苛性ソーダの純度<div class="small">通常 95 〜 100 %</div>
                                </div>
                                <div class="col-3 rounded mb-1 text-right h3">
                                    {{ purity_of_naoh}}
                                </div>
                                <div class="col-1 pt-2">
                                    %
                                </div>
                            </div>
                            <div class="row small">
                                <div class="col-2 mx-0 px-0 text-center" @click="configMinus1($event, 'purity_of_naoh')">
                                    <button type="button" class="btn btn-deep-orange mx-0 my-0 px-2 py-1">
                                        <i class="fa fa-minus-circle" aria-hidden="true"></i>&nbsp;&nbsp;1
                                    </button>
                                </div>
                                <div class="col-2 mx-0 px-0 text-center" @click="configPlus1($event, 'purity_of_naoh')">
                                    <button type="button" class="btn btn-cyan mx-0 my-0 px-2 py-1">
                                        <i class="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;&nbsp;1
                                    </button>
                                </div>
                            </div>
                        </div>
                    </template>
                    <template v-else>
                        <div class="container mb-2 rounded">
                            <div class="row">
                                <div class="col-7 small pt-1" @click="confClicked('purity_of_naoh')">
                                    苛性ソーダの純度<div class="small">通常 95 〜 100 %</div>
                                </div>
                                <div class="col-3 rounded mb-1 text-right h3">
                                    {{ purity_of_naoh }}
                                </div>
                                <div class="col-1 pt-2">
                                    %
                                </div>
                            </div>
                        </div>
                    </template>

                    <template v-if="selected_saponification_rate">
                        <div class="container mb-2 bg-selected rounded">
                            <div class="row">
                                <div class="col-7 small pt-1" @click="confClicked('saponification_rate')">
                                    鹸化率<div class="small">通常 85 〜 95 %</div>
                                </div>
                                <div class="col-3 rounded mb-1 text-right h3">
                                    {{ saponification_rate }}
                                </div>
                                <div class="col-1 pt-2">
                                    %
                                </div>
                            </div>
                            <div class="row small">
                                <div class="col-2 mx-0 px-0 text-center" @click="configMinus1($event, 'saponification_rate')">
                                    <button type="button" class="btn btn-deep-orange mx-0 my-0 px-2 py-1">
                                        <i class="fa fa-minus-circle" aria-hidden="true"></i>&nbsp;&nbsp;1
                                    </button>
                                </div>
                                <div class="col-2 mx-0 px-0 text-center" @click="configPlus1($event, 'saponification_rate')">
                                    <button type="button" class="btn btn-cyan mx-0 my-0 px-2 py-1">
                                        <i class="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;&nbsp;1
                                    </button>
                                </div>
                            </div>
                        </div>
                    </template>
                    <template v-else>
                        <div class="container mb-2 rounded">
                            <div class="row">
                                <div class="col-7 small pt-1" @click="confClicked('saponification_rate')">
                                    鹸化率<div class="small">通常 85 〜 95 %</div>
                                </div>
                                <div class="col-3 rounded mb-1 text-right h3">
                                    {{ saponification_rate }}
                                </div>
                                <div class="col-1 pt-2">
                                    %
                                </div>
                            </div>
                        </div>
                    </template>
                </div>
            </div>

            <div class="card mb-2">
                <div class="card-header configuration-color text-center white-text py-2">使用するオイルまとめ</div>
                <div class="card-body">
                    <div class="text-left">
                        <template v-for="oil in oils_array">
                            <template v-if="oil.selected">

                                    <div class="row rounded" :key="oil.id">
                                        <div class="col-7 pt-1">
                                            <div class="">{{ oil.name_jp }}</div>
                                            <div class="small">({{ oil.name }})</div>
                                        </div>
                                        <div class="col-5 pt-1 text-right h1">
                                            {{ oil.quantity }} <span class="small">{{ oil.unit }}</span>
                                        </div>
                                    </div>
                            </template>
                        </template>
                        <div class="text-right display-4">
                            {{ oil_amount_g }} g
                        </div>
                    </div>
                </div>
            </div>

            <div class="card mb-2">
                <div class="card-header result-color text-center white-text py-2">必要な精製水の質量</div>
                <div class="card-body">
                    <div class="text-right display-4">
                        {{ water_amount_g.toFixed(0) }} g
                    </div>
                </div>
            </div>

            <div class="card mb-2">
                <div class="card-header result-color text-center white-text py-2">必要な苛性ソーダの質量</div>
                <div class="card-body">
                    <div class="text-right display-4">
                        {{ naoh_amount_g.toFixed(0) }} g
                    </div>
                </div>
            </div>

            <div class="card mb-2">
                <div class="card-header result-color text-center white-text py-2">できあがる苛性ソーダ精製水の質量</div>
                <div class="card-body">
                    <div class="text-right display-4">
                        {{ naoh_amount_plus_water_amount_g.toFixed(0) }} g
                    </div>
                </div>
            </div>

            <template v-if="display_oil_water_amount_cc">
                <div class="card mb-2">
                    <div class="card-header result-color text-center white-text py-2">オイルと精製水の総体積</div>
                    <div class="card-body">
                        <div class="text-right display-4">
                            {{ oil_water_amount_cc.toFixed(0) }} ml
                        </div>
                    </div>
                </div>
            </template>

            <div class="card mb-2">
                <div class="card-header result-color text-center white-text py-2">オイルと苛性ソーダ精製水の総質量</div>
                <div class="card-body">
                    <div class="text-right display-4">
                        {{ oil_amount_plus_naoh_amount_plus_water_amount_g.toFixed(0) }} g
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");
import $ from 'jquery'
import Vue from 'vue'
import '@fortawesome/fontawesome-free/js/fontawesome';


export default {
    data: function(){
        return {
            loading: false,
            oils_array: [],
            currently_being_input_oil: null,
            ratio_koh_to_naoh: 120.0 / 168,
            unit_g: 'g',
            unit_cc: 'cc',
            oil_specific_weight: 0.9,
            percentage_of_water: 34, // [%] 30 to 40,
            purity_of_naoh: 98, // [%] 95 to 100
            saponification_rate: 92, // [%] 85 to 95

            // Other configurations
            configurationShown: null,
            selected_percentage_of_water: false,
            selected_purity_of_naoh: false,
            selected_saponification_rate: false,
            percentage_of_water_range: [30, 40],
            purity_of_naoh_range: [95, 100],
            saponification_rate_range: [85, 97],

            // show hide settings
            display_oil_water_amount_cc: true,
        }
    },
    created: function(){
        let firebaseConfig = {
                apiKey: "AIzaSyAM8ZPiUa8kRT6Dcyt6oB3iLyeHnzIuYMg",
                authDomain: "cocosavon-calc.firebaseapp.com",
                databaseURL: "https://cocosavon-calc.firebaseio.com",
                projectId: "cocosavon-calc",
                storageBucket: "cocosavon-calc.appspot.com",
                messagingSenderId: "1096447095262",
                appId: "1:1096447095262:web:c0d752ee13cee0c55ead4f",
                measurementId: "G-V4TXHE3DBG"
              }

        if (firebase.apps.length === 0) {
            // If not initialized, initialize it
            firebase.initializeApp(firebaseConfig)
        }
        // Initialize Cloud Firestore through Firebase
        let db = firebase.firestore()

        let vm = this
        vm.loading = true
        let docRef = db.collection("oils").orderBy("order")
        docRef.get().then(function(res) {
            res.forEach(doc => {
                let oil = doc.data()
                oil.selected = false
                oil.quantity = 0
                oil.id = doc.id
                oil.unit = vm.unit_g  // Because the saponification_number is based on [g], this unit should be [g]
                vm.oils_array.push(oil)
            });
            vm.loading = false
        }).catch(function(error) {
            console.log("Error getting document:", error);
            vm.loading = false
        });
    },
    mounted: function(){
        this.configurationShown = false
    },
    watch: {
        configurationShown: function(){
            let el_config = $('#configuration')
            if (this.configurationShown){
                el_config.slideDown()
            } else {
                el_config.slideUp()
            }
        }
    },
    computed: {
        oil_water_amount_cc: function() {
            let oil_amount_cc = 0
            for (let i=0; i<this.oils_array.length; i++){
                if (this.oils_array[i].selected){
                    let quantity = this.oils_array[i].quantity
                    if (this.oils_array[i].unit == this.unit_g){
                        // If the unit of the amount of oil is volume [cc]
                        quantity = quantity / this.oil_specific_weight
                    }
                    oil_amount_cc = oil_amount_cc + parseFloat(quantity)
                }
            }
            return oil_amount_cc + this.water_amount_g
        },
        oil_amount_g: function() {
            let oil_amount_g = 0
            for (let i=0; i<this.oils_array.length; i++){
                if (this.oils_array[i].selected){
                    let quantity = this.oils_array[i].quantity
                    if (this.oils_array[i].unit == this.unit_cc){
                        // If the unit of the amount of oil is volume [cc]
                        quantity = quantity * this.oil_specific_weight
                    }
                    oil_amount_g = oil_amount_g + parseFloat(quantity)
                }
            }
            //console.log('oil amount: ' + oil_amount_g)
            //console.log('naoh + water: ' + this.naoh_amount_plus_water_amount_g)
            return oil_amount_g
        },
        naoh_amount_g: function() {
            let naoh_amount_g = 0
            for (let i=0; i<this.oils_array.length; i++){
                if (this.oils_array[i].selected){
                    let quantity_g = this.oils_array[i].quantity
                    if (this.oils_array[i].unit == this.unit_cc){
                        quantity_g = quantity_g * oil_specific_weight
                    }
                    naoh_amount_g = naoh_amount_g + parseFloat(quantity_g) * this.oils_array[i].saponification_number / 1000.0 * this.ratio_koh_to_naoh
                }
            }
            return naoh_amount_g / (this.purity_of_naoh / 100.0) * (this.saponification_rate / 100.0)
        },
        water_amount_g: function() {
            let water_amount_g = this.oil_amount_g * this.percentage_of_water / 100.0
            return water_amount_g
        },
        naoh_amount_plus_water_amount_g: function(){
            return this.naoh_amount_g + this.water_amount_g
        },
        oil_amount_plus_naoh_amount_plus_water_amount_g: function(){
            return this.naoh_amount_plus_water_amount_g + this.oil_amount_g
        }
    },
    methods: {
        get_being_input_class: function(oil){
            if (oil == this.currently_being_input_oil){
                return 'bg-being-input'
            } else {
                return 'bg-selected'
            }
        },
        configPlus1: function(e, config_name){
            if (config_name === 'percentage_of_water'){
                this.percentage_of_water += 1
                if (this.percentage_of_water > Math.max(...this.percentage_of_water_range)){
                    this.percentage_of_water = Math.max(...this.percentage_of_water_range)
                }
            } else if (config_name === 'purity_of_naoh'){
                this.purity_of_naoh += 1
                if (this.purity_of_naoh > Math.max(...this.purity_of_naoh_range)){
                    this.purity_of_naoh= Math.max(...this.purity_of_naoh_range)
                }
            } else if (config_name === 'saponification_rate'){
                this.saponification_rate += 1
                if (this.saponification_rate > Math.max(...this.saponification_rate_range)){
                    this.saponification_rate= Math.max(...this.saponification_rate_range)
                }
            }
        },
        configMinus1: function(e, config_name){
            if (config_name === 'percentage_of_water'){
                this.percentage_of_water -= 1
                if (this.percentage_of_water < Math.min(...this.percentage_of_water_range)){
                    this.percentage_of_water = Math.min(...this.percentage_of_water_range)
                }
            } else if (config_name === 'purity_of_naoh'){
                this.purity_of_naoh -= 1
                if (this.purity_of_naoh < Math.min(...this.purity_of_naoh_range)){
                    this.purity_of_naoh= Math.min(...this.purity_of_naoh_range)
                }
            } else if (config_name === 'saponification_rate'){
                this.saponification_rate -= 1
                if (this.saponification_rate < Math.min(...this.saponification_rate_range)){
                    this.saponification_rate= Math.min(...this.saponification_rate_range)
                }
            }
        },
        plus100: function(e, oil){
            oil.quantity = oil.quantity + 100
            this.currently_being_input_oil = oil
        },
        plus10: function(e, oil){
            oil.quantity = oil.quantity + 10
            this.currently_being_input_oil = oil
        },
        plus1: function(e, oil){
            oil.quantity = oil.quantity + 1
            this.currently_being_input_oil = oil
        },
        minus100: function(e, oil){
            oil.quantity = oil.quantity - 100
            if (oil.quantity < 0){
                oil.quantity = 0
            }
            this.currently_being_input_oil = oil
        },
        minus10: function(e, oil){
            oil.quantity = oil.quantity - 10
            if (oil.quantity < 0){
                oil.quantity = 0
            }
            this.currently_being_input_oil = oil
        },
        minus1: function(e, oil){
            oil.quantity = oil.quantity - 1
            if (oil.quantity < 0){
                oil.quantity = 0
            }
            this.currently_being_input_oil = oil
        },
        confClicked: function(para) {
            if(para === 'percentage_of_water'){
                this.selected_percentage_of_water = !this.selected_percentage_of_water
            } else if (para === 'purity_of_naoh'){
                this.selected_purity_of_naoh = !this.selected_purity_of_naoh
            } else if (para === 'saponification_rate'){
                this.selected_saponification_rate = !this.selected_saponification_rate
            }
        },
        configurationClicked: function() {
            this.configurationShown = !this.configurationShown
        },
        oilCloseClicked: function(e, oil){
            if(oil.selected){
                Vue.set(oil, 'selected', false)
            }
            e.stopPropagation()
        },
        oilClicked: function(e, oil){
            Vue.set(oil, 'selected', !oil.selected)
            if(oil.selected){
                this.currently_being_input_oil = oil
            }
        },
        containsObject: function(obj, arr) {
            var i;
            for (i = 0; i < arr.length; i++) {
                if (arr[i].name === obj.name) {
                    return true;
                }
            }
            return false;
        },
    },
}
</script>

<style lang="css" scoped>
body {
    margin: 0;
    /*background: url("./bg-pattern.png") repeat;*/
    background: #fff9e0;
    color: grey;
} 
.main-title {
    /* font-family: 'Comfortaa', cursive; 
    font-family: 'Varela Round', sans-serif; */
    font-family: 'Fredericka the Great', cursive;
    font-size: 2em;
}
.main-color {
    color: #e9967a;
}
.bg-selected {
    background-color: rgba(0, 188, 212, 0.3)
}
.bg-being-input {
    background-color: rgba(210, 80, 92, 0.3)
}
.text-right {
    text-align: right;
}
.result-color {
    /* background-color: #ff8c00; */
    background-color: darkorange;
}
.configuration-color {
    background-color: darkgray;
}
.oil_wrapper {
    position: relative;
    /* margin: 1em 0 0 0;*/
}
.oil_close_icon {
    position: absolute;
    right: -1em;
    top: -0.6em;
    color: crimson;
    z-index: 1000;
}
.aho-enter-active, .aho-leave-active {
      transition: opacity .5s
  }

.aho-enter, .aho-leave-to {
        opacity: 0
    }

</style>
