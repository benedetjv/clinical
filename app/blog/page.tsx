'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import { ArrowRight, Globe, Search, TrendingUp, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" }
};

export default function BlogList() {
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        if (window.location.pathname === '/') {
            e.preventDefault();
            const element = document.getElementById(targetId);
            if (element) {
                const navbarHeight = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    };

    return (
        <div className="bg-light-gray min-vh-100 font-inter d-flex flex-column">
            {/* Simple Navbar for Inner Pages */}
            <Navbar expand="lg" className="glass-nav py-3" style={{ background: 'var(--white-pure)' }}>
                <Container>
                    <Navbar.Brand as={Link} href="/" className="text-blue-main fs-4 font-montserrat d-flex align-items-center fw-bold text-decoration-none">
                        clinical<span style={{ color: 'var(--blue-night)' }}>.</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto gap-4">
                            <Nav.Link as={Link} href="/" className="nav-link" onClick={(e: any) => handleScroll(e, 'home')}>Home</Nav.Link>
                            <Nav.Link as={Link} href="/#servicos" className="nav-link" onClick={(e: any) => handleScroll(e, 'servicos')}>Serviços</Nav.Link>
                            <Nav.Link as={Link} href="/#clientes" className="nav-link" onClick={(e: any) => handleScroll(e, 'clientes')}>Nossos clientes</Nav.Link>
                            <Nav.Link as={Link} href="/blog" className="nav-link text-blue-main">Blog</Nav.Link>
                        </Nav>
                        <a
                            href="https://wa.me/5548991701454"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="glow-button"
                        >
                            Entre em contato <ArrowRight size={16} />
                        </a>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* BLOG HEADER */}
            <section className="bg-blue-night py-5 mt-5">
                <Container className="py-5 text-center">
                    <motion.div {...fadeInUp}>
                        <h1 className="display-4 font-montserrat text-white mb-3">Blog <span className="text-blue-main">Clinical.</span></h1>
                        <p className="lead text-gray-silver" style={{ maxWidth: '600px', margin: '0 auto' }}>
                            Conhecimento profundo em marketing médico, regulamentações do CFM e estratégias de captação orgânica de pacientes.
                        </p>
                    </motion.div>
                </Container>
            </section>

            {/* BLOG SEO SECTION */}
            <section className="py-5 flex-grow-1">
                <Container className="py-4">
                    <Row className="g-5">
                        <Col lg={4}>
                            <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="h-100 p-4 border rounded-4 border-silver shadow-sm bg-white">
                                <div className="mb-3">
                                    <span className="badge bg-light-gray text-blue-main border border-silver rounded-pill">SEO Médico</span>
                                </div>
                                <h4 className="font-montserrat fs-5 text-blue-night mb-3">O que publicidade médica pode ou não fazer segundo o CFM?</h4>
                                <p className="text-dark-body small mb-4 lh-lg">
                                    Muitos especialistas se perguntam sobre o que o CRM proíbe: O manual de Publicidade Médica prevê que você não pode fazer promessas de resultados, divulgar selos de "melhor médico" ou exibir fotos de "antes e depois" de forma apelativa. Garantimos a total regularidade ética em cada linha de texto dos sites que produzimos.
                                </p>
                                <Link href="/blog/o-que-publicidade-medica-pode-fazer" className="text-blue-main fw-semibold text-decoration-none d-flex align-items-center gap-2 small mt-auto">
                                    Ler artigo completo <ArrowRight size={14} />
                                </Link>
                            </motion.div>
                        </Col>

                        <Col lg={4}>
                            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="h-100 p-4 border rounded-4 border-silver shadow-sm bg-white">
                                <div className="mb-3">
                                    <span className="badge bg-light-gray text-blue-main border border-silver rounded-pill">Gestão de Clínicas</span>
                                </div>
                                <h4 className="font-montserrat fs-5 text-blue-night mb-3">Como atrair pacientes particulares pela internet?</h4>
                                <p className="text-dark-body small mb-4 lh-lg">
                                    Para se libertar dos planos de saúde e alcançar pacientes Premium, é crucial posicionar-se no Google (Busca orgânica/SEO e Ads). Quando um paciente busca por "Pediatra perto de mim", sua clínica deve aparecer em 1º lugar com um site ágil, contendo um botão direto para o WhatsApp de agendamento.
                                </p>
                                <Link href="/blog/como-atrair-pacientes-particulares" className="text-blue-main fw-semibold text-decoration-none d-flex align-items-center gap-2 small mt-auto">
                                    Ler artigo completo <ArrowRight size={14} />
                                </Link>
                            </motion.div>
                        </Col>

                        <Col lg={4}>
                            <motion.div {...fadeInUp} transition={{ delay: 0.3 }} className="h-100 p-4 border rounded-4 border-silver shadow-sm bg-white">
                                <div className="mb-3">
                                    <span className="badge bg-light-gray text-blue-main border border-silver rounded-pill">Presença Digital</span>
                                </div>
                                <h4 className="font-montserrat fs-5 text-blue-night mb-3">A importância de um site otimizado para a sua clínica</h4>
                                <p className="text-dark-body small mb-4 lh-lg">
                                    As redes sociais são terrenos alugados, seu site é o seu consultório digital (seu terreno próprio). Ter uma estrutura rápida e um carregamento em menos de 3 segundos aumenta as taxas de conversão (agendamentos de consulta). Aplicamos regras de UX e Copywriting especializadas em clínicas de alto padrão.
                                </p>
                                <Link href="/blog/importancia-de-um-site-otimizado" className="text-blue-main fw-semibold text-decoration-none d-flex align-items-center gap-2 small mt-auto">
                                    Ler artigo completo <ArrowRight size={14} />
                                </Link>
                            </motion.div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* FOOTER */}
            <footer className="bg-blue-night py-4 border-top" style={{ borderColor: 'rgba(255,255,255,0.05) !important' }}>
                <Container>
                    <div className="text-center">
                        <span className="text-gray-silver small">
                            © {new Date().getFullYear()} Clinical Agência Médica. Todos os direitos reservados.
                        </span>
                    </div>
                </Container>
            </footer>
        </div>
    );
}
