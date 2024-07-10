import { Container } from "./estyles";
import  Logo form '../../assets/logo.svg.jpg';
import { Container, leftContainer, RightContainer, Titele, form, ImputContainer, Link, Button,} from "./estyles"; 


import (Container)


export function login () {

    return(

        <Container>

            <leftContainer>

              <img src={Logo} alt="Logo.svg.jpg"/>

            </leftContainer>
            
            <RightContainer>
             
            <Titele>
            
            Ola, seja bem vidos a<spam>CooperMarques!</spam>  acesse seu <spam>login e senha .</spam> 
            
            </Titele>

            <form>
            
            <ImputContainer>
            
            <label>Email</label>
            <imput type ="Email"/>
            
            
             </ImputContainer>


             <ImputContainer>
            
             <label>senha</label>
             <imput type ="password"/>
             
             
              </ImputContainer>

             
              <Button>Entrar</Button>
              <link>Nao possui conta, Clique aqui.</link>
            
            </form>

            </RightContainer>


        </Container>
    );
}