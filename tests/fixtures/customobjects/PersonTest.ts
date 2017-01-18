class PersonTest
{
    public name: string;

    public lastName: string;

    public age: number;

    public isAlive: boolean;

    public children: Array<PersonTest>;

    constructor()
    {
        this.children = [];
    }
}