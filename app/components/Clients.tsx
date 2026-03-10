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

            <div className="px-3 px-lg-5 d-flex justify-content-center">
                <motion.div {...fadeInUp} className="clients-carousel pb-4 w-100" style={{ maxWidth: '400px', margin: '0 auto' }}>
                    {[
                        { name: "Dr. Otto Beckedorff", spec: "Ortopedia & Traumatologia", image: "/drotto-homepage-site.webp", url: "https://drotto.com.br/" }
                    ].map((client, i) => (
                        <a href={client.url} target="_blank" rel="noopener noreferrer" className="client-card text-decoration-none d-block w-100 mx-auto" key={i}>
                            <div className="position-relative w-100 h-100 bg-white" style={{ border: '1px solid var(--silver)', borderRadius: '16px', overflow: 'hidden' }}>
                                {client.image && (
                                    <div className="position-relative w-100 h-100" style={{ paddingBottom: '80px' }}>
                                        <Image
                                            src={client.image}
                                            alt={`Case de sucesso - ${client.name}`}
                                            fill
                                            style={{ objectFit: 'contain', objectPosition: 'top' }}
                                            className="p-3"
                                            sizes="(max-width: 768px) 100vw, 320px"
                                        />
                                    </div>
                                )}
                                <div className="position-absolute bottom-0 start-0 w-100 p-3 bg-blue-night">
                                    <div>
                                        <span className="badge bg-blue-main mb-2 tracking-wider">{client.spec}</span>
                                        <h3 className="font-montserrat text-white fs-5 mb-0">{client.name}</h3>
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
