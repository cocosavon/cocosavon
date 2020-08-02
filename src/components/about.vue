<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-sm-12 text-center align-bottom">
                <div class="title">Coco Savon</div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12 text-center">
                <div class="subtitle">handmade soap</div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12 text-center">
                <svg transform="scale(1)" :width="4*(soap_width+10)+soap_width" :height="soap_height" style="display:block;margin:auto;">
                    <g>
                      <rect :x="0" :width="soap_width" :height="soap_height" style="fill:#bf8686de;" />
                      <rect :x="1*(soap_width+10)" :width="soap_width" :height="soap_height" style="fill:#bcbf86de;" />
                      <rect :x="2*(soap_width+10)" :width="soap_width" :height="soap_height" style="fill:#86bbbfde;" />
                      <rect :x="3*(soap_width+10)" :width="soap_width" :height="soap_height" style="fill:#8686bfde;" />
                      <rect :x="4*(soap_width+10)" :width="soap_width" :height="soap_height" style="fill:#af86bfde;" />
                    </g>
                </svg>
            </div>
        </div>

        <div class="row mt-3">
            <div class="col-sm-12 text-center">
                <div class="subtitle">Perth, Australia</div>
            </div>
        </div>

        <div class="row mt-5">
            <img :src="main_image_1" alt="soaps" width="100%"/> 
        </div>

        <div class="row mt-5">
            <img :src="main_image_2" alt="soaps" width="100%"/> 
        </div>

        <div class="row mt-5">
            <img :src="main_image_construction" alt="soaps" width="100%"/> 
        </div>

        <!--
        <div class="row mt-5 text-center section-about-us">
            <div class="section-title">
                About us
            </div>
        </div>
        -->

            <!--
        <div class="card mt-5" id="under_construction_card">
            <div class="col-sm-12 text-center p-3">
                This website is under construction
            </div>

            <img class="card-img-top" :src="under_construction_image" alt="Card image">
            <div class="card-body">
                <h4 class="card-title">John Doe</h4>
                <p class="card-text">Some example text.</p>
                <a href="#" class="btn btn-primary">See Profile</a>
            </div>
        </div>
            -->

        <div class="row mt-5 section-links pt-5 pb-5">
            <!--
            <div class="col-sm-12 section-title text-center">
                <span>Link(s)</span>
            </div>
            -->
            <div class="col-sm-12 text-center sns-link">
                <a href="https://www.instagram.com/coco_savon_perth"><i class="fab fa-instagram fa-2x"></i> Instagram</a>
            </div>
            <div class="col-sm-12 text-center sns-link">
                <a href="mailto:servicecocosavon@gmail.com"><i class="fa fa-envelope fa-1x" aria-hidden="true" style="font-size:x-large;"></i> service.cocosavon@gmail.com</a>
            </div>
        </div>
        
        <!--
        <router-view />
        -->
    </div>
</template>

<script>
import main_image_1 from "../assets/cocosavon-landing-page-main-image.jpg"
import main_image_2 from "../assets/cocosavon-landing-page-main-image2.jpg"
import main_image_construction from "../assets/cocosavon-landing-page-main-image-construction.jpg"
//import under_construction_image from "../assets/cocosavon-under-construction.jpg"

export default {
    data: function(){
        return {
            soap_width: 50,
            soap_height: 50,
            main_image_1: main_image_1,
            main_image_2: main_image_2,
            main_image_construction: main_image_construction,
            //under_construction_image: under_construction_image,
        }
    }
}
</script>

<style lang="css" scoped>
.title {
    color: #888;
    font-family: 'Varela Round', sans-serif;
    font-size: xx-large;
    height: 1.2em;
}
.subtitle {
    color: #888;
    font-size: large;
    font-family: 'Varela Round', sans-serif;
}
.sns-link {
    text-decoration: none;
}
.sns-link > a {
    color: brown;
}
.section-links {
    background: lightgray;
    color: white;
}
#under_construction_card {
    border: solid 1em lightblue;
    color: lightcoral;
}
</style>
