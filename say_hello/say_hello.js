var array = [];
function sayHello(firstName) {
    {
        var array_1 = [];
        var i = void 0;
        var j = void 0;
        var k = void 0;
        console.log('Hello' + firstName);
        var age_1;
        var name_1;
        array_1.push('Makishima');
        array_1.push('yamada');
        var user = {
            name: 'Takya',
            age: 36
        };
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
var firstName = 'Takayuki';
var age = 54;
sayHello(firstName);
// sayHello(age) error
