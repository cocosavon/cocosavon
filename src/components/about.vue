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
            <div class="col-sm-12 text-center">
                <a href="https://www.instagram.com/coco_savon_perth">instagram.com/coco_savon_perth</a>
            </div>
        </div>
        <!--
        <router-view />
        -->
    </div>
</template>

<script>
export default {
    data: function(){
        return {
            soap_width: 50,
            soap_height: 50,
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
</style>
