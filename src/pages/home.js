import "../css/home.css";
import Images from "../assets/images";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const textosCarrossel = [
  "🎯 Desafie-se todos os dias! Transforme seu estudo para o ENEM com atividades práticas, dinâmicas e focadas no que realmente cai na prova.",
  "📚 Humanas e Exatas na medida certa, A cada desafio, você evolui nas matérias que mais precisa — com exercícios pensados para o ENEM de verdade.",
  "🔥 Estude como um jogo. Progrida como um campeão. Aqui você aprende de forma leve e divertida, conquistando pontos, medalhas e, o mais importante: resultados!",
];

const Home = () => {
    // indexAtual: é o número do texto atualmente exibido (0, 1, 2…). 
    // setIndexAtual: atualiza esse índice quando você quer trocar o texto.
  const [indexAtual, setIndexAtual] = useState(0);

  // Avança automaticamente a cada 5 segundos
  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndexAtual((prev) => (prev + 1) % textosCarrossel.length);
    }, 5000); // 5 segundos

    return () => clearInterval(intervalo); // Limpa o intervalo ao desmontar
  }, []);

  const mudarTexto = (novoIndex) => {
    setIndexAtual(novoIndex);
  };

  return (
    <div className="Container">
      <div className="Logo">
        <img alt="logo" src={Images.LogoNome}></img>
      </div>

      <div className="Conteudo">
        <div className="Mascote">
          <img alt="logo" src={Images.Mascote}></img>
        </div>

        <div className="Carrossel">
          <div className="Textos">
            <p>{textosCarrossel[indexAtual]}</p>
          </div>

          <div className="Bolinhas">
            {textosCarrossel.map((_, i) => (
              <div
                key={i}
                className={`Bolinha ${indexAtual === i ? "ativa" : ""}`}
                onClick={() => mudarTexto(i)}
              ></div>
            ))}
          </div>
        </div>
      </div>

      <div className="botoes">

        <div className="botao-comecar">
          <Link to='/login'>
            <p>Começar Agora</p>
          </Link>
        </div>
        <div className="botao-conta">
          <Link to='/login'>
            <p>Já Tenho uma Conta</p>
          </Link> 
        </div>
      </div>
    </div>
  );
};

export default Home;
