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

        <div class="row mt-5">
            <img :src="test_image" alt="soaps" width="100%"/> 
        </div>

        <!--
        <div class="row mt-5 text-center section-about-us">
            <div class="section-title">
                About us
            </div>
        </div>
        -->

        <div class="row mt-5 section-links pt-5 pb-5">
            <div class="col-sm-12 section-title text-center">
                <span>Link(s)</span>
            </div>
            <div class="col-sm-12 text-center sns-link">
                <a href="https://www.instagram.com/coco_savon_perth"><i class="fab fa-instagram"></i> Instagram</a>
            </div>
        </div>
        <!--
        <router-view />
        -->
    </div>
</template>

<script>
import test_image from "../assets/test.jpg"

export default {
    data: function(){
        return {
            soap_width: 50,
            soap_height: 50,
            test_image: test_image,
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
.section-links {
    background: lightgray;
    color: white;
}
</style>
