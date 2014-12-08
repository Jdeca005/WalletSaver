(function () {
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
        $("#grocery-list").kendoMobileListView({
            dataSource: groceryDataSource,
            template: "#: Name #"
        });
        navigator.splashscreen.hide();
    }

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
            
        },
        close: function () {
            $("#add").data("kendoMobileModalView").close();
            //this.grocery = "";
        }
    });

    document.addEventListener("deviceready", initialize);
}());