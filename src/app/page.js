import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
    return (

        <>
            <header className="bg-[#000000] p-4 text-white shadow-md w-full">
                <nav className="container mx-auto flex items-center justify-between">
                    <Image
                        src="/BituryLogo.png"
                        alt="logo"
                        width={150}
                        height={50}
                        className="transition-transform duration-500 hover:rotate-12"
                    />
                    <div className="flex space-x-6">
                        <Link
                            href="#home"
                            className="text-lg font-medium hover:text-[#4BD0F1] transition-colors duration-300"
                        >
                            Home
                        </Link>
                        <Link
                            href="#sobre"
                            className="text-lg font-medium hover:text-[#4BD0F1] transition-colors duration-300"
                        >
                            ChronosGram
                        </Link>
                        <Link
                            href="#produtos"
                            className="text-lg font-medium hover:text-[#4BD0F1] transition-colors duration-300"
                        >
                            Produtos
                        </Link>
                    </div>
                </nav>
            </header>

            <main className="bg-[#000000] text-[#4A4A4A] min-h-screen flex flex-col items-center">
                <section
                    id="sobre"
                    className="w-full min-h-screen flex items-center justify-center bg-[#000000] text-white"
                >
                    <div className="w-auto mx-auto flex flex-col lg:flex-row gap-8 items-center">
                        <div className="w-full lg:w-1/2 text-center items-center">
                            <h1 className="text-4xl font-bold mb-6 text-[#6016ff] transition-transform duration-500 hover:scale-105 animate-fade-in">
                                <strong className="text-[#5A17E7]">ChronosGram</strong> - O Seu Aliado na Jornada Acadêmica!
                            </h1>
                            <video
                                className="w-1/3 center rounded-lg shadow-lg mb-6 mx-auto transition-transform duration-500 hover:scale-105"
                                width="640"
                                height="360"
                                controls
                                autoPlay
                            >
                                <source src="/Vídeodemosntra.mp4" type="video/mp4" />
                                Seu navegador não suporta o elemento de vídeo.
                            </video>
                        </div>
                        <div className="w-full lg:w-1/3 text-center text-[#dddddd]">
                            <h2 className="text-4xl font-semibold mb-4 text-[#9a80bc] transition-transform duration-500 hover:scale-105 animate-fade-in">
                                A Revolução no Gerenciamento de Tempo Universitário
                            </h2>
                            <p className="mb-4 leading-relaxed transition-transform duration-500 hover:translate-x-1 animate-fade-in">
                                O ChronosGram é mais do que um aplicativo; é a sua solução inteligente para
                                maximizar o rendimento acadêmico sem comprometer a qualidade de vida. Utilizando tecnologia de
                                inteligência artificial, o ChronosGram analisa o perfil único de cada estudante, compreende suas
                                preferências e necessidades, e recomenda as melhores tarefas para otimizar o tempo de estudo.
                            </p>
                            <p className="mb-4 leading-relaxed transition-transform duration-500 hover:translate-x-1 animate-fade-in">
                                Nossa missão é simples: aumentar o desempenho na universidade enquanto preserva
                                o equilíbrio entre vida acadêmica e pessoal. Com o ChronosGram, você terá acesso a uma abordagem
                                personalizada de gerenciamento de tempo, recebendo recomendações precisas e eficientes que se
                                alinham ao seu perfil, permitindo que você alcance o máximo potencial acadêmico sem sacrificar
                                momentos importantes da sua vida pessoal.
                            </p>
                            <p className="leading-relaxed transition-transform duration-500 hover:translate-x-1 animate-fade-in">
                                Não comprometa mais o seu bem-estar. Junte-se à revolução do ChronosGram e
                                conquiste o equilíbrio perfeito entre estudo e vida pessoal.
                            </p>
                        </div>
                    </div>
                </section>

                <h1 className="text-4xl font-extrabold text-center my-12 text-[#6016ff] transition-transform duration-700 hover:scale-110 animate-bounce animate-fade-in">
                    Nunca mais reprove sem estudar!
                </h1>

                <section
                    id="home"
                    className="w-full min-h-screen flex items-center justify-center bg-[#000000] text-white"
                >
                    <div className="w-full max-w-screen-lg flex flex-col lg:flex-row gap-8 items-center justify-center">
                        <div className="w-full lg:w-1/2 text-center">
                            <div className="mb-8">
                                <h1 className="text-3xl font-bold mb-4 text-[#4BD0F1] transition-transform duration-500 hover:scale-105 animate-fade-in">
                                    BituryTech,
                                    <strong className="text-[#a0edff]"> Startup de Tecnologia!</strong>
                                </h1>
                                <p className="leading-relaxed text-[#dddddd] transition-transform duration-500 hover:translate-x-1 animate-fade-in">
                                    Na BituryTech, nossa jornada começou nos corredores acadêmicos da
                                    UFRPE/UABJ, onde alunos do 5º ano de Engenharia da Computação se uniram para criar uma
                                    empresa dedicada à inovação na área da tecnologia. Desde então, temos trilhado um caminho de
                                    descoberta e aprendizado, transformando desafios em oportunidades.
                                </p>
                            </div>
                            <div>
                                <h2 className="text-2xl font-semibold mb-4 text-[#4BD0F1] transition-transform duration-500 hover:scale-105 animate-fade-in">
                                    Nossa Missão: <strong className="text-[#a0edff]">Transformar Ideias em Soluções Tecnológicas.</strong>
                                </h2>
                                <p className="leading-relaxed text-[#dddddd] transition-transform duration-500 hover:translate-x-1 animate-fade-in">
                                    Na vanguarda da tecnologia, a BituryTech surge como uma empresa
                                    comprometida em transformar ideias inovadoras em soluções práticas e eficientes.
                                    Com uma equipe de alunos dedicados e apaixonados pela computação,
                                    buscamos constantemente superar limites e proporcionar soluções que impulsionem o sucesso de
                                    nossos clientes.
                                </p>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 text-center">
                            <Image
                                id="img_tela"
                                src="/App.png"
                                alt="tela do aplicativo"
                                width={640}
                                height={360}
                                className="transition-transform duration-500 hover:scale-105"
                            />
                        </div>
                    </div>
                </section>

                <section
                    id="produtos"
                    className="w-full min-h-1 flex flex-col items-center justify-center bg-black text-white py-14"
                >
                    <h1 className="text-3xl font-bold text-center mb-6 text-[#4BD0F1] transition-transform duration-500 hover:scale-105 animate-fade-in">
                        Estude de uma Forma Otimizada com o Aplicativo de Estudo Grátis Mais Avançado
                    </h1>
                    <p className="text-center mb-0 text-[#999999] transition-transform duration-500 hover:translate-x-1 animate-fade-in">
                        Preencha seu e-mail para receber um código de teste e usar nosso aplicativo
                    </p>
                    <div className="text-center space-x-3">
                        <input
                            type="email"
                            placeholder="Digite seu e-mail"
                            required
                            className="p-3 px-14 border border-gray-300 rounded-md shadow-sm mb- text-black focus:outline-none focus:ring-2 focus:ring-[#5E17E9]"
                        />
                        <button
                            type="submit"
                            className="bg-[#5A17E7] text-white px-6 py-3 rounded-md shadow-md hover:bg-[#4BD0F1] transition-colors duration-300 mt-4"
                        >
                            Receber Código
                        </button>
                    </div>

                    <div className="text-center mt-8">
                        <h2 className="text-2xl font-semibold mb-4 text-[#cecece] transition-transform duration-500 hover:scale-105 animate-fade-in">
                            Redes Profissionais :
                        </h2>
                        <div className="flex justify-center space-x-6">
                            <a
                                className="flex items-center text-[#a0edff] hover:underline transition-transform duration-300 hover:scale-110"
                                href="https://www.instagram.com/bitury_tech/"
                            >
                                <Image
                                    src="/instagram.png"
                                    alt="Instagram_imagem"
                                    width={30}
                                    height={30}
                                    className="transition-transform duration-300 hover:scale-110"
                                />
                                <span className="ml-2">Instagram</span>
                            </a>
                            <a
                                className="flex items-center text-[#a0edff] hover:underline transition-transform duration-300 hover:scale-110"
                                href="https://www.linkedin.com/in/bitury-tech-3693762b4/"
                            >
                                <Image
                                    src="/linkedin.png"
                                    alt="Linkedin_imagem"
                                    width={30}
                                    height={30}
                                    className="transition-transform duration-300 hover:scale-110"
                                />
                                <span className="ml-2">Linkedin</span>
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="bg-[#303030] text-white text-center py-4">
                <p className="text-white">Desenvolvido por BituryTech</p>
            </footer>
        </>
    );
}
