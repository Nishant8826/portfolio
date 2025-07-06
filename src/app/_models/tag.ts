export class Tag {
    static readonly AXIOS = new Tag('Axios', '#5A29E4'); // Axios purple
    static readonly ANGULAR = new Tag('Angular', '#DD0031'); // Angular red
    static readonly REACT = new Tag('React', '#61DAFB'); // React cyan blue
    static readonly REACT_NATIVE = new Tag('React-Native', '#61DAFB'); // React Native uses React blue
    static readonly NATIVEWIND = new Tag('Native Wind', '#06B6D4'); // Tailwind cyan
    static readonly REANIMATED = new Tag('Reanimated', '#FF6B6B'); // Bright animated feel
    static readonly REDUX = new Tag('Redux', '#764ABC'); // Redux purple
    static readonly CHAKRAUI = new Tag('Chakra-UI', '#319795'); // Chakra teal
    static readonly CSS = new Tag('CSS', '#264DE4'); // CSS blue
    static readonly NODEJS = new Tag('Node.js', '#339933'); // Node.js green
    static readonly BOOTSTRAP = new Tag('Bootstrap', '#7952B3'); // Bootstrap purple
    static readonly TYPESCRIPT = new Tag('Typescript', '#3178C6'); // TypeScript blue
    static readonly JAVASCRIPT = new Tag('Javascript', '#F7DF1E'); // JS yellow
    static readonly HTML = new Tag('HTML', '#E34F26'); // HTML orange-red
    static readonly PYTHON = new Tag('Python', '#3776AB'); // Python blue
    static readonly MATERIALUI = new Tag('Material UI', '#007FFF'); // Material UI blue
    static readonly SOCKETIO = new Tag('Socket.IO', '#010101'); // Socket.io black
    static readonly OAuth2 = new Tag('Google Auth', '#4285F4'); // Google blue
    static readonly GeminiApi = new Tag('AI Agent', '#512DA8'); // Gemini purple
    static readonly FIREBASE = new Tag('Firebase', '#FFCA28'); // Firebase yellow
    static readonly STRIPE = new Tag('Stripe', '#635BFF'); // Stripe indigo
    static readonly MONGODB = new Tag('MongoDB', '#47A248'); // Mongo green
    static readonly PSQL = new Tag('PostgreSQL', '#336791'); // PostgreSQL blue
    static readonly REDIS = new Tag('Redis', '#D82C20'); // Redis red
    static readonly DOCKER = new Tag('Docker', '#2496ED'); // Docker blue

    constructor(private readonly key: string, public readonly color: string) { }

    toString() {
        return this.key;
    }
}
