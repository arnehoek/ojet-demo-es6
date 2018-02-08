

define([], () => {
    class Datasource {


        constructor() {
            console.log('Datasource constructor 1');

            this._todolist = [{name: 'name', description: 'desc'}];

            // $.get('http://localhost:3000/todo', items => {
            //     console.log(items );
            //     //this._todolist.push.apply(this._todolist, items);
            //
            //     this._todolist.push({name: 'n2', description: 'd2'});
            //
            //     console.log('this todolist', this._todolist);
            // });

            console.log('Datasource constructor 2');
            console.log( 'this._todolist >>> ' + this._todolist);

         //  console.log( '_todolist 1 : ' + this._todolist.length );

/*
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
*/

        //    console.log( '_todolist : ' + this._todolist.length );

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

