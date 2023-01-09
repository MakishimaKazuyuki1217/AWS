const array: string[] = [];

function sayHello(firstName: string)
{
    {
        let array: string[] = [];
        let i;
        let j;
        let k;

        console.log('Hello' + firstName)
 
        let age : number;
        let name : string;

        array.push('Makishima')
        array.push(`yamada`)

        const user: {name: string; age: number} =  {
            name: `Takya`,
            age: 36
        }

   
    });

/*
        JS = VM (JIT)
        .NET = VM ()

        CODE　（プログラム）                0x1000~0x7fff = 
        DATA　（グローバル変数）            0x8000~0x81ff
        BSS   （未初期化なグローバル変数）   0x8200~0x88ff
        HEAP　（new とか新しいオブジェクトを作る） 
        STACK（ローカル変数）               0xf000~0xffff = 0x10000
        
        | name   | address; ------>    'Yamada' ???
        | age    |  CPU 32bit 4byte  CPUT 64bir 8Byte
        |  k     | 
        |  J     | 
        |  i     |  
*/

    }

 }

 
let firstName: string = 'Takayuki'
let age: number = 54


sayHello(firstName)
// sayHello(age) error

