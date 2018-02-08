/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your customer ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery'], (oj, ko, $) => {

        class CustomerViewModel {
            constructor() {
                $.post('http://localhost:3000/todo/add', JSON.stringify({naam: 'demo', omschrijving: 'demo item'}), response => {
                    console.log('response: ', response);

                    $.get('http://localhost:3000/todo', items => {
                        console.log(items);
                    });
                });
            }
        }

        /*
         * Returns a constructor for the ViewModel so that the ViewModel is constructed
         * each time the view is displayed.  Return an instance of the ViewModel if
         * only one instance of the ViewModel is needed.
         */
        return new CustomerViewModel();
    }
);
