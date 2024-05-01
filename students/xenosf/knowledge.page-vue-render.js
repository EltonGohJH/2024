
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"fixed":""}},[_c('navbar',{attrs:{"placement":"top","type":"primary"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/2024/index.html","title":"Home"}},[_v("CS3281&2-2024/Students")])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/nus-cs3281/2024"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])]},proxy:true}])},[_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3281")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/students/knowledge.html"}},[_v("Knowledge")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"https://nus-cs3281.github.io/2024-dashboard/?search=&sort=groupTitle&sortWithin=title&timeframe=commit&mergegroup=&groupSelect=groupByAuthors&breakdown=false"}},[_v("Code Dashboard")])])]),_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3282")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/cs3282-index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/students/talksSchedule.html"}},[_v("Lightning Talks")])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/2024/instructions.html"}},[_v("Instructions")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://nus-cs3281.github.io/website/"}},[_v("CS3281&2 Website "),_c('span',[_c('span',{staticClass:"glyphicon glyphicon-share-alt",attrs:{"aria-hidden":"true"}})])])])],1)],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_m(0),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"})])],1),_v(" "),_m(1)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_c('h3',{attrs:{"id":"hibernate"}},[_v("Hibernate"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#hibernate","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("As part of the V9 migration, I had to rewrite the logic to query from the SQL database using Hibernate ORM API instead of from Datastore.")]),_v(" "),_c('h4',{attrs:{"id":"orm"}},[_v("ORM"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#orm","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("TEAMMATES' back-end code follows the Object-Oriented (OO) paradigm. The code works with objects. This allows easy mapping of objects in the problem domain (e.g. app user) to objects in code (e.g. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("User")]),_v(").")]),_v(" "),_c('p',[_v("For the data to persist beyond a single session, it must be stored/persisted into a database. V9 uses PostgreSQL, a relational database management system (RDBMS) to store data.")]),_v(" "),_c('p',[_v("It is difficult to translate data from a relational model to an object models, resulting in the "),_c('a',{attrs:{"href":"https://en.wikipedia.org/wiki/Object%E2%80%93relational_impedance_mismatch"}},[_v("object-relational impedance mismatch")]),_v(".")]),_v(" "),_c('p',[_v("A Object/Relational Mapping (ORM) framework helps bridge the object-relational impedance mismatch, allowing us to work with data from an RDBMS in a familiar OO fashion.")]),_v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://hibernate.org/orm/what-is-an-orm/"}},[_v("Hibernate website: What is an ORM")])])]),_v(" "),_c('h4',{attrs:{"id":"jpa"}},[_v("JPA"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#jpa","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Jakarta Persistence, formerly known as Java Persistence API (JPA) is an API for persistence and ORM.\nHibernate implements this specification.")]),_v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://jakarta.ee/specifications/platform/9/apidocs/jakarta/persistence/package-summary.html"}},[_v("JPA specification")])])]),_v(" "),_c('h4',{attrs:{"id":"criteria-api"}},[_v("Criteria API"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#criteria-api","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("The Criteria API allows us to make database queries using objects in code rather than using query strings. The queries can be built based on certain criteria (e.g. matching field).")]),_v(" "),_c('p',[_v("Using "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Join<X, Y>")]),_v(", we can navigate to related entities in a query, allowing us to access fields of a related class. For example, when querying a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("User")]),_v(", we can access its associated "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Account")]),_v(".")]),_v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://jakarta.ee/learn/docs/jakartaee-tutorial/9.1/persist/persistence-criteria/persistence-criteria.html"}},[_v("Jakarta EE tutorial: Using the Criteria API to Create Queries")])])]),_v(" "),_c('h4',{attrs:{"id":"persistence-operations"}},[_v("Persistence Operations"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#persistence-operations","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Hibernate maintains a persistence context, which serves as a cache of objects. This context allows for in-code objects to be synced with the data in the database.")]),_v(" "),_c('p',[_v("Using "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("persist()")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("merge()")]),_v(", and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("remove()")]),_v(", we can create, update, and remove an object's data from the database. These methods schedule SQL statements according to the current state of the Java object.")]),_v(" "),_c('p',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("clear()")]),_v(" clears the cached state and stops syncing existing Java objects with their corresponding database data. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("flush()")]),_v(" synchronises the cached state with the database state. When writing integration tests, I found it helpful to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("clear()")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("flush()")]),_v(" the persistence contexts before every test, to ensure that operations done in one test do not affect the others in unexpected ways.")]),_v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://docs.jboss.org/hibernate/orm/6.4/introduction/html_single/Hibernate_Introduction.html#persistence-operations"}},[_v("Hibernate 6.4 introduction docs: Operations on the persistence context")])])]),_v(" "),_c('h3',{attrs:{"id":"mockito"}},[_v("Mockito"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#mockito","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("To isolate units in unit testing, it is useful to create mocks or stubs of other components that are used by the unit.")]),_v(" "),_c('h4',{attrs:{"id":"verify"}},[_v("Verify"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#verify","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("We can create a mock of a class using "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("mock()")]),_v(". We can then use this mocked object as we would a normal object (e.g. calling methods). Afterwards, we can verify several things, such as whether a particular method was called with particular parameters, and how many times a particular method call was performed.")]),_v(" "),_c('h4',{attrs:{"id":"stub"}},[_v("Stub"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#stub","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("If a method needs to return a value when called, the return value can be stubbed before the method of the mocked object is called. The same method can be stubbed with different outputs for different parameters. Exceptions can also be stubbed in a similar way.")]),_v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://site.mockito.org/"}},[_v("Mockito website")])])]),_v(" "),_c('h3',{attrs:{"id":"angular-forms"}},[_v("Angular forms"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#angular-forms","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("As part of the instructor account request form (ARF) project, I had to create an Angular form.")]),_v(" "),_c('h4',{attrs:{"id":"overview"}},[_v("Overview"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#overview","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Angular has 2 form types: template-driven, and reactive.")]),_v(" "),_c('p',[_v("Template-driven forms have implicit data models which are determined by the form view itself. Template-driven forms are simpler to add, but are more complicated to test and scale.")]),_v(" "),_c('p',[_v("Reactive forms require an explicitly-defined data model that is then bound to the view. The explicit definition of the model in reactive forms makes it easier to scale and test, particularly for more complex forms.")]),_v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://angular.io/guide/forms-overview"}},[_v("Angular forms overview")])])]),_v(" "),_c('h4',{attrs:{"id":"accessibility"}},[_v("Accessibility"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#accessibility","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Standard HTML attributes may still need to be set on Angular form inputs to ensure accessibility. For instance, Angular's "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Required")]),_v(" validator does not set the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("required")]),_v(" attribute on the element, which is used by screen readers, so we need to set it also. Another example would be setting the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("aria-invalid")]),_v(" attribute when validation fails.")]),_v(" "),_c('p',[_v("To make inline validation messages accessible, use "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("aria-describedby")]),_v(" to make it clear which input the error is associated with.")]),_v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://coryrylan.com/blog/build-accessible-forms-with-angular"}},[_v("Building accessible forms with Angular")])])]),_v(" "),_c('h4',{attrs:{"id":"validation"}},[_v("Validation"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#validation","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Angular has some built-in validator functions that can be used to validate form inputs, and allows for custom validators to be created. Validators can be synchronous or asynchronous.")]),_v(" "),_c('p',[_v("By default, all validators run when the input values change. When there are many validators, the form may lag if validation is done this frequently. To improve performance, the form or input's "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("updateOn")]),_v(" option can be set to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("submit")]),_v(" or "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("blur")]),_v(" to only run the validators on submit or blur.")]),_v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://angular.io/guide/form-validation"}},[_v("Validating form input")])])]),_v(" "),_c('h3',{attrs:{"id":"git"}},[_v("Git"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#git","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("git rebase")]),_v(" can be used to keep branch commit history readable and remove clutter from frequent merge commits.")]),_v(" "),_c('p',[_v("In particular, the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("--onto")]),_v(" option allows the root to be changed, which is useful when rebasing onto a branch that has itself been modified or rebased.")]),_v(" "),_c('p',[_v("Each Git commit has a committer date and an author date. When rebasing, the committer date is altered. To prevent this, use "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("--committer-date-is-author-date")]),_v(".")]),_v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://thoughtbot.com/blog/rebasing-your-branch-with-git-rebase-onto"}},[_v("More about rebasing with "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("--onto")])])])])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('p',[_v("["),_c('strong',[_v("This site was generated using "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"25"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.5.1")])]),_v(" on Wed, 1 May 2024, 3:15:21 UTC]"),_c('br'),_v(" "),_c('span',{staticClass:"dimmed"},[_c('small',[_c('small',[_v("favicon.ico of this site was made by "),_c('a',{attrs:{"href":"https://www.flaticon.com/authors/smashicons","title":"Smashicons"}},[_v("Smashicons")]),_v(" from "),_c('a',{attrs:{"href":"https://www.flaticon.com/","title":"Flaticon"}},[_v("www.flaticon.com")]),_v(" is licensed by "),_c('a',{attrs:{"href":"http://creativecommons.org/licenses/by/3.0/","title":"Creative Commons BY 3.0","target":"_blank"}},[_v("CC 3.0 BY")])])])])])])])}
}];
  