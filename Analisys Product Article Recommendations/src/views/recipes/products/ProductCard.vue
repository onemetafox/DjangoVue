<template>
    <div class="main-articles-sold row" >
        <div class="col-lg-6 col-md-6 col-6 p-0 pt-2 pb-2"  >
            <!-- <div class="row" v-for="li in author.list" :key="li">
                <p class="con-card-text"><span class="dash-icon"></span>{{li}}</p>
            </div> -->
        </div>
        <div class="col-lg-3 col-md-3 align-middle pt-2 pb-2" ><p class='con-persentage'>{{product.name}}</p></div>
        <div class="col-lg-3 col-md-3 p-3"><button class="con-btn">Recommendations</button></div>
    </div>
</template>

<script>

    export default {
        name: "ProductCard",
        props:{
            product:{
                type: [],
                default: false
            }
        }
     
    };
</script>