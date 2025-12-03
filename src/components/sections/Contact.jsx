import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import emailjs from 'emailjs-com';
import { FaPaperPlane } from 'react-icons/fa';

const schema = yup.object().shape({
    name: yup.string().required('Name is required').min(2, 'Name must be at least 2 characters'),
    email: yup.string().required('Email is required').email('Invalid email address'),
    message: yup.string().required('Message is required').min(10, 'Message must be at least 10 characters')
});

const Contact = () => {
    const [submitStatus, setSubmitStatus] = useState(null);
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = async (data) => {
        try {
            // For demo purposes, just show success
            // In production, configure EmailJS with your credentials
            console.log('Form data:', data);
            setSubmitStatus('success');
            reset();
            setTimeout(() => setSubmitStatus(null), 5000);
        } catch (error) {
            setSubmitStatus('error');
            setTimeout(() => setSubmitStatus(null), 5000);
        }
    };

    return (
        <section id="contact" className="py-20 px-4" style={{ backgroundColor: 'var(--bg)' }}>
            <div className="max-w-4xl mx-auto">
                <h2
                    className="text-4xl md:text-5xl font-bold font-voltaire text-center mb-6"
                    style={{ color: 'var(--text-primary)' }}
                    data-aos="fade-up"
                >
                    Get In <span style={{ color: 'var(--cta)' }}>Touch</span>
                </h2>
                <p className="text-center text-lg mb-12" style={{ color: 'var(--text-secondary)' }}>
                    Have a project in mind or want to collaborate? Let's talk!
                </p>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" data-aos="fade-up">
                    {/* Name */}
                    <div>
                        <label className="block mb-2 font-medium" style={{ color: 'var(--text-primary)' }}>
                            Name
                        </label>
                        <input
                            {...register('name')}
                            type="text"
                            className="w-full px-4 py-3 rounded-lg outline-none transition-all duration-300 hover:border-[var(--cta)] focus:border-[var(--cta)] focus:shadow-[0_0_0_3px_rgba(59,130,246,0.1)]"
                            style={{ 
                                backgroundColor: 'var(--card)',
                                color: 'var(--text-primary)',
                                border: '2px solid rgba(59, 130, 246, 0.2)'
                            }}
                            placeholder="Your name"
                        />
                        {errors.name && (
                            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                        )}
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block mb-2 font-medium" style={{ color: 'var(--text-primary)' }}>
                            Email
                        </label>
                        <input
                            {...register('email')}
                            type="email"
                            className="w-full px-4 py-3 rounded-lg outline-none transition-all duration-300 hover:border-[var(--cta)] focus:border-[var(--cta)] focus:shadow-[0_0_0_3px_rgba(59,130,246,0.1)]"
                            style={{ 
                                backgroundColor: 'var(--card)',
                                color: 'var(--text-primary)',
                                border: '2px solid rgba(59, 130, 246, 0.2)'
                            }}
                            placeholder="your.email@example.com"
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                        )}
                    </div>

                    {/* Message */}
                    <div>
                        <label className="block mb-2 font-medium" style={{ color: 'var(--text-primary)' }}>
                            Message
                        </label>
                        <textarea
                            {...register('message')}
                            rows="5"
                            className="w-full px-4 py-3 rounded-lg outline-none transition-all duration-300 resize-none hover:border-[var(--cta)] focus:border-[var(--cta)] focus:shadow-[0_0_0_3px_rgba(59,130,246,0.1)]"
                            style={{ 
                                backgroundColor: 'var(--card)',
                                color: 'var(--text-primary)',
                                border: '2px solid rgba(59, 130, 246, 0.2)'
                            }}
                            placeholder="Your message..."
                        />
                        {errors.message && (
                            <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                        )}
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                        style={{ 
                            backgroundColor: 'var(--cta)',
                            color: 'white'
                        }}
                    >
                        <FaPaperPlane />
                        Send Message
                    </button>

                    {/* Status Messages */}
                    {submitStatus === 'success' && (
                        <div className="p-4 rounded-lg text-center" style={{ backgroundColor: 'rgba(16, 185, 129, 0.2)', color: '#10B981' }}>
                            Message sent successfully! I'll get back to you soon.
                        </div>
                    )}
                    {submitStatus === 'error' && (
                        <div className="p-4 rounded-lg text-center" style={{ backgroundColor: 'rgba(239, 68, 68, 0.2)', color: '#EF4444' }}>
                            Something went wrong. Please try again.
                        </div>
                    )}
                </form>

                {/* Contact Info */}
                <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
                    <div data-aos="fade-up" data-aos-delay="100">
                        <h4 className="font-semibold mb-2" style={{ color: 'var(--cta)' }}>Email</h4>
                        <p style={{ color: 'var(--text-secondary)' }}>your.email@example.com</p>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="200">
                        <h4 className="font-semibold mb-2" style={{ color: 'var(--cta)' }}>Phone</h4>
                        <p style={{ color: 'var(--text-secondary)' }}>+1 (555) 123-4567</p>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="300">
                        <h4 className="font-semibold mb-2" style={{ color: 'var(--cta)' }}>Location</h4>
                        <p style={{ color: 'var(--text-secondary)' }}>San Francisco, CA</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
