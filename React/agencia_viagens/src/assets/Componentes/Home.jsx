import styles from '../css/Home.module.css'

function Home(){

    return(
        <section className={styles.corpo_home}>
            <div className={styles.imagem_lado}>
            </div>

            <div className={styles.texto_lado}>
                <h1>Encontre aqui a sua pior viagem possível!</h1>
                <p>Está pronto para a pior aventura que poderia ir? nós transformamos suas ideias em experiências horriveis! Desde destinos ruins até as top de bala mais feias, oferecemos pacotes personalizados que se adequam a sua péssima viagem e orçamento super caros.Com atendimento especializado em piorar ainda mais sua viagem e dicas piores ainda, garantimos que cada viagem seja única, temos certeza que você nunca irá esquece-la. Explore, reclame e aproveite o pior da vida! Entre em contato e comece a planejar sua próxima aventura hoje mesmo</p>
            </div>
        </section>


    )
}

export default Home