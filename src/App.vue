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
html, body, div, span, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, abbr, address, cite, code, hr, del, dfn, em, img, ins, kbd, q, samp, small, strong, sub, sup, var, b, i, ol, ul, li, form, label, audio, video,header,footer,dl,dt,dd,button { margin: 0; padding: 0; outline: none; }
html, body{
  width:100%;
  height:100%; 
    width: 100%;
    height: 100%;
    display: flex;
}
ul li {
  list-style:none;
}
a{
  text-decoration: none;
}
body{
  display: flex;
  flex-direction: column;
}
#app{
  width:100%;
  height:100%;
}
@keyframes o{
      0%{

        transform: translateX(0px);
      }
      50%{
        transform: translateX(2.66vw) translateY(-2vw) ;

      }
      100%{
        transform: translateX(0px) ;
      }
    }
    @keyframes t{
      0%{
        transform: translateY(-11.3vw);
      }
      50%{
        transform: translateY(-10vw);

      }
      100%{
        transform: translateY(-11.3vw);
      }
    }
    @keyframes e{
      0%{
        transform: translateX(0px);
      }
      50%{
        transform: translateX(-2.66vw) translateY(-2vw);

      }
      100%{
        transform: translateX(0px);
      }

    }
  @keyframes change{
  0%{
    opacity: .7;
  }
  50%{
    opacity: 0.1;
  }
  100%{
    opacity: 0.7;
  }
}



@keyframes xia{
  0%{
    transform: translateY(0) rotateZ(90deg);
  }
  50%{
    transform: translateY(7vw) rotateZ(90deg);
  }
  100%{
    transform: translateY(0) rotateZ(90deg);

  }
}
</style>
