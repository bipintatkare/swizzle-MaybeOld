(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{C2cN:function(l,n,e){"use strict";e.r(n);var a=e("8Y7J");class t{}var o=e("pMnS"),u=e("s7LF"),i=e("dJrM"),r=e("HsOI"),b=e("Xd0L"),d=e("IP0z"),c=e("/HVE"),s=e("omvX"),g=e("ZwOa"),p=e("oapL"),m=e("bujt"),f=e("Fwaw"),F=e("5GAg");class h{constructor(l,n,e){this.formBuilder=l,this._auth=n,this.router=e,this.login=this.formBuilder.group({username:[null,u.p.required],password:[null,u.p.required]}),this.login.valueChanges.subscribe(l=>console.log(l))}checkLogin(){"Physio2019"===this.login.value.username&&"password"===this.login.value.password?(localStorage.setItem("auth",this.login.value.password),console.log('"jednako je"'),this.router.navigate(["admin"])):alert("Nije jednako")}}var _=e("y8gV"),C=e("iInd"),v=a.rb({encapsulation:0,styles:[[".login-heading[_ngcontent-%COMP%]{text-align:center;margin:20px 0;color:#009abb}.login-container[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center}.login-container[_ngcontent-%COMP%]   .login-content[_ngcontent-%COMP%]{max-width:1200px;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;padding:20px 0}.login-container[_ngcontent-%COMP%]   .login-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;width:320px}.login-container[_ngcontent-%COMP%]   .login-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-top:15px}.login-container[_ngcontent-%COMP%]   .login-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:enabled, .login-container[_ngcontent-%COMP%]   .login-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[enabled][_ngcontent-%COMP%]{background:#009abb}@media screen and (max-width:570px){.login-content[_ngcontent-%COMP%]{padding:10px!important}}@media screen and (max-width:360px){.login-content[_ngcontent-%COMP%]{-webkit-box-flex:1;flex:1}.login-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{width:100%!important}}"]],data:{}});function w(l){return a.Pb(0,[(l()(),a.tb(0,0,null,null,1,"h1",[["class","login-heading"]],null,null,null,null,null)),(l()(),a.Nb(-1,null,["Physio Glattbrugg login"])),(l()(),a.tb(2,0,null,null,53,"div",[["class","login-container"]],null,null,null,null,null)),(l()(),a.tb(3,0,null,null,52,"div",[["class","login-content"]],null,null,null,null,null)),(l()(),a.tb(4,0,null,null,51,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,e){var t=!0;return"submit"===n&&(t=!1!==a.Fb(l,6).onSubmit(e)&&t),"reset"===n&&(t=!1!==a.Fb(l,6).onReset()&&t),t},null,null)),a.sb(5,16384,null,0,u.t,[],null,null),a.sb(6,540672,null,0,u.f,[[8,null],[8,null]],{form:[0,"form"]},null),a.Kb(2048,null,u.b,null,[u.f]),a.sb(8,16384,null,0,u.m,[[4,u.b]],null,null),(l()(),a.tb(9,0,null,null,21,"mat-form-field",[["class","mat-form-field"]],[[2,"mat-form-field-appearance-standard",null],[2,"mat-form-field-appearance-fill",null],[2,"mat-form-field-appearance-outline",null],[2,"mat-form-field-appearance-legacy",null],[2,"mat-form-field-invalid",null],[2,"mat-form-field-can-float",null],[2,"mat-form-field-should-float",null],[2,"mat-form-field-has-label",null],[2,"mat-form-field-hide-placeholder",null],[2,"mat-form-field-disabled",null],[2,"mat-form-field-autofilled",null],[2,"mat-focused",null],[2,"mat-accent",null],[2,"mat-warn",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"_mat-animation-noopable",null]],null,null,i.b,i.a)),a.sb(10,7520256,null,9,r.c,[a.k,a.h,[2,b.f],[2,d.b],[2,r.a],c.a,a.y,[2,s.a]],null,null),a.Lb(603979776,1,{_controlNonStatic:0}),a.Lb(335544320,2,{_controlStatic:0}),a.Lb(603979776,3,{_labelChildNonStatic:0}),a.Lb(335544320,4,{_labelChildStatic:0}),a.Lb(603979776,5,{_placeholderChild:0}),a.Lb(603979776,6,{_errorChildren:1}),a.Lb(603979776,7,{_hintChildren:1}),a.Lb(603979776,8,{_prefixChildren:1}),a.Lb(603979776,9,{_suffixChildren:1}),(l()(),a.tb(20,0,null,1,7,"input",[["autocomplete","off"],["class","mat-input-element mat-form-field-autofill-control"],["formControlName","username"],["matInput",""],["placeholder","username"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"mat-input-server",null],[1,"id",0],[1,"placeholder",0],[8,"disabled",0],[8,"required",0],[1,"readonly",0],[1,"aria-describedby",0],[1,"aria-invalid",0],[1,"aria-required",0]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"focus"]],function(l,n,e){var t=!0;return"input"===n&&(t=!1!==a.Fb(l,21)._handleInput(e.target.value)&&t),"blur"===n&&(t=!1!==a.Fb(l,21).onTouched()&&t),"compositionstart"===n&&(t=!1!==a.Fb(l,21)._compositionStart()&&t),"compositionend"===n&&(t=!1!==a.Fb(l,21)._compositionEnd(e.target.value)&&t),"blur"===n&&(t=!1!==a.Fb(l,26)._focusChanged(!1)&&t),"focus"===n&&(t=!1!==a.Fb(l,26)._focusChanged(!0)&&t),"input"===n&&(t=!1!==a.Fb(l,26)._onInput()&&t),t},null,null)),a.sb(21,16384,null,0,u.c,[a.D,a.k,[2,u.a]],null,null),a.Kb(1024,null,u.j,function(l){return[l]},[u.c]),a.sb(23,671744,null,0,u.e,[[3,u.b],[8,null],[8,null],[6,u.j],[2,u.s]],{name:[0,"name"]},null),a.Kb(2048,null,u.k,null,[u.e]),a.sb(25,16384,null,0,u.l,[[4,u.k]],null,null),a.sb(26,999424,null,0,g.a,[a.k,c.a,[6,u.k],[2,u.n],[2,u.f],b.b,[8,null],p.a,a.y],{placeholder:[0,"placeholder"],type:[1,"type"]},null),a.Kb(2048,[[1,4],[2,4]],r.d,null,[g.a]),(l()(),a.tb(28,0,null,5,2,"mat-error",[["class","mat-error"],["role","alert"]],[[1,"id",0]],null,null,null,null)),a.sb(29,16384,[[6,4]],0,r.b,[],null,null),(l()(),a.Nb(-1,null,["Please enter your username"])),(l()(),a.tb(31,0,null,null,21,"mat-form-field",[["class","mat-form-field"]],[[2,"mat-form-field-appearance-standard",null],[2,"mat-form-field-appearance-fill",null],[2,"mat-form-field-appearance-outline",null],[2,"mat-form-field-appearance-legacy",null],[2,"mat-form-field-invalid",null],[2,"mat-form-field-can-float",null],[2,"mat-form-field-should-float",null],[2,"mat-form-field-has-label",null],[2,"mat-form-field-hide-placeholder",null],[2,"mat-form-field-disabled",null],[2,"mat-form-field-autofilled",null],[2,"mat-focused",null],[2,"mat-accent",null],[2,"mat-warn",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"_mat-animation-noopable",null]],null,null,i.b,i.a)),a.sb(32,7520256,null,9,r.c,[a.k,a.h,[2,b.f],[2,d.b],[2,r.a],c.a,a.y,[2,s.a]],null,null),a.Lb(603979776,10,{_controlNonStatic:0}),a.Lb(335544320,11,{_controlStatic:0}),a.Lb(603979776,12,{_labelChildNonStatic:0}),a.Lb(335544320,13,{_labelChildStatic:0}),a.Lb(603979776,14,{_placeholderChild:0}),a.Lb(603979776,15,{_errorChildren:1}),a.Lb(603979776,16,{_hintChildren:1}),a.Lb(603979776,17,{_prefixChildren:1}),a.Lb(603979776,18,{_suffixChildren:1}),(l()(),a.tb(42,0,null,1,7,"input",[["autocomplete","off"],["class","mat-input-element mat-form-field-autofill-control"],["formControlName","password"],["matInput",""],["placeholder","Password"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"mat-input-server",null],[1,"id",0],[1,"placeholder",0],[8,"disabled",0],[8,"required",0],[1,"readonly",0],[1,"aria-describedby",0],[1,"aria-invalid",0],[1,"aria-required",0]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"focus"]],function(l,n,e){var t=!0;return"input"===n&&(t=!1!==a.Fb(l,43)._handleInput(e.target.value)&&t),"blur"===n&&(t=!1!==a.Fb(l,43).onTouched()&&t),"compositionstart"===n&&(t=!1!==a.Fb(l,43)._compositionStart()&&t),"compositionend"===n&&(t=!1!==a.Fb(l,43)._compositionEnd(e.target.value)&&t),"blur"===n&&(t=!1!==a.Fb(l,48)._focusChanged(!1)&&t),"focus"===n&&(t=!1!==a.Fb(l,48)._focusChanged(!0)&&t),"input"===n&&(t=!1!==a.Fb(l,48)._onInput()&&t),t},null,null)),a.sb(43,16384,null,0,u.c,[a.D,a.k,[2,u.a]],null,null),a.Kb(1024,null,u.j,function(l){return[l]},[u.c]),a.sb(45,671744,null,0,u.e,[[3,u.b],[8,null],[8,null],[6,u.j],[2,u.s]],{name:[0,"name"]},null),a.Kb(2048,null,u.k,null,[u.e]),a.sb(47,16384,null,0,u.l,[[4,u.k]],null,null),a.sb(48,999424,null,0,g.a,[a.k,c.a,[6,u.k],[2,u.n],[2,u.f],b.b,[8,null],p.a,a.y],{placeholder:[0,"placeholder"],type:[1,"type"]},null),a.Kb(2048,[[10,4],[11,4]],r.d,null,[g.a]),(l()(),a.tb(50,0,null,5,2,"mat-error",[["class","mat-error"],["role","alert"]],[[1,"id",0]],null,null,null,null)),a.sb(51,16384,[[15,4]],0,r.b,[],null,null),(l()(),a.Nb(-1,null,["Please enter your password"])),(l()(),a.tb(53,0,null,null,2,"button",[["color","primary"],["mat-raised-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(l,n,e){var a=!0;return"click"===n&&(a=!1!==l.component.checkLogin()&&a),a},m.b,m.a)),a.sb(54,180224,null,0,f.b,[a.k,F.f,[2,s.a]],{disabled:[0,"disabled"],color:[1,"color"]},null),(l()(),a.Nb(-1,0,["Log in "]))],function(l,n){var e=n.component;l(n,6,0,e.login),l(n,23,0,"username"),l(n,26,0,"username","text"),l(n,45,0,"password"),l(n,48,0,"Password","password"),l(n,54,0,!e.login.valid,"primary")},function(l,n){l(n,4,0,a.Fb(n,8).ngClassUntouched,a.Fb(n,8).ngClassTouched,a.Fb(n,8).ngClassPristine,a.Fb(n,8).ngClassDirty,a.Fb(n,8).ngClassValid,a.Fb(n,8).ngClassInvalid,a.Fb(n,8).ngClassPending),l(n,9,1,["standard"==a.Fb(n,10).appearance,"fill"==a.Fb(n,10).appearance,"outline"==a.Fb(n,10).appearance,"legacy"==a.Fb(n,10).appearance,a.Fb(n,10)._control.errorState,a.Fb(n,10)._canLabelFloat,a.Fb(n,10)._shouldLabelFloat(),a.Fb(n,10)._hasFloatingLabel(),a.Fb(n,10)._hideControlPlaceholder(),a.Fb(n,10)._control.disabled,a.Fb(n,10)._control.autofilled,a.Fb(n,10)._control.focused,"accent"==a.Fb(n,10).color,"warn"==a.Fb(n,10).color,a.Fb(n,10)._shouldForward("untouched"),a.Fb(n,10)._shouldForward("touched"),a.Fb(n,10)._shouldForward("pristine"),a.Fb(n,10)._shouldForward("dirty"),a.Fb(n,10)._shouldForward("valid"),a.Fb(n,10)._shouldForward("invalid"),a.Fb(n,10)._shouldForward("pending"),!a.Fb(n,10)._animationsEnabled]),l(n,20,1,[a.Fb(n,25).ngClassUntouched,a.Fb(n,25).ngClassTouched,a.Fb(n,25).ngClassPristine,a.Fb(n,25).ngClassDirty,a.Fb(n,25).ngClassValid,a.Fb(n,25).ngClassInvalid,a.Fb(n,25).ngClassPending,a.Fb(n,26)._isServer,a.Fb(n,26).id,a.Fb(n,26).placeholder,a.Fb(n,26).disabled,a.Fb(n,26).required,a.Fb(n,26).readonly&&!a.Fb(n,26)._isNativeSelect||null,a.Fb(n,26)._ariaDescribedby||null,a.Fb(n,26).errorState,a.Fb(n,26).required.toString()]),l(n,28,0,a.Fb(n,29).id),l(n,31,1,["standard"==a.Fb(n,32).appearance,"fill"==a.Fb(n,32).appearance,"outline"==a.Fb(n,32).appearance,"legacy"==a.Fb(n,32).appearance,a.Fb(n,32)._control.errorState,a.Fb(n,32)._canLabelFloat,a.Fb(n,32)._shouldLabelFloat(),a.Fb(n,32)._hasFloatingLabel(),a.Fb(n,32)._hideControlPlaceholder(),a.Fb(n,32)._control.disabled,a.Fb(n,32)._control.autofilled,a.Fb(n,32)._control.focused,"accent"==a.Fb(n,32).color,"warn"==a.Fb(n,32).color,a.Fb(n,32)._shouldForward("untouched"),a.Fb(n,32)._shouldForward("touched"),a.Fb(n,32)._shouldForward("pristine"),a.Fb(n,32)._shouldForward("dirty"),a.Fb(n,32)._shouldForward("valid"),a.Fb(n,32)._shouldForward("invalid"),a.Fb(n,32)._shouldForward("pending"),!a.Fb(n,32)._animationsEnabled]),l(n,42,1,[a.Fb(n,47).ngClassUntouched,a.Fb(n,47).ngClassTouched,a.Fb(n,47).ngClassPristine,a.Fb(n,47).ngClassDirty,a.Fb(n,47).ngClassValid,a.Fb(n,47).ngClassInvalid,a.Fb(n,47).ngClassPending,a.Fb(n,48)._isServer,a.Fb(n,48).id,a.Fb(n,48).placeholder,a.Fb(n,48).disabled,a.Fb(n,48).required,a.Fb(n,48).readonly&&!a.Fb(n,48)._isNativeSelect||null,a.Fb(n,48)._ariaDescribedby||null,a.Fb(n,48).errorState,a.Fb(n,48).required.toString()]),l(n,50,0,a.Fb(n,51).id),l(n,53,0,a.Fb(n,54).disabled||null,"NoopAnimations"===a.Fb(n,54)._animationMode)})}function y(l){return a.Pb(0,[(l()(),a.tb(0,0,null,null,1,"app-login-component",[],null,null,null,w,v)),a.sb(1,49152,null,0,h,[u.d,_.a,C.k],null,null)],null,null)}var D=a.pb("app-login-component",h,y,{},{},[]),P=e("xYTU"),k=e("SVse"),x=e("POq0"),L=e("QQfA");class M{}var O=e("cUpR"),S=e("Gi4r"),j=e("zMNK"),q=e("hOhj"),N=e("dFDH"),I=e("BV1i"),K=e("BzsH"),T=e("02hT"),V=e("Q+lL"),E=e("vvyD");e.d(n,"LoginModuleNgFactory",function(){return U});var U=a.qb(t,[],function(l){return a.Cb([a.Db(512,a.j,a.bb,[[8,[o.a,D,P.a,P.b]],[3,a.j],a.w]),a.Db(4608,u.d,u.d,[]),a.Db(4608,u.r,u.r,[]),a.Db(4608,k.m,k.l,[a.t,[2,k.A]]),a.Db(4608,x.c,x.c,[]),a.Db(4608,b.b,b.b,[]),a.Db(4608,L.b,L.b,[L.h,L.d,a.j,L.g,L.e,a.q,a.y,k.d,d.b,[2,k.g]]),a.Db(5120,L.i,L.j,[L.b]),a.Db(1073742336,C.o,C.o,[[2,C.t],[2,C.k]]),a.Db(1073742336,M,M,[]),a.Db(1073742336,u.q,u.q,[]),a.Db(1073742336,u.o,u.o,[]),a.Db(1073742336,u.g,u.g,[]),a.Db(1073742336,k.c,k.c,[]),a.Db(1073742336,c.b,c.b,[]),a.Db(1073742336,p.c,p.c,[]),a.Db(1073742336,x.d,x.d,[]),a.Db(1073742336,r.e,r.e,[]),a.Db(1073742336,g.b,g.b,[]),a.Db(1073742336,d.a,d.a,[]),a.Db(1073742336,b.j,b.j,[[2,b.c],[2,O.f]]),a.Db(1073742336,b.s,b.s,[]),a.Db(1073742336,f.c,f.c,[]),a.Db(1073742336,S.c,S.c,[]),a.Db(1073742336,j.f,j.f,[]),a.Db(1073742336,q.c,q.c,[]),a.Db(1073742336,L.f,L.f,[]),a.Db(1073742336,N.e,N.e,[]),a.Db(1073742336,I.h,I.h,[]),a.Db(1073742336,K.b,K.b,[]),a.Db(1073742336,b.k,b.k,[]),a.Db(1073742336,b.q,b.q,[]),a.Db(1073742336,T.a,T.a,[]),a.Db(1073742336,V.c,V.c,[]),a.Db(1073742336,E.a,E.a,[]),a.Db(1073742336,t,t,[]),a.Db(1024,C.i,function(){return[[{path:"",component:h}]]},[])])})}}]);