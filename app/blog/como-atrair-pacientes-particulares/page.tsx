'use client';

import React from 'react';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function BlogPost() {
    return (
        <div className="bg-white min-vh-100 font-inter d-flex flex-column">
            <Navbar expand="lg" className="glass-nav py-3" style={{ background: 'var(--white-pure)' }}>
                <Container>
                    <Navbar.Brand as={Link} href="/" className="text-blue-main fs-4 font-montserrat d-flex align-items-center fw-bold text-decoration-none">
                        clinical<span style={{ color: 'var(--blue-night)' }}>.</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto gap-4">
                            <Nav.Link as={Link} href="/" className="nav-link">Home</Nav.Link>
                            <Nav.Link as={Link} href="/#servicos" className="nav-link">Serviços</Nav.Link>
                            <Nav.Link as={Link} href="/#clientes" className="nav-link">Nossos clientes</Nav.Link>
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

            <main className="py-5 mt-5 flex-grow-1">
                <Container className="py-4">
                    <Row className="justify-content-center">
                        <Col lg={8}>
                            <Link href="/blog" className="text-blue-steel text-decoration-none d-inline-flex align-items-center gap-2 mb-4 hover:text-blue-main transition">
                                <ArrowLeft size={16} /> Voltar para o Blog
                            </Link>

                            <div className="mb-4">
                                <span className="badge bg-light-gray text-blue-main border border-silver rounded-pill px-3 py-2 mb-3">Gestão de Clínicas</span>
                                <h1 className="display-5 font-montserrat text-blue-night mb-4">
                                    Como atrair pacientes particulares pela internet?
                                </h1>
                                <div className="d-flex align-items-center gap-3 text-gray-silver small">
                                    <span>Publicado em: 16 de Outubro, 2026</span>
                                    <span>•</span>
                                    <span>4 min de leitura</span>
                                </div>
                            </div>

                            <div className="blog-content text-dark-body fs-5 border-top pt-5" style={{ lineHeight: '1.8' }}>
                                <p className="mb-4">
                                    Para se libertar dos planos de saúde e alcançar pacientes Premium, é crucial posicionar-se no Google (Busca orgânica/SEO e Ads). Quando um paciente busca por "Pediatra perto de mim", sua clínica deve aparecer em 1º lugar com um site ágil, contendo um botão direto para o WhatsApp de agendamento.
                                </p>

                                <h3 className="font-montserrat text-blue-night mt-5 mb-3">O Fim da Dependência dos Planos</h3>
                                <p className="mb-4">
                                    A maior dor dos médicos hoje é o alto volume de atendimento gerado por convênios atrelado a uma remuneração que não reflete a especialização do profissional. Para mudar esse quadro, primeiro sua clínica precisa ter uma Presença Digital inquestionável, pois pacientes particulares avaliam a estrutura online antes de ligar.
                                </p>

                                <h3 className="font-montserrat text-blue-night mt-5 mb-3">A Jornada do Paciente Premium</h3>
                                <p className="mb-4">
                                    Esse paciente não procura apenas preço; procura solução e segurança. Sua estratégia deve envolver conteúdo técnico (explicando tratamentos sem jargões excessivos), depoimentos éticos (quando permitido e validado) e, acima de tudo, um site projetado especificamente para gerar conforto e confiança clínica ao usuário ao acessá-lo.
                                </p>

                                <div className="bg-light-gray p-4 rounded-4 border border-silver mt-5">
                                    <h5 className="font-montserrat text-blue-main mb-2">Deseja focar 100% no paciente privado?</h5>
                                    <p className="small mb-3">A equipe da Clinical constrói o seu posicionamento digital voltado exclusivamente para atrair ticket de alto valor.</p>
                                    <a
                                        href="https://wa.me/5548991701454"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="glow-button btn-sm"
                                    >
                                        Falar com consultor especializado
                                    </a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </main>

            <footer className="bg-blue-night py-4 border-top mt-auto" style={{ borderColor: 'rgba(255,255,255,0.05) !important' }}>
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
