import Link from 'next/link';

export default function About() {
    return (
        <>
            <header className="Cabeçalho">
                <nav className="Cabecalho_Menu">
                    <Link href="/"><a className="Cabecalho_Menu_Home">Home</a></Link>
                    <Link href="/about"><a className="Cabecalho_Menu_Sobre">ChronosGram</a></Link>
                    <Link href="/produtos"><a className="Cabecalho_Menu_Produtos">Produtos</a></Link>
                </nav>
            </header>

            <main className="Apresentaçao">
                <section className='Apresentaçao_conteudo'>
                    <h1 className="Pessoa">ESTUDE DE UMA FORMA OTIMIZADA COM O APLICATIVO DE ESTUDO GRÁTIS MAIS AVANÇADO</h1>
                    <p className="Paragrafo">Preencha seu e-mail para receber um código de teste para usar nosso aplicativo</p>
                    <div className="Caixatexto">
                        <input type="text" placeholder="Digite seu texto aqui" />
                    </div>
                    <button type="submit">Enviar</button>
                </section>
                <img className="Imagem_p" src="/App.png" alt="Pedro Henrique" />
            </main>

            <footer className="Roda_pé">
                <p>Desenvolvido por BituryTech</p>
            </footer>
        </>
    );
}
