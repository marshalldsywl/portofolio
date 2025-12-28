import { ImageResponse } from 'next/og';
import { PROFILE_DATA } from '@/lib/data';

// Konfigurasi Ukuran Gambar (Standar OG)
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = 'image/png';

// Image generation
export default function Image() {
    return new ImageResponse(
        (
            // ImageResponse JSX element
            <div
                style={{
                    background: 'linear-gradient(to bottom right, #0a0a0a, #171717)',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'sans-serif',
                }}
            >
                {/* Hiasan Lingkaran Blur (Glow Effect) */}
                <div
                    style={{
                        position: 'absolute',
                        top: '-20%',
                        left: '20%',
                        width: '600px',
                        height: '600px',
                        background: '#2563eb', // Blue-600
                        borderRadius: '50%',
                        opacity: 0.2,
                        filter: 'blur(100px)',
                    }}
                />

                {/* Text Content */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 10 }}>
                    <h1 style={{
                        fontSize: 80,
                        fontWeight: 'bold',
                        color: 'white',
                        marginBottom: 20,
                        textAlign: 'center',
                        letterSpacing: '-0.05em'
                    }}>
                        {PROFILE_DATA.name}
                    </h1>

                    <div style={{
                        fontSize: 32,
                        color: '#94a3b8', // Slate-400
                        background: '#1e293b', // Slate-800
                        padding: '10px 30px',
                        borderRadius: 50,
                        border: '1px solid #334155',
                    }}>
                        {PROFILE_DATA.role}
                    </div>

                    <p style={{
                        fontSize: 24,
                        color: '#64748b',
                        marginTop: 40,
                        fontWeight: 500
                    }}>
                        flutter • iot • next.js • r&d
                    </p>
                </div>
            </div>
        ),
        // ImageResponse options
        {
            ...size,
        }
    );
}