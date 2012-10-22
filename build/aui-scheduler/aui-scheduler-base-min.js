AUI.add("aui-scheduler-base",function(aP){var aw=aP.Lang,d=aw.isArray,bf=aw.isBoolean,k=aw.isDate,ba=aw.isFunction,ah=aw.isNumber,T=aw.isObject,bm=aw.isString,a5=aP.ColorUtil,p=aP.DataType.DateMath,aI=aP.WidgetStdMod,aJ=":",m=".",ak="",F="&ndash;",by=" ",x=function(A){return A instanceof aP.ModelList;},E=function(A){return A instanceof aP.SchedulerView;},i="%H:%M",Z="%l",bw="%M",ax=function(A){var bA=[Z];if(A.getMinutes()>0){bA.push(aJ);bA.push(bw);}if(A.getHours()>=12){bA.push("p");}return bA.join(ak);},aX="data-view-name",D="scheduler-base",V="scheduler-calendar",aK="scheduler-view",ac="activeView",J="all",Y="allDay",ad="borderColor",aU="borderColorRGB",aO="borderStyle",bt="borderWidth",aQ="button",bk="clearfix",a6="color",aZ="colorBrightnessFactor",bh="colorSaturationFactor",aN="content",ab="controls",a2="controlsNode",a0="date",bc="day",I="disabled",aV="endDate",aq="eventRecorder",bv="hd",K="header",bi="headerNode",u="helper",aD="hidden",U="hsbColor",aC="icon",r="iconNextNode",a9="iconPrevNode",ag="icons",at="inherit",a1="isoTime",bs="locale",bq="meeting",t="name",ay="nav",ap="navNode",f="navigationDateFormatter",v="next",h="nextDate",y="node",au="noscroll",aj="pallete",bg="prev",a3="prevDate",bb="radio",am="reminder",bu="rendered",bl="repeated",ao="scheduler",aE="scheduler-event",bp="scrollable",a="short",bo="startDate",aa="strings",aY="title",j="titleDateFormat",l="today",aR="todayNode",H="triggerNode",S="view",X="viewDateNode",ar="viewStack",bx="views",aH="viewsNode",aA="visible",R=aP.getClassName,aS=R(u,bk),q=R(aC),a7=R(D,ab),o=R(D,bv),aG=R(D,aC,v),W=R(D,aC,bg),bn=R(D,ay),P=R(D,l),aL=R(D,S),n=R(D,S,ak),N=R(D,S,a0),C=R(aK,au),c=R(aK,bp),ai="yui3-button-selected",B=R(D,bx),z=R(aE),Q=R(aE,J,bc),aW=R(aE,aN),bj=R(aE,I),L=R(aE,aD),G=R(aE,aC,I),O=R(aE,aC,bq),aB=R(aE,aC,am),e=R(aE,aC,bl),br=R(aE,ag),b=R(aE,bq),w=R(aE,am),aF=R(aE,bl),av=R(aE,a),M=R(aE,aY),a4='<div class="'+a7+'"></div>',g='<div class="'+o+'"></div>',bz='<button type="button" class="'+[q,aG].join(by)+' yui3-button">Next</button>',aT='<button type="button" class="'+[q,W].join(by)+' yui3-button">Prev</button>',s='<div class="'+bn+'"></div>',az='<button type="button" class="'+P+' yui3-button">{today}</button>',be='<button type="button" class="'+[aL,n].join(by)+'{name}" data-view-name="{name}">{label}</button>',aM='<div class="'+N+'"></div>',al='<div class="'+B+'"></div>';var ae=aP.Component.create({NAME:aE,ATTRS:{allDay:{setter:aP.DataType.Boolean.parse,value:false},borderStyle:{value:"solid",validator:bm},borderWidth:{value:"1px",validator:bm},colorBrightnessFactor:{value:0.75,validator:ah},colorSaturationFactor:{value:1.5,validator:ah},content:{validator:bm},color:{lazyAdd:false,setter:"_setColor",value:"#D96666",validator:bm},titleDateFormat:{getter:"_getTitleDateFormat",value:function(){var A=this,bA=A.get(ao),bB=bA&&bA.get(ac).get(a1),bC={endDate:F+by+i,startDate:i};if(!bB){bC.endDate=F+by+ax(A.get(aV));bC.startDate=ax(A.get(bo));}if(A.getMinutesDuration()<=30){delete bC.endDate;}else{if(A.get(Y)){bC={};}}return bC;}},endDate:{setter:"_setDate",valueFn:function(){var A=p.clone(this.get(bo));A.setHours(A.getHours()+1);return A;}},eventClass:{valueFn:function(){return aP.SchedulerEvent;}},disabled:{value:false,validator:bf},meeting:{value:false,validator:bf},node:{valueFn:function(){return aP.NodeList.create(aP.Node.create(this.EVENT_NODE_TEMPLATE).setData(aE,this));}},reminder:{value:false,validator:bf},repeated:{value:false,validator:bf},scheduler:{lazyAdd:false,setter:"_setScheduler"},startDate:{setter:"_setDate",valueFn:function(){return new Date();}},visible:{value:true,validator:bf}},EXTENDS:aP.Model,PROPAGATE_ATTRS:[Y,bo,aV,aN,a6,aZ,bh,aO,bt,j,aA,I],prototype:{EVENT_NODE_TEMPLATE:'<div class="'+z+'">'+'<div class="'+M+'"></div>'+'<div class="'+aW+'"></div>'+'<div class="'+br+'">'+'<span class="'+[q,G].join(by)+'"></span>'+'<span class="'+[q,O].join(by)+'"></span>'+'<span class="'+[q,aB].join(by)+'"></span>'+'<span class="'+[q,e].join(by)+'"></span>'+"</div>"+"</div>",initializer:function(){var A=this;A.bindUI();A.syncUI();},bindUI:function(){var A=this;A.after({allDayChange:A._afterAllDayChange,colorChange:A._afterColorChange,disabledChange:A._afterDisabledChange,endDateChange:A._afterEndDateChange,meetingChange:A._afterMeetingChange,reminderChange:A._afterReminderChange,repeatedChange:A._afterRepeatedChange,visibleChange:A._afterVisibleChange});},syncUI:function(){var A=this;A._uiSetAllDay(A.get(Y));A._uiSetColor(A.get(a6));A._uiSetDisabled(A.get(I));A._uiSetEndDate(A.get(aV));A._uiSetMeeting(A.get(bq));A._uiSetReminder(A.get(am));A._uiSetRepeated(A.get(bl));A._uiSetVisible(A.get(aA));A.syncNodeTitleUI();A.syncNodeContentUI();},destroy:function(){var A=this;A.get(y).remove(true);},addPaddingNode:function(){var A=this;A.get(y).push(aP.Node.create(A.EVENT_NODE_TEMPLATE).setData(aE,A));A.syncUI();},clone:function(){var bA=this,A=null,bB=bA.get(ao);if(bB){A=new bB.eventModel();A.copyPropagateAttrValues(bA,null,{silent:true});}return A;},copyDates:function(bA,bB){var A=this;A.setAttrs({endDate:p.clone(bA.get(aV)),startDate:p.clone(bA.get(bo))},bB);},copyPropagateAttrValues:function(bB,bD,bC){var A=this,bA={};A.copyDates(bB,bC);aP.Array.each(A.constructor.PROPAGATE_ATTRS,function(bE){if(!((bD||{}).hasOwnProperty(bE))){var bF=bB.get(bE);if(!T(bF)){bA[bE]=bF;}}});A.setAttrs(bA,bC);},getBorderColor:function(){var A=this;return A[aU].hex;},getDaysDuration:function(){var A=this;return p.getDayOffset(A.get(aV),A.get(bo));},getHoursDuration:function(){var A=this;return p.getHoursOffset(A.get(aV),A.get(bo));},getMinutesDuration:function(){var A=this;return p.getMinutesOffset(A.get(aV),A.get(bo));},getSecondsDuration:function(){var A=this;return p.getSecondsOffset(A.get(aV),A.get(bo));},sameEndDate:function(bA){var A=this;return p.compare(A.get(aV),bA.get(aV));},sameStartDate:function(bA){var A=this;return p.compare(A.get(bo),bA.get(bo));},isAfter:function(bC){var bB=this;var bA=bB.get(bo);var A=bC.get(bo);return p.after(bA,A);},isBefore:function(bC){var bB=this;
var bA=bB.get(bo);var A=bC.get(bo);return p.before(bA,A);},intersects:function(bC){var bB=this;var bD=bB.get(aV);var bA=bB.get(bo);var A=bC.get(bo);return(bB.sameStartDate(bC)||p.between(A,bA,bD));},intersectHours:function(bB){var bA=this;var bD=bA.get(aV);var A=bA.get(bo);var bC=p.clone(A);p.copyHours(bC,bB.get(bo));return(p.compare(A,bC)||p.between(bC,A,bD));},isDayBoundaryEvent:function(){var A=this;return p.isDayBoundary(A.get(bo),A.get(aV));},isDayOverlapEvent:function(){var A=this;return p.isDayOverlap(A.get(bo),A.get(aV));},getClearEndDate:function(){var A=this;return p.safeClearTime(A.get(aV));},getClearStartDate:function(){var A=this;return p.safeClearTime(A.get(bo));},move:function(bB,bA){var A=this;var bC=A.getMinutesDuration();A.setAttrs({endDate:p.add(p.clone(bB),p.MINUTES,bC),startDate:bB},bA);},setContent:function(bA){var A=this;A.get(y).each(function(bC){var bB=bC.one(m+aW);bB.setContent(bA);});},setTitle:function(bA){var A=this;A.get(y).each(function(bB){var bC=bB.one(m+M);bC.setContent(bA);});},syncNodeContentUI:function(){var A=this;A.setContent(A.get(aN));},syncNodeTitleUI:function(){var bA=this,bC=bA.get(j),A=bA.get(bo),bB=bA.get(aV),bD=[];if(bC.startDate){bD.push(bA._formatDate(A,bC.startDate));}if(bC.endDate){bD.push(bA._formatDate(bB,bC.endDate));}bA.setTitle(bD.join(by));},split:function(){var A=this,bB=p.clone(A.get(bo)),bC=p.clone(A.get(aV));if(A.isDayOverlapEvent()&&!A.isDayBoundaryEvent()){var bA=p.clone(bB);bA.setHours(24,0,0,0);return[[bB,p.toMidnight(p.clone(bB))],[bA,p.clone(bC)]];}return[[bB,bC]];},_afterAllDayChange:function(bA){var A=this;A._uiSetAllDay(bA.newVal);},_afterColorChange:function(bA){var A=this;A._uiSetColor(bA.newVal);},_afterDisabledChange:function(bA){var A=this;A._uiSetDisabled(bA.newVal);},_afterEndDateChange:function(bA){var A=this;A._uiSetEndDate(bA.newVal);},_afterMeetingChange:function(bA){var A=this;A._uiSetMeeting(bA.newVal);},_afterReminderChange:function(bA){var A=this;A._uiSetReminder(bA.newVal);},_afterRepeatedChange:function(bA){var A=this;A._uiSetRepeated(bA.newVal);},_afterVisibleChange:function(bA){var A=this;A._uiSetVisible(bA.newVal);},_setColor:function(bA){var A=this;A[U]=a5.rgb2hsb(a5.getRGB(bA));A[ad]=aP.clone(A[U]);A[ad].b*=A.get(aZ);A[ad].s*=A.get(bh);A[aU]=a5.hsb2rgb(A[ad]);return bA;},_setDate:function(bA){var A=this;if(ah(bA)){bA=new Date(bA);}return bA;},_setScheduler:function(bB){var A=this;var bA=A.get(ao);if(bA){A.removeTarget(bA);}A.addTarget(bB);return bB;},_formatDate:function(bB,bC){var bA=this;var A=bA.get(bs);return aP.DataType.Date.format(bB,{format:bC,locale:A});},_getTitleDateFormat:function(bA){var A=this;if(bm(bA)){bA={endDate:bA,startDate:bA};}else{if(ba(bA)){bA=bA.call(A);}}return bA;},_uiSetAllDay:function(bA){var A=this;A.get(y).toggleClass(Q,!!bA);},_uiSetColor:function(bC){var A=this;var bB=A.get(y);var bD=A.getBorderColor();if(bB){var bA={borderWidth:A.get(bt),borderColor:bD,backgroundColor:bC,borderStyle:A.get(aO),color:at};bB.setStyles(bA);}},_uiSetDisabled:function(bA){var A=this;A.get(y).toggleClass(bj,!!bA);},_uiSetEndDate:function(bA){var A=this;A.get(y).toggleClass(av,A.getMinutesDuration()<=30);},_uiSetMeeting:function(bA){var A=this;A.get(y).toggleClass(b,!!bA);},_uiSetReminder:function(bA){var A=this;A.get(y).toggleClass(w,!!bA);},_uiSetRepeated:function(bA){var A=this;A.get(y).toggleClass(aF,!!bA);},_uiSetVisible:function(bA){var A=this;A.get(y).toggleClass(L,!bA);}}});aP.SchedulerEvent=ae;var a8=aP.Base.create(V,aP.ModelList,[],{model:aP.SchedulerEvent,initializer:function(){var A=this;A.after("colorChange",A._afterColorChange);A.after("disabledChange",A._afterDisabledChange);A.after("visibleChange",A._afterVisibleChange);A.after(["add","remove","reset"],A._afterEventsChange);A.on(["remove","reset"],A._onRemoveEvents);A._uiSetEvents(A.toArray());A._uiSetColor(A.get(a6));A._uiSetDisabled(A.get(I));A._uiSetVisible(A.get(aA));},_afterColorChange:function(bA){var A=this;A._uiSetColor(bA.newVal);},_afterDisabledChange:function(bA){var A=this;A._uiSetDisabled(bA.newVal);},_afterEventsChange:function(bA){var A=this;A._uiSetEvents(A.toArray());},_afterVisibleChange:function(bA){var A=this;A._uiSetVisible(bA.newVal);},_onRemoveEvents:function(bB){var A=this;var bA=A.get(ao);if(bA){bA.removeEvents(A);}},_propagateAttrs:function(bA,bB){var A=this;A.each(function(bC){bC.setAttrs(bA,bB);});},_uiSetColor:function(bA){var A=this;A._propagateAttrs({color:A.get(a6)});},_uiSetDisabled:function(bA){var A=this;A._propagateAttrs({disabled:bA});},_uiSetEvents:function(bB){var A=this;var bA=A.get(ao);A._propagateAttrs({color:A.get(a6),disabled:A.get(I),visible:A.get(aA)},{silent:true});if(bA){bA.addEvents(bB);bA.syncEventsUI();}},_uiSetVisible:function(bA){var A=this;A._propagateAttrs({visible:bA});}},{ATTRS:{color:{valueFn:function(){var bA=this;var bB=bA.get(aj);var A=Math.ceil(Math.random()*bB.length)-1;return bB[A];},validator:bm},disabled:{value:false,validator:bf},name:{value:"(no name)",validator:bm},pallete:{value:["#d96666","#e67399","#b373b3","#8c66d9","#668cb3","#668cd9","#59bfb3","#65ad89","#4cb052","#8cbf40","#bfbf4d","#e0c240","#f2a640","#e6804d","#be9494","#a992a9","#8997a5","#94a2be","#85aaa5","#a7a77d","#c4a883","#c7561e","#b5515d","#c244ab","#603f99","#536ca6","#3640ad","#3c995b","#5ca632","#7ec225","#a7b828","#cf9911","#d47f1e","#b56414","#914d14","#ab2671","#9643a5","#4585a3","#737373","#41a587","#d1bc36","#ad2d2d"],validator:d},scheduler:{},visible:{value:true,validator:bf}}});aP.SchedulerCalendar=a8;aP.SchedulerEvents=aP.Base.create("scheduler-events",aP.ModelList,[],{comparator:function(bA){var A=bA.get(bo),bB=bA.get(aV);return A+1/(bB-A);},model:aP.SchedulerEvent},{});var an=function(){};an.ATTRS={};aP.mix(an.prototype,{calendarModel:aP.SchedulerCalendar,eventModel:aP.SchedulerEvent,initializer:function(bA){var A=this;A._events=new aP.SchedulerEvents({after:{add:aP.bind(A._afterAddEvent,A)}});A.addEvents(bA.items||bA.events);},addEvents:function(bB){var A=this,bA=A._toSchedulerEvents(bB);
return A._events.add(bA);},flushEvents:function(){var A=this;A._events.each(function(bA){delete bA._filtered;});},getEvents:function(bB){var A=this,bA=A._events;bA.sort();if(bB){bA=bA.filter(bB);}else{bA=bA.toArray();}return bA;},getEventsByDay:function(bA,bB){var A=this;bA=p.safeClearTime(bA);return A.getEvents(function(bC){return p.compare(bC.getClearStartDate(),bA)||(bB&&p.compare(bC.getClearEndDate(),bA));});},getIntersectEvents:function(bA){var A=this;bA=p.safeClearTime(bA);return A.getEvents(function(bC){var bB=bC.getClearStartDate();var bD=bC.getClearEndDate();return(bC.get(aA)&&(p.compare(bA,bB)||p.compare(bA,bD)||p.between(bA,bB,bD)));});},removeEvents:function(bB){var A=this,bA=A._toSchedulerEvents(bB);return A._events.remove(bA);},_afterAddEvent:function(bA){var A=this;bA.model.set(ao,A);},_toSchedulerEvents:function(bA){var A=this,bB=[];if(x(bA)){bB=bA.toArray();}else{if(d(bA)){aP.Array.each(bA,function(bC){if(x(bC)){bB=bB.concat(bC.toArray());}else{bB.push(bC);}});}else{bB=bA;}}return bB;}});aP.SchedulerEventSupport=an;var af=aP.Component.create({NAME:D,ATTRS:{activeView:{validator:E},date:{value:new Date(),validator:k},eventRecorder:{setter:"_setEventRecorder"},strings:{value:{day:"Day",month:"Month",today:"Today",week:"Week",year:"Year"}},navigationDateFormatter:{value:function(bA){var A=this;return aP.DataType.Date.format(bA,{format:"%B %d, %Y",locale:A.get(bs)});},validator:ba},views:{setter:"_setViews",value:[]},viewDate:{getter:"_getViewDate",readOnly:true},firstDayOfWeek:{value:0,validator:ah},controlsNode:{valueFn:function(){return aP.Node.create(a4);}},viewDateNode:{valueFn:function(){return aP.Node.create(aM);}},headerNode:{valueFn:function(){return aP.Node.create(g);}},iconNextNode:{valueFn:function(){return aP.Node.create(bz);}},iconPrevNode:{valueFn:function(){return aP.Node.create(aT);}},navNode:{valueFn:function(){return aP.Node.create(s);}},todayNode:{valueFn:function(){return aP.Node.create(this._processTemplate(az));}},viewsNode:{valueFn:function(){return aP.Node.create(al);}}},HTML_PARSER:{controlsNode:m+a7,viewDateNode:m+N,headerNode:m+o,iconNextNode:m+aG,iconPrevNode:m+W,navNode:m+bn,todayNode:m+P,viewsNode:m+B},UI_ATTRS:[a0,ac],AUGMENTS:[aP.SchedulerEventSupport,aP.WidgetStdMod],prototype:{viewStack:null,initializer:function(){var A=this;A[ar]={};A[a2]=A.get(a2);A[X]=A.get(X);A[K]=A.get(bi);A[r]=A.get(r);A[a9]=A.get(a9);A[ap]=A.get(ap);A[aR]=A.get(aR);A[aH]=A.get(aH);A.after({activeViewChange:A._afterActiveViewChange,render:A._afterRender});},bindUI:function(){var A=this;A._bindDelegate();},syncUI:function(){var A=this;A.syncStdContent();},getViewByName:function(bA){var A=this;return A[ar][bA];},getStrings:function(){var A=this;return A.get(aa);},getString:function(bA){var A=this;return A.getStrings()[bA];},renderView:function(bA){var A=this;if(bA){bA.show();if(!bA.get(bu)){if(!A.bodyNode){A.setStdModContent(aI.BODY,ak);}bA.render(A.bodyNode);}}},plotViewEvents:function(bA){var A=this;bA.plotEvents(A.getEvents());},syncEventsUI:function(){var A=this,bA=A.get(ac);if(bA){A.plotViewEvents(bA);}},renderButtonGroup:function(){var A=this;A.buttonGroup=new aP.ButtonGroup({srcNode:A[aH],type:bb,on:{selectionChange:aP.bind(A._onButtonGroupSelectionChange,A)}}).render();},syncStdContent:function(){var A=this;var bA=A.get(bx);A[ap].append(A[a9]);A[ap].append(A[r]);A[a2].append(A[aR]);A[a2].append(A[ap]);A[a2].append(A[X]);aP.Array.each(bA,function(bB){A[aH].append(A._createViewTriggerNode(bB));});A[K].append(A[a2]);A[K].append(A[aH]);A[K].addClass(aS);A.setStdModContent(aI.HEADER,A[K].getDOM());},_afterActiveViewChange:function(bC){var bA=this;if(bA.get(bu)){var bB=bC.newVal;var A=bC.prevVal;if(A){A.hide();}bA.renderView(bB);var bD=bA.get(aq);if(bD){bD.hideOverlay();}bA._uiSetDate(bA.get(a0));}},_afterRender:function(bB){var A=this,bA=A.get(ac);A.renderView(bA);A.renderButtonGroup();A._uiSetDate(A.get(a0));A._uiSetActiveView(bA);},_bindDelegate:function(){var A=this;A[a2].delegate("click",A._onClickPrevIcon,m+W,A);A[a2].delegate("click",A._onClickNextIcon,m+aG,A);A[a2].delegate("click",A._onClickToday,m+P,A);},_createViewTriggerNode:function(bA){var A=this;if(!bA.get(H)){var bB=bA.get(t);bA.set(H,aP.Node.create(aw.sub(be,{name:bB,label:(A.getString(bB)||bB)})));}return bA.get(H);},_getViewDate:function(){var A=this,bA=A.get(a0),bB=A.get(ac);if(bB){bA=bB.getAdjustedViewDate(bA);}return bA;},_onClickToday:function(bB){var A=this,bA=A.get(ac);if(bA){A.set(a0,bA.getToday());}bB.preventDefault();},_onClickNextIcon:function(bB){var A=this,bA=A.get(ac);if(bA){A.set(a0,bA.get(h));}bB.preventDefault();},_onClickPrevIcon:function(bB){var A=this,bA=A.get(ac);if(bA){A.set(a0,bA.get(a3));}bB.preventDefault();},_onButtonGroupSelectionChange:function(bA){var A=this,bB=bA.originEvent.target.attr(aX);A.set(ac,A.getViewByName(bB));bA.preventDefault();},_processTemplate:function(bA){var A=this;return aw.sub(bA,A.getStrings());},_setEventRecorder:function(bA){var A=this;if(bA){bA.setAttrs({scheduler:A},{silent:true});}},_setViews:function(bB){var A=this;var bA=[];aP.Array.each(bB,function(bC){if(E(bC)&&!bC.get(bu)){bC.setAttrs({scheduler:A});bA.push(bC);A[ar][bC.get(t)]=bC;}});if(!A.get(ac)){A.set(ac,bB[0]);}return bA;},_uiSetActiveView:function(bC){var A=this;if(bC){var bB=bC.get(t),bA=A[aH].one(m+n+bB);if(bA){A[aH].all(aQ).removeClass(ai);bA.addClass(ai);}}},_uiSetDate:function(bD){var bA=this;var bC=bA.get(f);var A=bC.call(bA,bD);if(bA.get(bu)){var bB=bA.get(ac);if(bB){bB._uiSetDate(bD);bC=bB.get(f);A=bC.call(bB,bD);}bA[X].html(A);bA.syncEventsUI();}}}});aP.Scheduler=af;var bd=aP.Component.create({NAME:aK,AUGMENTS:[aP.WidgetStdMod],ATTRS:{bodyContent:{value:ak},eventClass:{valueFn:function(){return aP.SchedulerEvent;}},filterFn:{validator:ba,value:function(A){return true;}},height:{value:600},isoTime:{value:false,validator:bf},name:{value:ak,validator:bm},navigationDateFormatter:{value:function(bA){var A=this;var bB=A.get(ao);return aP.DataType.Date.format(bA,{format:"%A, %d %B, %Y",locale:bB.get(bs)});
},validator:ba},nextDate:{getter:"getNextDate",readOnly:true},prevDate:{getter:"getPrevDate",readOnly:true},scheduler:{lazyAdd:false,setter:"_setScheduler"},scrollable:{value:true,validator:bf},triggerNode:{setter:aP.one},visible:{value:false}},BIND_UI_ATTRS:[bp],prototype:{initializer:function(){var A=this;A.after("render",A._afterRender);},syncUI:function(){var A=this;A.syncStdContent();},getAdjustedViewDate:function(bA){var A=this;return bA;},flushViewCache:function(){},getNextDate:function(){},getPrevDate:function(){},getToday:function(){return p.clearTime(new Date());},limitDate:function(bA,bB){var A=this;if(p.after(bA,bB)){bA=p.clone(bB);}return bA;},plotEvents:function(){},syncStdContent:function(){},syncEventUI:function(A){},_uiSetDate:function(A){},_afterRender:function(bB){var A=this;var bA=A.get(ao);A._uiSetScrollable(A.get(bp));},_setScheduler:function(bB){var A=this;var bA=A.get(ao);if(bA){A.removeTarget(bA);}if(bB){A.addTarget(bB);bB.after(["*:add","*:remove","*:reset"],aP.bind(A.flushViewCache,A));}return bB;},_uiSetScrollable:function(bB){var A=this;var bA=A.bodyNode;if(bA){bA.toggleClass(c,bB);bA.toggleClass(C,!bB);}}}});aP.SchedulerView=bd;},"@VERSION@",{skinnable:true,requires:["aui-base","aui-color-util","aui-datatype","button-group","model","model-list","widget-stdmod"]});