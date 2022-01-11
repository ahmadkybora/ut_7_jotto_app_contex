export class Tools{
    x = 3;
    constructor()
    {
        return this.x = 4
    }
    
    a()
    {
        return 1+2;
    }

    b()
    {
        return 3+4;
    }

    c(a, b)
    {
        return a+b;
    }

    d(a, b)
    {
        return this.c(a, b);
    }
    render() {
        return (
            <div></div>
        )
    } 
}