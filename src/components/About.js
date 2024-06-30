import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  font-family: mono;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #ffffff; /* Cor de fundo branca */
  color: #1a1a1a; /* Cor do texto escura */
  min-height: 100vh;
`;

const Header = styled.header`
  display: flex;
  justify-content: center; /* Centraliza o contêiner */
  align-items: center;
  width: 100%;
  padding: 10px 20px; /* Diminuir o padding */
  background-color: #000000; /* Cor de fundo preta */
  color: #ffffff; /* Cor do texto clara */
  box-shadow: none; /* Remover a linha inferior */
  position: fixed;
  top: 0;
  z-index: 1000;
`;

const ContainerNav = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between; /* Ajusta os elementos dentro do contêiner */
  align-items: center;
`;

const Logo = styled(Link)`
  padding: 10px 20px;
  font-size: 1.5em;
  font-weight: bold;
  text-decoration: none;
  margin: 0;
  color: #ffffff; /* Cor do texto clara */
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

const CTAButton = styled(Link)`
  padding: 10px 20px;
  background-color: #008000; /* Verde escuro */
  color: #ffffff; /* Cor do texto clara */
  text-decoration: none;
  font-size: 1.2em;
  border-radius: 5px;
  &:hover {
    background-color: #006400; /* Tom mais escuro ao passar o mouse */
  }
`;

const LoginButton = styled(Link)`
  padding: 10px 25px;
  color: #ffffff;
  text-decoration: none;
  font-size: 1.2em;
  &:hover {
    text-decoration: underline;
  }
`;

const AboutSection = styled.section`
  font-size: 1.2em;
  text-align: justify;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #ffffff;
  color: #1a1a1a;
  margin-top: 80px; /* Espaço para a navbar fixa */
  min-height: 100vh; /* Ocupa pelo menos toda a altura da viewport */
`;

const SectionTitle = styled.h2`
  margin-top: 60px;
  font-size: 3em;
  margin-bottom: 20px;
`;

const SectionText = styled.p`
  font-size: 1.2em;
  max-width: 800px;
  margin: 0 auto 20px auto;
  line-height: 1.5;
  color: #555555;
`;

const Footer = styled.footer`
  padding: 20px;
  background-color: #ffffff; /* Fundo preto */
  color: #000000; /* Cor do texto clara */
  text-align: center;
  width: 100%;
  margin-top: 50px;
`;

const About = () => {
  return (
    <Container>
      <Header>
        <ContainerNav>
        <Logo to="/">PayChain</Logo>
          <Nav>
            <CTAButton to="/register">Cadastre-se</CTAButton>
            <LoginButton to="/login">Login</LoginButton>
          </Nav>
        </ContainerNav>
      </Header>
      <AboutSection>
        <SectionTitle>Quem somos?</SectionTitle>
        <SectionText>
          Nós, os responsáveis pelo trabalho, somos Alison Rocha e Natanael Oliveira, estudantes do primeiro período de Engenharia de Software da Universidade Católica do Salvador. Desenvolvemos esse projeto para a disciplina de Introdução a Engenharia de Software, orientados pelo professor Haroldo Peon.
        </SectionText>
        <SectionTitle>Sobre a PayChain</SectionTitle>
        <SectionText>
        A aplicação PayChain utiliza smart contracts para facilitar transações financeiras peer-to-peer (P2P) de maneira segura e eficiente. Os smart contracts são programas de computador implantados na blockchain que automatizam e garantem a execução de termos pré-definidos. No contexto do PayChain, eles criptografam as transações, protegendo os dados financeiros e assegurando que as condições acordadas entre as partes sejam cumpridas de forma transparente e descentralizada. Isso elimina a necessidade de intermediários e proporciona uma plataforma confiável para realizar transferências diretas de valor entre usuários, aproveitando a segurança e a imutabilidade da tecnologia blockchain.
        </SectionText>
      </AboutSection>
      <Footer>
        <p>Todos os direitos reservados © 2024 PayChain</p>
      </Footer>
    </Container>
  );
};

export default About;
