import Images from '../assets/images';
import '../css/login.css';

const login = () => {
    return(
        <div className='Container'>

            <div className='button'>
                {/* <Link to='/cadastro'></Link> */}
            </div>

            <div className='Conteudo'>
                
                {/* mascote */}
                <div className='mascote'>
                    <img alt='mascote' src={Images.MascoteBack}></img>
                </div>

                {/* campos de Login */}
                <div className='Login'>

                    <div className='texto'>
                        <p>Entrar</p>
                    </div>

                    <div className='inputs'>
                        <div className='input'>
                            <input placeholder='Email'></input>
                        </div>
                        <div className='input'>
                            <input placeholder='Senha'></input>
                        </div>
                    </div>

                    {/* Linha */}
                    <div className='Linha'></div>
                    <div className='text linha'><p>ou</p></div>
                    <div className='Linha'></div>

                    <div className='buttons'>
                        {/* 
                        <div className='button-google'>
                            <Link to='/google'>
                                // icon do google
                            </Link>
                        </div>
                         */}
                         {/* 
                        <div className='button-facebook'>
                            <Link to='/facebook'>
                                // icon do facebook
                            </Link>
                        </div>
                         */}
                    </div>


                    <div className='textos'>
                        <p>Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default login;