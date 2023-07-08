"use strict";!function(){let e,o,t,r,a;a=isDarkStyle?(e=config.colors_dark.cardColor,o=config.colors_dark.textMuted,t=config.colors_dark.headingColor,r=config.colors_dark.borderColor,"#3b3e59"):(e=config.colors.cardColor,o=config.colors.textMuted,t=config.colors.headingColor,r=config.colors.borderColor,"#f4f4f6");var s={donut:{series1:config.colors.warning,series2:"#fdb528cc",series3:"#fdb52899",series4:"#fdb52866",series5:config.colors_label.warning}},n=document.querySelector("#totalTransactionChart"),i={chart:{height:218,stacked:!0,type:"bar",parentHeightOffset:0,toolbar:{show:!1}},tooltip:{y:{formatter:function(e){return Math.abs(e)}}},legend:{show:!1},dataLabels:{enabled:!1},colors:[config.colors.primary,config.colors.success],grid:{borderColor:r,xaxis:{lines:{show:!0}},yaxis:{lines:{show:!1}},padding:{top:-5,bottom:-25}},states:{hover:{filter:{type:"none"}},active:{filter:{type:"none"}}},plotOptions:{bar:{borderRadius:5,barHeight:"30%",horizontal:!0,endingShape:"flat",startingShape:"rounded"}},xaxis:{position:"top",axisTicks:{show:!1},axisBorder:{show:!1},categories:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],labels:{formatter:function(e){return Math.abs(Math.round(e))},style:{colors:o,fontFamily:"Inter"}}},yaxis:{labels:{show:!1}},series:[{name:"Last Week",data:[83,153,213,279,213,153,83]},{name:"This Week",data:[-84,-156,-216,-282,-216,-156,-84]}]},n=(null!==n&&new ApexCharts(n,i).render(),document.querySelector("#performanceOverviewChart")),i={chart:{height:218,type:"line",parentHeightOffset:0,toolbar:{show:!1}},series:[{data:[7,65,40,7,40,80,45,65,65]}],stroke:{curve:"stepline"},tooltip:{enabled:!1},colors:[config.colors.warning],grid:{yaxis:{lines:{show:!1}}},xaxis:{labels:{show:!1},axisTicks:{show:!1},axisBorder:{show:!1}},yaxis:{labels:{show:!1}},responsive:[{breakpoint:1200,options:{chart:{height:268}}}]},n=(null!==n&&new ApexCharts(n,i).render(),document.querySelector("#visitsByDayChart")),i={chart:{height:240,type:"bar",parentHeightOffset:0,toolbar:{show:!1}},plotOptions:{bar:{borderRadius:8,distributed:!0,columnWidth:"55%",endingShape:"rounded",startingShape:"rounded"}},series:[{data:[38,55,48,65,80,38,48]}],tooltip:{enabled:!1},legend:{show:!1},dataLabels:{enabled:!1},colors:[config.colors_label.primary,config.colors.primary,config.colors_label.primary,config.colors.primary,config.colors.primary,config.colors_label.primary,config.colors_label.primary],grid:{show:!1,padding:{top:-15,left:-7,right:-4}},states:{hover:{filter:{type:"none"}},active:{filter:{type:"none"}}},xaxis:{axisTicks:{show:!1},axisBorder:{show:!1},categories:["S","M","T","W","T","F","S"],labels:{style:{colors:o}}},yaxis:{show:!1},responsive:[{breakpoint:1025,options:{chart:{height:210}}}]},n=(null!==n&&new ApexCharts(n,i).render(),document.querySelector("#organicSessionsChart")),i={chart:{height:355,type:"donut",parentHeightOffset:0},labels:["USA","India","Canada","Japan","France"],tooltip:{enabled:!1},dataLabels:{enabled:!1},stroke:{width:3,lineCap:"round",colors:[e]},states:{hover:{filter:{type:"none"}},active:{filter:{type:"none"}}},plotOptions:{pie:{endAngle:130,startAngle:-130,customScale:.9,donut:{size:"83%",labels:{show:!0,name:{offsetY:25,fontSize:"50rem",fontFamily:"Inter",color:o},value:{offsetY:-15,fontWeight:500,fontSize:"2.125rem",fontFamily:"Inter",color:t,formatter:function(e){return parseInt(e)+"K"}},total:{show:!0,label:"2022",fontSize:"1rem",fontFamily:"Inter",color:o,formatter:function(e){return"89K"}}}}}},series:[13,18,18,24,16],tooltip:{enabled:!1},legend:{position:"bottom",fontFamily:"Inter",fontSize:"15px",markers:{offsetX:-5},itemMargin:{horizontal:10},labels:{colors:t}},colors:[s.donut.series1,s.donut.series2,s.donut.series3,s.donut.series4,s.donut.series5]},s=(null!==n&&new ApexCharts(n,i).render(),document.querySelector("#weeklySalesChart")),n={chart:{stacked:!0,type:"line",height:235,parentHeightOffset:0,toolbar:{show:!1}},tooltip:{enabled:!1},series:[{type:"column",name:"Earning",data:[90,52,67,45,75,55,48]},{type:"column",name:"Expense",data:[-53,-29,-67,-84,-60,-40,-77]},{type:"line",name:"Expense",data:[73,20,50,-20,58,15,31]}],plotOptions:{bar:{borderRadius:8,columnWidth:"57%",endingShape:"flat",startingShape:"rounded"}},markers:{size:4,strokeWidth:3,fillOpacity:1,strokeOpacity:1,colors:[e],strokeColors:config.colors.warning},stroke:{curve:"smooth",width:[0,0,3],colors:[config.colors.warning]},dataLabels:{enabled:!1},legend:{show:!1},colors:[config.colors.primary,config.colors_label.primary],grid:{yaxis:{lines:{show:!1}},padding:{top:-28,left:-6,right:-8,bottom:-5}},xaxis:{axisTicks:{show:!1},axisBorder:{show:!1},categories:["Jan","Feb","Mar","Apr","May","Jun","Jul"],labels:{style:{colors:o}}},yaxis:{max:100,min:-100,show:!1},states:{hover:{filter:{type:"none"}},active:{filter:{type:"none"}}}};null!==s&&new ApexCharts(s,n).render();const l=document.querySelector("#projectTimelineChart"),c=["Development Apps","UI Design","IOS Application","Web App Wireframing","Prototyping"],d=["Development","UI Design","Application","App Wireframing","Prototyping"],h={chart:{height:230,type:"rangeBar",parentHeightOffset:0,toolbar:{show:!1}},series:[{data:[{x:"Catherine",y:[new Date((new Date).getFullYear()+"-01-01").getTime(),new Date((new Date).getFullYear()+"-05-02").getTime()],fillColor:config.colors.primary},{x:"Janelle",y:[new Date((new Date).getFullYear()+"-02-18").getTime(),new Date((new Date).getFullYear()+"-05-30").getTime()],fillColor:config.colors.success},{x:"Wellington",y:[new Date((new Date).getFullYear()+"-02-07").getTime(),new Date((new Date).getFullYear()+"-05-31").getTime()],fillColor:config.colors.secondary},{x:"Blake",y:[new Date((new Date).getFullYear()+"-01-14").getTime(),new Date((new Date).getFullYear()+"-06-30").getTime()],fillColor:config.colors.info},{x:"Quinn",y:[new Date((new Date).getFullYear()+"-04-01").getTime(),new Date((new Date).getFullYear()+"-07-31").getTime()],fillColor:config.colors.warning}]}],tooltip:{enabled:!1},plotOptions:{bar:{horizontal:!0,borderRadius:15,distributed:!0,endingShape:"rounded",startingShape:"rounded",dataLabels:{hideOverflowingLabels:!1}}},stroke:{width:2,colors:[e]},dataLabels:{enabled:!0,style:{fontWeight:400},formatter:function(e,o){return c[o.dataPointIndex]}},states:{hover:{filter:{type:"none"}},active:{filter:{type:"none"}}},legend:{show:!1},grid:{strokeDashArray:6,borderColor:r,xaxis:{lines:{show:!0}},yaxis:{lines:{show:!1}},padding:{top:-32,left:15,right:18,bottom:4}},xaxis:{type:"datetime",axisTicks:{show:!1},axisBorder:{show:!1},labels:{style:{colors:o},datetimeFormatter:{year:"MMM",month:"MMM"}}},yaxis:{labels:{show:!0,align:"left",style:{fontSize:"0.875rem",colors:t}}},responsive:[{breakpoint:446,options:{dataLabels:{formatter:function(e,o){return d[o.dataPointIndex]}}}}]};null!==l&&new ApexCharts(l,h).render();i=document.querySelector("#monthlyBudgetChart"),s={chart:{height:179,type:"area",parentHeightOffset:0,offsetY:-8,toolbar:{show:!1}},tooltip:{enabled:!1},dataLabels:{enabled:!1},stroke:{width:5,curve:"smooth"},series:[{data:[0,85,25,125,90,250,200,350]}],grid:{show:!1,padding:{left:10,top:0,right:12}},fill:{type:"gradient",gradient:{opacityTo:.7,opacityFrom:.5,shadeIntensity:1,stops:[0,90,100],colorStops:[[{offset:0,opacity:.6,color:config.colors.success},{offset:100,opacity:.1,color:e}]]}},theme:{monochrome:{enabled:!0,shadeTo:"light",shadeIntensity:1,color:config.colors.success}},xaxis:{type:"numeric",labels:{show:!1},axisTicks:{show:!1},axisBorder:{show:!1}},yaxis:{show:!1},markers:{size:1,offsetY:1,offsetX:-5,strokeWidth:4,strokeOpacity:1,colors:["transparent"],strokeColors:"transparent",discrete:[{size:7,seriesIndex:0,dataPointIndex:7,strokeColor:config.colors.success,fillColor:e}]},responsive:[{breakpoint:1200,options:{chart:{height:255}}}]},null!==i&&new ApexCharts(i,s).render(),n=document.querySelector("#performanceChart"),i={chart:{height:300,type:"radar",toolbar:{show:!1}},legend:{show:!0,markers:{offsetX:-2},itemMargin:{horizontal:10},fontFamily:"Inter",fontSize:"15px",labels:{colors:o,useSeriesColors:!1}},plotOptions:{radar:{polygons:{strokeColors:r,connectorColors:r}}},yaxis:{show:!1},series:[{name:"Income",data:[70,90,80,95,75,90]},{name:"Net Worth",data:[110,72,62,65,100,75]}],colors:[config.colors.warning,config.colors.primary],xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun"],labels:{show:!0,style:{colors:[o,o,o,o,o,o],fontSize:"15px",fontFamily:"Inter"}}},fill:{opacity:[1,.9]},stroke:{show:!1,width:0},markers:{size:0},grid:{show:!1,padding:{top:0,bottom:-10}}},null!==n&&new ApexCharts(n,i).render(),s=document.querySelector("#externalLinksChart"),n={chart:{type:"bar",height:232,parentHeightOffset:0,stacked:!0,toolbar:{show:!1}},series:[{name:"Google Analytics",data:[155,135,320,100,150,335,160]},{name:"Facebook Ads",data:[110,235,125,230,215,115,200]}],plotOptions:{bar:{horizontal:!1,columnWidth:"40%",borderRadius:10,startingShape:"rounded",endingShape:"rounded"}},dataLabels:{enabled:!1},tooltip:{enabled:!1},stroke:{curve:"smooth",width:6,lineCap:"round",colors:[e]},legend:{show:!1},colors:[config.colors.primary,config.colors.secondary],grid:{strokeDashArray:10,borderColor:r,padding:{top:-12,left:-4,right:-5,bottom:5}},xaxis:{categories:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],labels:{show:!1},axisBorder:{show:!1},axisTicks:{show:!1}},yaxis:{show:!1},states:{hover:{filter:{type:"none"}},active:{filter:{type:"none"}}},responsive:[{breakpoint:1441,options:{plotOptions:{bar:{columnWidth:"50%"}}}},{breakpoint:1025,options:{plotOptions:{bar:{columnWidth:"45%"}}}},{breakpoint:577,options:{plotOptions:{bar:{columnWidth:"35%"}}}},{breakpoint:426,options:{plotOptions:{bar:{columnWidth:"50%"}}}}]},null!==s&&new ApexCharts(s,n).render(),i=document.querySelector("#salesCountryChart"),s={chart:{type:"bar",height:295,parentHeightOffset:0,toolbar:{show:!1}},series:[{name:"Sales",data:[17165,13850,12375,9567,7880]}],plotOptions:{bar:{borderRadius:8,barHeight:"60%",horizontal:!0,distributed:!0,startingShape:"rounded",dataLabels:{position:"bottom"}}},dataLabels:{enabled:!0,textAnchor:"start",offsetY:8,offsetX:11,style:{fontWeight:600,fontSize:"0.9375rem",fontFamily:"Inter"}},tooltip:{enabled:!1},legend:{show:!1},colors:[config.colors.primary,config.colors.success,config.colors.warning,config.colors.info,config.colors.danger],grid:{strokeDashArray:8,borderColor:r,xaxis:{lines:{show:!0}},yaxis:{lines:{show:!1}},padding:{top:-18,left:21,right:33,bottom:10}},xaxis:{categories:["US","IN","JA","CA","AU"],labels:{formatter:function(e){return Number(e/1e3)+"K"},style:{fontSize:"0.9375rem",colors:o,fontFamily:"Inter"}},axisBorder:{show:!1},axisTicks:{show:!1}},yaxis:{labels:{style:{fontWeight:600,fontSize:"0.9375rem",colors:t,fontFamily:"Inter"}}},states:{hover:{filter:{type:"none"}},active:{filter:{type:"none"}}}},null!==i&&new ApexCharts(i,s).render(),n=document.querySelector("#weeklyOverviewChart"),i={chart:{type:"line",height:178,offsetY:-9,offsetX:-16,parentHeightOffset:0,toolbar:{show:!1}},series:[{name:"Sales",type:"column",data:[83,68,56,65,65,50,39]},{name:"Sales",type:"line",data:[63,38,31,45,46,27,18]}],plotOptions:{bar:{borderRadius:9,columnWidth:"50%",endingShape:"rounded",startingShape:"rounded",colors:{ranges:[{to:50,from:40,color:config.colors.primary}]}}},markers:{size:3.5,strokeWidth:2,fillOpacity:1,strokeOpacity:1,colors:[e],strokeColors:config.colors.primary},stroke:{width:[0,2],colors:[config.colors.primary]},dataLabels:{enabled:!1},legend:{show:!1},colors:[a],grid:{strokeDashArray:10,borderColor:r,padding:{bottom:-10}},xaxis:{categories:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],tickPlacement:"on",labels:{show:!1},axisBorder:{show:!1},axisTicks:{show:!1}},yaxis:{min:0,max:90,show:!0,tickAmount:3,labels:{formatter:function(e){return parseInt(e)+"K"},style:{fontSize:"0.75rem",fontFamily:"Inter",colors:o}}},states:{hover:{filter:{type:"none"}},active:{filter:{type:"none"}}}};null!==n&&new ApexCharts(n,i).render()}();