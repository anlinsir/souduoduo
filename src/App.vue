<template>
  <div id="app">

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return({
    })
  }
}
</script>

<style>
html, body, div, span, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, abbr, address, cite, code, hr, del, dfn, em, img, ins, kbd, q, samp, small, strong, sub, sup, var, b, i, ol, ul, li, form, label, audio, video,header,footer,dl,dt,dd,button,table,tr,td,thead,tbody,input { margin: 0; padding: 0; outline: none;box-sizing: border-box; }

ul li {
  list-style:none;
}
a{
  text-decoration: none;
  color:#000;
}
html,body{
    width: 100%;
    height: 100%;
  }
#app{
  width:100%;
  height:100%;
}


</style>
