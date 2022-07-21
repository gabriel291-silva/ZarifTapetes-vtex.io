import React from "react"
import styles from "./Footer.css"

function Footer(){
  return(
  <footer className={styles["footer"]}>
<div className={styles["links-contents"]}>

  <div className={styles["colun-links"]}>
    <ul className={styles["list-links-contents"]}>
      <li className={styles["links"]}> <a className={styles["link-text"]} href="">Blog</a></li>
      <li className={styles["links"]}> <a className={styles["link-text"]} href="">Quem Somos</a></li>
      <li className={styles["links"]}> <a className={styles["link-text"]} href="">Ofertas</a></li>
      <li className={styles["links"]}> <a className={styles["link-text"]} href="">Endereço</a></li>
      <li className={styles["links"]}> <a className={styles["link-text"]} href="">Horarios</a></li>
    </ul>
  </div>

  <div className={styles["colun-links"]}>
  <ul className={styles["list-links-contents"]}>
    <li className={styles["links"]}> <a className={styles["link-text"]} href="">Tapetes</a></li>
    <li className={styles["links"]}> <a className={styles["link-text"]} href="">Carpetes</a></li>
    <li className={styles["links"]}> <a className={styles["link-text"]} href="">Capachos</a></li>
    <li className={styles["links"]}> <a className={styles["link-text"]} href="">Sob Medidas</a></li>
    <li className={styles["links"]}> <a className={styles["link-text"]} href="">Cortinas</a></li>
    <li className={styles["links"]}> <a className={styles["link-text"]} href="">Passadeiras</a></li>
    </ul>
  </div>

  <div className={styles["colun-links"]}>
  <ul className={styles["list-links-contents"]}>
    <li className={styles["links"]}> <a className={styles["link-text"]} href="">Entregas</a></li>
    <li className={styles["links"]}> <a className={styles["link-text"]} href="">Trocas</a></li>
    <li className={styles["links"]}> <a className={styles["link-text"]} href="">Devoluçôes</a></li>
    <li className={styles["links"]}> <a className={styles["link-text"]} href="">Demonstração</a></li>
    <li className={styles["links"]}> <a className={styles["link-text"]} href="">Personalização</a></li>
    <li className={styles["links"]}> <a className={styles["link-text"]} href="">Sob Medida</a></li>
    </ul>
  </div>

  <div className={styles["colun-links"]}>
  <ul className={styles["list-links-contents"]}>
    <li className={styles["links"]}> <a className={styles["link-text"]} href="">Cozinha</a></li>
    <li className={styles["links"]}> <a className={styles["link-text"]} href="">Sala de Estar</a></li>
    <li className={styles["links"]}> <a className={styles["link-text"]} href="">Sala de Jantar</a></li>
    <li className={styles["links"]}> <a className={styles["link-text"]} href="">Banheiro</a></li>
    <li className={styles["links"]}> <a className={styles["link-text"]} href="">Corredor</a></li>
    </ul>
  </div>
</div>
<div className={styles["option-contents"]}>
  <div className={styles["redes-option-contents"]}>
  <p className={styles["title-redes-option"]}> Redes Sociais</p>

    <div className={styles["icon-contents-rede"]}>
    <a href="">
     <img className={styles["icon-image-redes"]} src="https://zariftapetes.vteximg.com.br/arquivos/fb.png" alt="fecebook" />
    </a>
    <a href="">
     <img className={styles["icon-image-redes"]} src="https://zariftapetes.vteximg.com.br/arquivos/ing.png" alt="fecebook" />
    </a>
    <a href="">
     <img className={styles["icon-image-redes"]} src="https://zariftapetes.vteximg.com.br/arquivos/in.png" alt="fecebook" />
    </a>
    <a href="">
     <img className={styles["icon-image-redes"]} src="https://zariftapetes.vteximg.com.br/arquivos/pinterest.png" alt="fecebook" />
    </a>
    <a href="">
     <img className={styles["icon-image-redes"]} src="https://zariftapetes.vteximg.com.br/arquivos/tiktok.png" alt="fecebook" />
    </a>
    <a href="">
     <img className={styles["icon-image-redes"]} src="https://zariftapetes.vteximg.com.br/arquivos/whatsapp.png" alt="fecebook" />
    </a>
    </div>


  </div>

  <div className={styles["payment-methods-option-contents"]}>
      <p className={styles["title-payment-methods-option"]}> Metodos de pagamento</p>
    <div className={styles["icon-contents-payment-methods"]}>
      <a href="">
          <img className={styles["icon-image-payment-methods"]} src="https://zariftapetes.vteximg.com.br/arquivos/visa.png" alt="" />
        </a>
        <a href="">
          <img className={styles["icon-image-payment-methods"]} src="https://zariftapetes.vteximg.com.br/arquivos/mastercard.png" alt="" />
        </a>
        <a href="">
          <img className={styles["icon-image-payment-methods"]} src="https://zariftapetes.vteximg.com.br/arquivos/elo.png" alt="" />
        </a>
        <a href="">
          <img className={styles["icon-image-payment-methods"]} src="https://zariftapetes.vteximg.com.br/arquivos/pix.png" alt="" />
        </a>
    </div>
  </div>
</div>
  </footer>)
}
export default Footer
