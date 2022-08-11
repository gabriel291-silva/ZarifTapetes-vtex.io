import React from "react"

import styles from "./MenuMobile.css"

function MenuMobile(){
   const [menuMobileState,setMenuMobileState] = React.useState(false)
   const [category1State,setCategory1State] = React.useState(false)
   const [category2State,setCategory2State] = React.useState(false)
   const [category3State,setCategory3State] = React.useState(false)
   const [category4State,setCategory4State] = React.useState(false)
   const [category5State,setCategory5State] = React.useState(false)
   const [category6State,setCategory6State] = React.useState(false)
   const [category7State,setCategory7State] = React.useState(false)
   const [category8State,setCategory8State] = React.useState(false)
   const [category9State,setCategory9State] = React.useState(false)
   const [category10State,setCategory10State] = React.useState(false)
   const [category11State,setCategory11State] = React.useState(false)

  return(
    <div className={styles["menu-mobile-contents"]}>
      <button className={styles["btn-open-menu-mobile"]} onClick={()=> setMenuMobileState(true)}> ||| </button>
      {menuMobileState ?  <div className={styles["swrap-menu-mobile"]}>
        <div className={styles["menu-mobile"]}>
          <div className={styles["header-menu-mobile"]} onClick={()=> setMenuMobileState(false)}>
            <div className={styles["icon-hamburger"]}> |||</div>
            <button className={styles["btn-close-menu-mobile"]} >Fechar</button>
          </div>
          <div className={styles["title-departamento"]}> Categorias</div>

          <div className={styles["category-contents"]}>

            <button className={styles["category-button"]} onClick={()=> setCategory1State(!category1State)}> ambiente {category1State? <div className={styles["triangulo-para-cima"]}></div>: <div className={styles["triangulo-para-baixo"]}></div>}</button>
            {
              category1State ? <div className={styles["category"]}>
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
            </div> : ""
            }
            <button className={styles["category-button"]} onClick={()=> setCategory2State(!category2State)}> formato {category2State? <div className={styles["triangulo-para-cima"]}></div>: <div className={styles["triangulo-para-baixo"]}></div>}</button>
            {
              category2State ? <div className={styles["category"]}>
              <ul className={styles["sub-category-list"]}>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="">retangular</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="">redondo</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="">quadrado</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="">oval</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="">tronco</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="">passadeira</a></li>
              </ul>
            </div> : ""
            }
            <button className={styles["category-button"]} onClick={()=> setCategory3State(!category3State)}> estilo de desenho {category3State? <div className={styles["triangulo-para-cima"]}></div>: <div className={styles["triangulo-para-baixo"]}></div>}</button>
            {
              category3State ? <div className={styles["category"]}>
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
            </div> : ""
            }
            <button className={styles["category-button"]} onClick={()=> setCategory4State(!category4State)}> tamanho {category4State? <div className={styles["triangulo-para-cima"]}></div>: <div className={styles["triangulo-para-baixo"]}></div>}</button>
            {
              category4State ? <div className={styles["category"]}>
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
            </div> : ""
            }
            <button className={styles["category-button"]} onClick={()=> setCategory5State(!category5State)}> modelo {category5State? <div className={styles["triangulo-para-cima"]}></div>: <div className={styles["triangulo-para-baixo"]}></div>}</button>
            {
              category5State ? <div className={styles["category"]}>
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
            </div> : ""
            }
            <button className={styles["category-button"]} onClick={()=> setCategory6State(!category6State)}> origem {category6State? <div className={styles["triangulo-para-cima"]}></div>: <div className={styles["triangulo-para-baixo"]}></div>}</button>
            {
              category6State ? <div className={styles["category"]}>
              <ul className={styles["sub-category-list"]}>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="">nacional</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="">turco</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="">iraniano</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="">egípicio</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="">israelence</a></li>
              </ul>
            </div> : ""
            }
            <button className={styles["category-button"]} onClick={()=> setCategory7State(!category7State)}> sob-medida {category7State? <div className={styles["triangulo-para-cima"]}></div>: <div className={styles["triangulo-para-baixo"]}></div>}</button>
            {
              category7State ? <div className={styles["category"]}>
              <ul className={styles["sub-category-list"]}>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="">israelence</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="">tear</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="">sisal natural</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="">sisal sintético</a></li>

              </ul>
            </div> : ""
            }
            <button className={styles["category-button"]} onClick={()=> setCategory8State(!category8State)}> superfície {category8State? <div className={styles["triangulo-para-cima"]}></div>: <div className={styles["triangulo-para-baixo"]}></div>}</button>
            {
              category8State ? <div className={styles["category"]}>
              <ul className={styles["sub-category-list"]}>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="">aveludado</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="">bouclê</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="">felpudo</a></li>

              </ul>
            </div> : ""
            }
            <button className={styles["category-button"]} onClick={()=> setCategory9State(!category9State)}> produção {category9State? <div className={styles["triangulo-para-cima"]}></div>: <div className={styles["triangulo-para-baixo"]}></div>}</button>
            {
              category9State ? <div className={styles["category"]}>
              <ul className={styles["sub-category-list"]}>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="">artesanal</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="">industrializado</a></li>

              </ul>
            </div> : ""
            }
            <button className={styles["category-button"]} onClick={()=> setCategory10State(!category10State)}> natureza {category10State? <div className={styles["triangulo-para-cima"]}></div>: <div className={styles["triangulo-para-baixo"]}></div>}</button>
            {
              category10State ? <div className={styles["category"]}>
              <ul className={styles["sub-category-list"]}>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="">natural</a></li>
                <li className={styles["sub-category"]}><a className={styles["links-sub-categorys"]} href="">sintético</a></li>

              </ul>
            </div> : ""
            }
            <button className={styles["category-button"]} onClick={()=> setCategory11State(!category11State)}> cores {category11State? <div className={styles["triangulo-para-cima"]}></div>: <div className={styles["triangulo-para-baixo"]}></div>}</button>
            {
              category11State ? <div className={styles["category"]}>
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
            </div> : ""
            }

          </div>
        </div>
      </div>: "" }

    </div>
  )
}

export default MenuMobile
