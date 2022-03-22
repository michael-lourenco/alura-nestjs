export class Item {
    id: string;
    name: string;
    description: string;
    plaintext: string;

    constructor(id: string, name: string, description: string, plaintext: string) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.plaintext = plaintext;
    }
}
