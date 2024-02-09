const Hero = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="mockup-code">
                    <pre data-prefix="$"><code>npm i daisyui</code></pre>
                    <pre data-prefix=">" className="text-warning"><code>installing...</code></pre>
                    <pre data-prefix=">" className="text-success"><code>Done!</code></pre>
                </div>
                <div>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
                        excepturi
                        exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    )
}
export default Hero;