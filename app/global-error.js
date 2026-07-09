'use client'

import { useEffect } from 'react'

export default function GlobalError({ error, reset }) {
    useEffect(() => {
        console.error('Application error:', error)
    }, [error])

    return (
        <html lang="en">
            <body>
                <main
                    style={{
                        width: '100%',
                        minHeight: '100vh',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '1.5rem',
                        backgroundColor: '#004e09',
                        padding: '4rem 2rem',
                        textAlign: 'center',
                        fontFamily: 'sans-serif',
                    }}
                >
                    <img src="/pac-white.png" alt="pros-apac-logo" style={{ height: '2.5rem', width: 'auto' }} />
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                        <h1 style={{ color: '#FCFCFC', fontWeight: 700, fontSize: '2.5rem', margin: 0 }}>Something Went Wrong</h1>
                        <h3 style={{ color: '#EFEFEF', fontWeight: 400, fontSize: '1.25rem', maxWidth: '36rem', margin: 0 }}>
                            We&apos;re having trouble loading the site right now. Please try again in a moment.
                        </h3>
                    </div>
                    <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
                        <button
                            onClick={() => reset()}
                            style={{
                                background: 'linear-gradient(to right, #E05B25, #FD8F29, #E05B25)',
                                padding: '0.6rem 1rem',
                                borderRadius: '0.375rem',
                                color: '#F1F1F1',
                                fontWeight: 600,
                                fontSize: '0.875rem',
                                border: 'none',
                                cursor: 'pointer',
                            }}
                        >
                            Try Again
                        </button>
                        <a
                            href="/"
                            style={{
                                background: 'linear-gradient(to right, #004e09, #067133, #004e09)',
                                padding: '0.6rem 1rem',
                                borderRadius: '0.375rem',
                                color: '#F1F1F1',
                                fontWeight: 600,
                                fontSize: '0.875rem',
                                textDecoration: 'none',
                            }}
                        >
                            Return to Home Page
                        </a>
                    </div>
                </main>
            </body>
        </html>
    )
}
