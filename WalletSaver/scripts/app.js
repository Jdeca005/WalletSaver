(function () {

    // store a reference to the application object that will be created
    // later on so that we can use it if need be
    var app;

    //List Java Script 
    var apiKey = "z3Qz0G8N76VqTcUH";
    var el = new Everlive(apiKey);
    var groceryDataSource = new kendo.data.DataSource({
        type: "everlive",
        sort: {
            field: "Name",
            dir: "asc"
        },
        transport: {
            typeName: "Groceries"
        }
    });

    // create an object to store the models for each view
    window.APP = {
        models: {
            home: {
                title: 'Home'
            },
            list: {
                title: 'List',
                ds: groceryDataSource
            },
            stores: {
                title: 'Stores',
                ds: new kendo.data.DataSource({
                    data: [
                        {
                            name: 'Walmart Supercenter',
                            addressline1: '8651 NW 13th Ter',
                            addressline2: 'Doral, FL 33126',
                            longiture: '25.7869',
                            latitiude: '-80.3355',
                            image_url: 'img/store_logo/walmart.jpg',
                            url: 'http://www.walmart.com'
                        },
                        {
                            name: 'Publix',
                            addressline1: '1525 SW 107th Ave',
                            addressline2: 'Miami, FL 33174',
                            longiture: '25.7583177',
                            latitiude: '-80.3770858',
                            image_url: 'img/store_logo/publix.jpg',
                            url: 'http://www.publix.com'
                        },
                        {
                            name: 'Winn Dixie',
                            addressline1: '12254 SW 8th St',
                            addressline2: 'Miami, FL 33184',
                            longiture: '25.759708',
                            latitiude: '-80.394279',
                            image_url: 'img/store_logo/winn_dixie.jpg',
                            url: 'https://www.winndixie.com'
                        }
                      ]
                }),
                openlink: function (e) {
                    window.open(e.data.url, '_blank', 'location=yes');
                }
            },
            coupons: {
                title: 'Coupons',
                ds: new kendo.data.DataSource({
                    data: [
                        {
                            store: 'Publix',
                            name: '7UP® & Canada Dry®',
                            savings: ' SAVE $1.00',
                            amount: 1,
                            image_url: 'https://cdn.cpnscdn.com/insight.coupons.com/COS20/_Cache/_ImageCache/032/18519032.gif',
                            url: ''
                        },
                        {
                            store: 'Publix',
                            name: 'Chex Mix™',
                            savings: 'SAVE 50¢ ON TWO',
                            amount: .50,
                            image_url: 'https://d19hn3jcfcdeky.cloudfront.net/04db46ee-6f81-11e4-85d1-22000b53956c-9078_300.png',
                            url: ''
                        },
                        {
                            store: 'Publix',
                            name: 'Colgate® Enamel Health™ Toothpaste',
                            savings: 'SAVE $1.00',
                            amount: 1,
                            image_url: 'https://d19hn3jcfcdeky.cloudfront.net/18555140.gif',
                            url: ''
                        },
                        {
                            store: 'Publix',
                            name: 'Farm Rich® Snack Sixteen (16) oz or larger',
                            savings: 'SAVE $0.75',
                            amount: .75,
                            image_url: 'https://d19hn3jcfcdeky.cloudfront.net/18527068.gif',
                            url: ''
                        },
                        {
                            store: 'Walmart',
                            name: '7UP® & Canada Dry®',
                            savings: ' SAVE $1.00',
                            amount: 1,
                            image_url: 'https://cdn.cpnscdn.com/insight.coupons.com/COS20/_Cache/_ImageCache/032/18519032.gif',
                            url: ''
                        },
                        {
                            store: 'Walmart',
                            name: 'Chex Mix™',
                            savings: 'SAVE 50¢ ON TWO',
                            amount: .50,
                            image_url: 'https://d19hn3jcfcdeky.cloudfront.net/04db46ee-6f81-11e4-85d1-22000b53956c-9078_300.png',
                            url: ''
                        },
                        {
                            store: 'Walmart',
                            name: 'Colgate® Enamel Health™ Toothpaste',
                            savings: 'SAVE $1.00',
                            amount: 1,
                            image_url: 'https://d19hn3jcfcdeky.cloudfront.net/18555140.gif',
                            url: ''
                        },
                        {
                            store: 'Walmart',
                            name: 'Farm Rich® Snack Sixteen (16) oz or larger',
                            savings: 'SAVE $1.50 ON TWO',
                            amount: 1.50,
                            image_url: 'https://d19hn3jcfcdeky.cloudfront.net/18527068.gif',
                            url: ''
                        },
                        {
                            store: 'Winn Dixie',
                            name: '7UP® & Canada Dry®',
                            savings: ' SAVE $1.00',
                            amount: 1,
                            image_url: 'https://cdn.cpnscdn.com/insight.coupons.com/COS20/_Cache/_ImageCache/032/18519032.gif',
                            url: ''
                        },
                        {
                            store: 'Winn Dixie',
                            name: 'Chex Mix™',
                            savings: 'SAVE 50¢ ON TWO',
                            amount: .50,
                            image_url: 'https://d19hn3jcfcdeky.cloudfront.net/04db46ee-6f81-11e4-85d1-22000b53956c-9078_300.png',
                            url: ''
                        },
                        {
                            store: 'Winn Dixie',
                            name: 'Colgate® Enamel Health™ Toothpaste',
                            savings: 'SAVE $1.00',
                            amount: 1,
                            image_url: 'https://d19hn3jcfcdeky.cloudfront.net/18555140.gif',
                            url: ''
                        },
                        {
                            store: 'Winn Dixie',
                            name: 'Farm Rich® Snack Sixteen (16) oz or larger',
                            savings: 'SAVE $1.50 ON TWO',
                            amount: 1.50,
                            image_url: 'https://d19hn3jcfcdeky.cloudfront.net/18527068.gif',
                            url: ''
                        }
                      ]
                }),
                openlink: function (e) {
                    window.open(e.data.url, '_blank', 'location=yes');
                }
            },
            maps: {
                title: 'Maps'
            },
            settings: {
                title: 'Settings'
            },
        }
    };

    // this function is called by Cordova when the application is loaded by the device
    document.addEventListener('deviceready', function () {

        // hide the splash screen as soon as the app is ready. otherwise
        // Cordova will wait 5 very long seconds to do it for you.
        navigator.splashscreen.hide();

        app = new kendo.mobile.Application(document.body, {

            // you can change the default transition (slide, zoom or fade)
            transition: 'slide',

            // comment out the following line to get a UI which matches the look
            // and feel of the operating system
            skin: 'flat',

            // the application needs to know which view to load first
            initial: 'views/home.html'
        });

    }, false);
/*
    // List Java Script
    var apiKey = "z3Qz0G8N76VqTcUH";
    var el = new Everlive(apiKey);
    var groceryDataSource = new kendo.data.DataSource({
        type: "everlive",
        sort: {
            field: "Name",
            dir: "asc"
        },
        transport: {
            typeName: "Groceries"
        }
    });

        function initialize() {
        //var app = app ;
        $("#grocery-list").kendoMobileListView({
            dataSource: groceryDataSource,
            template: "#: Name #"
        });
    }
*/
    window.addView = kendo.observable({
        add: function () {
            if (this.grocery.trim() === "") {
                navigator.notification.alert("Please provide a grocery.");
                return;
            }

            groceryDataSource.add({
                Name: this.grocery
            });
            groceryDataSource.one("sync", this.close);
            groceryDataSource.sync();
            $("#add").data("kendoMobileModalView").close();
        },
        close: function () {
            $("#add").data("kendoMobileModalView").close();
            //this.grocery = "";
        }
    });

    //    document.addEventListener("deviceready", initialize);

}());