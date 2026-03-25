import React from 'react';
import { motion } from 'framer-motion';
import { Container } from 'react-bootstrap';
import Image from 'next/image';

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.7, ease: "easeOut" }
};

export default function Clients() {
    return (
        <section id="clientes" className="py-5 my-5 overflow-hidden">
            <Container className="mb-5">
                <motion.div {...fadeInUp} className="text-center">
                    <h2 className="display-6 font-montserrat text-blue-night mb-3">Sua marca em boas mãos</h2>
                    <p className="text-dark-body">Profissionais e clínicas que impulsionaram seus resultados conosco.</p>
                </motion.div>
            </Container>

            <Container className="px-3 px-lg-5">
                <motion.div {...fadeInUp} className="row justify-content-center g-4 pb-4">
                    {[
                        { name: "Dr. Otto Beckedorff", spec: "Ortopedia & Traumatologia", image: "/drotto-homepage-site.webp", url: "https://drotto.com.br/" },
                        { name: "Dr. Alexandre Bierrenbach", spec: "Ortopedista - Especialista em Ombro e Cotovelo", image: "/dr-alexandre-bierrenbach.webp", url: "https://alexandrebierrenbach.vercel.app/" }
                    ].map((client, i) => (
                        <div className="col-12 col-md-6 col-lg-5 d-flex justify-content-center" key={i}>
                            <a href={client.url} target="_blank" rel="noopener noreferrer" className="client-card text-decoration-none d-block w-100" style={{ maxWidth: '380px', height: 'auto' }}>
                                <div className="d-flex flex-column w-100 h-100 bg-white" style={{ border: '1px solid var(--silver)', borderRadius: '16px', overflow: 'hidden' }}>
                                    {client.image && (
                                        <div className="w-100 bg-white d-flex align-items-start">
                                            <Image
                                                src={client.image}
                                                alt={`Case de sucesso - ${client.name}`}
                                                width={600}
                                                height={340}
                                                style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain' }}
                                            />
                                        </div>
                                    )}
                                    <div className="p-3 bg-blue-night w-100 mt-auto position-relative" style={{ zIndex: 2 }}>
                                        <div className="d-flex flex-column align-items-start">
                                            <span className="badge bg-blue-main mb-2 tracking-wider text-wrap text-start lh-base" style={{ fontSize: '0.75rem' }}>{client.spec}</span>
                                            <h3 className="font-montserrat text-white fs-5 mb-0">{client.name}</h3>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </motion.div>
            </Container>
        </section>
    );
}
