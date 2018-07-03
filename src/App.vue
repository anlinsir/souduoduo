<template>
  <div id="app">

    <router-view/>
  </div>
</template>

<script>
  import axios from 'axios'
export default {
  name: 'App',
  data(){
    return({
    })
  },
  mounted(){
    if(!localStorage.countries){
       axios.get('http://sdd.xtype.cn/api/exchange/countries')
              .then((res)=>{
                localStorage.countries = JSON.stringify(res.data.data)

       })
    }else if(localStorage.countries){
    }

    
   
  }
}
</script>

<style>
html, body, div, span, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, abbr, address, cite, code, hr, del, dfn, em, img, ins, kbd, q, samp, small, strong, sub, sup, var, b, i, ol, ul, li, form, label, audio, video,header,footer,dl,dt,dd,button,table,tr,td,thead,tbody,input { margin: 0; padding: 0; outline: none;box-sizing: border-box; font-family: Helvetica,Arial,Lucida Family,Verdana,Tahoma,Trebuchet MS}

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
