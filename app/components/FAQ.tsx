'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from 'react-bootstrap';
import { Plus, Minus } from 'lucide-react';

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.7, ease: "easeOut" }
};

const faqs = [
    { q: "A agência segue as normas do CFM?", a: "Absolutamente sim. Todas as nossas campanhas, artes, sites e textos publicitários passam por uma curadoria interna para garantir 100% de conformidade documental, evitando vetos e problemas frente ao Conselho." },
    { q: "Em quanto tempo os resultados começam?", a: "O SEO leva de 3 a 6 meses para maturação. Já as campanhas de pesquisa do Google tendem a apresentar resultados concretos nas primeiras semanas. A constância ditará o topo das buscas na sua região." },
    { q: "Por que escolher a Clinical e não uma agência genérica?", a: "O mercado da saúde necessita de um posicionamento denso e ético. O que funciona pro varejo ou para outros nichos, fere a credibilidade de um médico. Nós só entendemos e respiramos medicina." },
    { q: "Quais tecnologias vão no site da minha clínica?", a: "Adotamos React, Next.js e Cloud Computing profissional. Isso entrega os sites mais velozes do mercado aos pacientes, aumentando a taxa de conversão em agendas cheias." }
];

export default function FAQ() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <section className="py-5 bg-blue-night border-top" style={{ borderColor: 'rgba(255,255,255,0.05) !important' }}>
            <Container className="py-5">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <motion.div {...fadeInUp} className="text-center mb-5">
                            <h2 className="display-5 font-montserrat text-white mb-3">Dúvidas Frequentes</h2>
                            <p className="text-gray-silver fs-5">Tudo que você precisa saber antes de iniciarmos</p>
                        </motion.div>

                        <div className="faq-container">
                            {faqs.map((faq, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="custom-accordion"
                                >
                                    <div
                                        className="custom-accordion-header"
                                        onClick={() => toggleFaq(index)}
                                    >
                                        <span className="pe-3">{faq.q}</span>
                                        {openFaq === index ? <Minus size={20} className="text-blue-main" /> : <Plus size={20} className="text-blue-main" />}
                                    </div>
                                    <AnimatePresence>
                                        {openFaq === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="custom-accordion-content">
                                                    {faq.a}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
