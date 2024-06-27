import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  font-family: mono;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #000000; /* Cor de fundo branca */
  color: #1a1a1a; /* Cor do texto escura */
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

const FinalSectionButton = styled(Link)`
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

const AboutButton = styled(Link)`
  padding: 10px 40px;
  color: #ffffff; /* Cor do texto clara */
  text-decoration: none;
  font-size: 1.2em;
  &:hover {
    text-decoration: underline;
  }
`;

const Hero = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 60px); /* Ajuste para compensar a navbar */
  padding: 20px;
  background: url('hero-background.jpg') no-repeat center center;
  background-size: cover;
  color: #ffffff;
  margin-top: 60px; /* Espaço para a navbar fixa */
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
`;

const SectionText = styled.p`
  font-size: 1.5em;
  max-width: 800px;
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
`;

const FinalSectionTitle = styled.p`
  padding: 20px 20px;
  font-size: 1.5em;
  max-width: 70%; /* Definir largura máxima para responsividade */
  line-height: 1.5;
  text-align: justify;
  margin: 0; /* Remover a margem */
`;

const Footer = styled.footer`
  padding: 20px;
  background-color: #ffffff; /* Fundo preto */
  color: #000000; /* Cor do texto clara */
  text-align: center;
  width: 100%;
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
        <HeroTitle>Bem-vindo ao PayChain</HeroTitle>
        <HeroSubtitle>
          A plataforma segura para transações financeiras
        </HeroSubtitle>
        <CTAButton to="/register">Cadastre-se agora</CTAButton>
      </Hero>
      <Section>
        <SectionTitle>Evite golpes</SectionTitle>
        <SectionText>
          Criptografe suas transações de maneira rápida e fácil
        </SectionText>
      </Section>
      <Section>
        <SectionTitle>Mais segurança para os seus dados e para o seu bolso</SectionTitle>
        <SectionText>
          A PayChain oferece a melhor tecnologia para proteger suas transações online
        </SectionText>
      </Section>
      <Section>
        <SectionTitle>Tecnologia de ponta e inovadora</SectionTitle>
        <SectionText>
          Para você não precisar se preocupar ao comprar online
        </SectionText>
      </Section>
      <FinalSection>
        <FinalSectionTitle>Cadastre-se e tenha mais segurança em suas transações financeiras com a PayChain</FinalSectionTitle>
        <FinalSectionButton to="/register">Cadastre-se agora</FinalSectionButton>
      </FinalSection>
      <Footer>
        <p>Todos os direitos reservados © 2024 PayChain</p>
        <AboutButton to="/about" style={{ color: '#000000' }}>Sobre Nós</AboutButton>
      </Footer>
    </Container>
  );
};

export default Home;
