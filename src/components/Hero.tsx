const Hero = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content w-full flex-col justify-center gap-10 lg:flex-row-reverse lg:items-start lg:justify-between">
                <div className="mockup-code">
                    <pre data-prefix="$"><code>npm i best-dev 💯</code></pre>
                    <pre data-prefix=">" className="text-warning"><code>installing...🚀</code></pre>
                    <pre data-prefix=">" className="text-success"><code>Done! ✅</code></pre>
                </div>
                <div>
                    <h1 className="text-5xl font-bold">
                        Hola, soy <strong className='text-primary'>Luis Murrugarra</strong>
                    </h1>
                    <p className="py-6">Desarrollador Full-Stack & Desarrollador Back-end</p>
                    <button className="btn btn-primary">Contáctame</button>
                </div>
            </div>
        </div>
    )
}
export default Hero;