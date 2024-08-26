import Link from 'next/link';

export default function Produtos() {
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
                    <h1 className="Pessoa">Vídeo Demonstração</h1>
                    <video className="Video" width="640" height="360" controls>
                        <source src="/Vídeodemosntra.mp4" type="video/mp4" />
                        Seu navegador não suporta o elemento de vídeo.
                    </video>
                </section>
            </main>

            <footer className="Roda_pé">
                <p>Desenvolvido por BituryTech</p>
            </footer>
        </>
    );
}
