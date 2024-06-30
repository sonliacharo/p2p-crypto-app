import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  font-family: mono;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #000000; /* Cor de fundo preta */
  color: #1a1a1a; /* Cor do texto escura */

  padding-top: 60px; /* Ajuste para compensar a navbar */
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

  @media (max-width: 768px) {
    padding: 10px 10px; /* Ajuste do padding para telas menores */
  }
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

  @media (max-width: 768px) {
    font-size: 1.2em; /* Reduzir o tamanho da fonte para telas menores */
  }
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

  @media (max-width: 768px) {
    font-size: 1em; /* Reduzir o tamanho do botão para telas menores */
    padding: 8px 16px; /* Ajuste do padding para telas menores */
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

  @media (max-width: 768px) {
    padding: 8px 16px; /* Ajuste do padding para telas menores */
    font-size: 1em; /* Reduzir o tamanho do texto para telas menores */
  }
`;

const AboutButton = styled(Link)`
  padding: 10px 40px;
  color: #ffffff; /* Cor do texto clara */
  text-decoration: none;
  font-size: 1.2em;
  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    padding: 8px 20px; /* Ajuste do padding para telas menores */
    font-size: 1em; /* Reduzir o tamanho do texto para telas menores */
  }
`;

const Hero = styled.section`
  padding: 40px 20px; /* Diminuir o padding */
  min-height: 90vh; /* Diminuir a altura mínima */
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #000000; /* Fundo preto */
  color: #ffffff; /* Cor do texto escura */
  margin-top: 60px; /* Espaço para a navbar fixa */

  @media (max-width: 768px) {
    padding: 30px 10px; /* Ajuste do padding para telas menores */
    min-height: 80vh; /* Ajuste da altura mínima para telas menores */
    margin-top: 50px; /* Ajuste do espaço para telas menores */
  }
`;

const HeroTitle = styled.h2`
  font-size: 3em;
  margin-bottom: 20px;
`;

const HeroSubtitle = styled.p`
  font-size: 1.5em;
  margin-bottom: 40px;
`;

const SectionTitle = styled.h3`
  font-size: 3em;
  margin-bottom: 20px;
  color: #1a1a1a;
`;

const Section = styled.section`
  padding: 40px 20px; /* Diminuir o padding */
  min-height: 60vh; /* Diminuir a altura mínima */
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff; /* Fundo branco */
  color: #1a1a1a; /* Cor do texto escura */

  @media (max-width: 768px) {
    padding: 30px 10px; /* Ajuste do padding para telas menores */
    min-height: 50vh; /* Ajuste da altura mínima para telas menores */
  }
`;

const SectionText = styled.p`
  font-size: 1.5em;
  max-width: 1200px;
  margin: 0 auto 20px auto;
  line-height: 1.5;
  color: #555555;
`;

const FinalSection = styled.section`
  padding: 20px 20px;
  min-height: 10vh;
  display: flex;
  width: 100%;
  max-width: 1200px;
  align-items: center;
  justify-content: space-between;
  background-color: #000000;
  color: #ffffff;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    padding: 20px 10px; /* Ajuste do padding para telas menores */
  }
`;

const FinalSectionTitle = styled.p`
  padding: 20px 20px;
  font-size: 1.5em;
  max-width: 70%; /* Definir largura máxima para responsividade */
  line-height: 1.5;
  text-align: justify;
  margin: 0; /* Remover a margem */

  @media (max-width: 768px) {
    font-size: 1.2em; /* Reduzir o tamanho do texto para telas menores */
    padding: 20px 10px; /* Ajuste do padding para telas menores */
  }
`;

const Footer = styled.footer`
  padding: 20px;
  background-color: #ffffff; /* Fundo preto */
  color: #000000; /* Cor do texto clara */
  text-align: center;
  width: 100%;
`;

const SetaHero = styled.p`
  font-size: 3em;
  margin-top: 150px;
  color: #ffffff;

  @media (max-width: 768px) {
    font-size: 2em; /* Reduzir o tamanho da fonte para telas menores */
    margin-top: 100px; /* Ajuste da margem superior para telas menores */
  }
`;

const Home = () => {
  return (
    <Container>
      <Header>
        <ContainerNav>
          <Logo to="/">PayChain</Logo>
          <Nav>
            <AboutButton to="/about">Sobre Nós</AboutButton>
            <CTAButton to="/register">Cadastre-se</CTAButton>
            <LoginButton to="/login">Login</LoginButton>
          </Nav>
        </ContainerNav>
      </Header>
      <Hero>
        <HeroTitle>Bem-vindo a PayChain</HeroTitle>
        <HeroSubtitle>
          A plataforma segura para transações financeiras
        </HeroSubtitle>
        <CTAButton to="/register">Cadastre-se agora</CTAButton>
        <SetaHero> ↓ </SetaHero>
      </Hero>
      <Section>
        <SectionTitle>Evite golpes</SectionTitle>
        <SectionText>
          Na PayChain, proteger suas transações é simples e rápido. Usamos criptografia avançada para garantir que suas informações financeiras estejam sempre protegidas.
        </SectionText>
      </Section>
      <Section>
        <SectionTitle>Mais segurança para os seus dados e para o seu bolso</SectionTitle>
        <SectionText>
          A PayChain oferece a tecnologia mais avançada para manter suas compras online seguras. Nossa plataforma utiliza smart contracts e blockchain para garantir que cada transação seja criptografada de forma impenetrável.
        </SectionText>
      </Section>
      <Section>
        <SectionTitle>Tecnologia de ponta e inovadora</SectionTitle>
        <SectionText>
          Não se preocupe mais ao fazer compras online. Com a PayChain, você tem a tranquilidade de saber que suas transações são protegidas por tecnologia de ponta, proporcionando uma experiência segura e sem complicações.
        </SectionText>
      </Section>
      <Section>
        <SectionTitle>Rápido e fácil</SectionTitle>
        <SectionText>
          1. Crie sua conta e faça login
        </SectionText>
        <SectionText>
          2. Informe sua chave PIX e valor da transação
        </SectionText>
        <SectionText>
          3. Clique em transferir
        </SectionText>
        <SectionText>
          Com apenas alguns passos simples, suas transações são protegidas automaticamente. Os smart contracts e a blockchain garantem que suas informações sejam criptografadas de maneira segura, proporcionando a você uma camada extra de segurança em cada operação realizada com a PayChain.
        </SectionText>
      </Section>
      <FinalSection>
        <FinalSectionTitle>Cadastre-se e tenha mais segurança em suas transações financeiras com a PayChain</FinalSectionTitle>
        <CTAButton to="/register">Cadastre-se agora</CTAButton>
      </FinalSection>
      <Footer>
        <p>Todos os direitos reservados © 2024 PayChain</p>
        <AboutButton to="/about" style={{ color: '#000000' }}>Sobre Nós</AboutButton>
      </Footer>
    </Container>
  );
};

export default Home;
