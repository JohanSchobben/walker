(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{fZCs:function(t,e,r){"use strict";r.d(e,"a",function(){return h});var a=r("lJxs"),s=r("IzEk"),i=r("eIep"),n=r("q2N8"),o=r("oCjk");class c{constructor(){this._walks=[],this._weeks=2}static fromObject(t){const e=new c;return e.id=t.id,e.startDate=new Date(t.startDate),e.weeks=t.weeks,t.walks.forEach(t=>{const r=new n.a(t.startTime);r.duration=t.duration,e.addWalk(r)}),e}get id(){return this._id}set id(t){this._id=t}get weeks(){return this._weeks}set weeks(t){this._weeks=t}get startDate(){return this._startDate}set startDate(t){this._startDate=t}get endDate(){const t=7*this._weeks,e=new Date(this._startDate);return e.setDate(e.getDate()+t),e}get walks(){return this._walks}set goal(t){this._goal=t}addWalk(t){this._walks.push(t)}get duration(){return this._walks.map(t=>t.duration).reduce((t,e)=>t+e,0)}get goal(){return this._goal}get goalAchieved(){const t=this.walks.length,e=this.walks.reduce((t,e)=>t+e.duration,0);return t>=this._goal.times&&e>=this._goal.minutes}getSprintByDay(t){const e=new Date(this.startDate);return e.setDate(e.getDate()+t),this.walks.filter(t=>Object(o.a)(e,t.startTime))}toObject(){var t;return{id:this._id,startDate:this._startDate,weeks:this._weeks,walks:this._walks.map(t=>t.toObject()),goal:null===(t=this._goal)||void 0===t?void 0:t.toObject()}}}var u=r("fXoL"),d=r("c92J");let p=(()=>{class t{constructor(t){this.databaseService=t}getSprints(){return this.databaseService.read("sprints").pipe(Object(a.a)(t=>t.map(t=>c.fromObject(t))))}createSprint(t){return t.id="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=16*Math.random()|0;return("x"==t?e:3&e|8).toString(16)}),this.databaseService.create("sprints",t.toObject()).pipe(Object(a.a)(e=>t))}updateSprint(t){return this.databaseService.update("sprints",t.toObject()).pipe(Object(a.a)(e=>t))}}return t.\u0275fac=function(e){return new(e||t)(u.Ub(d.a))},t.\u0275prov=u.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),h=(()=>{class t{constructor(t){this.sprintDatbaseService=t}getCurrentSprint(){return this.sprintDatbaseService.getSprints().pipe(Object(a.a)(t=>t.find(t=>{const e=Date.now();return t.startDate.getTime()<e&&t.endDate.getTime()>e})),Object(s.a)(1))}createSprint(t){const e=new c;return e.startDate=new Date,e.goal=t,this.sprintDatbaseService.createSprint(e)}updateSprint(t){this.sprintDatbaseService.updateSprint(t).pipe(Object(a.a)(e=>t))}addWalkToSprint(t,e){return e?(e.addWalk(t),this.sprintDatbaseService.updateSprint(e)):this.getCurrentSprint().pipe(Object(i.a)(e=>(e.addWalk(t),this.sprintDatbaseService.updateSprint(e))))}}return t.\u0275fac=function(e){return new(e||t)(u.Ub(p))},t.\u0275prov=u.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},oCjk:function(t,e,r){"use strict";r.d(e,"b",function(){return s}),r.d(e,"a",function(){return i});var a=r("HDdC");const s=()=>t=>{let e=1;return new a.a(r=>{t.subscribe(t=>{r.next(e++)})})},i=(t,e)=>t.getDate()===e.getDate()&&t.getMonth()===e.getMonth()&&t.getFullYear()===e.getFullYear()},q2N8:function(t,e,r){"use strict";r.d(e,"a",function(){return a});class a{constructor(t){this._startTime=t}get startTime(){return this._startTime}set startTime(t){this._startTime=t}get duration(){return this._duration}set duration(t){this._duration=t}get endTime(){const t=new Date(this._startTime);return t.setSeconds(t.getSeconds()+this._duration),t}toObject(){return{startTime:this._startTime,duration:this._duration}}}}}]);