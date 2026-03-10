'use client';

import React, { useState } from 'react';
import { Modal, Form } from 'react-bootstrap';
import { X } from 'lucide-react';

interface ContactModalProps {
    show: boolean;
    onHide: () => void;
}

export default function ContactModal({ show, onHide }: ContactModalProps) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        whatsapp: '',
        website: '',
        message: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setStatus({ type: null, message: '' });

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (res.ok) {
                setStatus({ type: 'success', message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.' });
                setFormData({ name: '', email: '', whatsapp: '', website: '', message: '' });
                setTimeout(() => {
                    onHide();
                    setStatus({ type: null, message: '' });
                }, 3000);
            } else {
                throw new Error('Falha ao enviar a mensagem');
            }
        } catch (error) {
            setStatus({ type: 'error', message: 'Houve um erro ao enviar sua mensagem. Tente contato via WhatsApp.' });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Modal show={show} onHide={onHide} centered size="lg" className="contact-modal">
            <Modal.Header className="border-0 pb-0 d-flex justify-content-between align-items-center mb-0 px-4 pt-4">
                <Modal.Title className="fs-3 fw-bold font-inter text-dark">Fale conosco</Modal.Title>
                <div role="button" onClick={onHide} className="text-secondary" style={{ cursor: 'pointer' }}>
                    <X size={24} />
                </div>
            </Modal.Header>
            <Modal.Body className="px-4 pb-4">
                <Form onSubmit={handleSubmit}>
                    <div className="row g-3">
                        <div className="col-md-6">
                            <Form.Group>
                                <Form.Label className="fw-semibold small text-dark mb-1">Qual seu nome?</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    placeholder="Seu nome"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="modal-input"
                                />
                            </Form.Group>
                        </div>
                        <div className="col-md-6">
                            <Form.Group>
                                <Form.Label className="fw-semibold small text-dark mb-1">Qual seu e-mail?</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    placeholder="meugmail@gmail.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="modal-input"
                                />
                            </Form.Group>
                        </div>
                        <div className="col-md-6">
                            <Form.Group>
                                <Form.Label className="fw-semibold small text-dark mb-1">Qual seu WhatsApp?</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="whatsapp"
                                    placeholder="(99) 99999-9999"
                                    value={formData.whatsapp}
                                    onChange={handleChange}
                                    required
                                    className="modal-input"
                                />
                            </Form.Group>
                        </div>
                        <div className="col-md-6">
                            <Form.Group>
                                <Form.Label className="fw-semibold small text-dark mb-1">Endereço do seu website (URL)</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="website"
                                    placeholder="Caso ainda não possua, deixe em branco"
                                    value={formData.website}
                                    onChange={handleChange}
                                    className="modal-input"
                                />
                            </Form.Group>
                        </div>
                        <div className="col-12">
                            <Form.Group>
                                <Form.Label className="fw-semibold small text-dark mb-1">No que podemos te ajudar?</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    name="message"
                                    placeholder="Sua mensagem"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="modal-input"
                                />
                            </Form.Group>
                        </div>
                    </div>

                    {status.message && (
                        <div className={`alert mt-3 py-2 small ${status.type === 'success' ? 'alert-success' : 'alert-danger'}`}>
                            {status.message}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-100 btn btn-primary mt-4 fw-medium button-submit-modal"
                    >
                        {isLoading ? 'ENVIANDO...' : 'FALE CONOSCO AGORA'}
                    </button>
                </Form>
            </Modal.Body>
        </Modal>
    );
}
