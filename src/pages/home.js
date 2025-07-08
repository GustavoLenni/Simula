import "../css/home.css";
import Images from "../assets/images";
import { useEffect, useState } from "react";


const textosCarrossel = [
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page ",
  "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
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
        <button className="botao-comecar">
          <p>Começar Agora</p>
        </button>
        <button className="botao-conta">
          <p>Já Tenho uma Conta</p>
        </button>
      </div>
    </div>
  );
};

export default Home;
