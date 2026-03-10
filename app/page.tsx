'use client';

import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Clients from './components/Clients';
import Process from './components/Process';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function Home() {
    return (
        <div className="bg-white min-vh-100 font-inter d-flex flex-column">
            <Header />

            <main>
                <Hero />
                <Services />
                <About />
                <Clients />
                <Process />
                <FAQ />
            </main>

            <Footer />
        </div>
    );
}