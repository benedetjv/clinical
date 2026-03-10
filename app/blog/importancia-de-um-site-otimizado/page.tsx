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
                                <span className="badge bg-light-gray text-blue-main border border-silver rounded-pill px-3 py-2 mb-3">Presença Digital</span>
                                <h1 className="display-5 font-montserrat text-blue-night mb-4">
                                    A importância de um site otimizado para a sua clínica
                                </h1>
                                <div className="d-flex align-items-center gap-3 text-gray-silver small">
                                    <span>Publicado em: 18 de Outubro, 2026</span>
                                    <span>•</span>
                                    <span>6 min de leitura</span>
                                </div>
                            </div>

                            <div className="blog-content text-dark-body fs-5 border-top pt-5" style={{ lineHeight: '1.8' }}>
                                <p className="mb-4">
                                    As redes sociais são terrenos alugados, seu site é o seu consultório digital (seu terreno próprio). Ter uma estrutura rápida e um carregamento em menos de 3 segundos aumenta as taxas de conversão (agendamentos de consulta). Aplicamos regras de UX e Copywriting especializadas em clínicas de alto padrão.
                                </p>

                                <h3 className="font-montserrat text-blue-night mt-5 mb-3">Por que Redes Sociais não bastam?</h3>
                                <p className="mb-4">
                                    Instagram e TikTok são ótimas fontes para gerar topo de funil (atrair interessados pelo seu conteúdo), no entanto o algoritmo muda o tempo todo, e postagens orgânicas atingem uma taxa cada vez menor de seguidores. Um Site, por outro lado, indexa com SEO na maior rede de buscas: O Google.
                                </p>

                                <h3 className="font-montserrat text-blue-night mt-5 mb-3">Velocidade e Conversão (UX)</h3>
                                <p className="mb-4">
                                    Estudos apontam que 53% dos acessos de dispositivos móveis são abandonados se a página demorar mais do que 3 segundos para renderizar a primeira arte. É imperativo adotar estruturas avançadas como Next.js (utilizados pela Netflix e Uber) para prover aos seus pacientes a fluidez compatível ao seu nível de expertise médica.
                                </p>

                                <div className="bg-light-gray p-4 rounded-4 border border-silver mt-5">
                                    <h5 className="font-montserrat text-blue-main mb-2">Vamos modernizar a plataforma da sua clínica?</h5>
                                    <p className="small mb-3">Utilizamos o há de mais moderno na engenharia de software para colocar sua marca no topo.</p>
                                    <a
                                        href="https://wa.me/5548991701454"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="glow-button btn-sm"
                                    >
                                        Solicite uma avaliação do seu site atual
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
