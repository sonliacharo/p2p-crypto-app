import React from 'react';
import {
  Container,
  Navbar,
  NavLink,
  HeroSection,
  HeroTitle,
  HeroSubtitle,
  Button,
  MainContent,
  SectionTitle,
  FeaturesSection,
  Feature,
  FeatureTitle,
  FeatureDescription,
  TestimonialsSection,
  Testimonial,
  TestimonialContent,
  TestimonialAuthor,
  CTASection,
  CTATitle,
  CTADescription,
  Footer,
  FooterContent
} from './HomePage.styles';

const HomePage = () => {
  return (
    <Container>
      <Navbar>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </Navbar>
      <HeroSection>
        <HeroTitle>PayChain</HeroTitle>
        <HeroSubtitle>O Futuro das Transações Financeiras</HeroSubtitle>
        <Button to="/register">Crie uma Conta</Button>
        <Button to="/login">Faça Login</Button>
      </HeroSection>
      <MainContent>
        <FeaturesSection>
          <SectionTitle>O que é PayChain?</SectionTitle>
          <Feature>
            <FeatureTitle>Segurança</FeatureTitle>
            <FeatureDescription>
              PayChain utiliza tecnologia de ponta para garantir a segurança das suas transações financeiras.
            </FeatureDescription>
          </Feature>
          <Feature>
            <FeatureTitle>Eficiência</FeatureTitle>
            <FeatureDescription>
              Realize pagamentos e receba dinheiro de maneira rápida e confiável.
            </FeatureDescription>
          </Feature>
          <Feature>
            <FeatureTitle>Privacidade</FeatureTitle>
            <FeatureDescription>
              Garantimos a privacidade de suas informações e transações.
            </FeatureDescription>
          </Feature>
        </FeaturesSection>
        <TestimonialsSection>
          <SectionTitle>O que nossos usuários dizem</SectionTitle>
          <Testimonial>
            <TestimonialContent>
              "PayChain mudou a forma como eu realizo minhas transações. É rápido e seguro!"
            </TestimonialContent>
            <TestimonialAuthor>João Silva</TestimonialAuthor>
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              "A plataforma é muito fácil de usar e eu confio na segurança que eles oferecem."
            </TestimonialContent>
            <TestimonialAuthor>Maria Souza</TestimonialAuthor>
          </Testimonial>
        </TestimonialsSection>
        <CTASection>
          <CTATitle>Comece a usar o PayChain hoje</CTATitle>
          <CTADescription>
            Experimente a melhor forma de realizar suas transações financeiras.
          </CTADescription>
          <Button to="/register">Crie uma Conta</Button>
        </CTASection>
      </MainContent>
      <Footer>
        <FooterContent>© 2024 PayChain. Todos os direitos reservados.</FooterContent>
      </Footer>
    </Container>
  );
};

export default HomePage;
