export class Item {
    id: number;
    name: string;
    description: string;
    plaintext: string;

    constructor(id: number, name: string, description: string, plaintext: string) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.plaintext = plaintext;
    }
}
