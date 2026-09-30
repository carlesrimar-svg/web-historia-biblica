# Pla d'Implementació de l'Aplicació Web Història Bíblica

## 1. Arquitectura del Projecte

L'aplicació es construirà com una SPA (Single Page Application) utilitzant **React** (mitjançant Vite) i **Tailwind CSS** per a l'estilització.

### 1.1 Estructura de Directoris
```text
/src
  /assets           # Imatges (galilea.png, jerusalem.png, etc.)
  /components       # Components reutilitzables
    /ui             # Components visuals (Botons, Targetes)
    /layout         # Navbar, Footer
    /lesson         # VideoEmbed, ComicGrid
    /interactive    # Flashcards, Quiz
  /data             # Arxius JSON amb el contingut
    lessonContent.json
    flashcardsData.json
    quizData.json
  /pages            # Vistes de l'aplicació
    Home.jsx
    UnderConstruction.jsx
    PaisDeJesus.jsx
  /routes           # Configuració del React Router
  App.jsx
  main.jsx
```

## 2. Gestió de Rutes (React Router)
L'aplicació tindrà la següent estructura de navegació:
- `/` -> `Home.jsx`
- `/biblia` -> `UnderConstruction.jsx`
- `/antic-testament` -> `UnderConstruction.jsx`
- `/nou-testament` -> `UnderConstruction.jsx`
- `/nou-testament/pais-de-jesus` -> `PaisDeJesus.jsx`

*Totes les rutes estaran integrades amb un component Layout que contindrà la barra de navegació permanent.*

## 3. Gestió de Dades (JSON)
Es crearan tres arxius JSON independents dins de `/src/data/` per facilitar l'edició del professor (Carles Rivas):
1. **`lessonContent.json`**: Emmagatzemarà els títols, paràgrafs, rutes dels vídeos i la informació del component còmic (textos i imatges). El contingut s'extraurà de `dossier_geografia_palestina_3eso.md`.
2. **`flashcardsData.json`**: Contindrà les parelles de pregunta/resposta, obtingudes de `palestina_targetes.csv`.
3. **`quizData.json`**: Disposarà de les preguntes tipus test amb opcions i la resposta correcta (entre 10 i 20 preguntes obtingudes del dossier de Markdown).

## 4. Components Específics

### 4.1 Vista de la Lliçó (`PaisDeJesus.jsx`)
- Llegirà les dades dinàmicament des de `lessonContent.json`.
- **`VideoEmbed.jsx`**: Un contenidor per incrustar vídeos o presentacions mitjançant un `iframe` adaptable (aspect-video).
- **`ComicGrid.jsx`**: Mostrarà una història gràfica utilitzant CSS Grid per col·locar bafarades i imatges en un disseny tipus vinyeta de còmic. Utilitzarà les imatges proporcionades a l'arrel del projecte (ex: galilea.png).

### 4.2 Components Interactius
- **`FlashcardViewer.jsx`** i **`Flashcard.jsx`**: Targetes per repassar el vocabulari. Implementaran una animació de gir (flip 3D) a través de Tailwind CSS (`preserve-3d`, `backface-hidden`, `rotate-y-180`) quan l'usuari hi faci clic.
- **`QuizEngine.jsx`**: Gestionarà l'estat del test (pregunta actual, puntuació acumulada, test finalitzat). Mostrarà les preguntes d'una en una i, en acabar, calcularà i mostrarà la puntuació final amb una pantalla de resultats.

## 5. Disseny UI / UX
- S'utilitzaran patrons de Tailwind CSS per crear una interfície moderna i neta, alineada amb els principis d'accessibilitat.
- Ús de targetes (Cards) amb ombres subtils, esquemes de color suaus i una navegació intuïtiva ideal per a un entorn educatiu de Secundària (ESO).
- S'assegurarà la responsivitat de tots els components (especialment el Grid del còmic i les Flashcards).

## 6. Procediment de Desenvolupament
1. Inicialitzar el projecte de React amb Vite i configurar Tailwind CSS.
2. Moure i classificar els actius existents (imatges) a la carpeta `/public` o `/src/assets`.
3. Crear i popular els fitxers JSON a partir del dossier Markdown i el CSV existents.
4. Construir els components de navegació i maquetació global.
5. Desenvolupar els components de la vista de la lliçó (`VideoEmbed`, `ComicGrid`).
6. Implementar els components interactius amb lògica d'estat (`FlashcardViewer`, `QuizEngine`).
7. Executar el servidor de desenvolupament local i verificar el funcionament complet (rutes, animacions, test i JSONs).
