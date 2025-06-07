export class Tag {
    static readonly ANGULAR = new Tag('Angular', '#DD0031'); // Angular red
    static readonly REACT = new Tag('React', '#61DAFB'); // React blue
    static readonly CHAKRAUI = new Tag('Chakra-UI', '#319795'); // Chakra teal
    static readonly CSS = new Tag('CSS', '#264de4'); // CSS blue
    static readonly NODEJS = new Tag('Nodejs', '#68A063'); // Node green
    static readonly BOOTSTRAP = new Tag('Bootstrap', '#7952B3'); // Bootstrap purple
    static readonly TYPESCRIPT = new Tag('Typescript', '#3178C6'); // TypeScript blue
    static readonly JAVASCRIPT = new Tag('Javascript', '#F7DF1E'); // JS yellow
    static readonly HTML = new Tag('HTML', '#E34F26'); // HTML orange-red
    static readonly PYTHON = new Tag('Python', '#3776AB'); // Python blue
    static readonly MATERIALUI = new Tag('Material UI', '#007FFF'); // Material UI blue
    static readonly SOCKETIO = new Tag('Socket.IO', '#010101'); // Socket.io black
    static readonly OAuth2 = new Tag('Google Auth', '#4285F4'); // Google blue
    static readonly GeminiApi = new Tag('AI', '#673AB7'); // Gemini-like purple

    constructor(private readonly key: string, public readonly color: string) { }

    toString() {
        return this.key;
    }
}
