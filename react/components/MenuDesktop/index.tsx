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
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="">Sala de estar</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="">sala de jantar</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="">quarto</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="">corredor</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="">cozinha</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="">banheiro</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="">externo</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="">entrada</a></li>
              </ul>
              <a href="" className={styles["links-categorys"]}> ver todos</a>

        </div>
        </div>

        <div className={styles["btn-category"]} >
         <a className={styles["btn-open"]} onMouseOver={()=> verifyPopUp("formato")} href="https://www.zariftapetes.com.br/tapetes/formato?initialMap=c&amp;initialQuery=tapetes&amp;map=category-1,category-2" >formato</a>
        <div className={styles["sub-category-contets"]} onMouseLeave={()=>closePopUP()} id="formato" >
          <ul className={styles["sub-category-list"]}>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="">retangular</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="">redondo</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="">quadrado</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="">oval</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="">tronco</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="">passadeira</a></li>
              </ul>
              <a href="" className={styles["links-categorys"]}> ver todos</a>

        </div>
        </div>


        <div className={styles["btn-category"]} >
        <a className={styles["btn-open"]} onMouseOver={()=> verifyPopUp("estilo-de-desenho")} href="https://www.zariftapetes.com.br/tapetes/estilo-de-desenho?initialMap=c&amp;initialQuery=tapetes&amp;map=category-1,category-2" >estilo de desenho</a>
        <div className={styles["sub-category-contets"]} onMouseLeave={()=>closePopUP()}  id="estilo-de-desenho">
          <ul className={styles["sub-category-list"]}>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="">liso</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="">moderno</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="">patchwork</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="">listrado</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="">geométrico</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="">relevo</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="">orinetal</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="">floral</a></li>

              </ul>
              <a href="" className={styles["links-categorys"]}> ver todos</a>

        </div>
        </div>


        <div className={styles["btn-category"]} >
        <a className={styles["btn-open"]} onMouseOver={()=> verifyPopUp("tamanho")} href="https://www.zariftapetes.com.br/tapetes/tamanho?initialMap=c&amp;initialQuery=tapetes&amp;map=category-1,category-2" >tamanho</a>
          <div className={styles["sub-category-contets"]} onMouseLeave={()=>closePopUP()}  id="tamanho">
          <ul className={styles["sub-category-list"]}>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="">50x100</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="">100x150</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="">150x200</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="">200x250</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="">200x300</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="">250x300</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="">250x350</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="">300x250</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="">300x400</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="">300x500</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="">400x600</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="">outros</a></li>

              </ul>
              <a href="" className={styles["links-categorys"]}> ver todos</a>

        </div>
        </div>


        <div className={styles["btn-category"]} >
        <a className={styles["btn-open"]} onMouseOver={()=> verifyPopUp("modelo")} href="https://www.zariftapetes.com.br/tapetes/modelo?initialMap=c&amp;initialQuery=tapetes&amp;map=category-1,category-2" >modelo</a>

 <div className={styles["sub-category-contets"]} onMouseLeave={()=>closePopUP()}  id="modelo">
          <ul className={styles["sub-category-list"]}>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="">kilim</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="">sisal</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="">pele</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="">aveludado</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="">felpudo</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="">bouclê</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="">tear</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="">oriental</a></li>

              </ul>
              <a href="" className={styles["links-categorys"]}> ver todos</a>

        </div>
        </div>


        <div className={styles["btn-category"]} >
        <a className={styles["btn-open"]} onMouseOver={()=> verifyPopUp("origem")} href="https://www.zariftapetes.com.br/tapetes/origem?initialMap=c&amp;initialQuery=tapetes&amp;map=category-1,category-2" >origem</a>

         <div className={styles["sub-category-contets"]} onMouseLeave={()=>closePopUP()}  id="origem">
          <ul className={styles["sub-category-list"]}>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="">nacional</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="">turco</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="">iraniano</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="">egípicio</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="">israelence</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="">Indiano</a></li>

              </ul>
              <a href="" className={styles["links-categorys"]}> ver todos</a>

        </div>
        </div>


        <div className={styles["btn-category"]} >
        <a className={styles["btn-open"]} onMouseOver={()=> verifyPopUp("superficie")} href="" >superfície</a>

         <div className={styles["sub-category-contets"]} onMouseLeave={()=>closePopUP()} id="superficie" >
          <ul className={styles["sub-category-list"]}>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="">aveludado</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="">bouclê</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="">felpudo</a></li>

              </ul>
              <a href="" className={styles["links-categorys"]}> ver todos</a>

        </div>
        </div>


        <div className={styles["btn-category"]} >
        <a className={styles["btn-open"]} onMouseOver={()=> verifyPopUp("producao")} href="https://www.zariftapetes.com.br/tapetes/producao?initialMap=c&amp;initialQuery=tapetes&amp;map=category-1,category-2" >produção</a>

         <div className={styles["sub-category-contets"]} onMouseLeave={()=>closePopUP()}  id="producao">
          <ul className={styles["sub-category-list"]}>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="">artesanal</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="">industrializado</a></li>

              </ul>
              <a href="" className={styles["links-categorys"]}> ver todos</a>

        </div>
        </div>


        <div className={styles["btn-category"]} >
        <a className={styles["btn-open"]} onMouseOver={()=> verifyPopUp("natureza")} href="https://www.zariftapetes.com.br/tapetes/natureza?initialMap=c&amp;initialQuery=tapetes&amp;map=category-1,category-2" >natureza</a>

          <div className={styles["sub-category-contets"]} onMouseLeave={()=>closePopUP()} id="natureza" >
          <ul className={styles["sub-category-list"]}>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="">natural</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="">sintético</a></li>

              </ul>
              <a href="" className={styles["links-categorys"]}> ver todos</a>

        </div>
        </div>


        <div className={styles["btn-category"]} >
        <a className={styles["btn-open"]} onMouseOver={()=> verifyPopUp("cores")} href="https://www.zariftapetes.com.br/tapetes/cores?initialMap=c&amp;initialQuery=tapetes&amp;map=category-1,category-2" >cores</a>

        <div className={styles["sub-category-contets"]} onMouseLeave={()=> closePopUP() }  id="cores">
          <ul className={styles["sub-category-list"]}>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="">amarelo</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="">azaul</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="">bege</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="">branco</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="">cinza</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="">marfim</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="">marrom</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="">preto</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="">rosa</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="">verde</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="">vermelho</a></li>

              </ul>
              <a href="" className={styles["links-categorys"]}> ver todos</a>

        </div>
        </div>


        </div>
      </div>

    </div>

  )
}

export default MenuDesktop
