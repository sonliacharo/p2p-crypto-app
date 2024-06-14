import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #333;
  color: #fff;
  font-family: 'Arial, sans-serif';
  min-height: 100vh;
  padding: 20px;
`;

export const Navbar = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20px 40px;
  background-color: #222; /* Fundo navbar escuro */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  &:hover {
    text-decoration: underline;
  }
`;

export const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #444;/
  padding: 60px 20px;
  margin-bottom: 40px;
  width: 100%;
`;

export const HeroTitle = styled.h1`
  font-size: 4rem;
  color: #fff; /* Texto branco */
  margin-bottom: 20px;
`;

export const HeroSubtitle = styled.h2`
  font-size: 1.5rem;
  color: #ccc;
  margin-bottom: 40px;
`;

export const Button = styled(Link)`
  display: inline-block;
  margin: 10px;
  padding: 10px 20px;
  font-size: 1rem;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

export const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 100%;
`;

export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 20px;
`;

export const FeaturesSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
`;

export const Feature = styled.div`
  max-width: 800px;
  margin: 20px 0;
  text-align: left;
`;

export const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  color: #007bff;
  margin-bottom: 10px;
`;

export const FeatureDescription = styled.p`
  font-size: 1rem;
  color: #ccc;
`;

export const TestimonialsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
  background-color: #222;
  padding: 40px 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
`;

export const Testimonial = styled.div`
  max-width: 600px;
  margin: 20px 0;
  text-align: left;
`;

export const TestimonialContent = styled.p`
  font-size: 1rem;
  color: #ccc;
  font-style: italic;
`;

export const TestimonialAuthor = styled.p`
  font-size: 1rem;
  color: #fff;
  font-weight: bold;
  margin-top: 10px;
`;

export const CTASection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
`;

export const CTATitle = styled.h3`
  font-size: 2rem;
  color: #fff;
  margin-bottom: 20px;
`;

export const CTADescription = styled.p`
  font-size: 1rem;
  color: #ccc;
  margin-bottom: 20px;
`;

export const Footer = styled.footer`
  padding: 20px;
  background-color: #222;
  width: 100%;
  text-align: center;
`;

export const FooterContent = styled.p`
  font-size: 1rem;
  color: #fff;
`;
