/**
 * @author Rishi Iyengar
 */
	// 3. In this function, I input the data for my first chart (right-most on the page) and render the chart
function loadData(){
	//4. Create a variable to pull my data from an array of arrays. Since I have a limited amount of static data,
	//	I will input it directly instead of using a Google Fusion Table (although that is also an option)
	var myDataTable = google.visualization.arrayToDataTable([
          ['Year', 'Bus', 'Subway', 'Metro North', 'LIRR'],
          ['2003',29.25557763,43.84008752,11.59076715,15.31356771],
		  ['2004',29.00011864,43.83465724,11.65474638,15.51047774],
		  ['2005',29.13643081,44.02838186,11.53257946,15.30260787],
		  ['2006',33.70446085,40.50104599,11.20629965,14.58819351],
		  ['2007',34.35506194,40.84905432,10.8366438,13.95923994],
		  ['2008',35.26078283,40.74094156,10.74733518,13.25094043],
		  ['2009',34.64132932,41.04185582,10.63491458,13.68190029],
		  ['2010',34.90945062,41.01951758,10.89628716,13.17474464],
		  ['2011',34.77571048,41.76469012,10.78634916,12.67325024],
		  ['2012',34.11029491,42.18312909,10.59821716,13.10835884]
        ]);

	// 5. Now I create a Column Chart using the google visualization library, and direct it to the div I created for it
	var myChart = new google.visualization.ColumnChart(document.getElementById("expenseDiv"));
	// 6. These are my chart options, where I give my chart a title, a width within my container div and make a stacked chart
	//	I also customized the colors of the bars, displayed every 3 years on the X-axis, and removed the default legend that Google Viz provides
	var options = {
          title: "Share of Operating Expenses", width: 300, height: 400, isStacked:true, hAxis:{showTextEvery:3},
          colors:['#FF405B', '#0cc0c9', '#00DE7C', '#399499'], bar:{groupWidth:'90%'}, legend:{position: 'none'}
       	}
	// 7. And finally, I render the chart on the page
	myChart.draw(myDataTable, options);
	// 8. Once this is done, I create a function for my second chart and repeat the same process from steps 3. through 7. 
	// 	With different data and function names, of course. 
	loadData2();

}
	//9. This function renders my second chart (middle chart on the page)
function loadData2(){

	var myDataTable = google.visualization.arrayToDataTable([
          ['Year', 'Bus', 'Subway', 'Metro North', 'LIRR'],
          ['2003',22.32821339,53.08445033,12.07596453,12.51137174],
		  ['2004',22.07328325,52.98918513,11.87944089,13.05809073],
		  ['2005',21.84814134,53.47576266,12.31722856,12.35886743],
		  ['2006',24.125405,51.71172508,12.0508146,12.11205532],
		  ['2007',23.47373444,52.05649539,12.19499012,12.27478005],
		  ['2008',23.07714581,52.41515564,12.23816551,12.26953305],
		  ['2009',23.14594932,52.98314451,11.79045229,12.08045388],
		  ['2010',22.76286923,53.71926944,11.79943626,11.71842506],
		  ['2011',21.43681495,55.243078,11.61734308,11.70276397],
		  ['2012',21.20332513,55.24652262,11.83674884,11.71340341]
		  
        ]);

	
	var myChart = new google.visualization.ColumnChart(document.getElementById("revenueDiv"));

	var options = {
          title: "Share of Fare Revenues", width: 300, height: 400, isStacked:true, hAxis:{showTextEvery:3},
          colors:['#FF405B', '#0cc0c9', '#00DE7C', '#399499'], bar:{groupWidth:'90%'}, legend:{position:'none'}
        };

	myChart.draw(myDataTable, options);
	
	loadData3();

}
	// 10. Finally, I create my third chart with the ridership data (left-most on the page)
function loadData3(){

	var myDataTable = google.visualization.arrayToDataTable([
          ['Year', 'Bus', 'Subway', 'Metro North', 'LIRR'],
          ['2003',32.45100886,60.87783673,3.133760988,3.537393416],
		  ['2004',31.96815038,61.55647173,3.054298105,3.421079781],
		  ['2005',31.45582268,62.08306496,3.089802241,3.371310112],
		  ['2006',33.84707061,59.87444476,3.011229621,3.267255011],
		  ['2007',32.95907961,60.67442769,3.033331996,3.333160705],
		  ['2008',32.60408772,60.9779697,3.081213652,3.336728931],
		  ['2009',32.68317354,61.07331272,3.018711363,3.224802377],
		  ['2010',31.53692352,62.16038811,3.142509513,3.160178863],
		  ['2011',30.3409324,63.36057244,3.168888012,3.129607149],
		  ['2012',30.22665639,63.45650329,3.181450526,3.135389792]

		  	
        ]);

	
	var myChart = new google.visualization.ColumnChart(document.getElementById("riderDiv"));
	// 11. One exception on the options for this chart: I want a common legend for all three charts here
	//	So I use the Google Viz documentation to position it on the right of the left-most chart.
	var options = {
          title: "Share of Ridership", width: 300, height: 400, isStacked:true, hAxis:{showTextEvery:3},
          colors:['#FF405B', '#0cc0c9', '#00DE7C', '#399499'], bar:{groupWidth:'90%'}, legend:{position: 'none'}
        };

	myChart.draw(myDataTable, options);

}
	//12. And that's a wrap!

	// 2. Add the Google charts package to create my visualization and set a callback function *COMMENTS CONTINUE AT TOP OF CODE*

function loadPage(){
	console.log("Document ready");
	
	google.load("visualization", "1", {packages:["corechart"], callback:"loadData"});
	
	}
	// 1. Create a document ready function to fire when my page is loaded
$(document).ready(loadPage);