"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Quote, PlayCircle, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
    {
        name: "Aarav Sharma",
        role: "Software Engineer",
        text: "Gyaan completely transformed my professional communication. The business English course was exactly what I needed to confidently interview at top tech companies.",
        image: "/testimonial_portrait.png",
    },
    {
        name: "Rohan Patel",
        role: "Data Analyst",
        text: "The grammar modules are incredibly detailed. I finally understand the nuances of complex sentence structures. Highly recommend for anyone looking to refine their writing.",
        image: "/testimonial_portrait.png",
    },
    {
        name: "Kabir Singh",
        role: "University Student",
        text: "Thanks to the IELTS preparation course, I secured a band score of 8.0! The instructors are expert and the platform is so intuitive.",
        image: "/testimonial_portrait.png",
    },
    {
        name: "Dev Verma",
        role: "Marketing Manager",
        text: "Flexible learning hours and world-class curriculum. I improved my business vocabulary dramatically in just three months while working full-time.",
        image: "/testimonial_portrait.png",
    },
    {
        name: "Vihaan Gupta",
        role: "Freelance Writer",
        text: "The creative writing workshop unleashed my imagination. The feedback from instructors is invaluable and the community is super supportive.",
        image: "/testimonial_portrait.png",
    },
];

export default function Testimonials() {
    const [startIndex, setStartIndex] = useState(0);

    const nextSlide = () => {
        setStartIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setStartIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const getVisibleTestimonials = () => {
        const items = [];
        for (let i = 0; i < 3; i++) {
            items.push(testimonials[(startIndex + i) % testimonials.length]);
        }
        return items;
    };

    return (
        <section id="testimonials" className="py-24 relative overflow-hidden bg-gradient-to-b from-[#020617] to-[#0f172a]">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-teal-500/5 blur-[150px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-blue-600/5 blur-[150px] pointer-events-none" />

            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">

                {/* Main Box matching the reference design conceptually, but dark themed */}
                <div className="relative bg-slate-900/40 backdrop-blur-md border border-white/10 w-full rounded-3xl pt-24 pb-16 pl-12 pr-6 md:pl-20 md:pr-12 md:pt-32 overflow-visible">

                    {/* Overlapping massive quote icon */}
                    <div className="absolute -top-16 left-16 md:left-24 w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(45,212,191,0.3)]">
                        <Quote className="w-16 h-16 md:w-20 md:h-20 text-slate-950 fill-slate-950 rotate-180" />
                    </div>

                    <div className="flex flex-col xl:flex-row gap-12 xl:gap-8 items-start relative z-10 w-full">

                        {/* Left Column Content */}
                        <div className="w-full xl:w-[35%] xl:pr-8 text-white mt-4">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                                Connect with<br />other members
                            </h2>
                            <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-8 max-w-sm">
                                Join our global community of learners who have transformed their careers and communication skills through Gyaan. Read their success stories.
                            </p>
                            <button className="flex items-center gap-2 text-white font-bold text-sm tracking-wide group transition-all">
                                Connect now
                                <PlayCircle className="w-5 h-5 text-white fill-transparent group-hover:text-teal-400 transition-colors" />
                            </button>
                        </div>

                        {/* Right Column Carousel */}
                        <div className="w-full xl:w-[65%] flex flex-col gap-8">

                            {/* Cards Container */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {getVisibleTestimonials().map((testimonial, idx) => (
                                    <motion.div
                                        key={`${startIndex}-${idx}`}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.4, delay: idx * 0.1 }}
                                        className="bg-slate-800/80 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl flex flex-col pt-0 relative group hover:border-teal-500/50 hover:shadow-[0_0_20px_rgba(45,212,191,0.15)] transition-all"
                                    >
                                        {/* Image area */}
                                        <div className="w-full h-48 relative overflow-hidden rounded-t-2xl">
                                            <Image
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>

                                        {/* Card Content */}
                                        <div className="p-6 pt-10 flex flex-col flex-grow relative">
                                            {/* Small quote circle overlapping the image and content */}
                                            <div className="absolute -top-6 left-6 w-12 h-12 bg-gradient-to-br from-teal-400 to-teal-500 rounded-full flex items-center justify-center border-[3px] border-slate-800 shadow-md z-10">
                                                <Quote className="w-5 h-5 text-slate-950 fill-slate-950 rotate-180" />
                                            </div>

                                            <p className="text-slate-300 text-sm mb-6 flex-grow leading-relaxed italic">
                                                "{testimonial.text}"
                                            </p>

                                            <div>
                                                <h4 className="text-white font-bold text-base group-hover:text-teal-300 transition-colors">{testimonial.name}</h4>
                                                <p className="text-teal-500 text-xs">{testimonial.role}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Bottom Controls */}
                            <div className="flex justify-between items-center pr-4">
                                <div className="flex gap-2">
                                    <button onClick={prevSlide} className="w-10 h-10 rounded-full border border-white/20 hover:border-teal-400 hover:text-teal-400 flex items-center justify-center transition-colors text-white">
                                        <ChevronLeft className="w-5 h-5" />
                                    </button>
                                    <button onClick={nextSlide} className="w-10 h-10 rounded-full border border-white/20 bg-teal-500/10 text-teal-400 hover:bg-teal-500 hover:text-slate-950 border-teal-500/30 flex items-center justify-center transition-colors">
                                        <ChevronRight className="w-5 h-5" />
                                    </button>
                                </div>

                                <div className="flex gap-2">
                                    {testimonials.map((_, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setStartIndex(i)}
                                            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === startIndex ? "bg-teal-400 w-6" : "bg-white/30 hover:bg-white/50"
                                                }`}
                                        />
                                    ))}
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
