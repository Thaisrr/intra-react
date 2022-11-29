import './Presentation.css';

const Presentation = () => {
    // fais des trucs

    const message = `1 + 1 = ${1 + 1}`;
    const age = 200;
    const is_logged = true;
    const jsx: JSX.Element = <span id="span">Je suis un span !</span>;
    const mon_texte = '{Ceci est un texte} avec des -> <crochet>';
    const url = 'https://c.tenor.com/LuZ1mK2ODfUAAAAC/cat-galaxy.gif';
    const image = {
        src: url,
        alt: 'Un chat à lunettes',
        title: 'Titre de l\'image'
    }
    const my_color = 'red';
    const style = {
        color: 'blue',
        textDecoration: 'underline orange wavy',
    }


    return (
        <div id="Presentation">
            <h1>Présentation du JSX</h1>

            <section>
                <h2>React</h2>

                <p>Framework créé par Facebook en 2012.</p>
                
                <p>Créer un projet React : </p>
                <ul>
                    <li><b>CRA</b> : <code>npx create-react-app mon-app --template typescript</code></li>
                    <li><b>Vite</b> : <code>npm create vite@latest my-app --template react-typescript</code></li>
                </ul>

            </section>

            <section>
                <h2>JSX</h2>

                <p>JSX : Javascript XML</p>

                <p>Le JSX ressemble à du HTML, en respectant les normes XML</p>
                <p>Une balise sans contenu doit être orpheline</p>
                <p>Les noms de balises HTML doivent être en minuscule, les noms de balises
                    de composants sont en PascalCase.
                </p>
                
                <p>Le JSX est plus proche du JS que du HTML, certains mots réservés ne peuvent pas être utilisés : </p>
                <ul>
                    <li>class : className</li>
                    <li>for : htmlFor</li>

                </ul>
                <p>Les attributs HTML en 2 mots (ou plus) doivent être écrits en camelCase : tabindex : tabIndex</p>
        
            </section>

            <section>
                <h2>Interpolation</h2>

                <ul>
                    <li>1 + 1 = {1 + 1}</li>
                    <li>{message}</li>
                    <li>{age}</li>
                    <li>Pas les booleans : {is_logged}</li>
                    <li>{jsx}</li>
                    <li>Accolades : {'{}'}</li>
                    <li>Crochets : {'<>'}</li>
                    <li>{mon_texte}</li>
                </ul>

            </section>

            <section>
                <h2>Data Binding / Attribute Binding</h2>

                <p>
                    <img src={url} alt='Un sublime chat à lunettes'/>
                </p>

                <figure>
                    <img src={image.src} alt={image.alt}/>
                    <figcaption>{image.title}</figcaption>
                </figure>

                <h3>Décomposition</h3>
                <figure>
                    <img {...image}/>
                    <figcaption>{image.title}</figcaption>
                </figure>

            </section>

            <section>
                <h2>Les classes</h2>

                <p className="classA classB">Hello World</p>
                <p className={my_color}>I'm Red</p>
                <p className={'classA ' + my_color}>ClassA + Red</p>
                <p className={`classB ${my_color} classA`}>Plein de classes</p>
            </section>

            <section>
                <h2>Le style inline</h2>

                <p style={{color: my_color, fontSize: '1.2em'}}>Look at my style !</p>
                <p style={style}>Magnifique Paragraphe</p>
            </section>

            <section>
                <h2>Les images</h2>
                <p>Le chemin pour les assets intégrées en HTML doivent se faire comme si on se situait dans 
                    le fichier index.html.
                </p>
                <p>Ces assets oivent être stockés dans ./public</p>

                <figure>
                    <img src='./assets/logo192.png' alt='logo'/>
                </figure>

                <p className='bg-img'>J'ai un background Image</p>

            </section>

            

        </div>
    )
}

export default Presentation;
