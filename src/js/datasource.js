

define([], () => {
    class Datasource {

        constructor() {
            console.log('Datasource constructor');

            this._todolist = [
                {
                    name: 'Item 1',
                    description: 'Omschrijving 1111111111'
                },
                {
                    name: 'Item 2',
                    description: 'Omschrijving 22222222222222'
                },
                {
                    name: 'Item 3',
                    description: 'Omschrijving 3333333333333'
                }];

            console.log( '_todolist : ' + this._todolist.length );

            //this.fillWithTestdata();
        }






        fillWithTestdata() {
            this._todolist.push( [{
                    name: 'Item 1',
                    description: 'Omschrijving 1111111111'
                },
                    {
                        name: 'Item 2',
                        description: 'Omschrijving 22222222222222'
                    },
                    {
                        name: 'Item 3',
                        description: 'Omschrijving 3333333333333'
                    }]
            )
        }

        get todolist() {
            return this._todolist;
        }

    }

    return new Datasource();
});

