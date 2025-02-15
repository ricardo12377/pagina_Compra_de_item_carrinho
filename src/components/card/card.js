import React, {useState, useEffect} from 'react'
import style from './card.module.css'
import Foto1 from '../../images/image-product-1.jpg'
import Foto1Thumb from '../../images/image-product-1-thumbnail.jpg'
import Foto2 from '../../images/image-product-2.jpg'
import Foto2Thumb from '../../images/image-product-2-thumbnail.jpg'
import Foto3 from '../../images/image-product-3.jpg'
import Foto3Thumb from '../../images/image-product-3-thumbnail.jpg'
import Foto4 from '../../images/image-product-4.jpg'
import Foto4Thumb from '../../images/image-product-4-thumbnail.jpg'
import Menos from '../icons/icon-minus.svg'
import Mais from  '../icons/icon-plus.svg'
import Carro from '../icons/icon-cart.svg'

function Card() {

     const [produto, setProduto] = useState('Foto1')
     const [image, setImage] = useState()
     const [quantidade, setQuantidade] = useState(0)
     
     function Adicionar () {
         setQuantidade(quantidade +1)
     }

     function Diminuir () {
         setQuantidade(quantidade - 1)
     }
      
     function AdicionarCarrinho (e) {
         e.preventDefault();
            const item = {quantidade}

            fetch('http://localhost:4000/carrinho', {
                method:"POST",
                headers: {"Content-type": "application/json"},
                body: JSON.stringify(item)
            })
            .then(() => console.log('Deu certo'))
     }

    return (
        <div className={style.container}>
            
            <div className={style.produto}>
                <div className={style.fotomaior}>
                    {
                       produto == 'Foto1' && <img src={Foto1} className={style.foto1} alt="Foto1" />
                    || produto == 'Foto2' && <img src={Foto2} className={style.foto1} alt="Foto2" />
                    || produto == 'Foto3' && <img src={Foto3} className={style.foto1} alt="Foto3" />
                    || produto == 'Foto4' && <img src={Foto4} className={style.foto1} alt="Foto4" />
                    }
                </div>

                <div className={style.fotos}>
                    <img src={Foto1Thumb} alt="Foto1" onClick={()=>setProduto('Foto1')}/>
                    <img src={Foto2Thumb} alt="Foto2" onClick={() => setProduto('Foto2')}/>
                    <img src={Foto3Thumb} alt="Foto3" onClick={()=>setProduto('Foto3')}/> 
                    <img src={Foto4Thumb} alt="Foto4" onClick={()=>setProduto('Foto4')}/>
                </div>

            </div>

            <div className={style.compra} >
                <div className={style.logos}>
                   <div className={style.prelogo}>SNEAKER COMPANY</div>
                   <h1>Fall Limited Edition Sneakers</h1>
                </div>
                <p>
                These low-profile sneakers are your perfect casual wear companion. 
                Featuring a durable rubber outer sole,
                they’ll withstand everything the weather can offer.
                </p>
                <div className={style.valorAtual}>$125,00 <section>50%</section></div>
                <div className={style.valorPassado}>$250,00</div>
                <div className={style.quantidade}>
                    <div className={style.quadrado} id='primeiro' onClick={Diminuir}>
                    <img src={Menos} className={style.diminuir} alt="Diminuir quantidade" />
                    </div>
                    
                    <div className={style.quadrado}>
                        <di>{quantidade}</di>
                    </div>

                    <div className={style.quadrado} onClick={Adicionar}>
                    <img src={Mais} className={style.aumentar} id='terceiro' alt="Aumentar quantidade" />
                    </div>

                    <button onClick={AdicionarCarrinho} className={style.buttonComprar} ><img className={style.carrinho} src={Carro}/> Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default Card
