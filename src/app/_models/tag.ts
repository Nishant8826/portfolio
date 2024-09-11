export class Tag {
    static readonly ANGULAR = new Tag('Angular', 'red');
    static readonly REACT = new Tag('React', 'blue');
    static readonly CHAKRAUI = new Tag('Chakra-UI', 'purple');
    static readonly CSS = new Tag('CSS', 'pink');
    static readonly NODEJS = new Tag('Nodejs', 'brown');
    static readonly BOOTSTRAP = new Tag('Bootstrap', 'purple');
    static readonly TYPESCRIPT = new Tag('Typescript', 'green');
    static readonly JAVASCRIPT = new Tag('Javascript', 'gray');
    static readonly HTML = new Tag('HTML', 'purple');
    static readonly PYTHON = new Tag('Python', 'pink');

    constructor(private readonly key: string, public readonly color: string) {

    }

    toString() {
        return this.key;
    }

}