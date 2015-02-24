ACMoreServicesApp = Ember.Application.create();

ACMoreServicesApp.MoreServiceStore = DS.Store.extend({
    revision: 13,
    adapter: 'DS.FixtureAdapter'
});

ACMoreServicesApp.Router.map(function() {
    this.resource('index',{path : '/'},function(){
        this.resource('userlist', { path:'/userlist' });
        this.resource('activate-user-list', { path:'/activate-user-list' });
        this.resource('activate-selected-users', { path:'/activate-selected-users' });
        this.resource('add-user', { path:'/add-user' });

    });

});

ACMoreServicesApp.MoreServicesRoute = Ember.Route.extend({

});

ACMoreServicesApp.IndexRoute = Ember.Route.extend({
    model:function(){
        return menus;
    }
});


ACMoreServicesApp.UserlistRoute = Ember.Route.extend({
    model: function() {
        return ACMoreServicesApp.User.FIXTURES;
    }
});

ACMoreServicesApp.AddUserRoute = Ember.Route.extend({

});


ACMoreServicesApp.ActivateUserListRoute = Ember.Route.extend({
    model: function() {
        return ACMoreServicesApp.User.FIXTURES;
    },
    setupController: function(controller, model) {
        this._super(controller, model);
        controller.set('activate-user-list', this.modelFor('activate-user-list'));
    }
});

ACMoreServicesApp.ActivateSelectedUsersRoute = Ember.Route.extend({
    model: function() {
        return this.modelFor("activate-user-list");

    }
});


ACMoreServicesApp.ActivateUserListController = Ember.ObjectController.extend({
    actions: {
        activate : function(){
            this.model.forEach(function(item) {
                console.log(item.accessId);
                console.log(item.selected);
            });
        }
    }
});

ACMoreServicesApp.AddUserController=Ember.Controller.extend({
    actions:{
        submitForApproval:function(){
            console.log(this.accessId);
            console.log(this.firstName);
            console.log(this.lastName);
            console.log(this.phone);
        }
    }
});

ACMoreServicesApp.User=DS.Model.extend({

    accessId: DS.attr("string"),
    firstName: DS.attr("string"),
    lastName: DS.attr("string"),
    Phone: DS.attr("string"),
    selected: DS.attr("boolean")
});

ACMoreServicesApp.User.FIXTURES = [
    {
        id:'1',
        accessId: 'rahul123',
        firstName: "Rahul",
        lastName:"Dev",
        Phone: "12369741",
        selected:false

    },
    {
        id:'2',
        accessId: 'sanjay123',
        firstName: "Sanjay",
        lastName:"Singh",
        Phone: "587645",
        selected:false

    },{
        id:'3',
        accessId: 'Amit321',
        firstName: "Amit",
        lastName:"Kumar",
        Phone: "12369741",
        selected:false

    },{
        id:'4',
        accessId: 'Sumit1233',
        firstName: "Sumit",
        lastName:"Dev",
        Phone: "12369741",
        selected:false

    }
];



var menus = [{
    id: '1',
    menuLabel: "Add User",
    templateId:"add-user"

}, {
    id: '2',
    menuLabel: "Credential Management",
    templateId:"userlist"

}, {
    id: '3',
    menuLabel: "Activate User",
    templateId:"activate-user-list"

},
    {
        id: '4',
        menuLabel: "De-Activate User",
        templateId:""

    }];