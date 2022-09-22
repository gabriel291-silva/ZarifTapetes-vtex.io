import React from "react"

import styles from "./MenuDesktop.css"

function MenuDesktop(){
  const [oldIdCategory,setoldIdCategory] = React.useState("")
  const [idCategory,setIdCategory] = React.useState("")

  function verifyPopUp(idCategory){
    setIdCategory(idCategory)
    document.getElementById(idCategory).style.display="flex";
      if(oldIdCategory){
        document.getElementById(oldIdCategory).style.display="none";
      }
    setoldIdCategory(idCategory)
  }

  function closePopUP(){
document.getElementById(idCategory).style.display ="none"
  }

  return(
    <div className={styles["menu-desktop-contents"]}>
      <div className={styles["categorys-contents"]}>

        <div className={styles["category"]}>

        <div className={styles["btn-category"]} >
        <a className={styles["btn-open"]} onMouseOver={()=> verifyPopUp("ambiente")} href="https://www.zariftapetes.com.br/tapetes/ambiente?initialMap=c&amp;initialQuery=tapetes&amp;map=category-1,category-2" >ambiente</a>
        <div className={styles["sub-category-contets"]} onMouseLeave={()=>closePopUP()}  id="ambiente" >
          <ul className={styles["sub-category-list"]}>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="https://www.zariftapetes.com.br/tapetes/ambiente/sala-de-estar?initialMap=c&amp;initialQuery=tapetes&amp;map=category-1,category-2,category-3">Sala de estar</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="https://www.zariftapetes.com.br/tapetes/ambiente/sala-de-jantar?initialMap=c&amp;initialQuery=tapetes&amp;map=category-1,category-2,category-3">sala de jantar</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="https://www.zariftapetes.com.br/tapetes/ambiente/quarto?initialMap=c&amp;initialQuery=tapetes&amp;map=category-1,category-2,category-3">quarto</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="https://www.zariftapetes.com.br/tapetes/ambiente/corredor?initialMap=c&amp;initialQuery=tapetes&amp;map=category-1,category-2,category-3">corredor</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="https://www.zariftapetes.com.br/tapetes/ambiente/cozinha?initialMap=c&amp;initialQuery=tapetes&amp;map=category-1,category-2,category-3">cozinha</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="https://www.zariftapetes.com.br/tapetes/ambiente/banheiro?initialMap=c&amp;initialQuery=tapetes&amp;map=category-1,category-2,category-3">banheiro</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="https://www.zariftapetes.com.br/tapetes/ambiente/externo?initialMap=c&amp;initialQuery=tapetes&amp;map=category-1,category-2,category-3">externo</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="https://www.zariftapetes.com.br/tapetes/ambiente/entrada?initialMap=c&amp;initialQuery=tapetes&amp;map=category-1,category-2,category-3">entrada</a></li>
              </ul>
              <a href="https://www.zariftapetes.com.br/tapetes/ambiente?initialMap=c&amp;initialQuery=tapetes&amp;map=category-1,category-2" className={styles["links-categorys"]}> ver todos</a>

        </div>
        </div>

        <div className={styles["btn-category"]} >
         <a className={styles["btn-open"]} onMouseOver={()=> verifyPopUp("formato")} href="https://www.zariftapetes.com.br/tapetes/formato?initialMap=c&amp;initialQuery=tapetes&amp;map=category-1,category-2" >formato</a>
        <div className={styles["sub-category-contets"]} onMouseLeave={()=>closePopUP()} id="formato" >
          <ul className={styles["sub-category-list"]}>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="https://www.zariftapetes.com.br/tapetes/formato/retangular?initialMap=c&amp;initialQuery=tapetes&amp;map=category-1,category-2,category-3">retangular</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="https://www.zariftapetes.com.br/tapetes/formato/redondo?initialMap=c&amp;initialQuery=tapetes&amp;map=category-1,category-2,category-3">redondo</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="https://www.zariftapetes.com.br/tapetes/formato/quadrado?initialMap=c&amp;initialQuery=tapetes&amp;map=category-1,category-2,category-3">quadrado</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="https://www.zariftapetes.com.br/tapetes/formato/oval?initialMap=c&amp;initialQuery=tapetes&amp;map=category-1,category-2,category-3">oval</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="https://www.zariftapetes.com.br/tapetes/formato/tronco?initialMap=c&amp;initialQuery=tapetes&amp;map=category-1,category-2,category-3">tronco</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="https://www.zariftapetes.com.br/tapetes/formato/passedeira?initialMap=c&amp;initialQuery=tapetes&amp;map=category-1,category-2,category-3">passadeira</a></li>
              </ul>
              <a href="" className={styles["links-categorys"]}> ver todos</a>

        </div>
        </div>


        <div className={styles["btn-category"]} >
        <a className={styles["btn-open"]} onMouseOver={()=> verifyPopUp("estilo-de-desenho")} href="https://www.zariftapetes.com.br/tapetes/estilo-de-desenho?initialMap=c&amp;initialQuery=tapetes&amp;map=category-1,category-2" >estilo de desenho</a>
        <div className={styles["sub-category-contets"]} onMouseLeave={()=>closePopUP()}  id="estilo-de-desenho">
          <ul className={styles["sub-category-list"]}>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="https://www.zariftapetes.com.br/tapetes/estilo-de-desenho/liso?initialMap=c&amp;initialQuery=tapetes&amp;map=category-1,category-2,category-3">liso</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="https://www.zariftapetes.com.br/tapetes/estilo-de-desenho/moderno?initialMap=c&amp;initialQuery=tapetes&amp;map=category-1,category-2,category-3">moderno</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="https://www.zariftapetes.com.br/tapetes/estilo-de-desenho/patchwork?initialMap=c&amp;initialQuery=tapetes&amp;map=category-1,category-2,category-3">patchwork</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="https://www.zariftapetes.com.br/tapetes/estilo-de-desenho/listrado?initialMap=c&amp;initialQuery=tapetes&amp;map=category-1,category-2,category-3">listrado</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="https://www.zariftapetes.com.br/tapetes/estilo-de-desenho/geometrico?initialMap=c&amp;initialQuery=tapetes&amp;map=category-1,category-2,category-3">geométrico</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="https://www.zariftapetes.com.br/tapetes/estilo-de-desenho/relevo?initialMap=c&amp;initialQuery=tapetes&amp;map=category-1,category-2,category-3">relevo</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="https://www.zariftapetes.com.br/tapetes/estilo-de-desenho/oriental?initialMap=c&amp;initialQuery=tapetes&amp;map=category-1,category-2,category-3">orinetal</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="https://www.zariftapetes.com.br/tapetes/estilo-de-desenho/floral?initialMap=c&amp;initialQuery=tapetes&amp;map=category-1,category-2,category-3">floral</a></li>

              </ul>
              <a href="" className={styles["links-categorys"]}> ver todos</a>

        </div>
        </div>


        <div className={styles["btn-category"]} >
        <a className={styles["btn-open"]} onMouseOver={()=> verifyPopUp("tamanho")} href="https://www.zariftapetes.com.br/tapetes/tamanho?initialMap=c&amp;initialQuery=tapetes&amp;map=category-1,category-2" >tamanho</a>
          <div className={styles["sub-category-contets"]} onMouseLeave={()=>closePopUP()}  id="tamanho">
          <ul className={styles["sub-category-list"]}>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="https://www.zariftapetes.com.br/tapetes/tamanho/50x1000?initialMap=c&amp;initialQuery=tapetes&amp;map=category-1,category-2,category-3">50x100</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="https://www.zariftapetes.com.br/tapetes/tamanho/100x150?initialMap=c&amp;initialQuery=tapetes&amp;map=category-1,category-2,category-3">100x150</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="https://www.zariftapetes.com.br/tapetes/tamanho/150x200?initialMap=c&amp;initialQuery=tapetes&amp;map=category-1,category-2,category-3">150x200</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="https://www.zariftapetes.com.br/tapetes/tamanho/200x250?initialMap=c&amp;initialQuery=tapetes&amp;map=category-1,category-2,category-3">200x250</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="https://www.zariftapetes.com.br/tapetes/tamanho/200x300?initialMap=c&amp;initialQuery=tapetes&amp;map=category-1,category-2,category-3">200x300</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="https://www.zariftapetes.com.br/tapetes/tamanho/250x300?initialMap=c&amp;initialQuery=tapetes&amp;map=category-1,category-2,category-3">250x300</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="https://www.zariftapetes.com.br/tapetes/tamanho/250x350?initialMap=c&amp;initialQuery=tapetes&amp;map=category-1,category-2,category-3">250x350</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="https://www.zariftapetes.com.br/tapetes/tamanho/300x250?initialMap=c&amp;initialQuery=tapetes&amp;map=category-1,category-2,category-3">300x250</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="https://www.zariftapetes.com.br/tapetes/tamanho/300x400?initialMap=c&amp;initialQuery=tapetes&amp;map=category-1,category-2,category-3">300x400</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="https://www.zariftapetes.com.br/tapetes/tamanho/300x500?initialMap=c&amp;initialQuery=tapetes&amp;map=category-1,category-2,category-3">300x500</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="https://www.zariftapetes.com.br/tapetes/tamanho/400x600?initialMap=c&amp;initialQuery=tapetes&amp;map=category-1,category-2,category-3">400x600</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="https://www.zariftapetes.com.br/tapetes/tamanho/outros?initialMap=c&amp;initialQuery=tapetes&amp;map=category-1,category-2,category-3">outros</a></li>

              </ul>
              <a href="https://www.zariftapetes.com.br/tapetes/tamanho?initialMap=c&amp;initialQuery=tapetes&amp;map=category-1,category-2" className={styles["links-categorys"]}> ver todos</a>

        </div>
        </div>


        <div className={styles["btn-category"]} >
        <a className={styles["btn-open"]} onMouseOver={()=> verifyPopUp("modelo")} href="https://www.zariftapetes.com.br/tapetes/modelo?initialMap=c&amp;initialQuery=tapetes&amp;map=category-1,category-2" >modelo</a>

 <div className={styles["sub-category-contets"]} onMouseLeave={()=>closePopUP()}  id="modelo">
          <ul className={styles["sub-category-list"]}>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="https://www.zariftapetes.com.br/tapetes/modelo/kilim?initialMap=c&amp;initialQuery=tapetes&amp;map=category-1,category-2,category-3">kilim</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="https://www.zariftapetes.com.br/tapetes/modelo/sisal?initialMap=c&amp;initialQuery=tapetes&amp;map=category-1,category-2,category-3">sisal</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="https://www.zariftapetes.com.br/tapetes/modelo/pele?initialMap=c&amp;initialQuery=tapetes&amp;map=category-1,category-2,category-3">pele</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="https://www.zariftapetes.com.br/tapetes/modelo/aveludado?initialMap=c&amp;initialQuery=tapetes&amp;map=category-1,category-2,category-3">aveludado</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="https://www.zariftapetes.com.br/tapetes/modelo/felpudo?initialMap=c&amp;initialQuery=tapetes&amp;map=category-1,category-2,category-3">felpudo</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="https://www.zariftapetes.com.br/tapetes/modelo/boucle?initialMap=c&amp;initialQuery=tapetes&amp;map=category-1,category-2,category-3">bouclê</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="https://www.zariftapetes.com.br/tapetes/modelo/tear?initialMap=c&amp;initialQuery=tapetes&amp;map=category-1,category-2,category-3">tear</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="https://www.zariftapetes.com.br/tapetes/modelo/oriental?initialMap=c&amp;initialQuery=tapetes&amp;map=category-1,category-2,category-3">oriental</a></li>

              </ul>
              <a href="https://www.zariftapetes.com.br/tapetes/modelo?initialMap=c&amp;initialQuery=tapetes&amp;map=category-1,category-2" className={styles["links-categorys"]}> ver todos</a>

        </div>
        </div>


        <div className={styles["btn-category"]} >
        <a className={styles["btn-open"]} onMouseOver={()=> verifyPopUp("origem")} href="https://www.zariftapetes.com.br/tapetes/origem?initialMap=c&amp;initialQuery=tapetes&amp;map=category-1,category-2" >origem</a>

         <div className={styles["sub-category-contets"]} onMouseLeave={()=>closePopUP()}  id="origem">
          <ul className={styles["sub-category-list"]}>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="https://www.zariftapetes.com.br/tapetes/origem/nacional?initialMap=c&amp;initialQuery=tapetes&amp;map=category-1,category-2,category-3">nacional</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="https://www.zariftapetes.com.br/tapetes/origem/turco?initialMap=c&amp;initialQuery=tapetes&amp;map=category-1,category-2,category-3">turco</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="https://www.zariftapetes.com.br/tapetes/origem/iraniano?initialMap=c&amp;initialQuery=tapetes&amp;map=category-1,category-2,category-3">iraniano</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="https://www.zariftapetes.com.br/tapetes/origem/egipicio?initialMap=c&amp;initialQuery=tapetes&amp;map=category-1,category-2,category-3">egípicio</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="https://www.zariftapetes.com.br/tapetes/origem/israelence?initialMap=c&amp;initialQuery=tapetes&amp;map=category-1,category-2,category-3">israelence</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="https://www.zariftapetes.com.br/tapetes/origem/indiano?initialMap=c&amp;initialQuery=tapetes&amp;map=category-1,category-2,category-3">Indiano</a></li>

              </ul>
              <a href="https://www.zariftapetes.com.br/tapetes/origem?initialMap=c&amp;initialQuery=tapetes&amp;map=category-1,category-2" className={styles["links-categorys"]}> ver todos</a>

        </div>
        </div>


        <div className={styles["btn-category"]} >
        <a className={styles["btn-open"]} onMouseOver={()=> verifyPopUp("superficie")} href="https://www.zariftapetes.com.br/tapetes/superficie?initialMap=c&amp;initialQuery=tapetes&amp;map=category-1,category-2" >superfície</a>

         <div className={styles["sub-category-contets"]} onMouseLeave={()=>closePopUP()} id="superficie" >
          <ul className={styles["sub-category-list"]}>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="https://www.zariftapetes.com.br/tapetes/superficie/aveludado?initialMap=c&amp;initialQuery=tapetes&amp;map=category-1,category-2,category-3">aveludado</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="https://www.zariftapetes.com.br/tapetes/superficie/boucle?initialMap=c&amp;initialQuery=tapetes&amp;map=category-1,category-2,category-3">bouclê</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="https://www.zariftapetes.com.br/tapetes/superficie/felpudo?initialMap=c&amp;initialQuery=tapetes&amp;map=category-1,category-2,category-3">felpudo</a></li>

              </ul>
              <a href="https://www.zariftapetes.com.br/tapetes/superficie?initialMap=c&amp;initialQuery=tapetes&amp;map=category-1,category-2" className={styles["links-categorys"]}> ver todos</a>

        </div>
        </div>


        <div className={styles["btn-category"]} >
        <a className={styles["btn-open"]} onMouseOver={()=> verifyPopUp("producao")} href="https://www.zariftapetes.com.br/tapetes/producao?initialMap=c&amp;initialQuery=tapetes&amp;map=category-1,category-2" >produção</a>

         <div className={styles["sub-category-contets"]} onMouseLeave={()=>closePopUP()}  id="producao">
          <ul className={styles["sub-category-list"]}>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="https://www.zariftapetes.com.br/tapetes/producao/artesanal?initialMap=c&amp;initialQuery=tapetes&amp;map=category-1,category-2">artesanal</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="https://www.zariftapetes.com.br/tapetes/producao/industrializado?initialMap=c&amp;initialQuery=tapetes&amp;map=category-1,category-2">industrializado</a></li>

              </ul>
              <a href="https://www.zariftapetes.com.br/tapetes/producao?initialMap=c&amp;initialQuery=tapetes&amp;map=category-1,category-2" className={styles["links-categorys"]}> ver todos</a>

        </div>
        </div>


        <div className={styles["btn-category"]} >
        <a className={styles["btn-open"]} onMouseOver={()=> verifyPopUp("natureza")} href="https://www.zariftapetes.com.br/tapetes/natureza?initialMap=c&amp;initialQuery=tapetes&amp;map=category-1,category-2" >natureza</a>

          <div className={styles["sub-category-contets"]} onMouseLeave={()=>closePopUP()} id="natureza" >
          <ul className={styles["sub-category-list"]}>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="https://www.zariftapetes.com.br/tapetes/natureza/natural?initialMap=c&amp;initialQuery=tapetes&amp;map=category-1,category-2,category-3">natural</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="https://www.zariftapetes.com.br/tapetes/natureza/sintetico?initialMap=c&amp;initialQuery=tapetes&amp;map=category-1,category-2,category-3">sintético</a></li>

              </ul>
              <a href="https://www.zariftapetes.com.br/tapetes/natureza?initialMap=c&amp;initialQuery=tapetes&amp;map=category-1,category-2" className={styles["links-categorys"]}> ver todos</a>

        </div>
        </div>


        <div className={styles["btn-category"]} >
        <a className={styles["btn-open"]} onMouseOver={()=> verifyPopUp("cores")} href="https://www.zariftapetes.com.br/tapetes/cores?initialMap=c&amp;initialQuery=tapetes&amp;map=category-1,category-2" >cores</a>

        <div className={styles["sub-category-contets"]} onMouseLeave={()=> closePopUP() }  id="cores">
          <ul className={styles["sub-category-list"]}>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="https://www.zariftapetes.com.br/tapetes/cores/amarelo?initialMap=c&amp;initialQuery=tapetes&amp;map=category-1,category-2,category-3">amarelo</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="https://www.zariftapetes.com.br/tapetes/cores/azul?initialMap=c&amp;initialQuery=tapetes&amp;map=category-1,category-2,category-3">azul</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="https://www.zariftapetes.com.br/tapetes/cores/bege?initialMap=c&amp;initialQuery=tapetes&amp;map=category-1,category-2,category-3">bege</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="https://www.zariftapetes.com.br/tapetes/cores/branco?initialMap=c&amp;initialQuery=tapetes&amp;map=category-1,category-2,category-3">branco</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="https://www.zariftapetes.com.br/tapetes/cores/cinza?initialMap=c&amp;initialQuery=tapetes&amp;map=category-1,category-2,category-3">cinza</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="https://www.zariftapetes.com.br/tapetes/cores/marfim?initialMap=c&amp;initialQuery=tapetes&amp;map=category-1,category-2,category-3">marfim</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="https://www.zariftapetes.com.br/tapetes/cores/marrom?initialMap=c&amp;initialQuery=tapetes&amp;map=category-1,category-2,category-3">marrom</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="https://www.zariftapetes.com.br/tapetes/cores/preto?initialMap=c&amp;initialQuery=tapetes&amp;map=category-1,category-2,category-3">preto</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="https://www.zariftapetes.com.br/tapetes/cores/rosa?initialMap=c&amp;initialQuery=tapetes&amp;map=category-1,category-2,category-3">rosa</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="https://www.zariftapetes.com.br/tapetes/cores/verde?initialMap=c&amp;initialQuery=tapetes&amp;map=category-1,category-2,category-3">verde</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="https://www.zariftapetes.com.br/tapetes/cores/vermelho?initialMap=c&amp;initialQuery=tapetes&amp;map=category-1,category-2,category-3">vermelho</a></li>

              </ul>
              <a href="https://www.zariftapetes.com.br/tapetes/cores?initialMap=c&amp;initialQuery=tapetes&amp;map=category-1,category-2" className={styles["links-categorys"]}> ver todos</a>

        </div>
        </div>


        </div>
      </div>

    </div>

  )
}

export default MenuDesktop
